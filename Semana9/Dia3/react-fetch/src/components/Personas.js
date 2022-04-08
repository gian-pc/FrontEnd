import React, { useState } from "react";
import Persona from "./Persona";

const Personas = () => {
  const [personas, setPersonas] = useState([]);

  const getPersonas = async () => {
    let response = await fetch("https://reqres.in/api/users");
    let json = await response.json();

    setPersonas(json.data);
  };

  getPersonas();

  return (
    <div className="col-md-8">
      {personas.map((persona) => {
        return <Persona />;
      })}
    </div>
  );
};

export default Personas;
