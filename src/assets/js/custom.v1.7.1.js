

var numeros = [10, 5, 25, 8, 15];

numeros.sort(function(a, b) {
  return a - b;
});

var maximo = numeros[numeros.length - 1];
console.log("Número mayor:", maximo);