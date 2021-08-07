const buscarPorDni = (dni, callback) => {
  // conexión DB
  // consulta DNI
  // retorna información

  let nombreEncontrado = "--------";

  setTimeout(function () {
    console.log("Buscando en la base de datos");
    nombreEncontrado = "Gian Carlos";
    callback(nombreEncontrado);
  }, 2000);
  return nombreEncontrado;
};

let x = buscarPorDni("42151496", (nombre) => {
  console.log(nombre);
});

console.log(x);
