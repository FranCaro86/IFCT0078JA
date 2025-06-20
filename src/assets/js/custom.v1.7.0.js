

//Array con 5 frutas
let frutas = ['Manzana', 'Plátano', 'Naranja', 'Fresa', 'Pera'];

//Mostrar todas las frutas con forEach
console.log("Frutas actuales:");
frutas.forEach(function(fruta) {
  console.log(fruta);
});

//Añadir una fruta nueva al array
let nuevaFruta = 'Mango';
frutas.push(nuevaFruta);

//Mostrar todas las frutas después de añadir la nueva
console.log("Frutas después de añadir una nueva:");
frutas.forEach(function(fruta) {
  console.log(fruta);
});