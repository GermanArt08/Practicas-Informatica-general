const nombre= document.querySelector("#nombre");
const dias= document.querySelector("#dias");
const cantProyector= document.querySelector("#cantProyector");
const cantComputadora= document.querySelector("#cantComputadora");
const cantPantalla= document.querySelector("#cantPantalla");
const boton= document.querySelector("#boton");
const resultado= document.querySelector("#resultado");
 
boton.addEventListener("click",(e)=>{
    const diasValor = Number(dias.value);
    const ProyectorValor = Number(cantProyector.value);
    const ComputadoraValor = Number(cantComputadora.value);
    const PantallaValor = Number(cantPantalla.value);


    const totalProyector = ProyectorValor * 45000 * diasValor;
    const totalComputadora = ComputadoraValor * 50000 * diasValor;
    const totalPantalla = PantallaValor * 35000 * diasValor;

   let suma = totalProyector + totalComputadora + totalPantalla;

    if(suma >=500000){
        suma = suma * 0.1;
    }
    resultado.textContent = "El total a pagar por " + nombre.value + " es: " + suma;
});