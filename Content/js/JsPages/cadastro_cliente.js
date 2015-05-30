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
		
		var item = "<tr>"+
		"<td class='column-formated-4' align='center'>&nbsp</td>"+
		"<td>"+$("#txtNomeDependente").val()+"</td>"+
		"<td align='center'>"+$("#txtDtNascimentoDependente").val()+"</td>"+
		"<td align='center'>"+$("#txtRGDependente").val()+"</td>"+
		"<td align='center'>"+$("#txtCPFDependente").val()+"</td>"+
		"<td align='center'>"+$("#slcParentesco").val()+"</td>"+
		"<td align='center'>"+
				"<button type='button' class='btn btn-default btn-responsive' onClick='editDependente(event)' >"+
					"<span class='glyphicon glyphicon-edit' aria-hidden='true'></span>"+
				"</button>"+
		"</td>"+
		"<td align='center'>"+
				"<button type='button' class='btn btn-default btn-responsive' onClick='removeDependente(event)'>"+
					"<span class='glyphicon glyphicon-trash' aria-hidden='true'></span>"+
				"</button>"+
		"</td>"+
		"</tr>";

		$("#tbItens").append($(item).fadeIn('slow'));

	});

	/*
	* Salva o dependente editado na grid
	*/
	$("#btnEditDependent").click(function()
	{

		_nomeDependente[0].textContent = $("#txtNomeDependente").val();
		_dtNascDependente[0].textContent = $("#txtDtNascimentoDependente").val();
		_rgDependente[0].textContent = $("#txtRGDependente").val();
		_cpfDependente[0].textContent = $("#txtCPFDependente").val();

		$("#btnEditDependent").fadeOut('slow',function(){
			$("#btnAddDependent").fadeIn('slow');
		});

		_parent.fadeIn('slow');
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
		

		$("#tblDependente td").each(function(k,v)
		{

			if($(v)[0].childNodes[0].type != "button")
			{	
				switch(i)
				{
					case 0:tbArr["Id"] 			= $(this).html() == "&nbsp;" ? 0 : $(this).html(); break;
					case 1:tbArr["Nome"] 		= $(this).html(); break;
					case 2:tbArr["Dt_Nasc"] 	= $(this).html(); break;
					case 3:tbArr["Rg"] 			= $(this).html(); break;
					case 4:tbArr["Cpf"] 		= $(this).html(); break;
					case 5:tbArr["Parentesco"] 	= $(this).html(); break;
				}
				i++;
			}
						
			if(i==6)
			{
				i=0;
				dependArr.push(JSON.stringify(tbArr));
			}	
		});
		
		var dependJSON = JSON.stringify(dependArr);
		$.ajax(
			{
				type:"POST",
				url:"../controller/ClienteController.php",
				contentType: "application/x-www-form-urlencoded;charset=utf-8",
				data:{
					"action":"saveOrUpdate",
					"data":infos,
					"dependentes[]":dependArr
				},
				
				success:function(response)
				{	
					hideLoadingModal();
					var oCliente = $.parseJSON(response);
					var msg = oCliente.message;
					
					window.setTimeout(function(){
						if(msg == "success" && oCliente.data.length > 0 )
						{
							
							$("#idCliente").val(oCliente.data[0]["ID"]);
							$("#tbItens tr").children("td:nth-child(1)").each(function(i,v){
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
var _nomeDependente;
var _dtNascDependente;
var _rgDependente;
var _cpfDependente;

/*
*  Envia as informações do dependente para os textsbox para serem editadas
*/
function editDependente(evt)
{
	 _parent = $(evt.currentTarget).parent().parent();

	 _nomeDependente = _parent.children("td:nth-child(2)");
	 _dtNascDependente = _parent.children("td:nth-child(3)");
	 _rgDependente = _parent.children("td:nth-child(4)");
	 _cpfDependente = _parent.children("td:nth-child(5)");

	$("#txtNomeDependente")[0].value = _nomeDependente[0].textContent;
	$("#txtDtNascimentoDependente")[0].value = _dtNascDependente[0].textContent;
	$("#txtRGDependente")[0].value = _rgDependente[0].textContent;
	$("#txtCPFDependente")[0].value = _cpfDependente[0].textContent;

	$("#btnAddDependent").fadeOut('slow',function(){
		$("#btnEditDependent").fadeIn('slow');
	});
}

/*
*  Remove os dependentes adicionados na grid
*/
function removeDependente(evt)
{
	$(evt.currentTarget).parent().parent().fadeOut('slow',function(){
		$(this).remove();
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

	$("#txtRG").keypress(function(){
		mascara(this,rg);
	});

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

	$("#txtRGDependente").keypress(function(){
		mascara(this,rg);
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