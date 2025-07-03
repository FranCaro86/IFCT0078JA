

// Obtener los elementos del formulario
let inputNombre = document.getElementById('campoNombre');
let inputEdad = document.getElementById('campoEdad');
let mensaje = document.getElementById('mensajeInput');
let formulario = document.getElementById('elFormulario');

// Mostrar mensaje de éxito o error
function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.style.color = tipo === 'error' ? 'red' : 'green';
}

// Función para validar nombre
function comprobarNombre() {
    let nombre = inputNombre.value.trim();
    if (nombre === '') {
        mostrarMensaje('El nombre es obligatorio.', 'error');
        return false;
    }
    if (nombre.length < 4) {
        mostrarMensaje('El nombre debe tener al menos 4 caracteres.', 'error');
        return false;
    }
    mensaje.textContent = '';
    return true;
};

// Función para validar edad
function comprobarEdad() {
    let edad = parseInt(inputEdad.value);
    if (isNaN(edad) || edad <= 0) {
        mostrarMensaje('La edad no es correcta.', 'error');
        return false;
    }
    mensaje.textContent = '';
    return true;
};

// Validaciones en tiempo real
inputNombre.onkeyup = comprobarNombre;
inputEdad.onblur = comprobarEdad;

// Acción al hacer clic en el boton
formulario.onsubmit = function () {
    if (!!!comprobarNombre()) return false;
    if (!!!comprobarEdad()) return false;

    mostrarMensaje('Formulario guardado correctamente');
    return false;
};