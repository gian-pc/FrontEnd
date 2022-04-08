// 1
/**
 * Funcion que retorna el número de casos de personas
 * infectadas en el mundo
 */
const getTotalDeCasosEnElMundo = () => {
  let totalInfectados = 0;
  for (let i = 0; i < covid.length; i++) {
    totalInfectados = totalInfectados + covid[i].cases;
  }
  return totalInfectados;
};
let total = getTotalDeCasosEnElMundo();
// console.log(`Total de infectados en el Mundo ${total}`);

// 2
/**
 * Funcion que retorna un objeto completo de cifras
 * de un pais dado su nombre, en caso no encuentre el pais
 * RETORNAR NULL
 * @param {*} pais
 */
const getCifrasByNamePais = (pais) => {
  for (let i = 0; i < covid.length; i++) {
    if (covid[i].country === pais) {
      return covid[i];
    }
  }
  return null;
};
let pais = getCifrasByNamePais("Indiah");
// console.log(pais);

// 3
/**
 * Funcion que retorna el porcentaje de casos de personas
 * recuperadas frente al total de casos en un pais
 *
 * Para ello se debe proporcionar  el nombre del pais.
 * Para buscar un país, se debe hacer uso de la función del
 * ejercicio 2 (OBLIGATORIO)
 * @param {*} pais
 */
const getPorcentajeDeRecuperadosByNamePais = (pais) => {
  for (let i = 0; i < covid.length; i++) {
    if (covid[i].country === pais) {
      console.log(`País: ${covid[i].country}`);
      let recovered = (covid[i].recovered / covid[i].cases) * 100;
      return recovered;
    }
    return null;
  }
};
// let recuperados = getPorcentajeDeRecuperadosByNamePais("USA");
// console.log(recuperados);
// console.log(`Recuperados ${recuperados.toFixed(1)} %`);



// 4
/**
 * Función que retorna un arreglo de todos los países con el siguiente
 * objeto como estructura
 * [{
 *  pais:"nombre del país",
 *  pruebasRealizadas:50000,
 *  pruebasPositivas:25000,
 *  porcentajePruebas:50
 * }]
 * implica que cada país debe mostrar el porcentaje de casos positivos
 * frente al total de pruebas realizadas
 */
const generarArrayPorcentajeDePruebasPositivas = () => {};
