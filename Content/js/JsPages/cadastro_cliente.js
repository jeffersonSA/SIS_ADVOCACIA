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

		});
	/*
	* Ativa cadastro para pessoa física
	*/
	$("#rdnFisica").click(function()
		{
			$("#pnlJuridica").fadeOut('slow',function()
				{
					$("#pnlFisica").fadeIn('slow');
				});
		});
});