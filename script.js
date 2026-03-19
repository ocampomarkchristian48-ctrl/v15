function startGame(){

let name=document.getElementById("playerName").value.trim();

if(name===""){
alert("Enter your name first!");
return;
}

// hide start
document.getElementById("startScreen").classList.add("hidden");

// show description
document.getElementById("descScreen").classList.remove("hidden");

}
