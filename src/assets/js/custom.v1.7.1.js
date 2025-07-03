

<<<<<<< HEAD
function encontrarMayor(arrayNumeros) {
  if (arrayNumeros.length === 0) {
    return null;
  }

  let mayor = arrayNumeros[0];

  for (let i = 1; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] > mayor) {
      mayor = arrayNumeros[i];
    }
  }

  return mayor;
}


let numeros = [10, 5, 25, 8, 15];
let maximo = encontrarMayor(numeros);
console.log("El número mayor es:", maximo);
=======
var numeros = [10, 5, 25, 8, 15];

numeros.sort(function(a, b) {
  return a - b;
});

var maximo = numeros[numeros.length - 1];
console.log("Número mayor:", maximo);
>>>>>>> b0264178ec9ccdcb6f50fe428915bc69bc62f9db
