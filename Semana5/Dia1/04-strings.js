let frase = "Agua que no has de beber Dejala Correr";
let cantidadLetras = frase.length;
console.log(`Cantidad de caracteres: ${cantidadLetras}`);

/**
 * string.toLowerCase()
 * retorna una copia de la cadena de texto, convertida a minúscula
 */

let minuscula = frase.toLowerCase();
console.log(minuscula);

/**
 * string.toUpperCase()
 * retorna una copia de la cadena de texto, convertida en mayúscula
 */

let mayuscula = frase.toUpperCase();
console.log(mayuscula);

/**
 * string.substr(posición_inicial,cantidad_de_caracteres_desde_posicion_inicial)
 * Retorna una subcadena dada una posicion inicial y una cantidad de caracteres
 * a partir de dicha posición inicial.
 */

let subcadena = frase.substr(2, 10);
console.log(subcadena);

/**
 * string.substring(posicion_inicial, posicion_final)
 * retorna una subcadena dada una posicion inicial y una posicion final
 * ATENTION: la última posicion no es considerada dentro de la subcadena de respuesta
 */

let subcadenaInicioFin = frase.substring(8, 12);
console.log(subcadenaInicioFin);

/**
 * string.includes("subcadena_buscada")
 * Retorna true si la "subcadena_buscada" existe en el string
 * Retorna false si no existe
 */

let existeBEBER = frase.includes("BEBER");
console.log(`¿BEBER está incluída?: ${existeBEBER}`);

/**
 * string.indexOf("subcadena")
 * Retorna la posicion inicial de la "subcadena buscada"
 * Si la "subcadena" no existe se retorna -1
 */

let posicionPalabraCadena = frase.indexOf("cadena");
console.log(posicionPalabraCadena);

/**
 * string.trim()
 * retorna una copia de la cadena
 * SIN LOS ESPACIOS EN BLANCO a los extremos de dicha cadena
 * si la cadena tiene espacios intermedios, no los borra
 */

let fraseConEspacios = "   ups!    ";
console.log(fraseConEspacios);
console.log(fraseConEspacios.trim());
