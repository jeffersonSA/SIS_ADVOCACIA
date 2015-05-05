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
	});

	/*
	* Adiciona dependente na tabela
	*/
	$("#btnAddDependent").click(function(){
		
		var item = "<tr>"+
		"<td>"+$("#txtNomeDependente").val()+"</td>"+
		"<td align='center'>"+$("#txtDtNascimentoDependente").val()+"</td>"+
		"<td align='center'>"+$("#txtRGDependente").val()+"</td>"+
		"<td align='center'>"+$("#txtCPFDependente").val()+"</td>"+
		"<td align='center'>"+
				"<button type='button' class='btn btn-default btn-responsive' onClick='editDependente(event)' >"+
					"<span class='glyphicon glyphicon-edit' aria-hidden='true'></span>"+
				"</button>"+
		"</td>"+
		"<td align='center'>"+
				"<button type='button' class='btn btn-default btn-responsive' onClick='removeDependente(event)'>"+
					"<span class='glyphicon glyphicon-remove' aria-hidden='true'></span>"+
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
				
			 showMessage('CEP INEXISTENTE',true);
			 hideLoadingModal();
		});
	});

	/*
	* Remove alert do tela ao clicar no botão "x" 
	*/
	$(".remove-alert").click(function()
	{
		$("#alertInfo").slideUp();
	});

	/*
	* Executa request para salvar os dados do formulário
	*/
	$("#frmCadCliente").submit(function(evt)
	{
		showLoadingModal();
		$.ajax(
			{
				type:"POST",
				url:"../controller/ClienteController.php",
				success:function(data)
				{
					alert("sucesso");
					hideLoadingModal();
				},
				error:function(err)
				{
					alert('erro!');
					hideLoadingModal();
				}
			});
		return false;
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

	 _nomeDependente = _parent.children("td:nth-child(1)");
	 _dtNascDependente = _parent.children("td:nth-child(2)");
	 _rgDependente = _parent.children("td:nth-child(3)");
	 _cpfDependente = _parent.children("td:nth-child(4)");

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
	enableDisableInputs(true);
	$("#pnlJuridica").css('display',"none");
	$("#alertInfo").css('display','none');

}

// Setup
this.$('.js-loading-bar').modal({
  backdrop: 'static',
  show: false
});

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


/*
*  Aplica mascas para os campos do formulário
*/
function aplyMasks()
{
	$("#txtRG").mask("99.999.999-*");
	$("#txtCPF").mask("999.999.999-99");
	$("#txtCNPJ").mask("99.999.999/9999-99");
	$("#txtCEP").mask("99999-999");
	$("#txtTel1").mask("(99)9999-9999");
	$("#txtTel2").mask("(99)9999-9999");
	$("#txtCel").mask("(99)99999-9999");
	$("#txtRGDependente").mask("99.999.999-*");
	$("#txtCPFDependente").mask("999.999.999-99");
}

/*
* Habilitar ou desablitar campos de dependente
*/
function enableDisableInputs(option)
{
	$("#txtNomeDependente").prop("disabled",option);
	$("#txtDtNascimentoDependente").prop("disabled",option);
	$("#txtRGDependente").prop("disabled",option);
	$("#txtCPFDependente").prop("disabled",option);
	$("#slcParentesco").prop("disabled",option);
	$("#btnAddDependent").prop("disabled",option);
	$("#btnEditDependent").prop("disabled",option);
}

function showMessage(msg,error)
{
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