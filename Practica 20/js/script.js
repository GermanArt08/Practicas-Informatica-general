// script.js - JavaScript básico para principiantes

document.addEventListener('DOMContentLoaded', function() {

    // 1. Cambiar el color del título al hacer clic
    const titulo = document.querySelector('h1');
    if (titulo) {
        titulo.addEventListener('click', function() {
            this.style.color = this.style.color === 'rgb(96, 165, 250)' 
                ? '#facc15' 
                : '#60a5fa';
        });
    }

    // 2. Efecto suave al pasar el mouse por los enlaces del menú
    const enlaces = document.querySelectorAll('nav a');
    enlaces.forEach(enlace => {
        enlace.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        enlace.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // 3. Mensaje de bienvenida (solo en la página de inicio)
    if (window.location.pathname.endsWith('index.html') || 
        window.location.pathname.endsWith('/')) {
        
        console.log("%c¡Bienvenido a la página sobre Bonn! 🌍", 
            "color: #60a5fa; font-size: 16px; font-weight: bold;");
    }

    // 4. Botón "Volver arriba" (opcional - puedes agregarlo al HTML)
});

// Función para volver arriba (puedes usarla después)
function volverArriba() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}