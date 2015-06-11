 <?php
require("../connection/con_mysql.php");
class Cliente
{
	private $idDependente;
	private $idCliente;
	private $dtCad;
	private	$nome; 
	private $dtNasc;		
	private $rgNum;	 		
	private $rgDtEmis;
	private $nomeDependente;		
	private $rgDependente;	 		
	private $cpfDependente;
	private $dtNascDependente;
	private $rgUfEmis;
	private $ctpsNum;
	private $ctpsSerie;
	private $ctpsDtEmis; 
	private $cnh;
	private $cnhCat; 
	private $logradouro; 	
	private $endNum;
	private $endBairro;
	private $endCidade;
	private $endCep;
	private $endUf;
	private $endComple;
	private $sexo;
	private $cpf;
	private $cnpj;
	private $razSocial;
	private $inscEstadual;
	private $nomeFant;
	private $tel1;
	private $tel2;
	private $cel;
	private $email;	
	private $isJuridico;	
   	private $pdo;
   	private $dependenteArr;
	
	/* PROPRIEDADES */
	public function setId($value)
	{
		$this->idCliente = $value;
	}

	public function getId()
	{
		return $this->idCliente;
	}
	public function setCliDtCad($value)
	{
		$this->dtCad = $value;
	}

	public function getCliDtCad()
	{
		return $this->dtCad;
	}

	public function setNome($value)
	{
		$this->nome = $value;
	}

	public function getNome()
	{
		return $this->nome;
	}

	public function setDataNascimento($value)
	{
		$this->dtNasc = $value;
	}

	public function geDataNascimento()
	{
		return $this->dtNasc;
	}

	public function setRgNum($value)
	{
		$this->rgNum = $value;
	}

	public function getRgNum()
	{
		return $this->rgNum;
	}

	public function setRgDtEmis($value)
	{
		$this->rgDtEmis = $value;
	}

	public function getRgDtEmisd()
	{
		return $this->rgDtEmis;
	}

	public function setRgUfEmis($value)
	{
		$this->rgUfEmis = $value;
	}

	public function getRgUfEmis()
	{
		return $this->rgUfEmis;
	}

	public function setIdDependente($value)
	{
		$this->idDependente = $value;
	}

	public function getIdDependente()
	{
		return $this->idDependente;
	}

	public function setNomeDependente($value)
	{
		$this->nomeDependente = $value;
	}

	public function getNomeDependente()
	{
		return $this->nomeDependente;
	}

	public function setRgDependente($value)
	{
		$this->rgDependente = $value;
	}

	public function getRgDependente()
	{
		return $this->rgDependente;
	}

	public function setCpfDependente($value)
	{
		$this->cpfDependente = $value;
	}

	public function getCpfDependente()
	{
		return $this->cpfDependente;
	}

	public function setDtNascDependente($value)
	{
		$this->dtNascDependente = $value;
	}

	public function getDtNascDependente()
	{
		return $this->dtNascDependente;
	}

	public function setCtpsNum($value)
	{
		$this->ctpsNum = $value;
	}

	public function getCtpsNum()
	{
		return $this->ctpsNum;
	}

	public function setCtpsSerie($value)
	{
		$this->ctpsSerie = $value;
	}

	public function getCtpsSerie()
	{
		return $this->ctpsSerie;
	}

	public function setCtpsDtEmis($value)
	{
		$this->ctpsDtEmis = $value;
	}

	public function getCtpsDtEmis()
	{
		return $this->ctpsDtEmis;
	}

	public function setCnh($value)
	{
		$this->cnh = $value;
	}

	public function getCnh()
	{
		return $this->cnh;
	}

	public function setCnhCat($value)
	{
		$this->cnhCat = $value;
	}

	public function getCnhCat()
	{
		return $this->cnhCat;
	}

	public function setLogradouro($value)
	{
		$this->logradouro = $value;
	}

	public function getLogradouro()
	{
		return $this->logradouro;
	}

	public function setEndNum($value)
	{
		$this->endNum = $value;
	}

	public function getEndNum()
	{
		return $this->endNum;
	}

	public function setBairro($value)
	{
		$this->endBairro = $value;
	}

	public function getBairro()
	{
		return $this->endBairro;
	}

	public function setCidade($value)
	{
		$this->endCidade = $value;
	}

	public function getCidade()
	{
		return $this->endCidade;
	}

	public function setEndUf($value)
	{
		$this->endUf = $value;
	}

	public function getEndUf()
	{
		return $this->endUf;
	}

	public function setCep($value)
	{
		$this->endCep = $value;
	}

	public function getCep()
	{
		return $this->endCep;
	}

	public function setComplemento($value)
	{
		$this->endComple = $value;
	}

	public function getComplemento()
	{
		return $this->endComple;
	}

	public function setSexo($value)
	{
		$this->sexo = $value;
	}

	public function getSexo()
	{
		return $this->sexo;
	}

	public function setCnpj($value)
	{
		$this->cnpj = $value;
	}

	public function getCnpj()
	{
		return $this->cnpj;
	}

	public function setCpf($value)
	{
		$this->cpf = $value;
	}


	public function getCpf()
	{
		return $this->cpf;
	}

	public function setInscricaoEstadual($value)
	{
		$this->inscEstadual = $value;
	}

	public function getInscricaoEstadual()
	{
		return $this->inscEstadual;
	}

	public function setRazaoSocial($value)
	{
		$this->razSocial = $value;
	}

	public function getRazaoSocial()
	{
		return $this->razSocial;
	}

	public function setNomeFantasia($value)
	{
		$this->nomeFant = $value;
	}

	public function getNomeFantasia()
	{
		return $this->nomeFant;
	}

	public function setTel1($value)
	{
		$this->tel1 = $value;
	}

	public function getTel1()
	{
		return $this->tel1;
	}

	public function setTel2($value)
	{
		$this->tel2 = $value;
	}

	public function getTel2()
	{
		return $this->tel2;
	}

	public function setCelular($value)
	{
		$this->cel = $value;
	}

	public function getCelular()
	{
		return $this->cel;
	}

	public function setEmail($value)
	{
		$this->email = $value;
	}

	public function getEmail()
	{
		return $this->email;
	}

	public function setIsJuridico($value)
	{
		$this->isJuridico = $value;
	}

	public function setDependente($value)
	{
		$this->dependenteArr = $value;
	}

   /* END PROPRIEDADES */


   /* INSERE UM NOVO CLIENTE */
	public function saveOrUpdate()
	{

		try
		{
			$connection = new Connection();
			$this->pdo = $connection->connect();

		
			if($this->idCliente > 0)
			{
				
				$sql = "UPDATE CLIENTE  SET ".
										"TELEFONE1 	= ?,".
				 						"TELEFONE2 	= ?,". 
				 						"CELULAR 	= ?,". 
				 						"EMAIL 		= ?,".
				 						"LOGRADOURO = ?,".
				 						"CEP 		= ?,".
				 						"NUM 		= ?,".
				 						"CIDADE 	= ?,".
				 						"BAIRRO		= ?,".
				 						"UF			= ?,".
				 						"COMPLEMENTO = ? WHERE ID=".$this->idCliente;

				
			}
			else
			{
				
				$sql = "INSERT INTO CLIENTE (".
										"TELEFONE1,".
				 						"TELEFONE2,". 
				 						"CELULAR,". 
				 						"EMAIL,".
				 						"LOGRADOURO,".
				 						"CEP,".
				 						"NUM,".
				 						"BAIRRO,".
				 						"CIDADE,".
				 						"UF,".
				 						"COMPLEMENTO) VALUES(?,?,?,?,?,?,?,?,?,?,?)";
			}
			
			$insertOrUpCliente = $this->pdo->prepare($sql); 

			$insertOrUpCliente->bindValue(1,$this->tel1);
			$insertOrUpCliente->bindValue(2,$this->tel2);
			$insertOrUpCliente->bindValue(3,$this->cel);
			$insertOrUpCliente->bindValue(4,$this->email);
			$insertOrUpCliente->bindValue(5,$this->logradouro);
			$insertOrUpCliente->bindValue(6,$this->endCep);
			$insertOrUpCliente->bindValue(7,$this->endNum);
			$insertOrUpCliente->bindValue(8,$this->endBairro);
			$insertOrUpCliente->bindValue(9,$this->endCidade);
			$insertOrUpCliente->bindValue(10,$this->endUf);
			$insertOrUpCliente->bindValue(11,$this->endComple);
			
			$insertOrUpCliente->execute();
			$errorInfo = $insertOrUpCliente->errorInfo();

			if($errorInfo[2] == "")
			{

				if($this->idCliente > 0 )
				{
					$lastIdCliente = $this->idCliente;
				}
				else
				{
					$lastIdCliente = $this->pdo->lastInsertId();
				}

				if($this->isJuridico)
					$this->saveOrUpdateJuridicalPerson($lastIdCliente);
			 	else 
			 		$this->saveOrUpdatePhysicalPerson($lastIdCliente);
			}
			else 
			{

				echo '{"message":"Erro","details":'.$errorInfo[2].'}';
			}			
		} 
		catch (Exception $e) 
		{
 			echo '{"message":"Erro","details":'.$e->getMessage().'}';
		}
	}

	/* ATUALIZA CLIENTE */
	function update()
	{

	}

	/* DELETA */
	function delete($id)
	{ 
		try 
		{
			 $connection = new Connection();
			 $this->pdo = $connection->connect();
		
		 	 $deleteCliente = $this->pdo->prepare("DELETE FROM CLIENTE WHERE ID = :idCliente");
	
			 $deleteCliente->bindValue(':idCliente',$id);
			 $deleteCliente->execute();

			 $errorInfo = $deleteCliente->errorInfo();

			if($errorInfo[2] == "")
			{
				echo '{"message":"success","details":"Operação realizada com sucesso","data":'.$id.'}';
			}
			else
			{
				echo '{"message":"Erro","details":'.$errorInfo[2].'}'; 
			}
		 } 
		 catch (Exception $e) 
		 {
		 	echo '{"message":"Erro","details":'.$e->getMessage().'}';
		 }
		
	}

	/* BUSCA TODOS OS CLIENTES */
	function selectAll()
	{

		$connection = new Connection();
		$this->pdo = $connection->connect();

		$selectAllCliente = $this->pdo->prepare("SELECT * FROM vw_select_juridico");
		$selectAllCliente->execute();
	}

	public function selectById($id,$type)
	{
		try 
		{
			
			$connection = new Connection();
			$this->pdo = $connection->connect();
			$dependArr = array();
			$info= array();
			
			if($type == 'F' )
			{
				$typeView = "VW_CLIENTE_FISICA";
			}
			else
			{
				$typeView = "VW_CLIENTE_JURIDICA";
			}
			
			
			$selectCliente = $this->pdo->query("SELECT * FROM advocaciabd.".$typeView." WHERE ID = ".$id);
		

		    foreach($selectCliente as $row) 
		    {

		       if($type == 'F' )
		       {
			       	$data = 	array(
			       	"ID" 			=> 	$row['ID'], 
			       	"NOME" 			=>	$row["NOME"],
			       	"DT_NASCIMENTO" => 	$row["DT_NASCIMENTO"],
			       	"SEXO" 			=>	$row["SEXO"],
			       	"RG" 			=>	$row["RG"],
			       	"DT_EMIS_RG" 	=> 	$row["DT_EMIS_RG"],
			       	"UF_EMIS_RG" 	=> 	$row["UF_EMIS_RG"],
			       	"CPF" 			=> 	$row["CPF"],
			       	"CNH" 			=>	$row["CNH"],
			       	"CATEGORIA" 	=>	$row["CATEGORIA"],
			       	"NUM_CTPS" 		=>	$row["NUM_CTPS"],
			       	"DT_EMIS_CTPS" 	=> 	$row["DT_EMIS_CTPS"],
			       	"SERIE_CTPS" 	=> 	$row["SERIE_CTPS"],
			       	"LOGRADOURO" 	=> 	$row["LOGRADOURO"],
			       	"NUM" 			=> 	$row["NUM"],
			       	"CEP" 			=>	$row["CEP"],
			       	"BAIRRO" 		=>	$row["BAIRRO"],
			       	"CIDADE" 		=> 	$row["CIDADE"],
			       	"UF" 			=>	$row["UF"],
			       	"COMPLEMENTO" 	=> 	$row["COMPLEMENTO"],
			       	"TELEFONE1" 	=>	$row["TELEFONE1"],
			       	"TELEFONE2" 	=> 	$row["TELEFONE2"],
			       	"CELULAR" 		=> 	$row["CELULAR"],
			       	"EMAIL" 		=> 	$row["EMAIL"]);
		       }	
		       else
		       {
		       		$data = 	array(
			       	"ID" 					=> 	$row['ID'], 
			       	"RAZAO_SOCIAL" 			=>	$row["RAZAO_SOCIAL"],
			       	"NOME_FANTASIA" 		=> 	$row["NOME_FANTASIA"],
			       	"INSCRICAO_ESTADUAL" 	=>	$row["INSCRICAO_ESTADUAL"],
			       	"CNPJ" 					=>	$row["CNPJ"],
			       	"LOGRADOURO" 			=> 	$row["LOGRADOURO"],
			       	"NUM" 					=> 	$row["NUM"],
			       	"CEP" 					=> 	$row["CEP"],
			       	"BAIRRO" 				=>	$row["BAIRRO"],
			       	"CIDADE" 				=>	$row["CIDADE"],
			       	"UF" 					=>	$row["UF"],
			       	"TELEFONE1" 			=> 	$row["TELEFONE1"],
			       	"TELEFONE2" 			=> 	$row["TELEFONE2"],
			       	"LOGRADOURO" 			=> 	$row["LOGRADOURO"],
			       	"CELULAR" 				=>	$row["CELULAR"],
			       	"EMAIL" 				=>	$row["EMAIL"]);
		       }

		       array_push($info, $data);
		    }

		    if($type == "F")
		    {
		    	$i = 0;
		    	foreach ($info as $item) 
		    	{
			    	$selectDependente = $this->pdo->query("SELECT * FROM VW_DEPENDENTES WHERE COD_CLIENTE=".$item["ID"])->fetchAll();
					 foreach($selectDependente as $row) 
					 {
					 	$dataDepend = array(
					 		"ID"				=>	$row["ID"],
					 		"COD_CLIENTE" 		=> 	$row["COD_CLIENTE"],
					 		"NOME" 				=> 	$row["NOME"],
					 		"RG" 				=> 	$row["RG"],
					 		"CPF" 				=> 	$row["CPF"],
					 		"DT_NASCIMENTO" 	=> 	$row["DT_NASCIMENTO"],
					 		"GRAU_PARENTESCO" 	=> 	$row["GRAU_PARENTESCO"]

					 		);
					 	array_push($dependArr, $dataDepend);	
					 }
					
					 $info[$i]["DEPENDENTES"] = $dependArr;
					 $i++;
		    	}
		    }
		    	
				echo '{"message":"success","details":"Operação realizada com sucesso","operation":"save","data":'.urldecode(json_encode($info)).'}';	
		} 
		catch (Exception $e) 
		{
			echo '{"message":"Erro","details":'.$e->getMessage().'}';
		}
	}		

	/* BUSCA O CLIENTE DE ACORDO COM ID */
	public function select($field,$value)
	{
		try
		{
			$connection = new Connection();
			$this->pdo = $connection->connect();
			$dependArr = array();
			$info= array();
			
			if($field == "CPF")
			{
				$typeView = "VW_CLIENTE_FISICA";
			}
			else
			{
				$typeView = "VW_CLIENTE_JURIDICA";
			}
			
			
			$selectCliente = $this->pdo->query("SELECT * FROM advocaciabd.".$typeView." WHERE ".$field." like '%".$value."%'")->fetchAll();

		    foreach($selectCliente as $row) 
		    {

		       if($field == "CPF" )
		       {
			       	$data = 	array(
			       	"ID" 			=> 	$row['ID'], 
			       	"NOME" 			=>	$row["NOME"],
			       	"DT_NASCIMENTO" => 	$row["DT_NASCIMENTO"],
			       	"SEXO" 			=>	$row["SEXO"],
			       	"RG" 			=>	$row["RG"],
			       	"DT_EMIS_RG" 	=> 	$row["DT_EMIS_RG"],
			       	"UF_EMIS_RG" 	=> 	$row["UF_EMIS_RG"],
			       	"CPF" 			=> 	$row["CPF"],
			       	"CNH" 			=>	$row["CNH"],
			       	"CATEGORIA" 	=>	$row["CATEGORIA"],
			       	"NUM_CTPS" 		=>	$row["NUM_CTPS"],
			       	"DT_EMIS_CTPS" 	=> 	$row["DT_EMIS_CTPS"],
			       	"SERIE_CTPS" 	=> 	$row["SERIE_CTPS"],
			       	"LOGRADOURO" 	=> 	$row["LOGRADOURO"],
			       	"NUM" 			=> 	$row["NUM"],
			       	"CEP" 			=>	$row["CEP"],
			       	"BAIRRO" 		=>	$row["BAIRRO"],
			       	"CIDADE" 		=> 	$row["CIDADE"],
			       	"UF" 			=>	$row["UF"],
			       	"COMPLEMENTO" 	=> 	$row["COMPLEMENTO"],
			       	"TELEFONE1" 	=>	$row["TELEFONE1"],
			       	"TELEFONE2" 	=> 	$row["TELEFONE2"],
			       	"CELULAR" 		=> 	$row["CELULAR"],
			       	"EMAIL" 		=> 	$row["EMAIL"]);
		       }	
		       else
		       {
		       		$data = 	array(
			       	"ID" 					=> 	$row['ID'], 
			       	"RAZAO_SOCIAL" 			=>	$row["RAZAO_SOCIAL"],
			       	"NOME_FANTASIA" 		=> 	$row["NOME_FANTASIA"],
			       	"INSCRICAO_ESTADUAL" 	=>	$row["INSCRICAO_ESTADUAL"],
			       	"CNPJ" 					=>	$row["CNPJ"],
			       	"LOGRADOURO" 			=> 	$row["LOGRADOURO"],
			       	"NUM" 					=> 	$row["NUM"],
			       	"CEP" 					=> 	$row["CEP"],
			       	"BAIRRO" 				=>	$row["BAIRRO"],
			       	"CIDADE" 				=>	$row["CIDADE"],
			       	"UF" 					=>	$row["UF"],
			       	"TELEFONE1" 			=> 	$row["TELEFONE1"],
			       	"TELEFONE2" 			=> 	$row["TELEFONE2"],
			       	"LOGRADOURO" 			=> 	$row["LOGRADOURO"],
			       	"CELULAR" 				=>	$row["CELULAR"],
			       	"EMAIL" 				=>	$row["EMAIL"]);
		       }

		       array_push($info, $data);
		    }

		    if($field == "CPF")
		    {
		    	$i = 0;
		    	foreach ($info as $item) 
		    	{
			    	$selectDependente = $this->pdo->query("SELECT * FROM VW_DEPENDENTES WHERE COD_CLIENTE=".$item["ID"])->fetchAll();
					 foreach($selectDependente as $row) 
					 {
					 	$dataDepend = array(
					 		"ID"				=>	$row["ID"],
					 		"COD_CLIENTE" 		=> 	$row["COD_CLIENTE"],
					 		"NOME" 				=> 	$row["NOME"],
					 		"RG" 				=> 	$row["RG"],
					 		"CPF" 				=> 	$row["CPF"],
					 		"DT_NASCIMENTO" 	=> 	$row["DT_NASCIMENTO"],
					 		"GRAU_PARENTESCO" 	=> 	$row["GRAU_PARENTESCO"]

					 		);
					 	array_push($dependArr, $dataDepend);	
					 }
					
					 $info[$i]["DEPENDENTES"] = $dependArr;
					 $i++;
		    	}
		    }
				session_start();
				$_SESSION['cliente'] = json_encode($info);
				echo '{"message":"success","details":"Operação realizada com sucesso","operation":"save","data":'.urldecode(json_encode($info)).'}';	
		} 
		catch (Exception $e) 
		{
			echo '{"message":"Erro","details":'.$e->getMessage().'}';
		}	
	}


	private function saveOrUpdateJuridicalPerson($idLastClient)
	{
		try 
		{

			if($this->idCliente > 0)
			{
				$sql = "UPDATE JURIDICA SET ".
									"RAZAO_SOCIAL		= ?,".
			 						"NOME_FANTASIA		= ?,". 
			 						"CNPJ				= ?,". 
			 						"INSCRICAO_ESTADUAL	= ?,".
			 						"FK_CLIENTE			= ? WHERE FK_CLIENTE=".$idLastClient;
			}
			else
			{

				$sql = "INSERT INTO JURIDICA (".
									"RAZAO_SOCIAL,".
			 						"NOME_FANTASIA,". 
			 						"CNPJ,". 
			 						"INSCRICAO_ESTADUAL,".
			 						"FK_CLIENTE) VALUES(?,?,?,?,?)";
			}

			$insertOrUpJuridico = $this->pdo->prepare($sql); 

			$insertOrUpJuridico->bindValue(1,$this->razSocial);
			$insertOrUpJuridico->bindValue(2,$this->nomeFant);
			$insertOrUpJuridico->bindValue(3,$this->cnpj);
			$insertOrUpJuridico->bindValue(4,$this->inscEstadual);
			

			$insertOrUpJuridico->bindValue(5,$idLastClient);

			$insertOrUpJuridico->execute();
			
			$errorInfo = $insertOrUpJuridico->errorInfo();

			if($errorInfo[2] == "")
			{
				
				$this->selectById($idLastClient,"J");
			}
			else
			{
				if($this->idCliente == 0)
				{
					$this->delete($idLastClient);
				}
				echo '{"message":"Erro","details":'.$errorInfo[2].'}';
			}				
		} 
		catch (Exception $e) 
		{
			echo '{"message":"Erro","details":'.$e->getMessage().'}';
		}
	
	}

	private function saveOrUpdatePhysicalPerson($idLastClient)
	{

		try 
		{
			if($this->idCliente>0)
			{
				$sql = "UPDATE FISICA SET ".
									"NOME 			= ?,".
			 						"DT_NASCIMENTO	= ?,". 
			 						"SEXO			= ?,". 
			 						"CPF			= ?,".
			 						"RG				= ?,".
			 						"DT_EMIS_RG		= ?,".
			 						"UF_EMIS_RG		= ?,".
			 						"NUM_CTPS		= ?,".
			 						"SERIE_CTPS		= ?,".
			 						"DT_EMIS_CTPS	= ?,".
			 						"CNH			= ?,".
			 						"CATEGORIA		= ?,".
			 						"FK_CLIENTE		= ? WHERE FK_CLIENTE=".$idLastClient;  
			}
			else
			{
				$sql = "INSERT INTO FISICA (".
									"NOME,".
			 						"DT_NASCIMENTO,". 
			 						"SEXO,". 
			 						"CPF,".
			 						"RG,".
			 						"DT_EMIS_RG,".
			 						"UF_EMIS_RG,".
			 						"NUM_CTPS,".
			 						"SERIE_CTPS,".
			 						"DT_EMIS_CTPS,".
			 						"CNH,".
			 						"CATEGORIA,".
			 						"FK_CLIENTE) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)";
			}

			$insertOrUpPhysical = $this->pdo->prepare($sql);
			
			$insertOrUpPhysical->bindValue(1,$this->nome);
			$insertOrUpPhysical->bindValue(2,$this->dtNasc);
			$insertOrUpPhysical->bindValue(3,$this->sexo);
			$insertOrUpPhysical->bindValue(4,$this->cpf);
			$insertOrUpPhysical->bindValue(5,$this->rgNum);
			$insertOrUpPhysical->bindValue(6,$this->rgUfEmis);
			$insertOrUpPhysical->bindValue(7,$this->rgDtEmis);
			$insertOrUpPhysical->bindValue(8,$this->ctpsNum);
			$insertOrUpPhysical->bindValue(9,$this->ctpsSerie);
			$insertOrUpPhysical->bindValue(10,$this->ctpsDtEmis);
			$insertOrUpPhysical->bindValue(11,$this->cnh);
			$insertOrUpPhysical->bindValue(12,$this->cnhCat);
			$insertOrUpPhysical->bindValue(13,$idLastClient);

			$insertOrUpPhysical->execute();
			
			$errorInfo = $insertOrUpPhysical->errorInfo();

			if($errorInfo[2] == "")
			{
				if(count($this->dependenteArr)>0)
				{
					$this->saveDependente($idLastClient);
				}
				else
				{
					$this->selectById($idLastClient,"F");
				}
					
			}
			else
			{
				if($this->idCliente == 0)
					$this->delete($idLastClient);
				
				echo '{"message":"Erro","details":'.$errorInfo[2].'}';
			}
				
		} 
		catch (Exception $e) 
		{
			echo '{"message":"Erro","details":'.$e->getMessage().'}';;
		}
		
	}

	private function saveDependente($idLastClient)
	{
		try 
		{
			$pontoTranco = array('.' ,'-');
			
			if($this->idCliente > 0)
			{
				$sql = "UPDATE DEPENDENTE SET ".
									"NOME 			= ?,".
			 						"DT_NASCIMENTO	= ?,". 
			 						"GRAU_PARENTESCO= ?,". 
			 						"RG				= ?,".
			 						"CPF			= ?,".
			 						"COD_CLIENTE	= ? WHERE ID=?";
			}
			else
			{
				$sql = "INSERT INTO DEPENDENTE (".
									"NOME,".
			 						"DT_NASCIMENTO,". 
			 						"GRAU_PARENTESCO,". 
			 						"RG,".
			 						"CPF,".
			 						"COD_CLIENTE) VALUES(?,?,?,?,?,?)";
			}
			$insertDependente = $this->pdo->prepare($sql); 
			
			for($i = 0; $i < count($this->dependenteArr); $i++)
			{
				 
				$insertDependente->bindValue(1,urldecode(($this->dependenteArr[$i]["NOME"])));
				$insertDependente->bindValue(2,urldecode(($this->dependenteArr[$i]["DT_NASC"])));
				$insertDependente->bindValue(3,urldecode(($this->dependenteArr[$i]["PARENTESCO"])));
				$insertDependente->bindValue(4,str_replace($pontoTranco,"", urldecode(($this->dependenteArr[$i]["RG"]))));
				$insertDependente->bindValue(5,str_replace($pontoTranco,"",urldecode(($this->dependenteArr[$i]["CPF"]))));
				$insertDependente->bindValue(6,$idLastClient);
				
				if($depDecode->Id > 0)
					$insertDependente->bindValue(7,$depDecode->Id);
				
				$insertDependente->execute();	
			}

			$errorInfo = $insertDependente->errorInfo();

			if($errorInfo[2] == "")
			{
				$this->selectById($idLastClient,"F");
			}
			else
			{
				if($this->idCliente == 0)
					$this->delete($idLastClient);
				
				echo '{"message":"Erro","details":'.$errorInfo[2].'}';
			}
		} 
		catch (Exception $e) 
		{
			echo '{"message":"Erro","details":'.$e->getMessage().'}';
		}
		
	}
}

?>
