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
	loading = new Image(); 
	loading.src = '../Content/img/loading.gif';
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
/*
* Cria botão de edição para cada linha da tabela
*/
function operateFormatterEdit(value, row, index)
{
	return [
				"<button type='button' class='btn btn-default btn-responsive edit' name='edit' >"+
					"<span class='glyphicon glyphicon-edit' aria-hidden='true'></span>"+
				"</button>"].join('');
}

/*
* Cria botão de exclusão para cada linha da tabela
*/
function operateFormatterDelete(value, row, index)
{
	return [
				"<button type='button' class='btn btn-default btn-responsive delete' name='delete' >"+
					"<span class='glyphicon glyphicon-trash' aria-hidden='true'></span>"+
				"</button>"].join('');
}

/*
*	Preenche os campos da tela de cadastro de cliente
*/
function fillCliente(row)
{
	
	$("#idCliente").val(row["ID"]);
	$("#txtClient").val(row["NOME"]);
	$("#txtDataNascimento").val(row["DT_NASCIMENTO"]);
	$("#txtCPF").val(row["CPF"]);
	$("#txtRG").val(row["RG"]);
	$("#txtCTPS").val(row["NUM_CTPS"]);
	$("#txtSerie").val(row["SERIE_CTPS"]);
	$("#txtCNH").val(row["CNH"]);
	$("#txtCategoria").val(row["CATEGORIA"]);
	$("#txtTel1").val(row["TELEFONE1"]);
	$("#txtTel2").val(row["TELEFONE2"]);
	$("#txtCel").val(row["CELULAR"]);
	$("#txtEmail").val(row["EMAIL"]);
	$("#txtCEP").val(row["CEP"]);
	$("#txtBairro").val(row["BAIRRO"]);
	$("#txtNumero").val(row["NUM"]);
	$("#txtRua").val(row["LOGRADOURO"]);
	$("#txtCidade").val(row["CIDADE"]);
	$("#slcEstadoEnd").val(row["UF"]);
	$("#txtComplemento").val(row["COMPLEMENTO"]);
	$("#txtDtEmissaoRG").val(row["DT_EMIS_RG"]);
	$("#txtDtEmissaoCTPS").val(row["DT_EMIS_CTPS"]);

	fillDepedente(row["ID"])
}

/*
* Busca cliente e seus dependentes
*/
function fillDepedente(idCliente)
{
	
	$.ajax(
		{
			type:"POST",
				url:"../controller/ClienteController.php",
				contentType: "application/x-www-form-urlencoded;charset=utf-8",
				data:{
					"action":"selectById",
					"data":idCliente
				},
				success:successDependente,
				error:failDependente
		});
}

/*
* callback de sucesso ao buscar cliente e seus dependentes
*/
function successDependente(response)
{
	var oCliente = $.parseJSON(response);

	if(oCliente.data.length > 0)
	{
		if(oCliente.data[0]["DEPENDENTES"].length > 0)
		{
			$table.bootstrapTable('append',getRowsDep(oCliente.data[0]["DEPENDENTES"]));
		}
	}
}

function getRowsDep(depArr)
{
	var row = [];
	$.each(depArr,function(i,value)
	{
		 row.push({
		 	ID:value["ID"],
		 	NOME:value["NOME"],
		 	DT_NASC:value["DT_NASCIMENTO"],
		 	PARENTESCO:value["GRAU_PARENTESCO"],
		 	RG:value["RG"],
		 	CPF:value["CPF"]
		 });
	});

	return row;
}

/*
* callback erro ao buscar cliente e seus dependentes
*/
function failDependente(err)
{
	var t = "";
}

/*
* Abre tela de cadastro de cliente
*/
function loadCadCliente(row)
{
	$("#content").load('cadastro_cliente.html',function(){
		$("#content").fadeIn('slow');
		fillCliente(row);
	});
}

/*
* disapara evento dos botõs na grid
*/
window.operationCliente = {
	'click .edit':function(e, value, row, index){
		$("#content").fadeOut('slow', function(){
			loadCadCliente(row);
		});
	},
	'click .delete':function(e, value, row, index){
		
	}
}
