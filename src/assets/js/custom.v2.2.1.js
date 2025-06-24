  
  
  let fib = [0, 1];
  let contador = 2;

  document.getElementById("botonFibonacci").addEventListener("click", function() {
    // Solo agregamos si aún no hay 50 números
    if (contador < 50) {
      fib[contador] = fib[contador - 1] + fib[contador - 2];
      contador++;
    }

    // Mostrar todos los números acumulados hasta ahora
    document.getElementById("parrafoSiguiente").textContent = "Secuencia Fibonacci: " + fib.slice(0, contador).join(", ");
  });
