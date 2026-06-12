# Guía de sintaxis para artículos — Urban Roots

Los artículos se escriben en HTML y se inyectan en el div `#article-cuerpo` de `articulo.html`.
Esta guía define las etiquetas disponibles y cómo usarlas correctamente.

---

## Etiquetas disponibles

### `<p>` — Párrafo

El bloque básico del artículo. Todo el texto narrativo va dentro de un `<p>`.

```html
<p>El candombe llegó a América con los africanos esclavizados y sobrevivió como resistencia cultural.</p>
```

---

### `<h2>` — Título de sección

Se usa para marcar un cambio de tema importante dentro del artículo. No abuses: un `<h2>` cada varios párrafos, no uno por párrafo.

```html
<h2>El candombe: memoria que se toca</h2>
```

---

### `<h3>` — Subtítulo de sección

Se usa dentro de una sección `<h2>` cuando hay suficiente contenido como para subdividirlo. Si el artículo es corto, probablemente no lo necesites.

```html
<h3>Los tres tambores</h3>
```

---

### `<strong>` — Énfasis

Para resaltar datos o frases clave dentro de un párrafo. No lo uses para decorar, solo cuando el dato realmente merece destacarse.

```html
<p>Lo que empezó como resistencia cultural se transformó en identidad colectiva.
<strong>En 2009, la UNESCO declaró el candombe Patrimonio Cultural Inmaterial de la Humanidad.</strong></p>
```

---

### `<figure>` + `<figcaption>` + `<cite>` — Imagen con pie

Toda imagen dentro del artículo va envuelta en un `<figure>`. El `<figcaption>` lleva la descripción de la imagen y el `<cite>` la fuente.

```html
<figure>
  <img src="img/nombre-imagen.jpg" alt="Descripción breve de la imagen" />
  <figcaption>
    Descripción más detallada de lo que muestra la imagen.
    <cite>Fuente: Nombre de la fuente</cite>
  </figcaption>
</figure>
```

---

### Fuentes bibliográficas

Van al final del artículo como un único `<p>`, separadas por `·`.

```html
<p><strong>Fuentes:</strong> Museo del Carnaval de Montevideo (museodelcarnaval.org) · Wikipedia, Murga en Uruguay · División Cultura IDM (2015)</p>
```

---

## Ejemplo completo

```html
<p>El carnaval uruguayo no nació de una sola fuente. Es el resultado de siglos de mezcla,
resistencia y reinvención.</p>

<h2>El candombe: memoria que se toca</h2>

<p>El candombe es originario de la actual Angola. Llegó a América en los barcos negreros.
<strong>En 2009, la UNESCO lo declaró Patrimonio Cultural Inmaterial de la Humanidad.</strong></p>

<figure>
  <img src="img/candombe.jpg" alt="Cuerda de tambores en el barrio Palermo" />
  <figcaption>
    Cuerda de tambores en el barrio Palermo.
    <cite>Fuente: Intendencia de Montevideo</cite>
  </figcaption>
</figure>

<p>Tres tambores forman su base: el chico, el piano y el repique.</p>

<p><strong>Fuentes:</strong> Museo del Carnaval de Montevideo · Wikipedia, Candombe</p>
```

---

## Reglas generales

- **No uses `<br>` para separar párrafos**, cada párrafo va en su propio `<p>`.
- **No uses `<b>` ni `<i>`**, usá `<strong>` para énfasis.
- **El `alt` de las imágenes es obligatorio**, describe brevemente lo que muestra.
- **Siempre citá la fuente de las imágenes** dentro del `<cite>`.
- **Máximo 2 o 3 imágenes por artículo**, salvo excepciones justificadas.
