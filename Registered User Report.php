<html>
	<head>
		<style>
			table
			{
				border-style:solid;
				border-width:2px;
				border-color:pink;
			}
		</style>
	</head>
	<body>
		<p>Registered User Report</p>
		<p></p>
		<?php
			$dbhost = 'localhost';
			$dbuser = 'id2959258_username';
			$dbpass = 'password';
                        $dbase = 'id2947904_userinfo';
   
			$conn = new mysqli($dbhost, $dbuser, $dbpass, $dbase);
   
			if(! $conn ) 
			{
				die('Could not connect: ' . $conn->error);
			}
   
			$sql = 'SELECT * FROM info ORDER BY date_time DESC';
			$conn->select_db('id2959258_userinfo');
			$retval = $conn->query($sql);
   
			if(! $retval ) 
			{
				die('Could not get data: ' . $conn->error);
			}
			
			echo "<table border='1'>
			<tr>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Address1</th>
				<th>Address2</th>
				<th>City</th>
				<th>State</th>
				<th>Zip</th>
				<th>Country</th>
				<th>Date</th>
			</tr>";
   
			//while($row = mysql_fetch_array($retval, MYSQL_ASSOC)) 
                        while($row = $retval->fetch_assoc())
			{
				echo "<tr>";
					echo "<td>"	. $row['firstname'] . "</td>";
					echo "<td>"	. $row['lastname'] . "</td>";
					echo "<td>"	. $row['address1'] . "</td>";
					echo "<td>"	. $row['address2'] . "</td>";
					echo "<td>"	. $row['city'] . "</td>";
					echo "<td>"	. $row['state'] . "</td>";
					echo "<td>"	. $row['zip'] . "</td>";
					echo "<td>"	. $row['country'] . "</td>";
					echo "<td>"	. $row['date_time'] . "</td>";
				echo "</tr>";
			}
			echo "</table>";
			
			//$conn->close;
		?> 
		<p></p>
		<p>Fetched data successfully</p>
	</body>
</html>