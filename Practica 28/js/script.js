const resultados = document.querySelector("#resultados");
const boton = document.querySelector("#boton");

let contadorPollo = 0;
let contadorPasta = 0;
let contadorEnsalada = 0;
boton.addEventListener("click", function() {
let contadorPollo = 0;
let contadorPasta = 0;
let contadorEnsalada = 0;

for (let i=1; i<=12; i++) {
    let resultados = prompt("Ingrese el plato que desea ordenar: (pollo, pasta o ensalada)"); 
    if (resultados === "pollo") {
        contadorPollo++;
    }
    else if (resultados === "pasta") {
        contadorPasta++;
    }
    else if (resultados === "ensalada") {
        contadorEnsalada++;
    }
    else {
        alert("Plato no válido, por favor ingrese pollo, pasta o ensalada")
        i--;
    }
}
let maximo = Math.max(contadorEnsalada, contadorPasta, contadorPollo);
let platoMasElegido = " ";

if (maximo ===contadorPollo) platoMasElegido = "Pollo";
else if (maximo===contadorEnsalada) platoMasElegido = "Ensalada";
else (platoMasElegido) = "Pasta";

resultados.innerHTML = `
    <h2>Resultados de la cena</h2>
    <p><strong>Pollo:</strong> ${contadorPollo} (${Math.round((contadorPollo/12)*100)}%)</p>
    <p><strong>Pasta:</strong> ${contadorPasta} (${Math.round((contadorPasta/12)*100)}%)</p>
    <p><strong>Ensalada:</strong> ${contadorEnsalada} (${Math.round((contadorEnsalada/12)*100)}%)</p>
    <p><strong>Plato más elegido:</strong> ${platoMasElegido} (${maximo} personas)</p>
`;
});