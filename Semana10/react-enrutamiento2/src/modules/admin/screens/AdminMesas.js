import React, { useEffect, useState } from "react";
import { getMesas } from "../../../services/mesas";
import MesasFormulario from "../components/MesasFormulario";
import MesasTabla from "../components/MesasTabla";

const AdminMesas = () => {
  const [mesas, setMesas] = useState([]);

  const [loading, setLoading] = useState(true);

  const obtenerMesas = () => {
    getMesas().then((rpta) => {
      setMesas(rpta);
      setLoading(false);
    });
  };

  useEffect(() => {
    obtenerMesas();
  }, []);

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <h1 className="text-center">Mantenimiento de Mesas</h1>
        </div>
      </div>
      <MesasFormulario obtenerMesas={obtenerMesas} />
      <MesasTabla mesas={mesas} loading={loading} obtenerMesas={obtenerMesas} />
    </>
  );
};

export default AdminMesas;
