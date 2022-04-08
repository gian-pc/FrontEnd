import React from "react";
import Persona from "./Persona";

const PersonaDetalle = ({ personaSeleccionada }) => {
    console.log(personaSeleccionada)
  
  return personaSeleccionada ? (
    <Persona objPersona={personaSeleccionada}/>
  ) : (
    <div className="col-md-4">Seleccione una persona</div>
  );
};

export default PersonaDetalle;
