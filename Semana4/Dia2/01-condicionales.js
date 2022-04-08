// Condicionales

// !== diferente
// === igual


let edad = +prompt("Ingrese su edad");
let imc = 0;

if (edad > 17) {
  let peso = +prompt("¿Cuánto pesa joven? Kg");
  let altura = +prompt("¿Cuánto mide joven (mts.)");
  imc = peso / (altura * altura);
  if (imc >30) {
    console.log("No hay pase Laboral");

    console.log(`Su IMC = ${imc}`);
  } else {
    console.log("Sí hay pase laboral");
    console.log(`Su IMC = ${imc}`);
  }
} else {
  console.log("No hay pase Laboral");
  console.log(`Edad: ${edad}, es menor de edad`);
}
