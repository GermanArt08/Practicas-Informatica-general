const cantidad = 5;
let corrredores = [];

let formIngresarDatos = document.querySelector ("#ingresarDatos");
let boton = document.querySelector ("#boton");
let lista = document.querySelector ("#lista");

let contador = 0;
let ganador;
let promedio;
let masRapidoProm;

boton .addEventListener ("click", function(e){
    e.preventDefault
    ingresarDatos ()
});

function ingresarDatos() {

    let nombre = document.querySelector("#nombre").value
    if (nombre == "") {
        alert("El nombre no puede estar vacío");
        return false;
    }
        
    let apellido = document.querySelector("#apellido").value
    if (apellido == "") {
        alert("El apellido no puede estar vacío");
        return false;
    }
        
    let edad =document.querySelector("#edad").value
    if (edad == "" || isNaN(edad)) {
        alert("Ingrese una edad válida");
        return false;
    }
    let num = document.querySelector("#numero").value
    if (num == "" || isNaN(num)) {
        alert("Ingrese un número válido");
        return false;
    }
    let tiempo = document.querySelector ("#tiempo").value
    if (tiempo =="" || isNaN(tiempo)) {
        alert("Ingrese un tiempo válido");
        return false;
    }

    let corredor = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        num: num,
        tiempo: tiempo,
    }
    corrredores.push(corredor)
    alert ("Datos ingresados correctamente")

    vaciarFormulario();
}
function vaciarFormulario () {
    document.querySelector ("#nombre").value = "";
    document.querySelector ("#apellido").value = "";
    document.querySelector ("#edad").value = "";
    document.querySelector ("#numero").value = "";
    document.querySelector ("#tiempo").value = "";

    verificarCantDatos();
}
function verificarCantDatos() {
    if (corrredores.length>=cantidad)
        boton.disabled = true;
        for (let i=0; i<=cantidad; i++) {
        contador += tiempo[i];
}
promedio = contador/cantidad;
}
if(corrredores.lenght>=cantidad) { 
let listado = document.querySelector(".listado");
listado.innerHTML = (`El promedio de tiempor es de ${promedio.value}s`)
}