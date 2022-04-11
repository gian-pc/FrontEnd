import React, { useEffect, useState } from "react";
import { MDBDataTable } from "mdbreact";
import { getMesas } from "../../../services/mesas";

const MesasTabla = () => {
  const [mesas, setMesas] = useState([]);

  useEffect(() => {
    getMesas().then((rpta) => {
      setMesas(rpta);
    });
  }, []);

  const eliminarMesaById = (mesa_id) => {
    console.log(`Eliminando ${mesa_id}`);
  };

  const editarMesaById = () => {};

  const data = {
    columns: [
      {
        label: "ID",
        field: "mesa_id",
      },
      {
        label: "Nro mesa",
        field: "mesa_nro",
      },
      {
        label: "Capacidad",
        field: "mesa_cap",
      },
      {
        label: "Acciones",
        field: "mesa_acciones",
      },
    ],
    rows: mesas.map((objMesa) => {
      return {
        ...objMesa,
        mesa_cap: objMesa.mesa_cap + " personas",
        mesa_acciones: (
          <>
            <button
              className="btn btn-danger"
              onClick={()=>{
                eliminarMesaById(objMesa.mesa_id)
              }}
            >
              Eliminar
            </button>
            <button className="btn btn-warning ms-2">Editar</button>
          </>
        ),
      };
    }),
  };

  return (
    <div className="row mt-4">
      <div className="col">
        <div className="card shadow">
          <div className="card-body">
            <MDBDataTable striped bordered hover data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MesasTabla;
