

let contador = 0;
let parrafo = document.getElementById('parrafoSecundario');

// Crear botones
let btnAumentar = document.createElement('button');
btnAumentar.textContent = 'Contador Mas';

let btnDisminuir = document.createElement('button');
btnDisminuir.textContent = 'Contador Menos';

// Insertar botones
document.getElementById('seccionBotones').appendChild(btnAumentar);
document.getElementById('seccionBotones').appendChild(btnDisminuir);

// Actualizar el texto del párrafo
function actualizarParrafo() {
    parrafo.textContent = `El contador va por: ${contador}`;
}

// Agregar eventos a los botones
btnAumentar.addEventListener('click', () => {
    contador++;
    actualizarParrafo();
});

btnDisminuir.addEventListener('click', () => {
    contador--;
    actualizarParrafo();
});