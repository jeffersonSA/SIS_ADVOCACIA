var _content;
$(document).ready(function(){
 	_content = $('#content');
	initConfig();
	
	$('#menu div>a').on('click', function( e ){
		e.preventDefault();

		_content.html( '<div class="col-sm-5"></div><img class="loading" src="../Content/img/loading.gif" />' );
 		_content.fadeIn();
		var href = $( this ).attr('href');
		$.ajax({
			url: href,
			success: function( response ){
				//forçando o parser
				var data = $( response ).find('#content').html();
 
				//apenas atrasando a troca, para mostrarmos o loading
				 window.setTimeout( function(){
				 	_content.fadeOut('slow', function(){
					 	_content.html( data ).fadeIn();
					 });
					}, 500 );
				}
			});
 
		});
});

function initConfig()
{
	//pre carregando o gif
	loading = new Image(); loading.src = '../Content/img/loading.gif';
	_content.html( '<div class="col-sm-5"></div><img class="loading" src="../Content/img/loading.gif" />' );
	
	window.setTimeout(function(){
		_content.fadeOut('slow', function(){
			
		});
	},500);

	var id = document.location.search.substr(1);

	if(id == 1)
	{
		$("#item2").collapse();
	}

}