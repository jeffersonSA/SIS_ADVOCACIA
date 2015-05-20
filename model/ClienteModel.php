<?php
require("../connection/con_mysql.php");
class Cliente
{
	private $id;
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
		$this->id = $value;
	}

	public function getId()
	{
		return $this->id;
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
	public function save()
	{

		try
		{
			$connection = new Connection();
			$this->pdo = $connection->connect();

			$insertCliente = $this->pdo->prepare(
				"INSERT INTO CLIENTE (".
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
				 						"COMPLEMENTO) VALUES(?,?,?,?,?,?,?,?,?,?,?)"); 

			$insertCliente->bindValue(1,$this->tel1);
			$insertCliente->bindValue(2,$this->tel2);
			$insertCliente->bindValue(3,$this->cel);
			$insertCliente->bindValue(4,$this->email);
			$insertCliente->bindValue(5,$this->logradouro);
			$insertCliente->bindValue(6,$this->endCep);
			$insertCliente->bindValue(7,$this->endNum);
			$insertCliente->bindValue(8,$this->endBairro);
			$insertCliente->bindValue(9,$this->endCidade);
			$insertCliente->bindValue(10,$this->endUf);
			$insertCliente->bindValue(11,$this->endComple);
			
			 $insertCliente->execute();
			 $lastIdCliente = $this->pdo->lastInsertId();
			

			if($lastIdCliente != 0)
			{
				if($this->isJuridico)
					$this->saveJuridicalPerson($lastIdCliente);
			 	else 
			 		$this->savePhysicalPerson($lastIdCliente);
			}
			else 
			{
				echo 'Erro';
			}			

		} 
		catch (Exception $e) 
		{
 			echo 'Erro: '.$e->getMessage();
		}
}

	/* ATUALIZA CLIENTE */
	function update()
	{

	}

	/* DELETA */
	function delete($id)
	{
		 $connection = new Connection();
		 $this->pdo = $connection->connect();

		 $deleteCliente = $this->pdo->prepare("DELETE FROM CLIENTE WHERE ID=?");
		 $deleteCliente->bindValue(1,$this->id);
		 $deleteCliente->execute();
	}

	/* BUSCA TODOS OS CLIENTES */
	function selectAll()
	{

		$connection = new Connection();
		$this->pdo = $connection->connect();

		$selectAllCliente = $this->pdo->prepare("SELECT * FROM vw_select_juridico");
		$selectAllCliente->execute();
	}		

	/* BUSCA O CLIENTE DE ACORDO COM ID */
	function select()
	{
		$connection = new Connection();
		$this->pdo = $connection->connect();

		$selectAllCliente = $this->pdo->prepare("SELECT * FROM CLIENTE");
	}


	private function saveJuridicalPerson($idLastClient)
	{
		try 
		{
			$insertJuridico = $this->pdo->prepare(
			"INSERT INTO JURIDICA (".
									"RAZAO_SOCIAL,".
			 						"NOME_FANTASIA,". 
			 						"CNPJ,". 
			 						"INSCRICAO_ESTADUAL,".
			 						"FK_CLIENTE) VALUES(?,?,?,?,?)"); 

			$insertJuridico->bindValue(1,$this->razSocial);
			$insertJuridico->bindValue(2,$this->nomeFant);
			$insertJuridico->bindValue(3,$this->cnpj);
			$insertJuridico->bindValue(4,$this->inscEstadual);
			$insertJuridico->bindValue(5,$idLastClient);

			$insertJuridico->execute();
			$lastIdJurid = $this->pdo->lastInsertId();

			if($lastIdJurid !=0)
			{
				echo 'success';
			}
			else
			{
				$this->delete($idLastClient);
				echo 'Erro';
			}				
		} 
		catch (Exception $e) 
		{
			echo 'Erro: '.$e->getMessage();
		}
	
	}

	private function savePhysicalPerson($idlastClient)
	{

		try 
		{
			$insertPhysical = $this->pdo->prepare(
			"INSERT INTO FISICA (".
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
			 						"FK_CLIENTE) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)"); 

			$insertPhysical->bindValue(1,$this->nome);
			$insertPhysical->bindValue(2,$this->dtNasc);
			$insertPhysical->bindValue(3,$this->sexo);
			$insertPhysical->bindValue(4,$this->cpf);
			$insertPhysical->bindValue(5,$this->rgNum);
			$insertPhysical->bindValue(6,$this->rgUfEmis);
			$insertPhysical->bindValue(7,$this->rgDtEmis);
			$insertPhysical->bindValue(8,$this->ctpsNum);
			$insertPhysical->bindValue(9,$this->ctpsSerie);
			$insertPhysical->bindValue(10,$this->ctpsDtEmis);
			$insertPhysical->bindValue(11,$this->cnh);
			$insertPhysical->bindValue(12,$this->cnhCat);
			$insertPhysical->bindValue(13,$idlastClient);

			$insertPhysical->execute();
			$lastIdPhysic = $this->pdo->lastInsertId();

			if($lastIdPhysic != 0)
			{
				if(count($this->dependenteArr)>0)
					$this->saveDependente($idlastClient);
				else
					echo 'success';
			}
			else
			{
				$this->delete($idLastClient);
				echo 'Erro';
			}
				
		} 
		catch (Exception $e) 
		{
			echo 'Erro: '.$e->getMessage();
		}
		
	}

	private function saveDependente($idLastClient)
	{
		try 
		{
			$insertDependente = $this->pdo->prepare(
				"INSERT INTO DEPENDENTE (".
									"NOME,".
			 						"DT_NASCIMENTO,". 
			 						"GRAU_PARENTESCO,". 
			 						"RG,".
			 						"CPF,".
			 						"COD_CLIENTE) VALUES(?,?,?,?,?,?)"); 
			
			for($i = 0; $i < count($this->dependenteArr); $i++)
			{
				 $depDecode = json_decode($this->dependenteArr[$i]);
				 

				$insertDependente->bindValue(1,$depDecode->Nome);
				$insertDependente->bindValue(2,$depDecode->Dt_Nasc);
				$insertDependente->bindValue(3,$depDecode->Parentesco);
				$insertDependente->bindValue(4,$depDecode->Rg);
				$insertDependente->bindValue(5,$depDecode->Cpf);
				$insertDependente->bindValue(6,$idLastClient);
				$insertDependente->execute();	
			}

		
			$lastIdDepend = $this->pdo->lastInsertId();

			if($lastIdDepend !=0)
				echo 'success';
			else
			{
				$this->delete($idLastClient);
				echo 'Erro';
			}
		} 
		catch (Exception $e) 
		{
			echo 'Erro: '.$e->getMessage();
		}
		
	}
}

?>
