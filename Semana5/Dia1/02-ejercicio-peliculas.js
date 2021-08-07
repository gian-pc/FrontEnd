// 1
/**
 * Retorna un OBJETO PELICULA en caso encuentre la pelicula
 * que el usuario busca segun el nombre
 * en caso contrario, se retorna null
 * @param {string} nombre
 */
const getPeliculasByName = (nombre) => {
  for (let i = 0; i < data.peliculas.length; i++) {
    if (data.peliculas[i].title === nombre) {
      return data.peliculas[i];
    }
  }
  return null;
};
let peliculas = getPeliculasByName("Lucas");
// console.log(peliculas);

// 2
/**
 * Función que retorna una lista de Peliculas que tienen
 * menos de 200 votos ( en la propiedad vote_count)
 * En caso de no tener peliculas con menos de 200 votos
 * retornar un arreglo vacío.
 */

const getMenosVotadas=()=>{
    for (let i = 0; i < data.peliculas.length; i++) {
   
       return data.peliculas[i];
    }
}

let menosVotadas = getMenosVotadas();
console.log(menosVotadas);

/**
 * Funcion que retorna el NÚMERO DE PELÍCULAS cuyos lenguajes originales
 * NO SEAN EN INGLÉS
 */