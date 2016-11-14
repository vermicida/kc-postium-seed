# angular2-test-directions

**Postium** es un _amago_ de clon de [Medium](https://medium.com/). Sus pretensiones son mucho más humildes que las del conocido portal, pero a la vez contribuyen a una grandiosa causa: que aprendas a familiarizarte con Angular 2.

Lee detenidamente estas instrucciones **hasta el final**, las vas a necesitar para completar la práctica.

## ¿Qué tengo que hacer exactamente?

**Postium** es una app que funciona perfectamente desde el momento en que la descargas, pero la _pobre_ está algo escasa de funcionalidad y opciones: ahí es donde te necesito. Te ofrezco seis caminos posibles de mejora que a mí se me ocurren, a los que he llamado **Paths**; tendrás que **completarlos todos** para obtener una calificación de apto en la práctica. No te preocupes, son asequibles.

Los **Paths** están distribuidos por colores. Cuando navegues por el código de **Postium** verás que existen comentarios relacionados con los distintos **Paths**; eso significa que tienes trabajo que hacer justo en esa pieza de código. Por ejemplo:

```typescript
/*------------------------------------------------------------------|
 | ~~~ Blue Path ~~~                                                |
 |------------------------------------------------------------------|
 | Crea el pipe FromNowPipe. Su cometido es, partiendo de una fecha |
 | dada, retornar una cadena de texto que exprese el tiempo que ha  |
 | pasado desde dicha fecha hasta ahora.                            |
 |------------------------------------------------------------------*/
``` 

Visto ese comentario, y siempre que estés completando ese **Path** concreto al que se hace referencia, ponte el mono de trabajo y _¡al lío!_. En cualquier caso, más abajo en cada **Path** te explico en qué consiste y qué documentos requieren tu atención.

Una vez completados los **Paths** obligatorios, tienes otros tres opcionales más por hacer si es que te ves con fuerzas. No son complejos, pero te quito los _ruedines_ y te dejo solo con ellos; no tienes instrucciones ni ayuda en los comentarios, por tanto te va a tocar tirar de ingenio y razonar la posible solución. Sé que es un último empujón y que probablemente llegues cansado a este punto, pero te recomiendo encarecidamente que intentes hacerlo. Si no llegas a tiempo para entregar la práctica con ellos, no te agobies lo más mínimo; ve rascando pequeños huecos e intenta implementarlos. La idea es que aprendas a trabajar con Angular 2, y qué mejor que dedicándole tiempo y esfuerzo.

Por cierto, por si te lo habías preguntado: no tienes que tocar ni una sola línea de CSS, y las que tienes que tocar de HTML, que son pocas, son del lenguaje de templates de Angular 2. La idea de esta práctica es que te centres en la parte funcional, en Angular, y dejes aparcado todo lo contextual. Si te sientes creativo y quieres tocar algo de los estilos o de la maquetación siéntete con total libertad para hacerlo, siempre que tengas en cuenta que no es necesario y los **Paths** obligatorios hay que hacerlos sí o sí.

Hagas o no los **Optional Paths**, puedas terminar o no los obligatorios, te guste Java o COBOL, el metal o el reggaeton, yo estaré encantado de ayudarte. Ya sabes dónde localizarme.

## Estructura del proyecto

Aunque el árbol del proyecto sea sencillo y esté muy claro, te detallo donde está cada cosa:

- **app/components**: en esta ruta tienes los Componentes de la app.
- **app/directives**: en esta ruta tienes las Directivas de la app.
- **app/models**: en esta ruta tienes las Entidades de la app.
- **app/pipes**: en esta ruta tienes los Pipes de la app.
- **app/services**: en esta ruta tienes los Servicios y Resolves de la app.

Aprovecho este momento para contarte un poco sobre las entidades. Son estas tres: `Post`, `User` y `Category`. Como puedes imaginar, la entidad `Post` es la que más peso tiene y sobre la que gira **Postium**. Tiene todos los atributos necesarios para almacenar los datos propios de un post, además de mantener relación con `User` para establecer el autor del mismo y con `Category` para enlazar las categorías en las que se publica. Están definidas de la siguiente forma:

Entidad `Post`:

- `id` de tipo `number`.
- `title` de tipo `string`.
- `intro` de tipo `string`.
- `body` de tipo `string`.
- `media` de tipo `string`.
- `publicationDate` de tipo `number`.
- `categories` de tipo `Category[]`.
- `author` de tipo `User`.
- `likes` de tipo `number`.

Entidad `User`:

- `id` de tipo `number`.
- `name` de tipo `string`.
- `username` de tipo `string`.
- `email` de tipo `string`.
- `avatar` de tipo `string`.

Entidad `Category`:

- `id` de tipo `number`.
- `name` de tipo `string`.

## Puesta a punto

Antes de empezar a completar **Postium**, que sé que tienes ganas, tienes que clonarlo e instalar sus dependencias. Puedes descargar el código desde [su repositorio en GitHub](https://github.com/vermicida/kc-postium-seed), o bien clonarlo desde una terminal:

```bash
$ git clone https://github.com/vermicida/kc-postium-seed.git
```

Una vez descargado y descomprimido, o bien clonado, vamos al directorio correspondiente e instalamos las dependencias:

```bash
$ npm install
```

Y para iniciarlo:

```bash
$ npm start
```

## Paths

Los siguientes **Paths** son obligatorios. La práctica que entregues debe tenerlos implementados. Ve completándolos uno por uno; te recomiendo que no lleves varios a la vez.

### Blue Path: Apañando la fecha de publicación

¿Te has fijado en que la fecha de publicación de los posts de **Postium** no se muestran correctamente?. Ahora mismo aparecen con formato de timestamp, lo cual carece de valor para los usuarios. Lo que debes hacer es indicar qué tiempo ha transcurrido desde que el post se publicó. Puedes hacerlo muy fácilmente con un Pipe y la librería [Moment.js](http://momentjs.com/).

Dependencias:

- Ninguna

Documentos:

- app/components/post-details/**post-details.component.html**
- app/components/post-preview/**post-preview.component.html**
- app/pipes/**from-now.pipe.ts**
- app/**app.module.ts**

Qué practicamos:

- Pipes

### Pink Path: Filtrando y ordenando posts

Si aún no te has percatado de este detalle, te lo cuento yo: los posts que se están mostrando no están ordenados, y lo ideal es que lo hicieran por fecha de publicación descendente, lo más nuevos primero. Además, hay un par de ellos cuya publicación está programada para un fecha futura, y sin embargo ya son visibles. ¿Podrías corregirlo?

Dependencias:

- Ninguna

Documentos:

- app/services/**post.service.ts**

Qué practicamos:

- Cliente HTTP

### Green Path: Detalles de un post

¿Te ves capaz de habilitar la vista en detalle de los posts?. Ahora mismo, por mucho que hagas clic sobre el título, imagen o cuerpo del post, no te lleva a una vista individual en la que leer el resto del post y ver otros detalles del mismo, como las categorías en las que se ha publicado. Este **Path** no debería resultarte especialmente complicado, así que ¡ánimo!.

Dependencias:

- Ninguna

Documentos:

- app/components/post-preview/**post-preview.component.html**
- app/components/post-preview/**post-preview.component.ts**
- app/components/posts-list/**posts-list.component.html**
- app/components/posts-list/**posts-list.component.ts**

Qué practicamos:

- Comunicación entre componentes

### Red Path: Posts por autor

Sería genial poder filtrar los posts por autor. Todos tenemos unos autores que nos gustan más que otros y tener _a un clic_ todo lo que tienen que contarnos es algo aportaría mucho valor a **Postium**. Por tanto, desayuna bien y coge fuerzas, que toca bajar a las profundidades del código: este **Path** es algo más complicado. Ahora mismo, si te posicionas con el ratón sobre el autor de un post verás que el cursor cambia, indicando que el clic desencadena una acción; pero no es así, por más clics que se hacen no ocurre nada. Puedes empezar este **Path** por ahí.

Dependencias:

- Ninguna

Documentos:

- app/components/post-details/**post-details.component.html**
- app/components/post-details/**post-details.component.ts**
- app/components/post-preview/**post-preview.component.html**
- app/components/post-preview/**post-preview.component.ts**
- app/components/posts-list/**posts-list.component.html**
- app/components/posts-list/**posts-list.component.ts**
- app/services/**post.service.ts**
- app/services/**posts-resolve.service.ts**

Qué practicamos:

- Comunicación entre componentes
- Routing
- Cliente HTTP

### Yellow Path: Posts por categoría

Cuando estás viendo los detalles de un post, puedes apreciar en la parte inferior del mismo que aparecen sus categorías. ¿No sería una buena idea poder listar todos los posts de una misma categoría?. ¡Viva la información temático-homogeneizada!.

Dependencias:

- Green Path

Documentos:

- app/components/post-details/**post-details.component.html**
- app/components/post-details/**post-details.component.ts**
- app/components/category-box/**category-box.component.html**
- app/components/category-box/**category-box.component.ts**
- app/services/**post.service.ts**
- app/services/**posts-resolve.service.ts**

Qué practicamos:

- Comunicación entre componentes
- Routing
- Cliente HTTP

### Purple Path: Creación de posts

Aún no es posible crear nuevos posts. En primer lugar, el enlace que presenta **Postium** en la parte superior no funciona. En segundo lugar, una vez habilitado el enlace, el formulario que se muestra en la sección navegada no funciona como se espera. Y en tercer lugar, no se está llamando al servidor para enviar el post que acabamos de introducir en el formulario. ¿Podrías, por favor, arreglar todo esto?

Dependencias:

- Ninguna

Documentos:

- app/components/header-bar/**header-bar.component.html**
- app/components/post-form/**post-form.component.html**
- app/components/post-form/**post-form.component.ts**
- app/services/**post.service.ts**

Qué practicamos:

- Formularios
- Cliente HTTP

## Optional Paths

Como te decía más arriba, estos **Paths** son opcionales y por ello los he titulado con colores cuyo conocimiento de existencia es totalmente opcional. Igualmente, te pido que saques tiempo y fuerza de voluntad para hacerlos, bien para la entrega de la práctica o bien para más adelante.

En esta ocasión tan solo voy a contarte qué hacer en cada **Path**, pero no voy a guiarte con comentarios en el código. Como dice mi profesor de guitarra, _esto ya es pipí de mayores_. Intenta implementar por tu cuenta las soluciones, unque eso no quita que pueda echarte una mano si me lo pides.

### Broken White Path (AKA Blanco Roto): Edición de posts

Menudo portal el **Postium** este, que te equivocas de imagen al crear una nueva historia y pones la de tu abuela en bikini en la playa de La Malagueta el año pasado, y ¡no puedes editar el post!. Tu abuela queda inmortalizada en la web hasta el día del juicio final por la tarde. No pasa nada, para eso estás tú, para darle una solución a este _problemilla_. ¿Podrías añadir a **Postium** la posibilidad de editar los posts que hayas creado con tu usuario?.

**Pista:** recuerda que ya tienes un componente con un formulario de alta, quizá puedas editarlo.

### Brick Red Path (AKA Teja): Likes

Estamos acustumbrados al puñetero botón de like en todos los servicios web que utilizamos a diario, pero **Postium** no lo tiene. La entidad `Post` ya almacena ese dato, así que parte del recorrido ya está hecho. Habría que hacer un nuevo componente para la vista en detalle del post que muestre el número de likes actual y, de paso, me permita a mí hacer like también. Ojo: el like debe persistirse en servidor y solo puede hacerse uno sobre el mismo post.

**Pista:** hay que persistir de alguna forma los likes que he hecho para evitar que pueda hacer varios sobre un mismo post. 

### Red Wine Path (AKA Vino Tinto): Búsqueda

¿Has visto el icono de búsqueda que hay en la parte superior de **Postium**?. Pues no hace nada. Sería una buena idea que pudiesémos lanzar desde esa caja una búsqueda al servidor y pintar en una nueva vista el resultado: aquellos posts que contengan el texto indicado. La caja de búsqueda te la regalo; es un componente totalmente funcional que lanza un evento al presionar la tecla enter, y es la clase `SearchBoxComponent`. Queda hacer todo el flujo que desencadena esa tecla enter.

**Pista:** echa un ojo a la documentación de [JSON Server](https://github.com/typicode/json-server), quizá la búsqueda por _like_ o _full-text_ te ayude.
