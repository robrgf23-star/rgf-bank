// script.js - VERSIÓN MEJORADA

document.addEventListener("DOMContentLoaded", () => {
    console.log("RGF BANK - JS Activo: Navbar a la derecha. (Mejorado)");

    const nav = document.querySelector(".nav");
    const menuToggle = document.getElementById("menu-toggle");
    const dropdowns = document.querySelectorAll(".dropdown");
    const mediaQueryBreakpoint = 900; // Debe coincidir con el @media del CSS

    // Lógica para el botón de login (ejemplo)
    document.querySelector('.btn-login').addEventListener('click', () => {
        alert('Redirigiendo a la plataforma de Acceso Clientes...');
    });

    /**
     * Función unificada para cerrar el menú y limpiar estados
     */
    const closeMobileMenu = () => {
        if (nav.classList.contains("active")) {
            nav.classList.remove("active");
            menuToggle.textContent = '☰'; 
            // Cierra todos los submenús
            dropdowns.forEach(d => d.classList.remove('active')); 
        }
    };
    
    /**
     * Maneja el estado de los submenús (Solo en móvil)
     */
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        
        link.addEventListener("click", (e) => {
            if (window.innerWidth <= mediaQueryBreakpoint) { 
                e.preventDefault(); 
                
                // Cierra otros submenús (UX mejorada)
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

    // 1. Menú Responsive Toggle (Abre/Cierra el menú principal)
    menuToggle.addEventListener("click", () => {
        if (nav.classList.contains("active")) {
            // Si ya está abierto, lo cerramos
            closeMobileMenu();
        } else {
            // Si está cerrado, lo abrimos
            nav.classList.add("active");
            menuToggle.textContent = '✖'; 
        }
    });

    // 2. Cerrar el menú principal al seleccionar un enlace (en móvil)
    document.querySelectorAll(".nav a").forEach(link => {
        link.addEventListener("click", () => {
            // Usamos un pequeño delay para que la transición de cierre sea visible
            if (window.innerWidth <= mediaQueryBreakpoint) { 
                setTimeout(closeMobileMenu, 100); 
            }
        });
    });
    
    // 3. (MEJORA) Ocultar el menú móvil si la ventana se redimensiona a desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > mediaQueryBreakpoint) {
            // Llama a la función unificada de cierre si estamos en desktop
            closeMobileMenu();
        }
    });
});