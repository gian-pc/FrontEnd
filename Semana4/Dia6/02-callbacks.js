// const buscarPorDni = (x) => {
//   x();
// };
// const mostrarResultado = () => {
//   console.log("Mostrando Resultado");
// };
// buscarPorDni(mostrarResultado);

const buscarPorDni = (dni, callback) => {
  //conecto a la BD
  // hago la consulta del DNI
  // RETORNO LA INFORMACIÓN A LA PERSONA

  let nombreEncontrado = "-------";
  setTimeout(function () {
    console.log("Buscando en la BD");
    nombreEncontrado = "Gian Paucar";
    callback(nombreEncontrado);
  }, 2000);
};
buscarPorDni("42151496", (nombre) => {
  console.log(nombre);
});
