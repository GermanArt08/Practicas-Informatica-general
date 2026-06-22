function iniciarCompra() {
    let cantidad = 0;
    // Lógica para iniciar el informe de compra

while (true) {
    cantidad = Number(prompt("Ingrese la cantidad de productos comprados:"));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingrese un número válido.");
    }
    else {
        break;
    }
}
let precios = [];
for (let i = 0; i < cantidad; i++) {
    while (true) {
        let precio = Number(prompt("Ingrese el precio del producto" + (i + 1) + ":"));
        if (isNaN(precio) || precio < 0) {
            alert("Por favor, ingrese un número válido.");
        }
        else {
            precios.push(precio);
            break;
        }
    }
}
let total = 0;
let max = precios[0];
let min = precios[0];

for (let i = 0; i < precios.length; i++) {
    total += precios[i];
    if (precios[i] > max) {
        max = precios[i];
    } 
    if (precios[i] < min) {
        min = precios[i];
    }
}
let promedio = total / precios.length;

document.querySelector("#resultado").innerHTML = `
    <p>Total: ${total}</p>
    <p>Precio máximo: ${max}</p>
    <p>Precio mínimo: ${min}</p>
    <p>Promedio: ${promedio}</p>
`;
}