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
		"<td class='visibleColumn'>"+$("#txtDtNascimentoDependente").val()+"</td>"+
		"<td class='visibleColumn'>"+$("#txtRGDependente").val()+"</td>"+
		"<td class='visibleColumn'>"+$("#txtCPFDependente").val()+"</td>"+
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
});

/*
*  Envia as informações do dependente para os textsbox para serem editadas
*/
function editDependente(evt)
{
	var parent = $(evt.currentTarget).parent().parent();
	var nome = 

	$("#txtNomeDependente")[0].value= parent.children("td:nth-child(1)")[0].textContent;
}

/*
*  Remove os dependentes adicionados na grid
*/
function removeDependente(evt)
{
	
}