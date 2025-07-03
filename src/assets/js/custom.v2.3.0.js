let parrafo = document.getElementById("parrafoPrincipal");

// Crear el botón
let btnDisplay = document.createElement("button");
btnDisplay.id = "btnToggleParrafoDisplay";
btnDisplay.textContent = "Mostrar/Ocultar Acordeón";
btnDisplay.onclick = (ev) => parrafo.style.display = parrafo.style.display === "none" ? "block" : "none";

let btnVisiblity = document.createElement("button");
btnVisiblity.id = "btnToggleVisibilty";
btnVisiblity.textContent = "Mostrar/Ocultar Párrafo";
btnVisiblity.onclick = (ev) => parrafo.style.visibility = parrafo.style.visibility === "hidden" ? "visible" : "hidden";

// Lo insertamos en seccion botones
let seccionBotones = document.getElementById("seccionBotones");
seccionBotones.appendChild(btnDisplay);
seccionBotones.appendChild(btnVisiblity);

// Agregar el evento al boton
// parrafo.style.display = "none";

// nuevoBoton.addEventListener("click", function () {
//     if (parrafo.style.display === "none") {
//       parrafo.style.display = "block";
//     } else {
//       parrafo.style.display = "none";
//     }
//   });

