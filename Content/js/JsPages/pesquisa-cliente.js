$(document).ready(function(){
    
	initConfig();


    /*
	* Ativa pesquisa para pessoa juridica
	*/
	$("#rdnJuridica").click(function()
	{

		$("#txtSearchCPF").fadeOut('slow',function()
		{
			$("#txtSearchCNPJ").fadeIn('slow');
			$("#lblSearch").html('CNPJ:');
		});
	});

	/*
	* Ativa Pesquisa para pessoa física
	*/
	$("#rdnFisica").click(function()
	{
		$("#txtSearchCNPJ").fadeOut('slow',function()
		{
			$("#txtSearchCPF").fadeIn('slow');
			$("#lblSearch").html('CPF:');
		});
	});

});

function initConfig()
{
	aplyMasks();
}


/*
*  Aplica mascas para os campos
*/
function aplyMasks()
{/*
	$("#txtSearchCPF").mask("999.999.999-99");
	$("#txtSearchCNPJ").mask("99.999.999/9999-99");*/
}
