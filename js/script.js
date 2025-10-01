// script.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("RGF BANK cargado. Funcionalidad JS activa.");

    const header = document.querySelector("header");
    // Seleccionamos .nav en lugar de .nav ul porque en el CSS la clase 'active' se aplica a .nav
    const nav = document.querySelector(".nav"); 
    const menuToggle = document.getElementById("menu-toggle");

    // Sombra del Header y Alerta del Logo
    header.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)"; 
    document.querySelector(".logo").addEventListener("click", () => {
        alert("Bienvenido a RGF BANK 🏦");
    });

    // 1. Menú Responsive Toggle (Alterna el menú principal)
    menuToggle.addEventListener("click", () => {
        // CORRECCIÓN: Usamos toggle en la clase 'nav' para la activación
        nav.classList.toggle("active");
        
        // Opcional: Cambiar el ícono de "☰" a "✖"
        menuToggle.textContent = nav.classList.contains('active') ? '✖' : '☰'; 
    });

    // 2. Cerrar el menú principal al hacer clic en un enlace (en móvil)
    document.querySelectorAll(".nav ul a").forEach(link => {
        link.addEventListener("click", () => {
            // Se comprueba si la ventana es móvil (debe coincidir con el 768px de CSS)
            if (window.innerWidth <= 768 && nav.classList.contains("active")) { 
                setTimeout(() => {
                    nav.classList.remove("active");
                    menuToggle.textContent = '☰'; // Restaura el ícono
                }, 100); 
            }
        });
    });
});