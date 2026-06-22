document.querySelector("#boton").addEventListener("click", function(e) {
let cantidad = 0;

while(true) {
    cantidad = Number(prompt("Ingresar cantidad de libros comprados"))

    if (cantidad <=0 || isNaN(cantidad)){
        alert("Cantidad no válida, ingrese un número mayor a 0")
    }
    else{
        break;
    }
}
let precios = []
for (let i=0; i<cantidad; i++){
    let precio = 0

    while (true){
        precio = Number(prompt ("Ingrese el precio de cada libro" + (i + 1) + ":"));
        if (isNaN(precio) || precio <= 0) {
            alert("Precio no válido, ingrese un número mayor a 0");
        } else {
            precios.push(precio);
            break;
        }
      }
    }

let total = 0;
let max = precios[0];
let min = precios[0];

for (let i=0; i<precios.length;i++) {   
    total += precios[i];
    if (precios[i]<max) max =precios[i];
    if (precios[i]>min) min =precios[i];
    }

const promedio = total / precios.length;

document.querySelector("#resultado").innerHTML = `
<h2>📊 Informe de tu compra</h2>
        <p><strong>Cantidad de libros:</strong> ${precios.length}</p>
        <p><strong>Total gastado:</strong> $${total.toLocaleString('es-ES')}</p>
        <p><strong>Libro más caro:</strong> $${max.toLocaleString('es-ES')}</p>
        <p><strong>Libro más barato:</strong> $${min.toLocaleString('es-ES')}</p>
        <p><strong>Precio promedio por libro:</strong> $${promedio.toFixed(2)}</p>
    `;
}); 