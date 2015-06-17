$(document).ready(function()
{
	
	configInit();
	
	/*
	* Ativa cadastro para pessoa juridica
	*/
	$("#rdnJuridica").click(function()
	{

		$("#pnlFisica").fadeOut('slow',function()
		{
			$("#pnlJuridica").fadeIn('slow');
		});
		$("#pnlDatadosBasicos").fadeOut('slow');
		$("#pnlDependentes").fadeOut('slow');
		requiredEnabled(false);

	});
	/*
	* Ativa cadastro para pessoa física
	*/
	$("#rdnFisica").click(function()
	{
		$("#pnlJuridica").fadeOut('slow',function()
		{
				$("#pnlFisica").fadeIn('slow');
				$("#pnlDatadosBasicos").fadeIn('slow');
				$("#pnlDependentes").fadeIn('slow');
		});
		requiredEnabled(true);
	});

	/*
	* Adiciona dependente na tabela
	*/
	$("#btnAddDependent").click(function(){
		
		var data = $table.bootstrapTable("getData");
		var indx = 0; 
		if(data.length > 0)
		 indx = data[data.length-1]["INDEX"];
		getRows = function() 
		{

			var row = [{
			INDEX:indx+1,
			ID: 0,		
			NOME: 		$("#txtNomeDependente").val(),
			DT_NASC: 	$("#txtDtNascimentoDependente").val(),
			RG: 		$("#txtRGDependente").val(),
			CPF: 		$("#txtCPFDependente").val(),
			PARENTESCO: $("#slcParentesco").val()
			}];

			return row;
		}
		
		$table.bootstrapTable("append",getRows());
	});
	

	/*
	* Salva o dependente editado na grid
	*/
	$("#btnEditDependent").click(function()
	{

		$table.bootstrapTable('updateRow',{
			index:_indexDependente,
			row:{
				NOME:$("#txtNomeDependente").val(),
				DT_NASC:$("#txtDtNascimentoDependente").val(),
				RG:$("#txtRGDependente").val(),
				CPF:$("#txtCPFDependente").val(),
				PARENTESCO:$("#slcParentesco").val()
			}
		});

		$("#btnEditDependent").fadeOut('slow',function(){
			$("#btnAddDependent").fadeIn('slow');
		});
	});

	/*
	* Busca o endereço pelo cep no webservice dos correios
	*/
	$("#btnSeachCEP").click(function()
	{
		removeAlert();
		showLoadingModal();
		var url = 'http://cep.correiocontrol.com.br/'+$("#txtCEP").val().replace("-","")+'.json'
		$.getJSON(url,function(json)
		{
			$("#txtRua").val(json.logradouro);
			$("#txtBairro").val(json.bairro);
			$("#txtCidade").val(json.localidade);
			$("#slcEstadoEnd").val(json.uf);
			hideLoadingModal();
		}).fail(function()
		{
			$("#txtRua").val('');
			$("#txtBairro").val('');
			$("#txtCidade").val('');
			$("#slcEstadoEnd").val('');
				
			 showMessage('CEP INEXISTENTE',true);
			 hideLoadingModal();
		});
	});

	/*
	* Remove alert do tela ao clicar no botão "x" 
	*/
	$(".remove-alert").click(function()
	{
		removeAlert();
	});

	/*
	* Executa request para salvar os dados do formulário
	*/
	$("#frmCadCliente").submit(function(evt)
	{

		removeAlert();
		showLoadingModal();
		var id =0 ;
		var dependArr =[];
		var tbArr={};
		var str;
		var i = 0;
		var infos = $(this).serialize(); 
		
		$.ajax(
			{
				type:"POST",
				url:"../controller/ClienteController.php",
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				data:{
					"action":"saveOrUpdate",
					"data":infos,
					"dependentes":$table.bootstrapTable("getData")
				},
				
				success:function(response)
				{	
					hideLoadingModal();
					try
					{
						var oCliente = $.parseJSON(response);
						var msg = oCliente.message;
						
						window.setTimeout(function(){
							if(msg == "success" && oCliente.data.length > 0 )
							{
								
								$("#idCliente").val(oCliente.data[0]["ID"]);
								$("#tbItens tr").children("td:nth-child(1)").each(function(i,v){
									if(oCliente.data[0]["DEPENDENTES"].length>0)
										$(v).children("td").context.innerText = oCliente.data[0]["DEPENDENTES"][i]["ID"];
								});
								
								showMessage(oCliente.details,false);
								
								$("#btnAtualizar").prop("disabled",false);
								$("#btnSalvar").prop("disabled",true);
							}
							else 
							{
								showMessage("Ocorreu um erro ao realizar o cadastro de cliente, tente novamente.",true);
							}
							
						},520);
					}
					catch (e)
					{
						console.log(response);
						showMessage("Erro de comunicação com o banco de dados",true);
					}
				},
				error:function(err)
				{
					showMessage("Erro ao realizar o cadastro de cliente",true);
					hideLoadingModal();
					
				}
			});
		return false;
	});

	$("#btnDependSim").click(function()
	{
		$("#pnlBodyDependente").slideDown('slow');
		requiredDependente(true);

	});

	$("#btnDependNao").click(function()
	{
		$("#pnlBodyDependente").slideUp('slow');
		requiredDependente(true);
	});

	$("#btnPreencher").click(function(){
		preencherCampos();
	});

	$("#btnNovo").click(function()
	{
		$("#btnAtualizar").prop("disabled",true);
		$("#btnSalvar").prop("disabled",false);

		clearFields();
	});


});

var _loading;
var _parent;
var _indexDependente;
var _dtNascDependente;
var _rgDependente;
var _cpfDependente;

/*
*  Envia as informações do dependente para os textsbox para serem editadas
*/
function editDependente(row,index)
{
	_indexDependente = index;
	$("#txtNomeDependente")[0].value = row["NOME"];
	$("#txtDtNascimentoDependente")[0].value = row["DT_NASC"];
	$("#txtRGDependente")[0].value = row["RG"];
	$("#txtCPFDependente")[0].value = row["CPF"];
	$("#slcParentesco")[0].value = row["PARENTESCO"];

	$("#btnAddDependent").fadeOut('slow',function(){
		$("#btnEditDependent").fadeIn('slow');
	});
}

/*
*  Remove os dependentes adicionados na grid
*/
function removeDependente(row)
{
	  $table.bootstrapTable('remove', {
                    field: 'INDEX',
                    values: [row["INDEX"]]
        	});
}

function configInit()
{
	aplyMasks();
	enableDisableInputs(false);
	$("#pnlJuridica").css('display',"none");
	$("#alertInfo").css('display','none');
	$("#btnOKDependente").css('display','none');

	$("#pnlBodyDependente").css('display','none');
	
	requiredEnabled(true);

	// Setup
	this.$('.js-loading-bar').modal({
	  backdrop: 'static',
	  show: false
	});

	$("#modalDependente").modal({
		backdrop:'static',
		show:false
	});

	$table = $("#tblDependente").bootstrapTable();

	if($("#idCliente").val() > 0)
	{
		$("#btnAtualizar").prop("disabled",false);
		$("#btnSalvar").prop("disabled",true);

		aplyModeEditMasks();
	}

	setTimeout(function(){
		if($table.bootstrapTable("getData").length > 0)
		{
			$("#pnlBodyDependente").slideDown('slow');
			requiredDependente(true);
		}
	},500);
	
}

//Exibe o loading quando acionado algum evento
function showLoadingModal()
{
	var $modal = $('.js-loading-bar'),
    $bar = $modal.find('.progress-bar');
  	
  	$modal.fadeIn('slow')
	//$modal.modal('show');
	$bar.addClass('animate');
}

//Esconde o loading quando acionado algum evento
function hideLoadingModal()
{
	var $modal = $('.js-loading-bar'),
    $bar = $modal.find('.progress-bar');
	
	window.setTimeout(function() {
		$bar.removeClass('animate');
		$modal.fadeOut('slow');
	}, 500);    
}


function removeAlert()
{
	$("#alertInfo").slideUp();
}

/*
*  Aplica mascas para os campos do formulário
*/
function aplyMasks()
{

	
	$("#txtCPF").keypress(function(){
		mascara(this,cpf);
	});

	$("#txtCNPJ").keypress(function(){
		mascara(this,cnpj);
	});

	$("#txtCEP").keypress(function(){
		mascara(this,cep);
	});

	$("#txtTel1").keypress(function(){
		mascara(this,telefone);
	});

	$("#txtTel2").keypress(function(){
		mascara(this,telefone);
	});

	$("#txtCel").keypress(function(){
		mascara(this,celular);
	});

	$("#txtCPFDependente").keypress(function(){
		mascara(this,cpf);
	});

	$("#txtCTPS").keypress(function(){
		mascara(this,soNumeros);
	});

	$("#txtCNH").keypress(function(){
		mascara(this,soNumeros);
	});

	$("#txtSerie").keypress(function(){
		mascara(this,soNumeros);
	});

	$("#txtNumero").keypress(function(){
		mascara(this,soNumeros);
	});
}

function aplyModeEditMasks()
{
	var cpf  = $("#txtCPF").val();
	var cnpj = $("#txtCNPJ").val();
	var cep  = $("#txtCEP").val();
	var tel1 = $("#txtTel1").val();
	var tel2 = $("#txtTel2").val();
	var cel  = $("#txtCel").val();

	cpf  = cpf.substring(0,3)+"."+cpf.substring(3,6)+"."+cpf.substring(6,9)+"-"+cpf.substring(9,11);
	cnpj = cnpj.length>0 ? cnpj.substring(0,2)+"."+cnpj.substring(2,5)+"."+cnpj.substring(5,8)+"/"+cnpj.substring(8,12)+"-"+cnpj.substring(12,14):"";
	cep  = cep.substring(0,5)+"-"+cep.substring(5,8);
	tel1 = tel1.length > 0 ?"("+tel1.substring(0,2)+") "+tel1.substring(2,6)+"-"+tel1.substring(6,10) :"";
	tel2 = tel2.length > 0 ? "("+tel2.substring(0,2)+") "+tel2.substring(2,6)+"-"+tel2.substring(6,10) :"";
	cel = cel.length < 11 ? "("+cel.substring(0,2)+") "+cel.substring(2,6)+"-"+cel.substring(6,10) : "("+cel.substring(0,2)+") "+cel.substring(2,7)+"-"+cel.substring(7,11) ;

	$("#txtCPF").val(cpf);
	$("#txtCNPJ").val(cnpj);
	$("#txtCEP").val(cep);
	$("#txtTel1").val(tel1);
	$("#txtTel2").val(tel2);
	$("#txtCel").val(cel);
}

/*
* Habilitar ou desablitar campos de dependente
*/
function enableDisableInputs(option)
{
	//Inputs Dependentes
	$("#pnlDependentes :input").prop('disabled', option);
	$("#pnlFisica 			:input").prop('disabled', option);
	$("#pnlContato 			:input").prop('disabled', option);
	$("#pnlDatadosBasicos 	:input").prop('disabled', option);
	$("#pnlEndereco 		:input").prop('disabled', option);
	$("#pnlJuridica 		:input").prop('disabled', option);
}

/*
* Exibe todas as mensagens do sistema
* <error>indica que o alert apresentado será vermelho</error>
*/
function showMessage(msg,error)
{
	var pos = $(window).scrollTop();
			    
	$("body").css({
		"margin-top": -pos+"px",
		"overflow-y": "scroll", 
    });

	$(window).scrollTop(0);
	$("body").css("transition", "all 1s ease");
	$("body").css("margin-top", "0");
	$("body").on("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd", function()
	{
		$("body").css("transition", "none");
	});
	
	if(error)
	{
		$("#alertInfo").removeClass('alert-success');
		$("#alertInfo").addClass('alert-danger');
		$("#alertInfo").fadeIn('slow',function()
		{
			$("#lblMessage").html(msg);
		});
	}
	else
	{
		$("#alertInfo").removeClass('alert-danger');
		$("#alertInfo").addClass('alert-success');
		$("#alertInfo").fadeIn('slow',function()
		{
			$("#lblMessage").html(msg);
		});
	}
}

/*
* Remove e atribui campo obrigatório quando pessoa física ou juridica
* <pFisica>indica se a tela apresentada é de pessoa física ou jurídica para então aplicar o required</pFisica>
*/
function requiredEnabled(pFisica)
{
	if(pFisica)
	{
		//Ativa required
		$("#txtClient").attr("required",pFisica);
		$("#txtDataNascimento").attr("required",pFisica);
		$("#txtCPF").attr("required",pFisica);
		$("#txtRG").attr("required",pFisica);
		$("#txtDtEmissaoRG").attr("required",pFisica);
		$("#txtCTPS").attr("required",pFisica);
		$("#txtSerie").attr("required",pFisica);
		$("#txtDtEmissaoCTPS").attr("required",pFisica);
		$("#txtCNH").attr("required",pFisica);
		$("#txtCategoria").attr("required",pFisica);

		//desativa required
		$("#txtRazaoSocial").attr("required", !pFisica);
		$("#txtNomeFantasia").attr("required", !pFisica);
		$("#txtCNPJ").attr("required", !pFisica);
		$("#txtInscEstadual").attr("required", !pFisica);
	}
	else
	{
		//desativa required
		$("#txtClient").attr("required",!pFisica);
		$("#txtDataNascimento").attr("required",!pFisica);
		$("#txtCPF").attr("required",!pFisica);
		$("#txtRG").attr("required",!pFisica);
		$("#txtDtEmissaoRG").attr("required",!pFisica);
		$("#txtCTPS").attr("required",!pFisica);
		$("#txtSerie").attr("required",!pFisica);
		$("#txtDtEmissaoCTPS").attr("required",!pFisica);
		$("#txtCNH").attr("required",!pFisica);
		$("#txtCategoria").attr("required",!pFisica);

		//Ativa required
		$("#txtRazaoSocial").attr("required",pFisica);
		$("#txtNomeFantasia").attr("required",pFisica);
		$("#txtCNPJ").attr("required",pFisica);
		$("#txtInscEstadual").attr("required",pFisica);
	}
}

function requiredDependente(truOrFalse)
{
		$("#txtNomeDependente").attr("required", truOrFalse);
		$("#txtDtNascimentoDependente").attr("required",truOrFalse);
		$("#txtRGDependente").attr("required",truOrFalse);
		$("#txtCPFDependente").attr("required",truOrFalse);
}

function preencherCampos()
{
	$("#txtClient").val("Jefferson Silva Araujo");
	$("#txtDataNascimento").val("30/01/1991");
	$("#txtCPF").val("33333333333");
	$("#txtRG").val("44444444444");
	$("#txtCTPS").val("333654477");
	$("#txtSerie").val("554785");
	$("#txtCNH").val("123456789");
	$("#txtCategoria").val("A/B");
	$("#txtTel1").val("(11) 3333-3333");
	$("#txtCel").val("(12) 98888-8888");
	$("#txtDtEmissaoRG").val("30/01/1991");
	$("#txtDtEmissaoCTPS").val("30/01/1991");

		$("#txtNomeDependente").val("Isabela");
		$("#txtDtNascimentoDependente").val("15/03/2015");
		$("#txtRGDependente").val("4788899987");
		$("#txtCPFDependente").val("33332555478");
}

function clearFields()
{
	$("input[type=input]").val('');
	$("input[type=date]").val('');

	$("#tbItens").children("tr").remove();
}

	function opEditDep(value, row, index)
	{
		return [
				"<button type='button' class='btn btn-default btn-responsive edit' name='edit' >"+
					"<span class='glyphicon glyphicon-edit' aria-hidden='true'></span>"+
				"</button>"].join('');
	}

	function opDeleteDep(value, row, index)
	{
		return [
				"<button type='button' class='btn btn-default btn-responsive delete' name='delete' >"+
					"<span class='glyphicon glyphicon-trash' aria-hidden='true'></span>"+
				"</button>"].join('');
	}

	/*
	* disapara evento dos botõs na grid
	*/
	window.operateEvents = {
		'click .edit':function(e, value, row, index){
			editDependente(row,index);
		},
		'click .delete':function(e, value, row, index){
			removeDependente(row);
		}	
	}
