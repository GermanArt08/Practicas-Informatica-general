const cantidad = 3;
let corredores = [];

const formIngresarDatos = document.querySelector ("#ingresarDatos");
const boton = document.querySelector ("#boton");
let lista = document.querySelector (".listado");

boton .addEventListener ("click", function(e){
    e.preventDefault ()
    ingresarDatos ()
});
// Validaciones
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

    const corredor = {
        nombre: nombre,
        apellido: apellido,
        edad: Number(edad),
        num: Number(num),
        tiempo: Number(tiempo),
    }
    corredores.push(corredor)
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
    if (corredores.length>=cantidad) {
        boton.disabled = true;
    calcularResultados();
    }
}
function calcularResultados() {
    let totalTiempo = 0;
    let ganador = corredores[0];

    for (let i=0; i < corredores.length; i++) {
        totalTiempo += corredores[i].tiempo;
        if (corredores[i].tiempo < ganador.tiempo) {
            ganador = corredores[i];
        }
    }
    const promedio = totalTiempo / corredores.length;

    let arribaPromedio = 0;
    for (let i=0; i < corredores.length; i++) {
        if (corredores[i].tiempo > promedio) {
            arribaPromedio++;
        }
    }
    const porcentajeArriba = Math.round((arribaPromedio / corredores.length) *100);

    // Mostrar resultados
lista.innerHTML = `
        <h2>Resultados de la carrera</h2>
        <p><strong>Ganador:</strong> ${ganador.nombre} ${ganador.apellido} 
           (N° ${ganador.num}) - Tiempo: ${ganador.tiempo}s</p>
        <p><strong>Promedio de tiempo:</strong> ${promedio} segundos</p>
        <p><strong>Corredores por encima del promedio:</strong> ${arribaPromedio} (${porcentajeArriba}%)</p>
    `;
}