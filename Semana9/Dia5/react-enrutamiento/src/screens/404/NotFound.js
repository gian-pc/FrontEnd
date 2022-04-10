import React from "react";
import { Link } from "react-router-dom";

const NotFound = (props) => {
//   setTimeout(() => {
//     props.history.push("/");
//   }, 3000);

//   const goHome = () => {
//     props.history.push("/");
//   };

  return (
    <div>
      PAGINA NO ENCONTRADA 😥
      {/* <button onClick={goHome}>Regresar al Inicio</button> */}
      <p>
          <Link to="/">Go Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
