$(document).ready(function()
{
	
	$("#pnlJuridica").css('display',"none");
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