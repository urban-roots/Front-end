const heroImages = 4;
let currentHeroImg = 0;

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
  /**
   * Hero Section
  */

  // Cambiar de imagen cada 30 segundos
  setInterval(updateHeroImage, 30000);

  /**
   * Clima
   */
  cargarClima();
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
