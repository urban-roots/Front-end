// Parámetros del link (query)
const params = new URLSearchParams(window.location.search);

// Array con los artículos
const articulos = [
    {
        id: 1,
        titulo: "The Carnival and its roots: Between the Ritual, the transgression and the memories",
        autor: "Jairo Severo",
        cuerpo: `
            <p>Talking about the Uruguayan carnival means you have to go back in time, far beyond the stages of the Teatro de Verano or the llamadas in the Barrio Sur neighborhood. Carnival was not born in Uruguay or in any specific corner of America. It came from outside, with centuries of history behind it. Understanding its true origin, what human need it came to fulfill, and why it survived so many attempts to stop it is the first step to understanding why it remains the country's greatest popular celebration today.</p>

            <h2>A Ritual That Comes From Rome</h2>

            <p>The origins of carnival are not Christian, even though the Church was a key figure in shaping its form and its place in the calendar. According to a document from Escuela 11 de Melo, recovered by the UNAM, carnival comes from the "festa calendarum", a Roman celebration with roots in the Greek bacchanals: a festival marked by excess, disguise, and the overturning of social hierarchies. Milita Alfaro, in her book "Carnaval. Una historia social de Montevideo desde la perspectiva de la fiesta", points out that Christmas gradually displaced the calends festivities, but that was only a change of date, not of substance. The celebration moved to the three days before Ash Wednesday, took the name carnelevare ("farewell to the flesh"), and carried on without exception, repeating itself every year with a force that no one could stop.</p>

            <p>The carnival was not born as a festival of simple joy or innocent entertainment. It was born as a ritual of inversion: a bounded time in which the world was turned upside down. The powerful were ridiculed, those without a voice reclaimed a place that everyday life denied them, and the differences of class, gender, and race were erased for a moment beneath the mask. It is no coincidence that the god of carnival is Momo, a Greek mythological figure of sarcasm and mockery, depicted with a mask and a grotesque puppet head, symbol of madness: the god of telling truth to power while laughing at it. Alfaro describes it as a "ritual of disorder" implying "pulsional liberation, inversion of the world, immemorial support of subversive languages and behaviors at odds with moderation and established order". <strong>It was the only moment of the year in which the people could speak the truth without anyone having the right to complain,</strong> which made it uncomfortable for those in power, who regulated and curtailed it, but never managed to eliminate it entirely.</p>

            <p>It arrived in Montevideo during the Colonial period, brought by Spain, which had in turn received it from Rome. The first inhabitants imitated customs from the medieval European carnival, such as throwing emptied eggs filled with water. The Montevideo of the early nineteenth century lived what Alfaro calls the "heroic" or "barbarian carnival": an unorganized, massive, and spontaneous celebration, marked by the violence of the game and by a mixing of classes and races that was not seen the rest of the year. A chronicler from "La Matraca" described it in 1832: "The idle, the dandy, the elegant lady, the little shopkeeper, the servants, the masters, even the opposition, all seek masks and find entertainment… Over here the police; over there the Blacks with tango". The quote shows that the colonial carnival was already a space of encounter between classes and races separated in everyday life, and that the tension between order and popular celebration was born alongside it.</p>

            <h2>African Roots and Candombe</h2>

            <p>One of the most important roots of the Uruguayan carnival is that of the enslaved African population. The UNAM document specifies that during the Colonial period, "the enslaved Black Montevideans covered themselves in brightly colored tunics and took to the streets toward the city walls, at the foot of which they were permitted to sing their chants and perform their dances": one of the few spaces the colonial regime allowed for the expression of their own culture.</p>

            <p>Candombe has a religious and ceremonial character that goes beyond entertainment: its drums fulfill a function within a rhythmic language of African origin, and its characters (the Gramillero, the Mamá Vieja, the Escobero) refer to African ancestors and their roles within the community. <strong>The first Black comparsas appear in 1832; the first formally recognized was "Raza Africana", in 1865, twenty years before the abolition.</strong> Alfaro records that its members already used carnival to speak about the discrimination that still weighed on them, with lyrics that dreamed of an upside-down world. It is hard to find a clearer expression of the original spirit of carnival: the celebration as a space where the unjust everyday order is called into question, if only for a few days.</p>

            <h2>Murga: From Cádiz to the Tablados</h2>

            <p>If carnival has Roman and African roots, murga, today's most popular genre of Uruguayan carnival, has its most direct origin in Spain. As stated in the Plataforma Ceibal material by Ana Laura Cruz, "the murguera expression had its cradle in Spain, drawing inspiration from the chirigotas of the Carnival of Cádiz". <strong>The first murga in Uruguay was La Gaditana que se va, in 1908,</strong> part of the repertoire of the Compañía de Zarzuelas directed by Diego Muñoz; its name was a nod to its origin: it came from Cádiz and was leaving, but it left something behind. Its success was immediate: by 1910 there were already seven murgas registered to participate in the competition.</p>

            <p>But the Uruguayan murga is not a copy of the Cádiz chirigotas: it took from them the basic structure (the choir, the critical and playful lyrics, the makeup), but kept adding its own elements. As Ceibal points out, in the "marcha camión", rhythms of the African-origin candombe can be identified. The Uruguayan murga is, in that sense, a blend: Spanish in its structure, African in its rhythm, and deeply Rioplatense in its content.</p>

            <figure>
            <img src="img/carnaval-1.webp" alt="The murga Doña Bastarda performing at a tablado in Montevideo" />
            <figcaption>
                The murga Doña Bastarda performing at a tablado in Montevideo.
                <cite>Photo: Ignacio Sánchez</cite>
            </figcaption>
            </figure>

            <p>Throughout all of this history, one thing remains the same: carnival has always been a space for criticism and resistance, from the Romans who mocked their senators to the murgas of today that each year dismantle current political affairs with sharp cuplés. The elites of every period tried to control it without ever being able to stop it entirely: the first Bando de Carnaval of Montevideo dates from 1799, and since then, as Alfaro documents, the history of the celebration is also the history of a permanent tension between the people who give themselves the celebration and the authorities who seek to give it to them on their own terms. By the end of the nineteenth century, that process ended in the transformation of the "barbarian carnival" into the "civilized carnival" of orderly parades and neighborhood tablados: what was gained in organization and spectacle was lost in direct participation. Even so, even in its most institutional form, Uruguayan carnival retains something of that original impulse.</p>

            <p>Today's carnival retains the shape of the ritual that saw it born, but the society that sustains it is no longer the same: more fragmented, more focused on which political side each murga sings from than on the simple fact that it sings. <strong>Carnival remains, at its core, the way a society looks at itself with a costume on and allows itself to say what it thinks,</strong> only adding that today saying it also means specifying from where.</p>

            <figure>
            <img src="img/carnaval-2.webp" alt="Murga Cayo la Cabra at the inaugural Carnival 2018 parade on Av. 18 de Julio in Montevideo" />
            <figcaption>
                Murga Cayo la Cabra at the inaugural Carnival 2018 parade on Av. 18 de Julio in Montevideo.
                <cite>Photo: Marcelo Bonjour</cite>
            </figcaption>
            </figure>
        `,
        sobreElAutor: "Jairo is an Ánima student. He grew between screens and speakers, and found in the urban uruguayan music the same spirit that takes him to build things from zero: taking something from outside and making it his own.",
    },
    {
        id: 2,
        titulo: "El Cuarteto de Nos: A Unique Band of Uruguayan Music History",
        autor: "Gonzalo Gomez",
        cuerpo: `<p>When people talk about Uruguayan music, there is one band that always appears in the conversation: El Cuarteto de Nos. What started as a group of friends with crazy ideas, strange humor, and a desire to do something different became one of the most important bands in Uruguay and Latin America. Their story has many changes, challenges, and hard work, but they always kept something special: songs that mix humor, criticism, and thoughts about life.</p>
        <p>The story started in the early 1980s in Montevideo, Uruguay. Brothers Roberto and Ricardo Musso spent many hours creating characters and stories in an imaginary city called "Tajo". Later, those ideas became songs. Together with Santiago Tavella and later Álvaro Pintos, they formed the band.</p>        
        <p>At first, they played cover songs from bands like The Beatles, Led Zeppelin, and The Rolling Stones. Little by little, they started playing their own songs. These songs were full of strange characters, funny situations, and absurd humor. While many bands wanted to sound serious, El Cuarteto de Nos chose a different path.</p>
        <p>During the 1980s and early 1990s, they became more popular in Uruguay. Their original lyrics and unusual style attracted many fans. In 1994, they released the album "Otra Navidad en las Trincheras". This album became a huge success and helped the band reach a new level of popularity in Uruguay.</p>
        <p>After many successful years, the band changed its style again. In 2004, they started working with producer Juan Campodónico. This collaboration led to the album "Raro", released in 2006. The album was a very important moment in their career. The songs still had humor and irony, but the lyrics became deeper and more personal. Songs like "Ya No Sé Qué Hacer Conmigo" helped the band become famous in Argentina, Mexico, Colombia, and many other countries.</p> 
        <p>After that, they released albums such as "Bipolar", "Porfiado", "Habla Tu Espejo", "Apocalipsis Zombi", "Jueves", and "Lámina Once". With every new album, they gained more fans and strengthened their place in Latin rock music. In 2012, the band won two Latin Grammy Awards thanks to the album "Porfiado" and the song "Cuando Sea Grande". This was one of the most important achievements of their career.</p> 
        <p>Today, their songs talk about mental health, fears, relationships, technology, and everyday problems. Because of this, both young and older people can connect with their music. They continue performing in theaters and stadiums across many countries.</p>  
        <p>The story of El Cuarteto de Nos shows that you do not need to follow the rules to be successful. They started as a group of friends making strange and funny songs and became one of the most respected bands in Spanish-speaking rock. With creativity, humor, and lyrics that make people think, they have remained popular for more than forty years and continue to represent Uruguay around the world.</p>
        
        <p><strong>Source :</strong></p>
        <p>https://cuartetodenos.com.uy/bio/
        <p>https://es.rollingstone.com/la-historia-de-el-cuarteto-de-nos-del-grupo-de-culto-para-universitarios-a-la-proyeccion-global-en-clave-hip-hop-arg/
        <p>https://www.laorillainfinita.com/el-cuarteto-de-nos
        <p>https://www.subrayado.com.uy/el-origen-del-cuarteto-nos-los-ganadores-del-grammy-2012-n18532</p>          
        `,
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