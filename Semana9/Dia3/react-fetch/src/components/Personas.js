import React, { useEffect, useState } from "react";
import Persona from "./Persona";

const Personas = ({ setPersonaSeleccionada}) => {
  const [personas, setPersonas] = useState([]);

  const getPersonas = async () => {
      console.log("FETCH");
    let response = await fetch("https://reqres.in/api/users");
    let json = await response.json();

    return json.data;
  };

  useEffect(() => {
    getPersonas().then((arregloPersonas) => {
      setPersonas(arregloPersonas);
    });
  }, []);

  return (
    <div className="col-md-8">
      <div className="row">
        {personas.map((objPersona) => {
          return (
            <Persona
              objPersona={objPersona}
              key={objPersona.id}
              setPersonaSeleccionada={setPersonaSeleccionada}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Personas;
