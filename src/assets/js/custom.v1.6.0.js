// JavaScript


CelsiusAFahrenheit = (pCel) => (pCel * 9 / 5) + 32;
FahrenheitACelsius = (pFah) => (pFah - 32) * 5 / 9;


let userMeasure = prompt(
    'Para convertir Centígrados a Fahrenheit, ingrese <F>' + '\r\n' +
    'Para convertir Fahrenheit a Centígrados, ingrese <C>'
);


function mostrarMensaje(mensaje, tipo) {
  alert(texto);

  if (tipo === 'error') {
    console.error(texto);
  } else if (tipo === 'advertencia') {
    console.warn(texto);
  } else {
    console.log(texto);
  }
}

    if ('C' !== userMeasure && 'F' !== userMeasure) {
        alert(
            `La Unidad de los grados introducida <${userMeasure}> por el usuario no son válidos.` + '\r\n' +
            'Por favor,' + '\r\n' +
            '  - ingrese <C> para convertir a grados Centígrados' + '\r\n' +
            '  - ingrese <F> para convertir a grados Fahrenheit'
        );
    } else {
        let userDegree = prompt(`Ingrese los grados ${userMeasure === 'F' ? 'Centígrados' : 'Fahrenheit'} a convertir`);
        let initDegree = Number(userDegree);


        if (Number.isNaN(initDegree)) {
            alert(
                `Los grados introducidos <${initDegree}>º por el usuario no son válidos.` +
                `Por favor, ingrese un dato numérico.`
            );
        } else {
            let convertedDegree;

            if (userMeasure === 'C') {
                convertedDegree = FahrenheitACelsius(initDegree);
                if (!!!isNaN(convertedDegree) && typeof convertedDegree === 'number') {
                    alert(`Los grados ${userDegree} Fahrenheit son ${convertedDegree.toFixed(1)} Centígrados`);
                    console.log(`Los grados ${userDegree} Fahrenheit son ${convertedDegree.toFixed(1)} Centígrados`);
                } else {
                    let message =
                        'Ha ocurrido un error al hacer la conversión.' + '\r\n' +
                        `Los grados obtenidos no son correctos ${convertedDegree}`;
                    alert(message);
                    console.error(message);
                }
            } else if (userMeasure === 'F') {
                convertedDegree = CelsiusAFahrenheit(initDegree);
                if (!!!isNaN(convertedDegree) && typeof convertedDegree === 'number') {
                    alert(`Los grados ${userDegree} Centígrados son ${convertedDegree.toFixed(1)} Fahrenheit`);
                    console.log(`Los grados ${userDegree} Centígrados son ${convertedDegree.toFixed(1)} Fahrenheit`);
                } else {
                    let message =
                        'Ha ocurrido un error al hacer la conversión.' + '\r\n' +
                        `Los grados obtenidos no son correctos ${convertedDegree}`;
                    alert(message);
                    console.error(message);
                }
            }
        }
    }
