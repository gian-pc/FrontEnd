let nombres = ["jorge", "teresa", "javier", "leonor", "daniel", "francisca"];
let edades = [20, 15, 75, 68, 45, 25];

let buscar = prompt("Ingrese nombre a buscar:");
let encontrado = false;

for (let i = 0; i < nombres.length; i++) {
  console.log(`i=${i}`);
  if (nombres[i] === buscar) {
    console.log(`Encontrado ${buscar}`);
    console.log(`Edad: ${edades[i]}`);
    encontrado = true;
    break;
  }
}

if (!encontrado) {
  console.log("No se ha encontrado al usuario");
}

// Uso del continue
// Imprimir la edad y nombre de las personas menores a 60 años.

console.log('----------  Uso del continue -------------')

for (let i = 0; i < edades.length; i++) {
  if (edades[i] > 60) {
    continue;
  }
  console.log(`${nombres[i]} tiene ${edades[i]} años`);
}
