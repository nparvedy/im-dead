const eltDivleft = document.querySelector('#left'); // On modifie le CSS du conteneur #left
eltDivleft.style.display = "flex";
eltDivleft.style.flexDirection = "column";
eltDivleft.style.justifyContent = "center";
eltDivleft.style.alignItems = "center";

const eltDivleftP = document.querySelectorAll("#left p"); // css de toutes les balises p
eltDivleftP[0].innerHTML = "Indication : ";


const buttonDivLeft = document.querySelector('#left button'); // css du bouton 
buttonDivLeft.style.padding = "10px";
buttonDivLeft.style.width = "70%";
buttonDivLeft.style.color = "White";
buttonDivLeft.style.backgroundColor = "black";