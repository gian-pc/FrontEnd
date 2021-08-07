// Un objeto es un elemento que abstrae caracteristicas
// o atributos en comun o que guardan relación

// ¿Cómo se crea?

let objPersona = {
	nombre: "Gian",
	apellido: "Paucar",
	edad: 38,
	peso: 70,
	casado: false,
};
// Forma1 de acceder a los atributos (más usada)
console.log(objPersona.nombre);
// Forma2 de acceder a los atributos
console.log(objPersona["apellido"]);

// Forma 1 de modificar un atributo
objPersona.casado = true;
objPersona.peso = 65;

console.log(objPersona);

// Forma 1 de crear nuevos atributos a un objeto
objPersona.platosFavoritos = ["Ceviche", "Causa", "Tallarines"];
console.log(objPersona);

for (let i = 0; i < objPersona.platosFavoritos.length; i++) {
	console.log(objPersona.platosFavoritos[i]);
}

// ---------------------------------------------------
console.log("-------------------------------------------------------------");

let productos = [
	{
		nombre: "Tv Samsung 50",
		precio: 8000.0,
		codigo: "10101",
		coloreDisponibles: ["Azul", "Plomo", "Blanco", "Negro"],
	},
	{
		nombre: "Tv Samsung 42",
		precio: 7000.0,
		codigo: "10102",
		coloreDisponibles: ["Azul", "Plomo"],
	},
	{
		nombre: "Tv Samsung 39",
		precio: 6000.0,
		codigo: "10103",
		coloreDisponibles: ["Azul"],
	},
	{
		nombre: "Tv Samsung 25",
		precio: 5000.0,
		codigo: "10104",
		coloreDisponibles: [],
	},
];

for (let i = 0; i < productos.length; i++) {
	console.log(`---- Producto ${i + 1} ----`);
	console.log(`Nombre: ${productos[i].nombre}`);
	console.log(`Nombre: ${productos[i].precio}`);
	console.log(`Nombre: ${productos[i].codigo}`);
	console.log(`Colores Disponibles`);
	for (let j = 0; j < productos[i].coloreDisponibles.length; j++) {
		console.log(productos[i].coloreDisponibles[j]);
	}
}
