document.querySelector("#calcular").addEventListener("click", calcular);

function calcular() {
let a1 = document.querySelector("#cantidad1").value;
let a2 = document.querySelector("#cantidad2").value;
let a3 = document.querySelector("#cantidad3").value;
let a4 = document.querySelector("#cantidad4").value;
let a5 = document.querySelector("#cantidad5").value;

let cuantasFaltan1 = 80-a1;
let cuantasFaltan2 = 80-a2;
let cuantasFaltan3 = 80-a3;
let cuantasFaltan4 = 80-a4;
let cuantasFaltan5 = 80-a5;

console.log("La cantidad máxima es: " + (max = Math.max(a1, a2, a3, a4, a5)));
console.log("La cantidad mínima es: " + (min = Math.min(a1, a2, a3, a4, a5)));
console.log("Se necesitan " + (cuantasFaltan1 + cuantasFaltan2 + cuantasFaltan3 + cuantasFaltan4 + cuantasFaltan5) + " unidades para que cada aulta tenga 80 pupitres.")
}