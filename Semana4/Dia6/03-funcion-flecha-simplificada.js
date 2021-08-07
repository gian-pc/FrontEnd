// Regla 1: Si la función sólo tiene una linea de ejecución
//  se puede omitir las llaves "{}"

const sumar = (a, b) => console.log(a + b);
sumar(3, 2);

// Regla 2: Si la función recibe un parámetro, se pueden omitir los paréntesis

const cuadrado = (numero) => console.log(numero * numero);
cuadrado(12);

// Regla 3: Si la función sólo tiene una linea de ejecución y a su vez retorna un valor
// se puede obviar la palabra reservada 'return' y en su lugar encerrar
//  el retorno en un paréntesis

const cubo = (n) => n * n * n;
console.log(cubo(5));
