
// Variable de nuevos elementos agregados
let contador = 0;

// Crear el boton nuevo
let botonAgregar = document.getElementById('botonAgregarElemento');
let lista = document.getElementById('miLista');

// Asignar la funcion al evento
botonAgregar.onclick = () => {
  let nuevoLi = document.createElement('li');
  nuevoLi.textContent = `Nuevo elemento ${contador}`;
  lista.appendChild(nuevoLi);
  contador++;
};