
//Pedimos el año de nacimiento al usuario       
const anioNacimiento = prompt("¿En que año naciste?");

//Obtenemos el año actual
const anioActual = new Date().getFullYear();

//Calculamos la edad
const edad = anioActual - anioNacimiento;

//Mostramos la edad en consola
console.log("Tu edad es: " + edad + " años ");
