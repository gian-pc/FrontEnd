import { URL_BACKEND } from "../environment/environment";

//GIAN: Solicitando mesas
export const getMesas = async () => {
  const response = await fetch(`${URL_BACKEND}/mesas`);
  const json = await response.json();
  return json;
};

//GIAN: Eliminando mesas
export const deleteMesaById = async (mesa_id) => {
  const response = await fetch(`${URL_BACKEND}/mesas/${mesa_id}`, {
    method: "DELETE",
  });
  const json = await response.json();
  return json;
};

//GIAN: Enviando mesas de MesasTabla --> MesasFormulario
export const postMesa = async (objMesa) => {
  const response = await fetch(`${URL_BACKEND}/mesas`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(objMesa),
  });
  const json = await response.json();
  return json;
};


//GIAN: Editando Mesas
export const putMesaById = async (objMesa) => {
  const response = await fetch(`${URL_BACKEND}/mesas/${objMesa.mesa_id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(objMesa),
  });
  const json = await response.json();
  return json;
};
