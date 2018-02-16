
function loadHome(){ 
var original = "root12";
var password = prompt("Enter your password");
var secondPassword
var username
var secondUsername

if (original == password){
document.getElementById("signin").innerHTML = "Welcome back, you are signed in as Daniel";}

else if ("" == password){
secondPassword = prompt("Must enter a password");
	if (original == secondPassword){
	document.getElementById("signin").innerHTML = "Welcome back, you are signed in as Daniel";
	}
}

else if (password != "")	{
username = prompt("Enter a username");
document.getElementById("signin").innerHTML = "Welcome, you are signed in as " + username;
	if (username == ""){
	secondUsername = prompt("Must enter a username");
		if (secondUsername != ""){document.getElementById("signin").innerHTML = "Welcome, you are signed in as " + secondUsername;}
	}
}

}