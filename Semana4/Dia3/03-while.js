// While
let c = 0;

while (c < 8) {
  console.log(c);
  c++;
}



let base = +prompt("Ingrese la base de Tabla Multiplicar");
let contador = 0;
console.log(`------  Tabla de Multiplicar del ${base}  ------`);
while (contador <= 12) {
  console.log(`${base} x ${contador} = ${base * contador}`);
  contador++;
}
