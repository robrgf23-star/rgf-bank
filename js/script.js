// script.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("RGF BANK - JS Activo: Navbar a la derecha.");

    const nav = document.querySelector(".nav");
    const menuToggle = document.getElementById("menu-toggle");
    const dropdowns = document.querySelectorAll(".dropdown");

    // Lógica para el botón de login (ejemplo)
    document.querySelector('.btn-login').addEventListener('click', () => {
        alert('Redirigiendo a la plataforma de Acceso Clientes...');
    });

    // 1. Menú Responsive Toggle (Abre/Cierra el menú principal)
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
        // Opcional: Cambiar el ícono
        menuToggle.textContent = nav.classList.contains('active') ? '✖' : '☰'; 
    });

    // 2. Manejo de Submenús en Móvil (Alternar al hacer clic)
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        
        link.addEventListener("click", (e) => {
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
                    dropdowns.forEach(d => d.classList.remove('active')); 
                }, 100); 
            }
        });
    });
});