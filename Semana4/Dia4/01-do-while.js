// do-while
let semaforo = true;
let notas = [];
let suma = 0;
do {
  let nota = +prompt("Ingrese Nota");

  if (nota === -1) {
    semaforo = false;
  } else {
    notas.push(nota);
    suma += nota;
  }
} while (semaforo === true);

console.log(`Promedio: ${suma / notas.length}`);
