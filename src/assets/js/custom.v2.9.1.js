
// Obtener los elementos del formulario
let inputNombre = document.getElementById('campoNombre');
let inputApellidos = document.getElementById('campoApellidos');
let inputEdad = document.getElementById('campoEdad');
let inputGenero = document.getElementById('campoGenero');
let inputProvincia = document.getElementById('campoProvincia');
let inputEmail = document.getElementById('campoEmail');
let inputExperiencia = document.getElementById('campoExperiencia');
let inputCV = document.getElementById('campoCV');
let inputTecnologias = document.getElementById('campoTecnologias');
let inputPolitica = document.getElementById('campoPolitica');
let inputCondiciones = document.getElementById('campoCondiciones');


let mensaje = document.getElementById('mensajeInput');
let formulario = document.getElementById('elFormulario');


let tablas = document.querySelectorAll('table');
tablas.forEach(tabla => {
    tabla.classList.add('estiloTabla');
});


let celdas = document.querySelectorAll('th, td');
celdas.forEach(celda => {
  celda.classList.add('estiloCelda');
});



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

// Función para validar apellidos
function comprobarApellidos() {
    let apellidos = inputApellidos.value.trim();
    if (apellidos === '') {
        mostrarMensaje('El apellido es obligatorio.', 'error');
        return false;
    }
    if (apellidos.length < 4) {
        mostrarMensaje('El apellido debe tener al menos 4 caracteres.', 'error');
        return false;
    }
    mensaje.textContent = '';
    return true;
};

// Función para validar edad
function comprobarEdad() {
    let edad = parseInt(inputEdad.value);
    if (isNaN(edad) || edad < 18) {
        mostrarMensaje('La edad no es correcta.', 'error');
        return false;
    }
    mensaje.textContent = '';
    return true;
};

// Función comprobar género
function comprobarGenero() {
    let genero = inputGenero.value;
    if (genero === '') {
        mostrarMensaje('Por favor, selecciona un género.', 'error');
        return false;
    }
    mensaje.textContent = '';
    return true;
}

// Función comprobar provincia
function comprobarProvincia() {
    let provincia = inputProvincia.value;
    if (provincia === '') {
        mostrarMensaje('Por favor, selecciona una provincia.', 'error');
        return false;
    }
    mensaje.textContent = '';
    return true;
}

// Función comprobar Email
function comprobarEmail() {
    let email = inputEmail.value.trim();
    // Expresión regular básica para validar email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '') {
        mostrarMensaje('El correo electrónico es obligatorio.', 'error');
        return false;
    }
    if (!regexEmail.test(email)) {
        mostrarMensaje('Introduce un correo electrónico válido.', 'error');
        return false;
    }
    mensaje.textContent = '';
    return true;
}

// Función comprobar años experiencia
function comprobarExperiencia() {
    let experiencia = parseInt(inputExperiencia.value);
    if (isNaN(experiencia) || experiencia <= 0) {
        mostrarMensaje('Años de experiencia debe ser mayor de 0', 'error');
        return false;
    }
    mensaje.textContent = '';
    return true;
}


// Función comprobar Currículum Vitae
function comprobarCV() {
    const archivo = inputCV.files[0];
    if (!archivo) {
        mostrarMensaje('Por favor, sube tu Currículum Vitae.', 'error');
        return false;
    }

    mensaje.textContent = '';
    return true;
}

// Función comprobar Tecnologías
function comprobarTecnologias() {
    let tecnologia = inputTecnologias.value;
    if (tecnologia === '') {
        mostrarMensaje('Por favor, selecciona una tecnología.', 'error');
        return false;
    }
    mensaje.textContent = '';
    return true;
}

// Función comprobar política de privacidad y condiciones de uso
function comprobarPolitica() {
    if (!inputPolitica.checked) {
        mostrarMensaje('Debes aceptar la Política de Privacidad.', 'error');
        return false;
    }
    mensaje.textContent = '';
    return true;
}

function comprobarCondiciones() {
    if (!inputCondiciones.checked) {
        mostrarMensaje('Debes aceptar las Condiciones de Uso.', 'error');
        return false;
    }
    mensaje.textContent = '';
    return true;
}




// Validaciones en tiempo real
inputNombre.onkeyup = comprobarNombre;
inputApellidos.onkeyup = comprobarApellidos;
inputEdad.onblur = comprobarEdad;
inputGenero.onchange = comprobarGenero;
inputProvincia.onchange = comprobarProvincia;
inputEmail.onchange = comprobarEmail;
inputExperiencia.onblur = comprobarExperiencia;
inputCV.onchange = comprobarCV;
inputPolitica.onchange = comprobarPolitica;
inputCondiciones.onchange = comprobarCondiciones;
inputTecnologias.onchange = comprobarTecnologias;


// Acción al hacer clic en el boton
formulario.onsubmit = function () {
    if (!!!comprobarNombre()) return false;
    if (!!!comprobarApellidos()) return false;
    if (!!!comprobarEdad()) return false;
    if (!!!comprobarGenero()) return false;
    if (!!!comprobarProvincia()) return false;
    if (!!!comprobarEmail()) return false;
    if (!!!comprobarExperiencia()) return false;
    if (!!!comprobarCV()) return false;
    if (!!!comprobarPolitica()) return false;
    if (!!!comprobarCondiciones()) return false;
    if (!!!comprobarTecnologias()) return false;

    mostrarMensaje('Formulario guardado correctamente');
    return false;
};