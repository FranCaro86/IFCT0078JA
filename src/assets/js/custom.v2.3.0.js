

// Crear el botón
const nuevoBoton = document.createElement("button");
nuevoBoton.id = "botonToggleParrafo";
nuevoBoton.textContent = "Mostrar/Ocultar Párrafo";

// Lo insertamos en seccion botones
const seccionBotones = document.getElementById("seccionBotones");
seccionBotones.appendChild(nuevoBoton);

// Agregar el evento al boton
const parrafo = document.getElementById("parrafoPrincipal");

nuevoBoton.addEventListener("click", function () {
    if (parrafo.style.display === "none") {
      parrafo.style.display = "block";
    } else {
      parrafo.style.display = "none";
    }
  });