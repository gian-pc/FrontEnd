let tienda = {
	nombre: "Capricho",
	categoria: "postres",
	descripcion: "Tienda de postres arequipeños",
	sucursales: [
		{
			nombre: "Capricho Mercaderes",
			telefono: "123456789",
		},
		{
			nombre: "Capricho Lambramani",
			telefono: "987654321",
		},
		{
			nombre: "Capricho EEUU",
			telefono: "123764646",
		},
	],
};

console.log(`------ CAPRICHO ------`);
console.log(`Nombre: ${tienda.nombre}`);
console.log(`Categoria: ${tienda.categoria}`);
console.log(`Descripcion: ${tienda.descripcion}`);
console.log("Sucursales:");
for (let i = 0; i < tienda.sucursales.length; i++) {
	console.log(`-------------------------`);
	console.log(`Sucursal ${i + 1}`);
	console.log(`Nombre ${tienda.sucursales[i].nombre}`);
	console.log(`Nombre ${tienda.sucursales[i].telefono}`);

	console.log(`-------------------------`);
}
