let objPeru = {
  gentilicio: "Peruano",
  zonaHoraria: "GMT - 05:00",
  departamentos: [
    {
      nombre: "Puno",
      gentilicio: "Puneño",
    },
    {
      nombre: "Tarapoto",
      gentilicio: "Tarapotino",
    },
  ],
};
console.log(`Total Dptos: ${objPeru["departamentos"].length}`);
console.log(`Total Dptos: ${objPeru.departamentos.length}`);

console.log(`Departamentos`);
for(i = 0; i<objPeru.departamentos.length; i++){
  
  console.log(`Nombre: ${objPeru.departamentos[i].nombre}`);

}
