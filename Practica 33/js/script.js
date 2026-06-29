let corrredores = []

let formIngresarDatos = document.querySelector ("#ingresarDatos");
let boton = document.querySelector ("#boton");
let lista = document.querySelector ("#lista");

boton .addEventListener ("click", function(e){
    e.preventDefault
    formIngresarDatos ()
});

function ingresarDatos() {

    let nombre = document.querySelector("#nombre").value
    if (nombre == "") {
        alert("El nombre no puede estar vacío");
        return false;
    }
        
    let apellido = document.querySelector("apellido").value
    if (apellido == "") {
        alert("El apellido no puede estar vacío");
        return false;
    }
        
    let edad =document.querySelector("#edad").value
    if (edad == "" || isNaN(edad)) {
        alert("Ingrese una edad válida");
        return false;
    }
    let num = document.querySelector("#numero")
    if (num == "" || isNaN(num)) {
        alert("Ingrese un número válido");
    }
}