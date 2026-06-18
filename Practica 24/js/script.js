let boton =document.querySelector('#rollButton')
let resultado = document.querySelector('#result')

boton.addEventListener('click', () => {
    let azar = Math.floor((Math.random() * 6) + 1);
    resultado.innerText = 'Has sacado un ' + azar;
});
