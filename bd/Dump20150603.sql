CREATE DATABASE  IF NOT EXISTS `advocaciabd` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `advocaciabd`;
-- MySQL dump 10.13  Distrib 5.6.17, for Win32 (x86)
--
-- Host: 127.0.0.1    Database: advocaciabd
-- ------------------------------------------------------
-- Server version	5.6.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `TELEFONE1` varchar(15) NOT NULL,
  `TELEFONE2` varchar(15) DEFAULT NULL,
  `CELULAR` varchar(16) DEFAULT NULL,
  `EMAIL` varchar(100) DEFAULT NULL,
  `LOGRADOURO` varchar(100) NOT NULL,
  `CEP` varchar(8) NOT NULL,
  `NUM` int(11) NOT NULL,
  `BAIRRO` varchar(100) NOT NULL,
  `CIDADE` varchar(100) NOT NULL,
  `UF` varchar(2) NOT NULL,
  `COMPLEMENTO` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=178 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (168,'(11)+3333-3333','1239056371','(12)+98888-8888','','Rua+Chico+Buquira','12247550',22,'S%C3%A3o+Jos%C3%A9+dos+Campos','Conjunto+Residencial+Galo+Branco','SP',''),(169,'(11)+3333-3333','1239056371','(12)+98888-8888','','Rua+Chico+Buquira','12247550',22,'Conjunto+Residencial+Galo+Branco','S%C3%A3o+Jos%C3%A9+dos+Campos','SP',''),(170,'','','','','','',0,'','','AC',''),(171,'','','','','','',0,'','','AC',''),(176,'(11)+3333-3333','','(12)+98888-8888','','','',0,'','','AC',''),(177,'(11)+3333-3333','','(12)+98888-8888','','','',0,'','','AC','');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dependente`
--

DROP TABLE IF EXISTS `dependente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dependente` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NOME` varchar(100) NOT NULL,
  `DT_NASCIMENTO` date DEFAULT NULL,
  `GRAU_PARENTESCO` varchar(45) DEFAULT NULL,
  `RG` varchar(18) DEFAULT NULL,
  `CPF` varchar(11) DEFAULT NULL,
  `COD_CLIENTE` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_COD_CLIENTE_idx` (`COD_CLIENTE`),
  CONSTRAINT `FK_COD_CLIENTE` FOREIGN KEY (`COD_CLIENTE`) REFERENCES `cliente` (`ID`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=279 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dependente`
--

LOCK TABLES `dependente` WRITE;
/*!40000 ALTER TABLE `dependente` DISABLE KEYS */;
INSERT INTO `dependente` VALUES (275,'Isabela AssunÃ§Ã£o','2015-05-04','Filho(a)','4788899987','33332555478',168),(276,'Isabela','2015-05-04','Filho(a)','4788899987','33332555478',168),(277,'Isabela','2015-05-04','Filho(a)','4788899987','33332555478',169),(278,'Isabela','2015-05-04','Filho(a)','4788899987','33332555478',169);
/*!40000 ALTER TABLE `dependente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fisica`
--

DROP TABLE IF EXISTS `fisica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fisica` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NOME` varchar(100) NOT NULL,
  `DT_NASCIMENTO` date NOT NULL,
  `SEXO` varchar(2) NOT NULL,
  `CPF` varchar(11) NOT NULL,
  `RG` varchar(14) NOT NULL,
  `DT_EMIS_RG` date NOT NULL,
  `UF_EMIS_RG` varchar(2) NOT NULL,
  `NUM_CTPS` varchar(25) DEFAULT NULL,
  `SERIE_CTPS` varchar(25) DEFAULT NULL,
  `DT_EMIS_CTPS` date DEFAULT NULL,
  `CNH` varchar(25) DEFAULT NULL,
  `CATEGORIA` varchar(10) DEFAULT NULL,
  `FK_CLIENTE` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_CLIENTE_idx` (`FK_CLIENTE`),
  CONSTRAINT `FK_CLIENTE_FISICA` FOREIGN KEY (`FK_CLIENTE`) REFERENCES `cliente` (`ID`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=164 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fisica`
--

LOCK TABLES `fisica` WRITE;
/*!40000 ALTER TABLE `fisica` DISABLE KEYS */;
INSERT INTO `fisica` VALUES (154,'Jefferson+Silva+Araujo','2015-05-14','Ma','33333333333','44444444444','0000-00-00','20','333654477','554785','2015-05-19','123456789','A%2FB',168),(155,'Jefferson+Silva+Araujo','2015-05-14','Ma','33333333333','44444444444','0000-00-00','20','333654477','554785','2015-05-19','123456789','A%2FB',169),(156,'','0000-00-00','Ma','','','0000-00-00','','','','0000-00-00','','',170),(157,'','0000-00-00','Ma','','','0000-00-00','','','','0000-00-00','','',171),(162,'Jefferson+Silva+Araujo','0000-00-00','Ma','33333333333','44444444444','0000-00-00','','333654477','554785','0000-00-00','123456789','A%2FB',176),(163,'Jefferson+Silva+Araujo','0000-00-00','Ma','33333333333','44444444444','0000-00-00','','333654477','554785','0000-00-00','123456789','A%2FB',177);
/*!40000 ALTER TABLE `fisica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `juridica`
--

DROP TABLE IF EXISTS `juridica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `juridica` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RAZAO_SOCIAL` varchar(50) NOT NULL,
  `NOME_FANTASIA` varchar(45) NOT NULL,
  `CNPJ` varchar(15) NOT NULL,
  `INSCRICAO_ESTADUAL` varchar(20) NOT NULL,
  `FK_CLIENTE` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`),
  KEY `FDSA_idx` (`FK_CLIENTE`),
  CONSTRAINT `FK_CLIENTE` FOREIGN KEY (`FK_CLIENTE`) REFERENCES `cliente` (`ID`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `juridica`
--

LOCK TABLES `juridica` WRITE;
/*!40000 ALTER TABLE `juridica` DISABLE KEYS */;
/*!40000 ALTER TABLE `juridica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `vw_cliente_fisica`
--

DROP TABLE IF EXISTS `vw_cliente_fisica`;
/*!50001 DROP VIEW IF EXISTS `vw_cliente_fisica`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `vw_cliente_fisica` (
  `ID` tinyint NOT NULL,
  `NOME` tinyint NOT NULL,
  `DT_NASCIMENTO` tinyint NOT NULL,
  `SEXO` tinyint NOT NULL,
  `RG` tinyint NOT NULL,
  `DT_EMIS_RG` tinyint NOT NULL,
  `UF_EMIS_RG` tinyint NOT NULL,
  `CPF` tinyint NOT NULL,
  `CNH` tinyint NOT NULL,
  `CATEGORIA` tinyint NOT NULL,
  `NUM_CTPS` tinyint NOT NULL,
  `DT_EMIS_CTPS` tinyint NOT NULL,
  `SERIE_CTPS` tinyint NOT NULL,
  `LOGRADOURO` tinyint NOT NULL,
  `NUM` tinyint NOT NULL,
  `CEP` tinyint NOT NULL,
  `BAIRRO` tinyint NOT NULL,
  `CIDADE` tinyint NOT NULL,
  `UF` tinyint NOT NULL,
  `COMPLEMENTO` tinyint NOT NULL,
  `TELEFONE1` tinyint NOT NULL,
  `TELEFONE2` tinyint NOT NULL,
  `CELULAR` tinyint NOT NULL,
  `EMAIL` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `vw_cliente_juridico`
--

DROP TABLE IF EXISTS `vw_cliente_juridico`;
/*!50001 DROP VIEW IF EXISTS `vw_cliente_juridico`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `vw_cliente_juridico` (
  `ID` tinyint NOT NULL,
  `RAZAO_SOCIAL` tinyint NOT NULL,
  `NOME_FANTASIA` tinyint NOT NULL,
  `INSCRICAO_ESTADUAL` tinyint NOT NULL,
  `CNPJ` tinyint NOT NULL,
  `LOGRADOURO` tinyint NOT NULL,
  `NUM` tinyint NOT NULL,
  `CEP` tinyint NOT NULL,
  `BAIRRO` tinyint NOT NULL,
  `CIDADE` tinyint NOT NULL,
  `UF` tinyint NOT NULL,
  `COMPLEMENTO` tinyint NOT NULL,
  `TELEFONE1` tinyint NOT NULL,
  `TELEFONE2` tinyint NOT NULL,
  `CELULAR` tinyint NOT NULL,
  `EMAIL` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `vw_dependentes`
--

DROP TABLE IF EXISTS `vw_dependentes`;
/*!50001 DROP VIEW IF EXISTS `vw_dependentes`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `vw_dependentes` (
  `ID` tinyint NOT NULL,
  `COD_CLIENTE` tinyint NOT NULL,
  `NOME` tinyint NOT NULL,
  `RG` tinyint NOT NULL,
  `CPF` tinyint NOT NULL,
  `DT_NASCIMENTO` tinyint NOT NULL,
  `GRAU_PARENTESCO` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `vw_cliente_fisica`
--

/*!50001 DROP TABLE IF EXISTS `vw_cliente_fisica`*/;
/*!50001 DROP VIEW IF EXISTS `vw_cliente_fisica`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_cliente_fisica` AS select `cl`.`ID` AS `ID`,`fs`.`NOME` AS `NOME`,`fs`.`DT_NASCIMENTO` AS `DT_NASCIMENTO`,`fs`.`SEXO` AS `SEXO`,`fs`.`RG` AS `RG`,`fs`.`DT_EMIS_RG` AS `DT_EMIS_RG`,`fs`.`UF_EMIS_RG` AS `UF_EMIS_RG`,`fs`.`CPF` AS `CPF`,`fs`.`CNH` AS `CNH`,`fs`.`CATEGORIA` AS `CATEGORIA`,`fs`.`NUM_CTPS` AS `NUM_CTPS`,`fs`.`DT_EMIS_CTPS` AS `DT_EMIS_CTPS`,`fs`.`SERIE_CTPS` AS `SERIE_CTPS`,`cl`.`LOGRADOURO` AS `LOGRADOURO`,`cl`.`NUM` AS `NUM`,`cl`.`CEP` AS `CEP`,`cl`.`BAIRRO` AS `BAIRRO`,`cl`.`CIDADE` AS `CIDADE`,`cl`.`UF` AS `UF`,`cl`.`COMPLEMENTO` AS `COMPLEMENTO`,`cl`.`TELEFONE1` AS `TELEFONE1`,`cl`.`TELEFONE2` AS `TELEFONE2`,`cl`.`CELULAR` AS `CELULAR`,`cl`.`EMAIL` AS `EMAIL` from (`fisica` `fs` join `cliente` `cl` on((`fs`.`FK_CLIENTE` = `cl`.`ID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_cliente_juridico`
--

/*!50001 DROP TABLE IF EXISTS `vw_cliente_juridico`*/;
/*!50001 DROP VIEW IF EXISTS `vw_cliente_juridico`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_cliente_juridico` AS select `cl`.`ID` AS `ID`,`jr`.`RAZAO_SOCIAL` AS `RAZAO_SOCIAL`,`jr`.`NOME_FANTASIA` AS `NOME_FANTASIA`,`jr`.`INSCRICAO_ESTADUAL` AS `INSCRICAO_ESTADUAL`,`jr`.`CNPJ` AS `CNPJ`,`cl`.`LOGRADOURO` AS `LOGRADOURO`,`cl`.`NUM` AS `NUM`,`cl`.`CEP` AS `CEP`,`cl`.`BAIRRO` AS `BAIRRO`,`cl`.`CIDADE` AS `CIDADE`,`cl`.`UF` AS `UF`,`cl`.`COMPLEMENTO` AS `COMPLEMENTO`,`cl`.`TELEFONE1` AS `TELEFONE1`,`cl`.`TELEFONE2` AS `TELEFONE2`,`cl`.`CELULAR` AS `CELULAR`,`cl`.`EMAIL` AS `EMAIL` from (`juridica` `jr` join `cliente` `cl` on((`jr`.`FK_CLIENTE` = `cl`.`ID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_dependentes`
--

/*!50001 DROP TABLE IF EXISTS `vw_dependentes`*/;
/*!50001 DROP VIEW IF EXISTS `vw_dependentes`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_dependentes` AS select `dp`.`ID` AS `ID`,`dp`.`COD_CLIENTE` AS `COD_CLIENTE`,`dp`.`NOME` AS `NOME`,`dp`.`RG` AS `RG`,`dp`.`CPF` AS `CPF`,`dp`.`DT_NASCIMENTO` AS `DT_NASCIMENTO`,`dp`.`GRAU_PARENTESCO` AS `GRAU_PARENTESCO` from (`cliente` `cl` join `dependente` `dp` on((`dp`.`COD_CLIENTE` = `cl`.`ID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-06-03 16:53:55
