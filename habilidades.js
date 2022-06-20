window.addEventListener("scroll",function() {
    var jav = document.getElementById("java");
    var articulo = document.getElementById("activadorHabs");
    var css = document.getElementById("cssHTML");
    var sql = document.getElementById("sql");
    var c = document.getElementById("c");
    var eq = this.document.getElementById("equipo");
    var co = this.document.getElementById("colab");
    var im = this.document.getElementById("impli");
    var pas = this.document.getElementById("pasion");

    jav.classList.toggle("activo",window.scrollY > (getOffset(articulo).top-300))
    css.classList.toggle("activo",window.scrollY > (getOffset(articulo).top-300));
    sql.classList.toggle("activo",window.scrollY > (getOffset(articulo).top-300));
    c.classList.toggle("activo",window.scrollY > (getOffset(articulo).top-300));
    eq.classList.toggle("activo",window.scrollY > (getOffset(articulo).top-300));
    co.classList.toggle("activo",window.scrollY > (getOffset(articulo).top-300));
    im.classList.toggle("activo",window.scrollY > (getOffset(articulo).top-300));
    pas.classList.toggle("activo",window.scrollY > (getOffset(articulo).top-300));



})

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
  };
}

