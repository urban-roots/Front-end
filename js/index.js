const themeNames = [
  "mural-dark",
  "mural-light",
  "crepusculo-dark",
  "crepusculo-light",
];
const heroImages = 4;
let currentHeroImg = 0;

function setupTema() {
  // Conseguir último tema guardado del usuario
  const tema = localStorage.getItem("tema");

  // Si tiene uno y es válido, usar ese
  if (tema && themeNames.includes(tema)) {
    document.body.setAttribute("data-theme", tema);

    // Si no, seleccionar Mural Urbano en modo oscuro como predeterminado
  } else {
    document.body.setAttribute("data-theme", "mural-dark");
    localStorage.setItem("tema", "mural-dark");
  }
}

function updateHeroImage() {
  // Cambiar la imagen del hero section
  let image = document.getElementById("heroImg");

  // Desvanecer la imagen
  image.style.filter = "brightness(0)";

  // Esperar la transición
  setTimeout(() => {
    // Cambiar y mostrar la imagen
    image.setAttribute("src", `../img/carrousel-${currentHeroImg}.png`);
    image.style.filter = "brightness(1)";
  }, 700);

  // Agregar 1 al índice de imágenes y si nos pasamos, resetear el contador
  currentHeroImg++;
  if (currentHeroImg >= heroImages) currentHeroImg = 0;
}

document.addEventListener("DOMContentLoaded", () => {
  // Configurar tema de colores en la página
  setupTema();

  /**
   * Header
   */
  const menu = document.getElementById("menu");

  // Cerrar menú al seleccionar una opción en tablet
  menu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  /**
   * Hero Section
   */

  // Cambiar de imagen cada 30 segundos
  setInterval(updateHeroImage, 30000);
});