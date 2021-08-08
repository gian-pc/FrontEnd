// window.document
// documen => Objeto que sirve para manipular el DOM

// Propiedades más importantes

/**
 * document.getElementById("id_del_elemento"); => obtiene en una variable
 * la referencia a un elemento del DOM
 */

let header = document.getElementById("header");
// header es un objeto de la clase Element
console.log(header);

/**
 * document.getElementsByClassName("nombre_de_la_clase");
 * retorna un HTMLCollection(similar a un arreglo) de elementos
 * que tengan la clase pasada como parámetro
 */
let secciones = document.getElementsByClassName("miseccion");
console.log(secciones);

console.log("Cantidad de secciones");
console.log(secciones.length);

// Transformar el HTMLCollection en un array
console.log("------ Convirtiendo en Array --------");
let seccionesArreglo = Array.from(secciones);
console.log(seccionesArreglo);

console.log("-------- Iterando -------");
seccionesArreglo.forEach((seccion) => {
  console.log(seccion);
});

/**
 * document.querySelector("selector_de_un_elemento")
 * Retorna un elemento del DOM dado un selector al estilo CSS
 * Por ejemplo .rojo => un elemento con la clase "rojo"
 * Por ejemplo #seccion1 => un elemento con el id "seccion1"
 * OJO: querySelector sólo devuelve 1 elemento
 */
console.log("---------- querySelector ----------");
let footerApp = document.querySelector("#footerApp");
console.log(footerApp);

let divsFooter2 = document.querySelector(".footerApp__seccion");
console.log(divsFooter2);

/**
 * document.querySelectorAll("selector_de_uno_o_mas_elementos");
 * Retorna una colección de elementos del DOM dado un selector como en CSS
 */
console.log("------- querySelectorAll --------");
let divsFooter = document.querySelectorAll(".footerApp__seccion");
console.log(divsFooter);

console.log("------ forEach ----");
divsFooter.forEach((div) => {
  console.log(div);
});

let navegacion = document.querySelectorAll("#navegacion");
console.log(navegacion);
