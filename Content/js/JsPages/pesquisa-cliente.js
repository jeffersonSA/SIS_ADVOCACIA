$(document).ready(function(){
            

	initConfig();
    /*
	* Ativa pesquisa para pessoa juridica
	*/
	$("#rdnJuridica").click(function()
	{

		//$("#rdnJuridica input").prop("checked",true);
		//$("#rdnFisica input").prop("checked",false);
		$("#lblSearch").html('CNPJ:');
		$("#txtSearch").prop('placeholder',"CNPJ");
		aplyMasks();

		$.getJSON("../../../../SIS_ADVOCACIA/Content/configs/pesquisa/columns.json",function(data){
			addHeadJuri(data);
		});
	});

	/*
	* Ativa Pesquisa para pessoa física
	*/
	$("#rdnFisica").click(function()
	{
		
		//$("#rdnJuridica input").prop("checked",false);
		//$("#rdnFisica input").prop("checked",true);
		$("#lblSearch").html('CPF:');
		$("#txtSearch").prop('placeholder',"CPF");
		
		$.getJSON("../../../../SIS_ADVOCACIA/Content/configs/pesquisa/columns.json",function(data){
			$table.bootstrapTable('destroy');
			addHeadPhysic(data);
		});

	});

	/*
	* Realiza pesquisa
	*/
	$("#btnSeach").click(function()
	{	
		showLoadingModal();
		var data={};
		var dataArr=[];
		if($("#rdnFisica input").is(":checked"))
			data = '["{\\"campo\\":\\"CPF\\",\\"valor\\":\\"'+ $("#txtSearch").val()  +'\\"}"]';
		else 
			data = '["{\\"campo\\":\\"CNPJ\\",\\"valor\\":\\"'+ $("#txtSearch").val()  +'\\"}"]';
		
		
		$.ajax(
			{
				type:"POST",
				url:"../controller/ClienteController.php",
				data:{
					"action":"select",
					"data":data
				},
				success:function(response)
				{
					var oCliente = $.parseJSON(response);
					var msg = oCliente.message;
					var columns;

					if(msg=="success" && oCliente.data.length > 0)
					{
						removeAllRegisters();
		                $table.bootstrapTable('append',getRows(oCliente));
		                hideLoadingModal();
					}	
					else
					{
						 var data = $table.bootstrapTable('getData');
						 var ids = [];

						 $.each(data,function(i,v)
						 {
						 	ids.push( v["ID"]);
						 });

						 $("#tblResult").bootstrapTable('remove',{
						 	field:'ID',
						 	values:ids
						 });

						hideLoadingModal();
					}									
				},
				error:function(err)
				{
					hideLoadingModal();
				}
			});
	});

});

function removeAllRegisters()
{
	var data = $table.bootstrapTable('getData');
	var ids = [];

	$.each(data,function(i,v)
	{
		ids.push( v["ID"]);
	});

	$("#tblResult").bootstrapTable('remove',{
		field:'ID',
		values:ids
	});
}
function getRows(oCliente)
{

    var rows = [];

	$.each(oCliente.data,function(i,value)
	{
		if($("#rdnFisica input").is(":checked"))
		{
			rows.push({
				ID:value["ID"],
				NOME:value["NOME"],
				DT_NASCIMENTO:value["DT_NASCIMENTO"],
				CPF:value["CPF"],
				RG:value["RG"],
				DT_EMIS_RG:value["DT_EMIS_RG"],
				UF_EMIS_RG:value["UF_EMIS_RG"],
				NUM_CTPS:value["NUM_CTPS"],
				SERIE_CTPS:value["SERIE_CTPS"],
				DT_EMIS_CTPS:value["DT_EMIS_CTPS"],
				CNH:value["CNH"],
				CATEGORIA:value["CATEGORIA"],
				TELEFONE1:value["TELEFONE1"],
				TELEFONE2:value["TELEFONE2"],
				CELULAR:value["CELULAR"],
				EMAIL:value["EMAIL"],
				CEP:value["CEP"],
				LOGRADOURO:value["LOGRADOURO"],
				NUM:value["NUM"],
				BAIRRO:value["BAIRRO"],
				CIDADE:value["CIDADE"],
				UF:value["UF"],
				COMPLEMENTO:value["COMPLEMENTO"],
				DEPENDENTES:value["DEPENDENTES"].length
			});
		}
		else
		{
			rows.push({
				ID:value["ID"],
				RAZAO_SOCIAL:value["NOME"],
				NOME_FANTASIA:value["DT_NASCIMENTO"],
				INSCRICAO_ESTADUAL:value["CPF"],
				CNPJ:value["RG"],
				LOGRADOURO:value["DT_EMIS_RG"],
				NUM:value["UF_EMIS_RG"],
				NUM_CTPS:value["NUM_CTPS"],
				CEP:value["SERIE_CTPS"],
				BAIRRO:value["DT_EMIS_CTPS"],
				CIDADE:value["CNH"],
				UF:value["CATEGORIA"],
				COMPLEMENTO:value["TELEFONE1"],
				TELEFONE1:value["TELEFONE2"],
				TELEFONE2:value["CELULAR"],
				CELULAR:value["EMAIL"]
			});
		}
	});
    return rows;
		                
}

function initConfig()
{
	$.getJSON("../../../../SIS_ADVOCACIA/Content/configs/pesquisa/columns.json",function(data){
		addHeadPhysic(data);
	});
	
	aplyMasks();

	getSession();	
}

function getSession()
{
	$.ajax({
		type:"POST",
		url:"../controller/ClienteController.php",
		contentType: "application/x-www-form-urlencoded;charset=utf-8",
		data:{"action":"getSession"},
		success:resultSession,
		error:fail
	});
}

function resultSession(response)
{
	var oSession = $.parseJSON(response);
	
	if(oSession.data.length > 0)
	{
		
		$table.bootstrapTable('append',getRows(oSession));
	}
}

function fail(err)
{
	alert('erro');
}

/*
*  Aplica mascas para os campos
*/
function aplyMasks()
{/*
	$("#txtSearchCPF").mask("999.999.999-99");
	$("#txtSearchCNPJ").mask("99.999.999/9999-99");*/
	$("#txtSearch").keypress(function(){
		if($("#rdnFisica input").is(":checked"))
		{
			$("#txtSearch").prop("maxLength","14");
			mascara(this,cpf);
		}
		else
		{
			$("#txtSearch").prop("maxLength","18");
			mascara(this,cnpj);
		}
	});

	
}

/*
*  Altera o head da tabela de resultados
*/
function addHeadPhysic(data)
{
	$table = $("#tblResult").bootstrapTable({
			columns: data[0].colfisica
	});

}

function addHeadJuri(data)
{
	$table.bootstrapTable('destroy');
	$table.bootstrapTable({columns:data[1].coljuridica});
}

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
