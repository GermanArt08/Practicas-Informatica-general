const boton = document.querySelector("#boton");
const nombre = document.querySelector("#nombre");
const edad = document.querySelector("#edad");
const genero = document.querySelector("#genre");

boton.addEventListener("click", function () {
    if (edad.value >= 18) {
    
        if (genero.value === "accion") {
            alert("Hola " + nombre.value + ", te recomiendo la serie 'Bleach'");
        } else if (genero.value === "comedia") {
            alert("Hola " + nombre.value + ", te recomiendo la serie 'The Office'");
        } else if (genero.value === "drama") {
            alert("Hola " + nombre.value + ", te recomiendo la serie 'Breaking Bad'");
        } else if (genero.value === "ciencia ficcion") {
            alert("Hola " + nombre.value + ", te recomiendo la serie 'Stranger Things'");
        } else if (genero.value === "terror") {
            alert("Hola " + nombre.value + ", te recomiendo la serie 'The Nigger'");
        }
    } else if (genero.value === "accion") {
        alert("Hola " + nombre.value + ", Te recomiendo ver 'Avatar: The Last Airbender'");
    } else if (genero.value === "comedia") {
        alert("Hola " + nombre.value + ", Te recomiendo ver 'Gravity Falls'");
    } else if (genero.value === "drama") {
        alert("Hola " + nombre.value + ", Te recomiendo ver 'Anne with an E'");
    } else {
        alert("Hola " + nombre.value + ", Te recomiendo ver 'The Dragon Prince'");
        }
    }
);
