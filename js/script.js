// script.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("RGF BANK cargado correctamente. Funcionalidad JS activa.");

    const header = document.querySelector("header");
    const navUl = document.querySelector(".nav ul");
    const menuToggle = document.getElementById("menu-toggle");
    const dropdownLinks = document.querySelectorAll(".dropdown > a");

    // Sombra del Header y Alerta del Logo
    header.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)"; 
    document.querySelector(".logo").addEventListener("click", () => {
        alert("Bienvenido a RGF BANK 🏦");
    });

    // 1. Menú Responsive Toggle (Alterna el menú principal)
    menuToggle.addEventListener("click", () => {
        // CORRECCIÓN: Usamos toggle para alternar la clase "active"
        navUl.classList.toggle("active");
        
        // Opcional: Cambiar el ícono de "☰" a "✖"
        menuToggle.textContent = navUl.classList.contains('active') ? '✖' : '☰'; 
    });

    // 2. Manejo de Submenús en Móvil (Alternar al hacer clic)
    dropdownLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            // Se comprueba si la ventana es móvil (debe coincidir con el 900px de CSS)
            if (window.innerWidth <= 900) { 
                e.preventDefault(); // Detiene la navegación (crucial en móvil)
                
                const parentLi = link.parentElement; 
                
                // Cierra otros submenús abiertos para evitar solapamiento
                document.querySelectorAll('.dropdown').forEach(dropdown => {
                    if (dropdown !== parentLi && dropdown.classList.contains('active')) {
                        dropdown.classList.remove('active');
                    }
                });

                // Alterna la clase 'active' para mostrar/ocultar el submenú
                parentLi.classList.toggle("active"); 
            }
            // En desktop, no se previene el default, dejando que CSS maneje el hover.
        });
    });

    // 3. Cerrar el menú principal al hacer clic en un enlace (en móvil)
    document.querySelectorAll(".nav ul a").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 900 && navUl.classList.contains("active")) {
                // Pequeño retraso para permitir la animación o la navegación
                setTimeout(() => {
                    navUl.classList.remove("active");
                    menuToggle.textContent = '☰'; // Restaura el ícono
                    
                    // Cierra todos los submenús al cerrar el menú principal
                    document.querySelectorAll('.dropdown').forEach(dropdown => {
                        dropdown.classList.remove('active');
                    });
                }, 100); 
            }
        });
    });
});