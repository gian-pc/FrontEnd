import { URL_BACKEND_HEROKU } from "../environment/environment";

export const getPedidos = async () => {
  const response = await fetch(`${URL_BACKEND_HEROKU}/pedido`);
  const json = response.json();
  return json;
};
