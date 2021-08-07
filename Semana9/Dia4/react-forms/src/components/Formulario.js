import React, { useState } from "react";

const Formulario = () => {
	const [form, setForm] = useState({
		nombre: "",
		apellido: "",
		pais: "",
	});

	const [error, setError] = useState(false);

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { apellido, nombre, pais } = form;
		if (nombre !== "" && apellido !== "" && pais !== "") {
			//si todos los campos tienen un valor correcto
			setError(false);
			setForm({
				nombre: "",
				apellido: "",
				pais: "",
			});
			console.log("Bien FORMULARIO CORRECTO");
			return;
		}
		setError(true);
	};

	return (
		<form onSubmit={handleSubmit}>
			{error === true ? (
				<div className="alert alert-danger">
					<strong>Ey!</strong>Todos los campos deben ser llenados
				</div>
			) : null}

			<div className="form-group">
				<label htmlFor="">Nombre:</label>
				<input
					type="text"
					className="form-control"
					name="nombre"
					onChange={handleChange}
					value={form.nombre}
				/>
			</div>

			<div className="form-group">
				<label htmlFor="">Apellido:</label>
				<input
					type="text"
					className="form-control"
					name="apellido"
					onChange={handleChange}
					value={form.apellido}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="">País de residencia:</label>
				<select
					className="form-control"
					name="pais"
					value={form.pais}
					onChange={handleChange}
				>
					<option value="">---Seleccione País---</option>
					<option value="01">Perú</option>
					<option value="02">Bolivia</option>
					<option value="03">Uruguay</option>
				</select>
			</div>
			<div className="form-group">
				<button className="btn btn-primary" type="submit">
					Registrarse
				</button>
			</div>
		</form>
	);
};

export default Formulario;
