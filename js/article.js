// URL de la API. Corre en el puerto 3000 por defecto.
const API_URL = 'http://localhost:3000';

async function loadArticle() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    // Si no pusieron un ID en el link, mostrar error
    if (!id) {
        showError('No se especificó un artículo.');
        return;
    }

    try {
        // Pedir los datos del artículo buscado en el backend
        const res = await fetch(`${API_URL}/articulos/${id}`);

        // Si no lo encuentra, mostrar error
        if (res.status === 404) {
            showError('Artículo no encontrado.');
            return;
        }

        // JSON del artículo que busca 
        const articulo = await res.json();

        // Cambiar datos de la página del artículo
        document.title = "Urban Roots - " + articulo.titulo;
        document.getElementById('article-titulo').textContent = articulo.titulo;
        document.getElementById('article-autor').textContent = `Por ${articulo.autor}`;
        document.getElementById('article-cuerpo').innerHTML = articulo.cuerpo;
        document.getElementById('sobre-el-autor').textContent = articulo.sobreElAutor;
        document.querySelector('.article-banner').style.backgroundImage = `url('./img/articulo-${id}.png')`;


    } catch (error) {
        // Si hubo algún error, mostrarlo en la consola de la página junto a una advertencia
        console.log(error);
        console.log('Asegúrate que el backend esté prendido y corriendo en el puerto 3000');

        // Mostrar error en el cuerpo del artículo
        showError('Error al cargar el artículo.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadArticle();
});