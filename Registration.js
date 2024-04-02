Let un = document.getElementId("email");
Let pass = document.getElementId("password");
Let add = document.getElementId("address");
Let gd = document.getElementId("gradution");
Let brnch = document.getElementId("branch");
Let yop = document.getElementId("yop");

function registerUser(){
	Let userData={
		username:un.value,
		password :pass.value,
		address:add.value,
		gradution :gd.value,
		branch: brnch.value,
		yop:yop.value
	}
	saveData(userData);
	clearFeild();
	open("Login.html");
}

function clearFeild(){
	un.value="";
	pass.value="";
	add.value="";
	gd.value="";
	brnch.value="";
	yop.value="";
}

function saveData(userData){
	localStorage.setItem("userData",JSON.stringify(userData));
}

	