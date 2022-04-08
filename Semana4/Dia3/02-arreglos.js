// Arreglos
console.log("------ Arreglo versión 1 --------");
let numeros = [15, 16, 1.5, 9, -9, 23];


// Imprimir todo el arreglo
console.log(numeros);
console.log("---------------------------------");

// Imprime un elemento del arreglo según su posición
let i = 2;
console.log(`El elemento (${numeros[i]}), esta en la posición (${i})`);

// Asigna un nuevo valor al arreglo según su posición
console.log(" ")
console.log("------ Arreglo versión 2 --------");
numeros[0] = 720;

// Imprime todo el arreglo
console.log(numeros);
console.log("---------------------------------");

// Imprime la cantidad de elementos del arreglo
console.log(" ")
console.log(`Cantidad de elementos: ${numeros.length}`);

// Imprime el último elemento de un arreglo
let totalElementos = numeros.length;
console.log(`último elemento: ${numeros[totalElementos - 1]}`);

// Agregar un nuevo elemento al arreglo
console.log(" ")
numeros.push(212);
console.log(`Agregando un nuevo elemento con PUSH`);
console.log(numeros);