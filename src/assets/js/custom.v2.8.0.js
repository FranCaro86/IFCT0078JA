
// Seleccionar el input y el párrafo donde se muestra el mensaje
let campo = document.getElementById('campoInput');
let mensaje = document.getElementById('mensajeInput');

// Asignar la función al evento input


campo.oninput = function () {
    let texto = campo.value;

    // Mostrar el texto en el párrafo
    mensaje.textContent = texto;

    // Muestra error si hay menos de 4 caracteres
    mensaje.classList.toggle('error', campo.value.length < 4);

};

