// script.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("RGF BANK cargado correctamente. Funcionalidad JS activa.");

    // Configuración del Header y Logo
    const header = document.querySelector("header");
    // Añade una sombra sutil al cargar la página
    header.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)"; 
    
    const logo = document.querySelector(".logo");
    logo.addEventListener("click", () => {
        alert("Bienvenido a RGF BANK 🏦");
    });

    // 1. Menú Responsive Toggle (Abre/Cierra el menú principal)
    const menuToggle = document.getElementById("menu-toggle");
    const navUl = document.querySelector(".nav ul");
    menuToggle.addEventListener("click", () => {
        navUl.classList.toggle("active");
    });

    // 2. Manejo de Submenús en Móvil (Alternar al hacer clic)
    const dropdownLinks = document.querySelectorAll(".dropdown > a");

    dropdownLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            // Verifica si estamos en un tamaño de pantalla móvil (debe coincidir con el CSS @media)
            if (window.innerWidth <= 900) { 
                e.preventDefault();
                
                const parentLi = link.parentElement; 
                
                // Cierra otros submenús abiertos, manteniendo solo el actual
                document.querySelectorAll('.dropdown').forEach(dropdown => {
                    if (dropdown !== parentLi) {
                        dropdown.classList.remove('active');
                    }
                });

                // Alternar la clase 'active' en el <li> para mostrar/ocultar el submenú
                parentLi.classList.toggle("active"); 
            }
            // En desktop (> 900px), el CSS :hover se encarga, y el enlace navega normalmente.
        });
    });

    // 3. Cerrar el menú principal al hacer clic en un enlace (en móvil)
    const navLinks = document.querySelectorAll(".nav ul a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 900 && navUl.classList.contains("active")) {
                // Pequeño retraso para permitir la navegación antes de cerrar el menú
                setTimeout(() => {
                    navUl.classList.remove("active");
                    // También cerrar cualquier submenú que estuviera abierto
                    document.querySelectorAll('.dropdown').forEach(dropdown => {
                        dropdown.classList.remove('active');
                    });
                }, 300); 
            }
        });
    });
});