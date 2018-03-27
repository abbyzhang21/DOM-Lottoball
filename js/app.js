
var randomly = Math.floor(Math.random() * 99 + 1);
random.addEventListener('click', randomNum);
var myVar = setInterval(function(){randomNum();}, 3000);
function randomNum(){
//create random num 1 to 99
	var randomly = Math.floor(Math.random() * 99 + 1);
	var displayElem = document.getElementById('display');
	displayElem.innerHTML = randomly;
	//var winnerNumElem = document.getElementById('winnerNum');
	//document.body.appendChild(randomly);
}

