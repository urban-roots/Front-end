// Parámetros del link (query)
const params = new URLSearchParams(window.location.search);

// Array con los artículos
const articulos = [
    {
        id: 1,
        titulo: "The Carnival and its roots: Between the Ritual, the transgression and the memories",
        autor: "Jairo Severo",
        cuerpo: ``,
        sobreElAutor: "Jairo is an Ánima student. He grew between screens and speakers, and found in the urban uruguayan music the same spirit that takes him to build things from zero: taking something from outside and making it his own.",
    },
    {
        id: 2,
        titulo: "The History of Uruguayan Rock: Its origins, identity and consolidation",
        autor: "Gonzalo Gomez",
        cuerpo: ``,
        sobreElAutor: "I'm Gonzalo, an Ánima sturdent. I like working on projects and every challenge that comes my way, because it's never late to continue learning",
    },
    {
        id: 3,
        titulo: "The first verses: The beginning of Rap in our country",
        autor: "Federico Gutierrez",
        cuerpo: ``,
        sobreElAutor: "I'm Federico Gutiérrez, a 20 year old Ánima student. I like urban art and learning about the culture of my country.",
    },
    {
        id: 4,
        titulo: "The emigrant heartbeat: How plena took roots in the Uruguayan Soul",
        autor: "Nicole Silva",
        cuerpo: ``,
        sobreElAutor: "Soy Nicole Silva, estudiante de Ánima y amante de la música. Disfruto descubrir nuevos ritmos y conocer las historias que hay detrás de cada expresión artística, ya que la música me permite conectar con mis emociones. Al realizar este artículo sobre la plena, pude profundizar en un género que me llena de energía, me hace bailar y me permitió comprender cómo una manifestación cultural puede transformarse y formar parte de la identidad de un país.",
    },
];

// Función para cargar datos al artículo
async function loadEnglishArticle() {
    // Buscar el ?id={número} en la URL
    const id = params.get('id');

    // Si no lo encuentra, mostrar error
    if (!id) {
        showError('No se especificó un artículo.');
        return;
    }

    // Buscar el index del artículo con el parámetro ID (id={número})
    // .findIndex() devuelve el valor del índice en el array o -1.
    const idIndex = articulos.findIndex((a) => a.id === Number(id));

    // Si no lo encuentra, mostrar error
    if (idIndex === -1) {
        showError('Artículo no encontrado.');
        return;
    }

    // Extraer artículo del array
    const articulo = articulos[idIndex];

    // Configurar datos del artículo (título, cuerpo, autor, sobre el autor)
    document.title = "Urban Roots - " + articulo.titulo;
    document.getElementById('article-titulo').textContent = articulo.titulo;
    document.getElementById('article-autor').textContent = `By ${articulo.autor}`;
    document.getElementById('article-cuerpo').innerHTML = articulo.cuerpo;
    document.getElementById('sobre-el-autor').textContent = articulo.sobreElAutor;
    document.querySelector('.article-banner').style.backgroundImage = `url('./img/articulo-${id}.png')`;
}

// Cuando carga la página, ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    loadEnglishArticle();
});