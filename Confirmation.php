<html>
	<body>
		<p>Registration Successful!</p>
		<p></p>
		<?php
			$t = time();
			$time = date("Y-m-d h:i:s", $t);
			
			if ($_SERVER["REQUEST_METHOD"] == "POST") 
			{
				$firstName = test_input($_POST[ "firstName" ]);
				$lastName = test_input($_POST[ "lastName" ]);
				$address1 = test_input($_POST[ "address1" ]);
				$address2 = test_input($_POST[ "address2" ]);
				$city = test_input($_POST[ "city" ]);
				$state = test_input($_POST[ "state" ]);
				$zip = test_input($_POST[ "zip" ]);
				$country = test_input($_POST[ "country" ]);
			}

			function test_input($input) 
			{
				$input = trim($input);
				$input = stripslashes($input);
				$input = htmlspecialchars($input);
				return $input;
			}
		
			echo "First Name: " . ($firstName) . "<br>";
			echo "Last Name: " . ($lastName)  . "<br>";
			echo "Address1: " . ($address1)  . "<br>";
			echo "Address2: " . ($address2)  . "<br>";
			echo "City: " . ($city)  . "<br>";
			echo "State: " . ($state)  . "<br>";
			echo "Zip: " . ($zip)  . "<br>";
			echo "Country: " . ($country)  . "<br>";
			echo "Date: " . ($time) . "<br>";
			
			$dbhost = 'localhost';
			$dbuser = 'id2959258_username';
			$dbpass = 'password';
                        $dbase = 'id2947904_userinfo';
   
			$conn = new mysqli($dbhost, $dbuser, $dbpass, $dbase);
   
			if(! $conn ) 
			{
				die('Could not connect: ' . $conn->error);
			}
			
			$sql = "INSERT INTO info (firstname, lastname, address1, address2, city, state, zip, country, date_time) 
					VALUES ('$firstName', '$lastName', '$address1', '$address2', '$city', '$state', '$zip', '$country', '$time');";
			$conn->select_db('id2959258_userinfo');
			if ($conn->query($sql) === TRUE) 
			{
				echo "<p></p>" . "New record created successfully";
			} 
			else 
			{
				echo "<p></p>" . "Error: " . $sql . "<br>" . $conn->error;
			}

			$conn->close();
		?>
	</body>
</html>