// Condicionales

// !== diferente
// === igual
// && = y
// || = o
// ! = NOT



let edad = +prompt("Ingrse su edad");
let peso = +prompt("¿Cuanto pesa joven (Kgs.)?");
let altura = +prompt("¿Cuanto mide joven (Kgs.)?");
let indiceMasaCorporal = 0;

indiceMasaCorporal = peso / (altura*altura);


if (edad > 17 && indiceMasaCorporal <=30) {
  console.log(`Si hay pase laboral`);
}else{
  console.log(`No hay pase laboral`);
  console.log(`Es menor de edad O  su IMC es > 30`);
}
console.log(`Su IMC = ${indiceMasaCorporal}`);
console.log(`Su edad = ${edad}`);
