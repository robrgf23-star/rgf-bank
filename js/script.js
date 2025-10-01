// Confirmación de que el JS está activo
document.addEventListener("DOMContentLoaded", () => {
  console.log(" RGF BANK cargado correctamente en RGF BANK");

  // Cambiar color del header dinámicamente
  const header = document.querySelector("header");
  header.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";

  // Agregar interacción: al hacer clic en el logo, mostrar alerta
  const logo = document.querySelector(".logo");
  logo.addEventListener("click", () => {
    alert("Bienvenido a RGF BANK 🏦");
  });

  // Menú responsive toggle
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.querySelector(".nav ul");
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});
