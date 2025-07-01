
// Obtener los elementos del formulario
let inputNombre = document.getElementById('campoNombre');
let inputEdad = document.getElementById('campoEdad');
let inputGenero = document.getElementById('campoGenero');
let inputEmail = document.getElementById('campoEmail');
let inputProvincia = document.getElementById('campoProvincia');
let inputCV = document.getElementById('campoCV');
let mensaje = document.getElementById('mensajeInput');
let formulario = document.getElementById('elFormulario');

// Mostrar mensaje
function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.style.color = tipo === 'error' ? 'red' : 'green';
}

// Validaciones
function comprobarNombre() {
    let nombre = inputNombre.value.trim();
    if (nombre === '' || nombre.length < 4) {
        mostrarMensaje('El nombre es obligatorio y debe tener al menos 4 caracteres.', 'error');
        return false;
    }
    return true;
}
