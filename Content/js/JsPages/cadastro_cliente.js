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
	* Habilita a visualização dos campos para cadastrar os dependentes
	*/
	$("#rdnSimDependente").click(function()
	{
		$("#pnlBodyDependente").slideDown();
	});

	/*
	* Desabilita a visualização dos campos de cadastro de dependente
	*/
	$("#rdnNaoDependente").click(function()
	{
	
		$("#pnlBodyDependente").slideUp();

	});

	/*
	* Busca o endereço pelo cep no webservice dos correios
	*/
	$("#btnSeachCEP").click(function()
	{
		var url = 'http://cep.correiocontrol.com.br/'+$("#txtCEP").val().replace("-","")+'.json'
		$.getJSON(url,function(json)
		{
			$("#txtRua").val(json.logradouro);
			$("#txtBairro").val(json.bairro);
			$("#txtCidade").val(json.localidade);
			$("#slcEstadoEnd").val(json.uf);
		}).fail(function()
		{
			
				var easing, e, pos;
				
				
				pos= $(window).scrollTop();
		        
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
				
				$("#alertInfo").fadeIn('slow',function()
				{
					$("#lblMessage").html('CEP INEXISTENTE');
				});

		});
	});

	$(".remove-alert").click(function()
	{
		$("#alertInfo").slideUp();
	});
});

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
	$("#pnlJuridica").css('display',"none");
	$("#pnlBodyDependente").css('display','none');
	$("#alertInfo").css('display','none');

}

/*
*  Aplica mascas para os campos do formulário
*/
function aplyMasks()
{
	$("#txtRG").mask("99.999.999-*");
	$("#txtCPF").mask("999.999.999-99");
	$("#txtCEP").mask("99999-999");
	$("#txtTel1").mask("(99)9999-9999");
	$("#txtTe2").mask("(99)9999-9999");
	$("#txtCel").mask("(99)99999-9999");
	$("#txtRGDependente").mask("99.999.999-*");
	$("#txtCPFDependente").mask("999.999.999-99");
}