<?php
	require("../model/ClienteModel.php");
 	
 	$actionOp = $_POST["action"];
  	switch ($actionOp) 
  	{

  		case "saveOrUpdate"	:	saveOrUpdate();	break;
  		case "delete"		: 	delete(); 		break;
  		case "select"		:	select(); 		break;
  		case "selectAll"	:	selectAll();	break;
  		case "selectById"	: 	selectById();	break;
  		case "getSession"	: 	getSession();	break;
  	}
 	
 	//echo 'count'.count($data);

	function saveOrUpdate()
	{
			try 
			{
			
				$form = $_POST['data'];
				
				$data = split("&", urldecode($form));
		
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
						case 'CLI_INSC_ESTADUAL': $CLI_INSC_ESTADUAL	= $content[1]; break;
						case 'CLI_TEL'			: $CLI_TEL 				= $content[1]; break;
						case 'CLI_TEL2'			: $CLI_TEL2 			= $content[1]; break;
						case 'CLI_CEL'			: $CLI_CEL		 		= $content[1]; break;
						case 'CLI_EMAIL'		: $CLI_EMAIL 			= $content[1]; break;
						case 'JURIDICA'			: $TIPO_PESSOA 			= $content[1]; break;
						case 'ID_CLIENTE'		: $ID_CLIENTE 			= $content[1]; break;


					}
				}
			
					$pontoTraco = array(".","-","/");

					$clienteModel = new Cliente();
				
					$clienteModel->setTel1($CLI_TEL);
					$clienteModel->setTel2($CLI_TEL2);
					$clienteModel->setCelular($CLI_CEL);
					$clienteModel->setEmail($CLI_EMAIL);
					$clienteModel->setLogradouro($CLI_END_LOGRADOURO);
					$clienteModel->setCep(str_replace("-", "", $CLI_END_CEP));
					$clienteModel->setEndNum($CLI_END_NUM);
					$clienteModel->setBairro($CLI_END_BAIRRO);
					$clienteModel->setCidade($CLI_END_CIDADE);
					$clienteModel->setEndUf($CLI_END_UF);
					$clienteModel->setComplemento($CLI_END_COMPLE);
					
					if($TIPO_PESSOA == "on") 
					{
						$clienteModel->setIsJuridico(true);
						$clienteModel->setRazaoSocial($CLI_RAZ_SOCIAL);
						$clienteModel->setNomeFantasia($CLI_NOME_FANT);
						$clienteModel->setCnpj(str_replace($pontoTraco, "",$CLI_CNPJ));
						$clienteModel->setInscricaoEstadual($CLI_INSC_ESTADUAL);
					}
					else
					{
						$dependenteArr = $_POST['dependentes'];
				
						$clienteModel->setDependente($dependenteArr);
						$clienteModel->setIsJuridico(false);
						$clienteModel->setNome($CLI_NOME);
						$clienteModel->setDataNascimento($CLI_DT_NASC);
						$clienteModel->setSexo($CLI_SEXO);
						$clienteModel->setCpf(str_replace($pontoTraco, "", $CLI_CPF));
						$clienteModel->setRgNum(str_replace($pontoTraco, "",$CLI_RG_NUM));
						$clienteModel->setRgUfEmis($CLI_RG_LOC_EMIS);
						$clienteModel->setRgDtEmis($CLI_RG_DT_EMIS);
						$clienteModel->setCtpsNum($CLI_CTPS_NUM);
						$clienteModel->setCtpsSerie($CLI_CTPS_SERIE);
						$clienteModel->setCtpsDtEmis($CLI_CTPS_DT_EMIS);
						$clienteModel->setCnh($CLI_CNH);
						$clienteModel->setCnhCat($CLI_CNH_CAT);
					}

					$clienteModel->setId($ID_CLIENTE);

					$clienteModel->saveOrUpdate();
					
			} 
			catch (Exception $e) 
			{
 				echo $e;
			}
		}

		function update()
		{
			try 
			{
				 $Id = $_POST['Id'];
				
				// $clienteModel = new Cliente();
				// $clienteModel->delete($id);
			} 
			catch (Exception $e) 
			{
 				echo 'Erro:'.$e;
			}
		}

		function delete()
		{
			try 
			{

			} 
			catch (Exception $e) 
			{
 				echo 'Erro:'.$e;
			}
		}

		function select()
		{
			try 
			{
				$form = $_POST['data'];

				$dataArr = json_decode($form);
				$info = json_decode($dataArr[0]);

				$pontoTracoBar = array(".","-","/");

				$clienteModel = new Cliente();
				$clienteModel->select($info->campo,str_replace($pontoTracoBar,"", $info->valor));	
			} 
			catch (Exception $e) 
			{
 				echo 'Erro:'.$e;
			}
		}

		function selectById()
		{
			try 
			{
				$id = $_POST['data'];
				
				$clienteModel = new Cliente();
				$clienteModel->selectById($id,"F");

			} 
			catch (Exception $e) 
			{
				
			}
		}

		function selectAll()
		{
			try 
			{
				

			} 
			catch (Exception $e) 
			{
 				echo 'Erro:'.$e;
			}
		}

		function getSession()
		{
			try 
			{
				session_start();
				echo '{"message":"success","data":'.$_SESSION["cliente"].'}';

			} catch (Exception $e) 
			{
				
			}
		}

		
?>