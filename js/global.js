// Lista de temas
const themeNames = [
    "mural-dark",
    "mural-light",
    "crepusculo-dark",
    "crepusculo-light",
];

// Al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    /**
     * Tema de colores de la página
     */

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
     * Footer
     */

    // Mostrar alerta de datos incompletos
    function showAlert(message, type) {
        const alerta = document.getElementById("alertaNewsletter");

        alerta.className = `alert alert-${type} mb-3`;
        alerta.textContent = message;
        alerta.style.display = "block";
    }

    // Seleccionar formulario
    const formNewsletter = document.getElementById("formNewsletter");

    // Escuchar para el botón de envío de newsletters
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

    // Obtener el dropdown de los temas del footer
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

    // Para cada item, agregar un evento de click para configurar el tema.
    document.querySelectorAll("[data-tema]").forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const tema = e.target.dataset.tema;
            localStorage.setItem("tema", tema);
            location.reload();
        });
    });
});

// Función auxiliar para mostrar un error en el artículo
function showError(mensaje) {
    document.getElementById('article-cuerpo').innerHTML = `<p><strong>${mensaje}</strong></p>`;
}