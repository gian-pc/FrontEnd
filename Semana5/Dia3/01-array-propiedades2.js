/**
 * Devuelve un arreglo de las misma cantidad de elementos del arreglo
 * original con las transformaciones que el usuario le haga a cada elemento
 * A diferencia del filter, la función Map no puede retornar menos elementos
 */
console.log("---------- Map ---------");

let nombres = ["Joaquin", "Maria", "Thamara", "Allison", "Jorge"];

let nombresMayuscula = nombres.map((name, i) => {
  if (i % 2 === 0) {
    return {
      original: name,
      minuscula: name.toLowerCase(),
      mayuscula: name.toUpperCase(),
    };
  }
});
console.log(nombresMayuscula);
// Nota: no sirve para pober una condicional

console.log("----------- SPLICE ----------");
// array.splice(posicion_inicial,elementos_a_eliminar,elementos_a_insertar)

let productos = [
  "TV Samsung",
  "Tablet Android",
  "Laptop Razer",
  "Smartphone Xiaomi",
];
// A partir de la posicion 1, eliminar 1 elemento
productos.splice(1, 1);
console.log(productos);

// A partir de la posicion 0, insertar 1 elemento
productos.splice(0, 1, "PC Gamer");
console.log(productos);

// A partir de la posicion 2, no eliminar elementos e insertar 2 elementos nuevos
productos.splice(2, 0, "Mouse HyperX", "Audifonos Razer");
console.log(productos);

// --------indexOf-------------
console.log("------- indexOf --------");
let posicionMouse = productos.indexOf("Mouse HyperX");
console.log("Posición del mouse:");
console.log(posicionMouse);

// ------------ pop ---------
/**
 * Sirve para extraer el último elemento de un arreglo
 * la función además, retorna dicho elemento
 */
console.log("-------- POP ---------");
let elementoEliminado = productos.pop();
console.log(`Eliminaste: ${elementoEliminado}`);
console.log(productos);
