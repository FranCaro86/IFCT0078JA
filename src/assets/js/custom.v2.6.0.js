
// Colores para el fonde <h1>
let colores = ["red", "blue", "green", "orange", "yellow", "purple"];

// Obtener elementos del DOM
let parrafo = document.getElementById('parrafoPrincipal');
let encabezado = document.getElementsByTagName('h1')[0];
let seccionBotones = document.getElementById('seccionBotones');
let btnCambiarEstilo = document.getElementById('botonCambiarEstilo');

// Crear boton cambiar fondo
let btnCambiarFondo = document.createElement('button');
btnCambiarFondo.textContent = 'Cambiar Fondo del Título';

// Insertar boton cambiar fondo
seccionBotones.appendChild(btnCambiarFondo);

// Función para alternar clase en el párrafo
btnCambiarEstilo.onclick = function () {
  parrafo.classList.toggle('destacado');
//   console.log(`parrafo.classList.contains(culo de mono): ${parrafo.classList.contains('culo', 'de', 'mono')}`);
  
};

// Función para cambiar fondo del <h1>
btnCambiarFondo.onclick = function () {
  let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  encabezado.style.backgroundColor = colorAleatorio;
};