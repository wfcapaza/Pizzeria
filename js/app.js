//Menu responsive
let btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menuBar"),
    enlaces = document.getElementById("enlaces");

//Click abrir
btnMenuOpen.addEventListener("click", function () {
    /*menuResponsive.className = "active menu-bar";*/
    menuResponsive.classList.add("active");
});

//Click Cerrar
btnMenuClose.addEventListener("click", function () {
    menuResponsive.classList.remove("active");
});

//Cerrar menú con elementos de enlaces
enlaces.addEventListener("click", function () {
    menuResponsive.style.transitionDelay = "1s";
    menuResponsive.classList.remove("active");
});

//slider de productos
let contenedor = document.querySelector(".slider"),
    btnIzquierdo = document.getElementById("btn-izquierda");
    btnDerecho = document.getElementById("btn-derecha");

//evento para boton derecho
btnDerecho.addEventListener("click", function(){
    contenedor.scrollLeft += contenedor.offsetWidth;//tamaño total
});
//evento para boton inzquierdo
btnIzquierdo.addEventListener("click", function(){
    contenedor.scrollLeft -= contenedor.offsetWidth;
});

//Validación de formulario
let formulario = document.getElementById("formulario");

function validar(e){
    let inputNombre = document.getElementById("nombre"),
        inputEmail = document.getElementById("email"),
        inputComentario = document.getElementById("comentarios"),
        alertSuccess = document.getElementById("alertSuccess"),
        alertError = document.getElementById("alertError");
    
    if(inputNombre.value == 0 || inputEmail.value == 0 || inputComentario.value == 0){
        e.preventDefault();
        alertError.classList.remove("hide");
        alertError.classList.add("show");
        setTimeout(function(){
            alertError.classList.remove("show");
            alertError.classList.add("hide");
        }, 2000);
    }
    else{
        e.preventDefault();
        alertSuccess.classList.remove("hide");
        alertSuccess.classList.add("show");
        setTimeout(function(){
            alertSuccess.classList.remove("show");
            alertSuccess.classList.add("hide");
        }, 2000);
        inputNombre.value = "";
        inputEmail.value = "";
        inputComentario.value = "";
    }
}
//Eventos del formulario
formulario.addEventListener("submit", validar);

//Boton de subir
let btnTop = document.getElementById("btn-top"),
    logo = document.getElementById("logo");

//Detectar scroll en la web
window.addEventListener("scroll", function(){
    let scroll = document.documentElement.scrollTop,
        fullSize = document.documentElement.offsetHeight,
        sizeVP = document.documentElement.clientHeight;
    if(scroll > 100){
        btnTop.classList.add("show");
    }
    else{
        btnTop.classList.remove("show");
    }
    //Modificar elemento cuando llegue a final de pagina//
    if( fullSize == (scroll + sizeVP)){
        btnTop.classList.add("scrollFinal");
    }
    else{
        btnTop.classList.remove("scrollFinal");
    }
});

//Se detecta evento click en el boton
btnTop.addEventListener("click", function(){
    window.scrollTo(0, 0);
});

//Detectar evento en el logo
logo.addEventListener("click", function(){
    window.scrollTo(0, 0);
});