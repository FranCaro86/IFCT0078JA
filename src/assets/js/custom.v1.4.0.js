
//Preguntamos el año de nacimiento
const anioNacimiento = prompt("¿En que año naciste?");

//Obtenemos el año actual
const anioActual = new Date().getFullYear();

//Calculamos edad
var edad = anioActual - anioNacimiento;

//Resultado edad
console.log("Tu edad es " + edad + " años ");

