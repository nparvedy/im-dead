// Partie CSS 

const eltDivleft = document.querySelector('#left'); // On modifie le CSS du conteneur #left
eltDivleft.style.display = "flex";
eltDivleft.style.flexDirection = "column";
eltDivleft.style.justifyContent = "center";
eltDivleft.style.alignItems = "center";

const eltDivleftP = document.querySelectorAll("#left p"); // css de toutes les balises p
eltDivleftP[0].innerText = "Indication : ";


const buttonDivLeft = document.querySelector('#left button'); // css du bouton 
buttonDivLeft.style.padding = "10px";
buttonDivLeft.style.width = "70%";
buttonDivLeft.style.color = "White";
buttonDivLeft.style.backgroundColor = "black";
buttonDivLeft.style.fontSize = "17px";
buttonDivLeft.style.fontWeight = "bold";
buttonDivLeft.style.borderRadius = "10px";

// Partie Variable

var tableauMot = ["Arbre", "Cuillere", "Table", "Javascript"];
var motRandom = Math.floor(Math.random() * tableauMot.length);
var motRandom = tableauMot[motRandom];
var motRandom = motRandom.split('');

var motATrouver = [''];
for (i = 0; i < motATrouver.length; i++){
    motATrouver.length = motRandom.length;
    var motATrouverDeviner = motATrouver.push('_');
    console.log(motATrouverDeviner);
    
}

console.log(motATrouver);

console.log(motRandom);