// Dado que el usuario ingresa un año Ejm 1998
// Calcular si el año es bisiesto o No

let anio = +prompt("Ingrese año");
if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
  console.log(`El año ${anio} ES BISIESTO`);
} else {
  console.log(`El año ${anio} NO ES BISIESTO`);
}
