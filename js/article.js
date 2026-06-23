const API_URL = 'http://localhost:3000';

async function loadArticle() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    if (!id) {
        showError('No se especificó un artículo.');
        return;
    }

    try {
        const res = await fetch(`${API_URL}/articulos/${id}`);

        if (res.status === 404) {
            showError('Artículo no encontrado.');
            return;
        }

        const articulo = await res.json();

        document.getElementById('article-titulo').textContent = articulo.titulo;
        document.getElementById('article-autor').textContent = `Por ${articulo.autor}`;
        document.getElementById('article-cuerpo').innerHTML = articulo.cuerpo;
        document.getElementById('sobre-el-autor').textContent = articulo.sobreElAutor;
        document.querySelector('.article-banner').style.backgroundImage = `url('./img/articulo-${id}.png')`;


    } catch (error) {
        showError('Error al cargar el artículo.');
    }
}

function showError(mensaje) {
    document.getElementById('article-cuerpo').innerHTML = `<p>${mensaje}</p>`;
}

document.addEventListener('DOMContentLoaded', () => {
    loadArticle();
});