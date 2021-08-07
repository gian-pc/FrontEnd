import React, { useState } from "react";
import Header from "./components/Header";
import PersonaDetalle from "./components/PersonaDetalle";
import Personas from "./components/Personas";

const App = () => {
	const [personaSeleccionada, setPersonaSeleccionada] = useState(null);
	return (
		<>
			<Header />
			<main className="container-fluid mt-5">
				<div className="row">
					<Personas setPersonaSeleccionada={setPersonaSeleccionada} />
					<PersonaDetalle personaSeleccionada={personaSeleccionada} />
				</div>
			</main>
		</>
	);
};

export default App;
