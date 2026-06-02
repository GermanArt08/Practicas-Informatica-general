let nombre = "";
let respuesta = confirm("Quieres personalizar la página?");
if (respuesta) {
    let nombre = prompt("¿Cuál es tu nombre?");
    if (nombre) {
        let tituloPrincipal = document.querySelector("#bienvenida");
        tituloPrincipal.innerText = "¡Bienvenido " + nombre + "!";}
    else  {nombre = "";}    
}
else {
    let nombre = "";
}
let contenedor = document.querySelector("#contenedor");
let respuestaDarkmode = confirm("¿Quieres activar el modo oscuro?");
if (respuestaDarkmode) {
    contenedor.style.color= "white";
    contenedor.style.backgroundColor= "black";
}
let hora = prompt("Qué hora es?");
if (hora >= 6 && hora < 12) {
    despedida.innerText = "¡Buenos días!";
} else if (hora >= 12 && hora < 18) {
    despedida.innerText = "¡Buenas tardes!";
} else {
    despedida.innerText = "¡Buenas noches!";
}