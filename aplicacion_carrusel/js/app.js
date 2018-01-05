"use strict"
var animales = new Array();
animales[0] = "img/osa.jpg";
animales[1] = "img/bengala.jpg";
animales[2] = "img/canguro.jpg";
animales[3] = "img/koala.jpg";
animales[4] = "img/pinguino.jpg";

var detalle_animal = [
    {especie: 'mamifero', altura: 2.5, anchura: 1.5, ejemplares: 1200},
    {especie: 'mamifero', altura: 1.4, anchura: 1.8, ejemplares: 150},
    {especie: 'mamifero', altura: 2, anchura: 1.3, ejemplares: 700},
    {especie: 'mamifero', altura: 0.5, anchura: 0.5, ejemplares: 220},
    {especie: 'acuatico', altura: 1.5, anchura: 1, ejemplares: 3000}
];

var elemento_actual = 0;

function anterior(){
    if (elemento_actual > 0)elemento_actual--;
    else elemento_actual = 4;
    // Se actualiza la imagen
    document.images.elemento.src = animales[elemento_actual];
    actualizarDetalles();
}

function siguiente(){
    if(elemento_actual < 4)elemento_actual++;
    else elemento_actual = 0;
    // Se actualiza la imagen
    document.images.elemento.src = animales[elemento_actual];
    actualizarDetalles();
}

function actualizarDetalles(){
    document.getElementById("especie").value = 
            detalle_animal[elemento_actual].especie;
    document.getElementById("altura").value = 
            detalle_animal[elemento_actual].altura;
    document.getElementById("anchura").value = 
            detalle_animal[elemento_actual].anchura;
    document.getElementById("ejemplares").value = 
            detalle_animal[elemento_actual].ejemplares;
}

function donar(){
    alert("Para donar debe registrarse!!!")
}