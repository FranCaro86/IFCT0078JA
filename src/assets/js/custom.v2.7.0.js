
// Obtener el contenedor donde irá la imagen
let contenedor = document.getElementById('contenedorImagen');

// Crear botón para mostrar imagen
let botonImagen = document.createElement('button');
botonImagen.textContent = 'Mostrar Imagen';

// Insertar el botón en la sección de botones
document.getElementById('seccionBotones').appendChild(botonImagen);

// Crear la función que genera y muestra la imagen
function mostrarImagen() {

    // Evita crear múltiples imágenes si ya hay una
    if (contenedor.querySelector('img')) return;

    // Crear imagen
    let imagen = document.createElement('img');
    imagen.src = 'https://upload.wikimedia.org/wikipedia/commons/d/da/The_Parthenon_in_Athens.jpg';
    imagen.title = 'Monumento del Partenon en Atenas, Grecia'
    imagen.style.Width = '100%';

    // Insertar la imagen en el contenedor
    contenedor.appendChild(imagen);
}

// Asignar la función al botón
botonImagen.onclick = mostrarImagen;