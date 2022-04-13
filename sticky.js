window.addEventListener("scroll",function() {
var header = document.querySelector("header");
var logo = document.getElementById("logo");
var logoPrincipal = document.getElementById("logoPrincipal");
var menu = document.querySelector(".menuLateral");
var barraJava = document.getElementById("java");



header.classList.toggle("sticky",window.scrollY > 0);
logo.classList.toggle("sticky",window.scrollY > 0);
logoPrincipal.classList.toggle("sticky",window.scrollY > 0);
menu.classList.toggle("sticky",window.scrollY > 0);

barraJava.classList.toggle("activo",window.scrollY > 2000);









})