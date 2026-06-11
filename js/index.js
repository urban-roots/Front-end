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
  // Clima
  cargarClima();

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

  /**
   * Formulario Newsletter
   */
  function showAlert(message, type) {
    const alerta = document.getElementById("alertaNewsletter");

    alerta.className = `alert alert-${type} mb-3`;
    alerta.textContent = message;
    alerta.style.display = "block";
  }

  const formNewsletter = document.getElementById("formNewsletter");

  formNewsletter.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = formNewsletter.subNombre.value.trim();
    const email = formNewsletter.subEmail.value.trim();

    if (!name || !email) {
      showAlert(
        "Completá el formulario con tu nombre y email para suscribirte.",
        "danger",
      );
      return;
    }

    showAlert(
      "¡Suscripción confirmada! Bienvenido/a a Urban Roots.",
      "success",
    );
    formNewsletter.reset();
  });

  /**
   * Dropdown de temas
   */
  const dropdownTema = document.getElementById("dropdownTema");
  const temaLabels = {
    "mural-dark": "Mural Urbano (Oscuro)",
    "mural-light": "Mural Urbano (Claro)",
    "crepusculo-dark": "Crepúsculo Rioplatense (Oscuro)",
    "crepusculo-light": "Crepúsculo Rioplatense (Claro)",
  };

  //  Mostrar el tema activo en el botón del dropdown
  const temaActual = localStorage.getItem("tema");
  if (temaActual && temaLabels[temaActual]) {
    dropdownTema.textContent = temaLabels[temaActual];
  }

  document.querySelectorAll("[data-tema]").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const tema = e.target.dataset.tema;
      localStorage.setItem("tema", tema);
      location.reload();
    });
  });
});

//  API Clima - Open Meteo
function emojiClima(code) {
  if (code === 0) return "☀️";
  if (code <= 3) return "⛅";
  if (code <= 48) return "☁️";
  if (code <= 67) return "🌧";
  if (code <= 77) return "❄️";
  if (code <= 82) return "🌦";
  return "⚡";
}

async function cargarClima() {
  const clima = document.querySelector("#clima");
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast" +
      "?latitude=-34.9&longitude=-56.17&current_weather=true",
    );
    if (!response.ok) throw new Error("Error al obtener el clima");
    const datos = await response.json();
    const temp = datos.current_weather.temperature;
    const viento = datos.current_weather.windspeed;
    const emoji = emojiClima(datos.current_weather.weathercode);
    clima.innerHTML = `
      <p class="mb-0">
        Montevideo: <strong>${temp}°C</strong>
        &nbsp;|&nbsp;
        ${emoji}
        &nbsp;|&nbsp;
        Viento: <strong>${viento} km/h</strong>
      </p>
    `;
  } catch (error) {
    clima.innerHTML = `<p class="mb-0">Clima no disponible.</p>`;
    console.error(error);
  }
}
