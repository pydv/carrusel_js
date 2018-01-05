"use strict"
var fotos = new Array();

fotos[0] = "img/lengua.jpg";
fotos[1] = "img/trucha.jpg";
fotos[2] = "img/milaneza.jpg";
fotos[3] = "img/sajta.jpg";
fotos[4] = "img/pique.jpg";

var i = 0;

function anterior(){
    if (i > 0) i--;
    else i = 4;
    document.images.carrusel.src = fotos[i];
}

function siguiente(){
    if(i < fotos.length - 1) i++;
    else i = 0;
    document.images.carrusel.src = fotos[i];
}