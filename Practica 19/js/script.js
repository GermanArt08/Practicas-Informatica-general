let titulos = document.querySelectorAll('h1, h2, h3');
titulos.forEach(function(titulo) {
    titulo.addEventListener('click', function(e) {
        titulo.style.color = "red"
    });
});
let logo = document.querySelector('header img');
logo.addEventListener("click", function(e) {
    logo.style.color = "red"
});
let texto = document.querySelectorAll('main p');
texto.forEach(function(p) {
    p.addEventListener("click", function(e) {
        p.style.color = "red"
    });
});
let imagen = document.querySelector( "img");
imagen.addEventListener("click", function(e) {
    imagen.style.display = "none"
});
let lista = document.querySelectorAll("ul li");
lista.forEach(function(li) {
    li.addEventListener("click", function(e) {
        li.style.color = "red"
    });
});