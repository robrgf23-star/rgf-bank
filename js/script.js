// Mostrar mensaje al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  alert("✅ JS actualizado: Bienvenido a RGF BANK");

  // Cambiar el color de fondo del header automáticamente
  const header = document.querySelector("header");
  if (header) {
    header.style.backgroundColor = "#004aad"; // azul corporativo
    header.style.color = "white";
  }

  // Efecto en los links del menú
  const links = document.querySelectorAll("nav ul li a");
  links.forEach(link => {
    link.addEventListener("mouseover", () => {
      link.style.color = "orange";
    });
    link.addEventListener("mouseout", () => {
      link.style.color = "white";
    });
  });
});
