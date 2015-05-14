
<?php
	
class Connection
{
	private	$servername = "localhost";
	private	$username = "root";
	private	$password = "";
	private	$database = "advocaciaBD";


	function connect()
	{
		// Create connection
		$conn = new PDO("mysql:host=".$this->servername.";dbname=".$this->database, $this->username, $this->password);

		if (!$conn) 
			{
		    	die("Connection failed: " . mysqli_connect_error());
			}

		return $conn;
	}

	function disconnect()
	{

	}
}
		
	
?> 