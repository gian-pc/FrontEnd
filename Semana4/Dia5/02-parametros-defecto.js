// FUNCIONES CON PARÁMETROS POR DEFECTO

function trinomioCuadrado(a, b, c) {
  if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
    let rpta = a * a + b * b * c * c + 2 * a * b + 2 * a * c + 2 * b * c;
    return rpta;
  } else {
    console.error("Los datos proporcionados NO son correctos");
    return 0;
  }
}

let resultado = trinomioCuadrado(2, 3,5);
console.log(resultado);

/**
 * Funcion que recibe un arreglo de nombres y un nombre a buscar
 * si el algoritmo encuentra el nombre buscado dentro del arreglo
 * retorna true, en caso contrario retorna false.
 * @param {array} nombres
 * @param {string} busqueda
 * @return {boolean}
 */
function buscarNombre(nombres=[], busqueda="") {
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === busqueda) {
      // La sentencia return finaliza la función, una vez encontrado el valor.
      return true;
    }
  }
  return false;
}

let nombres = ["martin", "jaime", "anita", "paola", "daniel"];
let resultadoBusqueda = buscarNombre();
console.log(resultadoBusqueda);


// Función isNaN (NaN = Not at Number)
// Devuelve True: Si el valor que tiene dentro NO es un número.
// Devuelve False: Si el valor que tiene dentro SI es un número.

console.log(isNaN(5));
console.log(isNaN("TEXTO"));
console.log(isNaN(true));