$(document).ready(function(){
	var content = $('#content');
	//pre carregando o gif
	loading = new Image(); loading.src = '../Content/img/loading.gif';
	
	$('#menu div>a').on('click', function( e ){
		
		e.preventDefault();
		content.html( '<div class="col-sm-5"></div><img class="loading" src="../Content/img/loading.gif" />' );
 
		var href = $( this ).attr('href');
		$.ajax({
			url: href,
			success: function( response ){
				//forçando o parser
				var data = $( response ).find('#content').html();
 
				//apenas atrasando a troca, para mostrarmos o loading
				 window.setTimeout( function(){
				 	content.fadeOut('slow', function(){
					 	content.html( data ).fadeIn();
					 });
					}, 500 );
				}
			});
 
		});
});