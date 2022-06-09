window.addEventListener("scroll",function() {
    var jav = document.getElementById("java");
    var prueba = document.getElementById("habs");
    var css = document.getElementById("cssHTML");
    var sql = document.getElementById("sql");
    var c = document.getElementById("c");


    jav.classList.toggle("activo",window.scrollY > (getOffset(jav).top-1000))
    css.classList.toggle("activo",window.scrollY > (getOffset(jav).top-820));
    sql.classList.toggle("activo",window.scrollY > (getOffset(jav).top-820));
    c.classList.toggle("activo",window.scrollY > (getOffset(jav).top-820));
    


})

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
  };
}

