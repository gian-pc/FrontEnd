// arreglo.forEach((=>{}))
/**
 * El callback se ejecuta tantas veces como elementos
 * tenga el arreglo, el callback recibe hasta 3 elementos
 * (elemento_actual, iteracion?, copia_del arreglo?)=>{}
 */
// ? significa que ese parámetro es opcional
// peliculas.forEach((peli) => {
//   console.log(peli);
// });

let arreglo = ["Jorge", "Luis", "Karla", "Jane"];

// const iteracion = (elemento) => {
//   console.log(elemento);
// };

arreglo.forEach((elemento) => {
  console.log(elemento);
});

// Recorriendo peliculas

peliculas.forEach((objPelicula, index) => {
  console.log(`${index}: ${objPelicula.title}`);
  // Desventaja: No se pueden retornar elementos
  // de la funcion ForEach
});

console.log("----------  FILTER ---------");
// filter
/**
 * Funcion de los arreglos que recibe un callback en el cual
 * se pueden RETORNAR un ARREGLO de elementos de acuerdo a ciertas condiciones
 * Sirve como un filtro de elementos
 * Ejecuta el callback tantas veces como elementos tenga
 * (elemento_actual, iteracion?, copia_del arreglo?)=>{}
 */

let numeros = [20, 1, 7, 82, 6, 9, 32, 10, 0, 45];

let mayoresIgualesQueDiez = numeros.filter((elemento, i, arreglo) => {
  if (elemento >= 10) {
    return elemento;
  }
});

console.table(mayoresIgualesQueDiez);

let peliculasExtranjeras = peliculas.filter((objPelicula) => {
  if (objPelicula.original_language !== "en") {
    return objPelicula;
  }
});

console.log(peliculasExtranjeras);
