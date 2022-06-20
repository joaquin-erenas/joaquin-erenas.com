var check=document.getElementById("idiomas");
check.addEventListener('click',idioma);

function idioma(){
    let id=check.checked;

    if(id){
        location.href="./indexEn.html"
    }else {
        location.href="./index.html"
    }
}