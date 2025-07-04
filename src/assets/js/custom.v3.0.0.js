
// Obtener elemenos del formulario
document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById('elFormulario');
    let mensajeGeneral = document.getElementById('mensajeGeneral');

    form.addEventListener('submit', function (event) {
        let formularioValido = true;

        // Validación Bootstrap estándar
        if (!form.checkValidity()) {
            formularioValido = false;
        }

        // Validación Edad (mayor de 18 años)
        let campoEdad = document.getElementById('campoEdad');
        let errorEdad = document.getElementById('errorEdad');
        if (campoEdad.value) {
            let fechaNacimiento = new Date(campoEdad.value);
            let hoy = new Date();
            let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
            let mes = hoy.getMonth() - fechaNacimiento.getMonth();
            let esMayor = edad > 18 || (edad === 18 && mes >= 0);

            if (!esMayor) {
                campoEdad.classList.add('is-invalid');
                errorEdad.textContent = "Debes ser mayor de 18 años.";
                formularioValido = false;
            } else {
                campoEdad.classList.remove('is-invalid');
            }
        }

        // Validación Tecnologías
        let campoTecnologias = document.getElementById('campoTecnologias');
        if (!campoTecnologias.selectedOptions.length) {
            campoTecnologias.classList.add('is-invalid');
            formularioValido = false;
        } else {
            campoTecnologias.classList.remove('is-invalid');
        }

        // Validación CV PDF
        const campoCV = document.getElementById('campoCV');
        if (campoCV.files.length === 0 || campoCV.files[0].type !== 'application/pdf') {
            campoCV.classList.add('is-invalid');
            formularioValido = false;
        } else {
            campoCV.classList.remove('is-invalid');
        }

        // Mostrar mensaje general si hay errores
        if (!formularioValido) {
            mensajeGeneral.classList.remove('d-none');
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add('was-validated');
    });
});

