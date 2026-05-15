function makeBigger(){
	document.getElementById("fancyTextArea").style.fontSize = "24pt"
}

function setFancy(){
	document.getElementById("fancyTextArea").style.fontWeight = "bold";
	document.getElementById("fancyTextArea").style.color = "blue";
	document.getElementById("fancyTextArea").style.textDecoration = "underline";
}

function setBoring(){
	document.getElementById("fancyTextArea").style.fontWeight = "normal";
	document.getElementById("fancyTextArea").style.color = "black";
	document.getElementById("fancyTextArea").style.textDecoration = "none";
}

function setMoo(){
	var str = document.getElementById("fancyTextArea").value;
	str = str.toUpperCase();
	var parts = str.split(".");
	str = parts.join("-Moo.");
	document.getElementById("fancyTextArea").value = str;
}