// Condicionales

// !== diferente
// === igual
// && = y
// || = o
// ! = NOT

debugger;

let edad = +prompt("Ingrse su edad");
let imc = 0;
imc = peso / (altura * altura);

if (edad > 17 && imc <= 30) {
  console.log("Si hay pase Laboral");
} else {
  console.log("No hay pase Laboral");
}
console.log(`IMC: ${imc}`);
