

//Funcion sumar digitos
function sumarDigitos(numero) {

  // Convertimos el número a string
  const digitos = [...numero.toString()];
  let suma = 0;

  for (let i = 0; i < digitos.length; i++) {
    suma += Number(digitos[i]);
  }

  return suma;
}


console.log(sumarDigitos(2468));
console.log(sumarDigitos(1234)); 