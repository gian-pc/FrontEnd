// La clase Math
// es una clase ESTÁTICA
// CLASE ESTÁTICA: Clase de la cual no se crean variables
// que nos provee de funciones matemáticas

// Ejm: Math.sqrt(numero)
let raizDe25 = Math.sqrt(25);
console.log(raizDe25);

// Math.floor(numero_decimal)
// Redondea un numero al proximo entero inferior
// Ejm Math.floor(5.999999) = 5;

console.log(Math.floor(12.999999));

// Math.ceil(numero_decimal)
// Redondea un numero al proximo superior
// Ejm: Math.ceil(0.2);

console.log(Math.ceil(0.2));

// Math.round(numero_decimal)
// Redondea un número respetando las formas normales de redondeo

console.log(Math.round(3.2));
console.log(Math.round(3.6));

// Math.random()=> genera un numero aleatorio entre 0 y 1
console.log(Math.random());

// Math.random() * (max-min) + min
// Genera un aleatorio entre min y max

let aleatorioQuinceYCien = Math.random() * (100 - 15) + 15;
console.log(aleatorioQuinceYCien);

// numero.toFixed(numero_de_decimales)
console.log(aleatorioQuinceYCien.toFixed(2));
