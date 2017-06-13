var tab=["red","blue","yellow"]

function Buen(){	
document.getElementById("CR").style.backgroundColor = tab[Math.floor(Math.random()*3)]
}

document.getElementById("bouton").addEventListener("click",Buen)