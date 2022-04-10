import React from "react";
import FormCrearPlato from "./components/FormCrearPlato";
import Formulario from "./components/Formulario";

const App = () => {
  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col">
            <FormCrearPlato/>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
