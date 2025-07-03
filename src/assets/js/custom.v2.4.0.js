
// Referencias al botón y al párrafo
let boton = document.getElementById('botonCambiarTexto');
let parrafo = document.getElementById('parrafoPrincipal');


// Asignar función al evento onclick
boton.onclick = () => parrafo.textContent = '¡El texto ha cambiado con Javascript!'

