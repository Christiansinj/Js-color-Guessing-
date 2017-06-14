var tab=["red","blue","yellow"]

function Buen(){	
if (document.getElementById("CR").style.backgroundColor == tab[Math.floor(Math.random()*3)]){
alert ("You win !")	
}
else {
	alert ("You Loose !")
}
document.getElementById('CR').style.backgroundColor = tab[Math.floor(Math.random()*tab.length)]
}

document.getElementById("bouton").addEventListener("click",Buen)