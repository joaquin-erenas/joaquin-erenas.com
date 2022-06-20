window.addEventListener("scroll",function() {
var header = document.querySelector("header");
var logo = document.getElementById("logo");
var enlaceUno = document.getElementById("a");
var enlaceDos = document.getElementById("b");
var enlaceTres = document.getElementById("x");
var enlaceCuatro = document.getElementById("d");



header.classList.toggle("sticky",window.scrollY > 0);
logo.classList.toggle("sticky",window.scrollY > 0);
enlaceUno.classList.toggle("sticky",window.scrollY > 0);
enlaceDos.classList.toggle("sticky",window.scrollY > 0);
enlaceTres.classList.toggle("sticky",window.scrollY > 0);
enlaceCuatro.classList.toggle("sticky",window.scrollY > 0);



})