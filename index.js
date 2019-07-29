// Partie CSS 

const eltDivleft = document.querySelector('#left'); // On modifie le CSS du conteneur #left
eltDivleft.style.display = "flex";
eltDivleft.style.flexDirection = "column";
eltDivleft.style.justifyContent = "center";
eltDivleft.style.alignItems = "center";

const eltDivleftP = document.querySelectorAll("#left p"); // css de toutes les balises p
eltDivleftP[0].innerText = "Indication : ";
eltDivleftP[2].style.fontSize = "25px";


const buttonDivLeft = document.querySelector('#left button'); // css du bouton 
buttonDivLeft.style.padding = "10px";
buttonDivLeft.style.width = "70%";
buttonDivLeft.style.color = "White";
buttonDivLeft.style.backgroundColor = "black";
buttonDivLeft.style.fontSize = "17px";
buttonDivLeft.style.fontWeight = "bold";
buttonDivLeft.style.borderRadius = "10px";

// Partie Variable

var tableauMot = ["Arbre", "Cuillere", "Table", "Javascript", "Lettre", "Clavier", "Ecran", "Sucre"];
var motRandom = Math.floor(Math.random() * tableauMot.length);
var motRandomChiffre = tableauMot[motRandom]; // tableauMot[chiffreRandom]
var motRandomTableau = motRandomChiffre.split('');
var lettreChoisi = "";
var motComparaison = "";
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var motATrouver = [''];

// Partie boucle 

for (i = 0; i < motRandomTableau.length; i++){
    motATrouver.push('_');
    eltDivleftP[2].innerHTML = `${motATrouver.join(' ')}`
}


console.log(tableauMot[motRandom]);
console.log(motRandomTableau);
console.log(motATrouver);
console.log(alphabet);