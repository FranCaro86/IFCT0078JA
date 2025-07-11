
$(function () {
    $('#formContacto').on('submit', function (e) {
        let $message = $('#estadoMensaje');
        let $nombre = $('#nombre');
        let $email = $('#correo');
        let $mensaje = $('#mensaje');

        $message.removeClass('text-danger text-success').text('');

        let errores = [];

        if ($.trim($nombre.val()) === '') {
            errores.push('El campo nombre no es válido.');
        }

        if ($.trim($email.val()) === '') {
            errores.push('Por favor, escribe tu correo electrónico.');
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test($email.val())) {
                errores.push('Por favor, escribe un correo electrónico válido.');
            }
        }

        if ($.trim($mensaje.val()) === '') {
            errores.push('Por favor, escribe un mensaje.');
        }

        if (errores.length > 0) {
            e.preventDefault();
            $message.html(errores.join('<br>')).addClass('text-danger');
            return false;
        }

        $message.text('Formulario válido. Enviando...').addClass('text-success');

        // Si quieres enviar con AJAX aquí haces e.preventDefault() y el envío personalizado
    });
});