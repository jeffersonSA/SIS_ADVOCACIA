<?php
	require("../model/ClienteModel.php");
	echo 'ClienteController';
	$obj = new Cliente();
	$obj->save();

?>