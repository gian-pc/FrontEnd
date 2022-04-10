import axios from "axios";

const URL = "https://6251c4f469af39728b4833d0.mockapi.io";

export const getCategorias = async () => {
  //   let response = fetch(`${URL}/categorias`);

  let response = await axios.get(`${URL}/categorias`);
  return response;
};

export const postPlato = async (objPlato) => {
  let response = await axios({
    method: "POST",
    data: {
      ...objPlato,
      plato_pre: +objPlato.plato_pre,
    },
    url: `${URL}/platos`,
    headers: {
      "Content-type": "application/json",
    },
  });
  return response;
};
