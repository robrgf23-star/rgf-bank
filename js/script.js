// script.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("RGF BANK - JS Activo: Diseño Innovador.");

    const nav = document.querySelector(".nav");
    const menuToggle = document.getElementById("menu-toggle");
    const dropdowns = document.querySelectorAll(".dropdown");

    // 1. Menú Responsive Toggle (Abre/Cierra el menú principal)
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
        menuToggle.textContent = nav.classList.contains('active') ? '✖' : '☰'; 
    });

    // 2. Manejo de Submenús en Móvil (Alternar al hacer clic)
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        
        link.addEventListener("click", (e) => {
            // Se comprueba si la ventana es móvil (debe coincidir con el 900px de CSS)
            if (window.innerWidth <= 900) { 
                e.preventDefault(); 
                
                // Cierra otros submenús
                dropdowns.forEach(d => {
                    if (d !== dropdown) {
                        d.classList.remove('active');
                    }
                });

                // Alterna el submenú actual
                dropdown.classList.toggle("active"); 
            }
        });
    });

    // 3. Cerrar menú móvil al seleccionar un enlace
    document.querySelectorAll(".nav a").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 900 && nav.classList.contains("active")) {
                setTimeout(() => {
                    nav.classList.remove("active");
                    menuToggle.textContent = '☰'; 
                    dropdowns.forEach(d => d.classList.remove('active')); // Cierra submenús
                }, 100); 
            }
        });
    });

    // 4. Placeholder para la funcionalidad de Login
    document.querySelector('.btn-login').addEventListener('click', () => {
        alert('Redirigiendo a la plataforma de Acceso Clientes...');
    });
});