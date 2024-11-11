// Con cada nueva entrada en el blog, se añadirá un nuevo enlace al índice de navegación.
// Se añade un listener para el evento 'click' en el elemento <nav> de la barra de navegación.
//  La clase 'document' es un objeto global que representa el documento HTML en javascript.
//  El metodo 'getElementById' del objeto 'document' devuelve una referencia al elemento con el id especificado.
//  El metodo 'addEventListener' del objeto 'nav' añade un listener para el evento especificado.
document.getElementById('new-post-form').addEventListener('submit', function(event) {
    // Evitar que el formulario se envíe y recargue la página
    event.preventDefault();
    
    // Obtener los valores de los campos del formulario
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    const imageUrl = document.getElementById('post-image').value;
    const date = new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Crear un nuevo id para el post
    const newPostId = `entrada${document.querySelectorAll('.blog-entry').length + 1}`;
    
    // Crear nuevo post div
    const newPost = document.createElement('div');
    // Añadir la clase 'card' al nuevo post
    newPost.classList.add('card');
    // Un objeto newPost va a recoger los datos de la nueva entrada
    newPost.id = newPostId;
    
    // Crear un nuevo elemento <h3> para el título del post
    const newPostTitle = document.createElement('h3');
    newPostTitle.classList.add('card-title');
    newPostTitle.textContent = title;
    // El método 'appendChild' añade un nodo al final de la lista de hijos de un nodo padre especificado.
    newPost.appendChild(newPostTitle);
    
    // Crear un nuevo elemento <p> para la fecha del post
    const newPostDate = document.createElement('p');
    newPostDate.classList.add('card-text');
    newPostDate.innerHTML = `<small class="text-muted">Fecha: ${date}</small>`;
    newPost.appendChild(newPostDate);
    
    // Crear un nuevo contenedor <div> para el cuerpo del post
    const newPostBody = document.createElement('div');
    // El objeto 'newPostBody' recoge los datos del cuerpo de la nueva entrada
    newPostBody.classList.add('card-body');
    
    // Crear un nuevo elemento <img> para la imagen del post
    const newPostImage = document.createElement('img');
    newPostImage.src = imageUrl;
    newPostImage.alt = title;
    newPostImage.classList.add('card-img-top');
    newPostBody.appendChild(newPostImage);
    
    // Crear un nuevo elemento <p> para el contenido del post
    const newPostContent = document.createElement('p');
    newPostContent.classList.add('card-text');
    newPostContent.textContent = content;
    newPostBody.appendChild(newPostContent);
    
    // Agregar el cuerpo del post al contenedor principal del post
    newPost.appendChild(newPostBody);
    
    // Crear un botón para volver al índice
    const backToIndexButton = document.createElement('a');
    // Se referencia al id del índice
    backToIndexButton.href = '#indice';
    backToIndexButton.classList.add('btn', 'btn-primary');
    backToIndexButton.textContent = 'Volver al Índice';
    newPost.appendChild(backToIndexButton);
    
    // Agregar el objeto del nuevo post al contenedor de entradas del blog
    document.getElementById('blog-entries').appendChild(newPost);
    
    // Crear un nuevo elemento <li> para el índice para poder navegar hasta el nuevo post
    const newIndexItem = document.createElement('li');
    newIndexItem.classList.add('list-group-item');
    
    // Crear un nuevo enlace <a> para el índice
    const newIndexLink = document.createElement('a');
    newIndexLink.href = `#${newPostId}`;
    newIndexLink.textContent = title;
    
    // Agregar el enlace al elemento <li> del índice
    newIndexItem.appendChild(newIndexLink);
    
    // Agregar el nuevo elemento <li> al índice de navegación
    document.querySelector('nav ul').appendChild(newIndexItem);
    
    // Resetear el formulario de entrada de nuevo post
    document.getElementById('new-post-form').reset();
});
