<!DOCTYPE html>
<html>
<head>
	<title>javascript</title>
	<script type="text/javascript">
		function lucky(){
			document.write("Hello my name is tarsem")
		}
	</script>
</head>
<body>
	<h2>Java Script</h2>
	<button type="button" onmouseleave="document.getElementById('demo').innerHTML=lucky()">Click me to check the time and date</button>
	<p id="demo" ></p>
	<button type="button" onclick="document.getElementById('hey').innerHTML=lucky()"> click me </button>
	<p class="hey"></p>
</body>
</html>