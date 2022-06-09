window.addEventListener("scroll",function() {
    var jav = document.getElementById("java");
    var css = document.getElementById("cssHTML");
    var sql = document.getElementById("sql");
    var c = document.getElementById("c");


    if ($(window).width() <= 700) {
        jav.classList.toggle("activo",window.scrollY > 4300)
        css.classList.toggle("activo",window.scrollY > 4400);
        sql.classList.toggle("activo",window.scrollY > 4500);
        c.classList.toggle("activo",window.scrollY > 4600);
    }
    else {
        jav.classList.toggle("activo",window.scrollY > 2600);
        css.classList.toggle("activo",window.scrollY > 2700);
        sql.classList.toggle("activo",window.scrollY > 2800);
        c.classList.toggle("activo",window.scrollY > 2900);
    }

    
})