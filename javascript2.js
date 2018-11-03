<!DOCTYPE html>
<html>
<head>
	<title>object</title>
</head>
<body>
	<p id="demo"></p>
<script type="text/javascript">
	
	var person = {
		firstName: "Tarsem",
		lastName: "Jangra",
		address:"Dhani Majra",
		fullDetail : function(){
			return this.firstName + " " + this.lastName;
		}
	};

		document.getElementById('demo').innerHTML=person.fullDetail();
	
</script>

</body>
</html>