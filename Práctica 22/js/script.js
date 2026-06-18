// Esperamos a que el HTML se cargue completamente
document.addEventListener("DOMContentLoaded", function() {

    // Seleccionamos los elementos que necesitamos
    const boton = document.getElementById("calcular");
    const resultadoDiv = document.getElementById("resultado");

    // Función que hace el cálculo
    function calcularPrecioFinal() {
        // Obtenemos los valores de los inputs
        const precioInput = document.getElementById("precio");
        const descuentoInput = document.getElementById("descuento");

        // Convertimos los valores a números
        let precio = parseFloat(precioInput.value);
        let descuento = parseFloat(descuentoInput.value);

        // Validaciones básicas
        if (isNaN(precio) || precio <= 0) {
            resultadoDiv.innerHTML = `<p style="color:red;">❌ Por favor ingresa un precio válido.</p>`;
            return;
        }

        if (isNaN(descuento) || descuento < 0 || descuento > 100) {
            resultadoDiv.innerHTML = `<p style="color:red;">❌ El descuento debe estar entre 0 y 100.</p>`;
            return;
        }

        // Cálculo del precio final
        const precioFinal = precio - (precio * descuento / 100);

        // Mostramos el resultado de forma clara
        resultadoDiv.innerHTML = `
            <h2>Resultado:</h2>
            <p><strong>Precio original:</strong> $${precio.toFixed(2)}</p>
            <p><strong>Descuento aplicado:</strong> ${descuento}%</p>
            <p style="font-size:1.2em; color:green;">
                <strong>Precio final: $${precioFinal.toFixed(2)}</strong>
            </p>
        `;
    }

    // Agregamos el evento al botón
    boton.addEventListener("click", calcularPrecioFinal);

});