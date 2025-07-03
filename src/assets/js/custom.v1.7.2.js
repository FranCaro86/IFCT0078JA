

// Pedimos una palabra
let palabra = prompt("Ingresa una palabra:");

// Inicializamos el contador de vocales
let contadorVocales = 0;

// Recorremos cada letra de la palabra
[...palabra].forEach(letra => {
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    contadorVocales++;
  }


//   switch(letra){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         contadorVocales++;
//         break;
//   }
});

// [...vocales].forEach(el => palabra.includes(el) ? contadorVocales++ : null );

// Mostramos el resultado
console.log(`La palabra "${palabra}" tiene ${contadorVocales} vocal(es).`);