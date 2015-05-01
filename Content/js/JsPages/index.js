$(document).ready(function(){

	$(".row-itens a").click(function()
	{
		window.setTimeout( function()
		{
			$("#loading").fadeOut('slow');
		},500 );
});