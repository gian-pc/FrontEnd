//Funciones
// 1. Funciones que no retornan valor ni reciben parámetros

function imprimirFecha() {
  let fecha = new Date();
  console.log(fecha);
}

// 2. Funciones que retornan valor y no reciben parámetros

function retornarFecha() {
  let fecha = new Date();
  return fecha;
}

// 3. Funciones que reciben parámetros y retornan valor
/**
 * Funcion que recibe 2 numeros y calcula el binomio cuadrado perfecto de ambos
 * @param {number} a primer numero
 * @param {number} b segundo numero
 * @return {number} el resultado del binomio
 */

function retornarBinomio(a, b) {
  let rpta = a * a + 2 * a * b + b * b;
  return rpta;
}

// 4. Funciones que no retornan valor y que reciben parámetros

function imprimirPares(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      console.log(numeros[i]);
    }
  }
}

//----------------------------------------------------------------

// invocando funcion 1
console.log(
  "------- 1. Funciones que no retornan valor ni reciben parámetros -----"
);
imprimirFecha();

// invocando funcion 2
console.log(
  "------- 2. Funciones que retornan valor y no reciben parámetros -------"
);
let nuevaFecha = retornarFecha();
console.log(nuevaFecha);

// invocando funcion 3
console.log(
  "------- 3. Funciones que reciben parámetros y retornan valor -----"
);
let resultadoBinomio = retornarBinomio(2, 3);
console.log(resultadoBinomio);

// invocando funcion 4
console.log(
  "------- 4. Funciones que no retornan valor y que reciben parámetros ------"
);
let arreglo = [4, 20, 1, 0, 5, 63, 98];
imprimirPares(arreglo);

