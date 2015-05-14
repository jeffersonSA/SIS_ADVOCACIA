<?php
	require("../model/ClienteModel.php");
 	
 	$action = $_POST['action'];
  	switch ($action) 
  	{
  		case $action: 
  	
  			save(); 
  		break;
  	}
 	
 	//echo 'count'.count($data);

	function save()
	{
			try 
			{
				$form = $_POST['data'];
				$data = split("&", $form);
				
				for($i = 0; $i < count($data); $i++)
				{
					$content = split("=", $data[$i]);
					
					switch ($content[0]) 
					{
						case 'CLI_DT_CAD'		: $CLI_DT_CAD 			= $content[1]; break;
						case 'CLI_NOME'			: $CLI_NOME 			= $content[1]; break;
						case 'CLI_RG_NUM'		: $CLI_RG_NUM			= $content[1]; break;
						case 'CLI_RG_DT_EMIS'	: $CLI_RG_DT_EMIS 		= $content[1]; break;
						case 'CLI_RG_LOC_EMIS'	: $CLI_RG_LOC_EMIS 		= $content[1]; break;
						case 'CLI_CTPS_NUM'		: $CLI_CTPS_NUM			= $content[1]; break;
						case 'CLI_CTPS_SERIE'	: $CLI_CTPS_SERIE 		= $content[1]; break;
						case 'CLI_CTPS_SERIE'	: $CLI_CTPS_SERIE 		= $content[1]; break;
						case 'CLI_CTPS_DT_EMIS'	: $CLI_CTPS_DT_EMIS 	= $content[1]; break;
						case 'CLI_CNH'			: $CLI_CNH 				= $content[1]; break;
						case 'CLI_CNH_CAT'		: $CLI_CNH_CAT 			= $content[1]; break;
						case 'CLI_LOGRADOURO'	: $CLI_END_LOGRADOURO	= $content[1]; break;
						case 'CLI_END_NUM'		: $CLI_END_NUM 			= $content[1]; break;
						case 'CLI_END_BAIRRO'	: $CLI_END_BAIRRO 		= $content[1]; break;
						case 'CLI_END_CIDADE'	: $CLI_END_CIDADE 		= $content[1]; break;
						case 'CLI_END_CEP'		: $CLI_END_CEP 			= $content[1]; break;
						case 'CLI_END_UF'		: $CLI_END_UF 			= $content[1]; break;
						case 'CLI_DT_NASC'		: $CLI_DT_NASC 			= $content[1]; break;
						case 'CLI_SEXO'			: $CLI_SEXO 			= $content[1]; break;
						case 'CLI_END_COMPLE'	: $CLI_END_COMPLE 		= $content[1]; break;
						case 'CLI_CPF'			: $CLI_CPF 				= $content[1]; break;
						case 'CLI_CNPJ'			: $CLI_CNPJ 			= $content[1]; break;
						case 'CLI_RAZ_SOCIAL'	: $CLI_RAZ_SOCIAL 		= $content[1]; break;
						case 'CLI_NOME_FANT'	: $CLI_NOME_FANT 		= $content[1]; break;
						case 'CLI_TEL'			: $CLI_TEL 				= $content[1]; break;
						case 'CLI_TEL2'			: $CLI_TEL2 			= $content[1]; break;
						case 'CLI_CEL'			: $CLI_CEL		 		= $content[1]; break;
						case 'CLI_EMAIL'		: $CLI_EMAIL 			= $content[1]; break;
					}
				}

					$clienteModel = new Cliente();

					$clienteModel->setTel1($CLI_TEL);
					$clienteModel->setTel2($CLI_TEL1);
					$clienteModel->setCelular($CLI_CEL);
					$clienteModel->setEmail($CLI_EMAIL);
					$clienteModel->setLogradouro($CLI_END_LOGRADOURO);
					$clienteModel->setCep($CLI_END_CEP);
					$clienteModel->setEndNum($CLI_END_NUM);
					$clienteModel->setBairro($CLI_END_BAIRRO);
					$clienteModel->setCidade($CLI_END_CIDADE);
					$clienteModel->setEndUf($CLI_END_UF);
					$clienteModel->setComplemento($CLI_END_COMPLE);

					$clienteModel->save();
					
			} 
			catch (Exception $e) 
			{
 				echo 'Erro:'.$e;
			}
		}

		function update()
		{
			try 
			{
			} 
			catch (Exception $e) 
			{
 				echo 'Erro:'.$e;
			}
		}

		
?>