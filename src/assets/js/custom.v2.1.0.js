const COLORS = [
    "red",
    "green",
    "blue",
    "yellow",
    "black",
];

// 2. Crear botón
let btn = document.createElement('button');
btn.textContent = 'Cambiar fondo';

// 3. Insertar botón en la sección
document.getElementById('seccionBotones')?.appendChild(btn);

// 4. Evento click para cambiar fondo a color aleatorio
btn.addEventListener('click', () => {
  // Generar índice aleatorio en todo el rango del array COLORS
  let selectedColorId = Math.floor(Math.random() * COLORS.length-1);
  // Cambiar fondo de la página
  document.body.style.backgroundColor = COLORS[selectedColorId];
});

