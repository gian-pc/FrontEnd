import { URL_BACKEND } from "../environment/environment";

export const getMesas = async () => {
  const response = await fetch(`${URL_BACKEND}/mesas`);
  const json = await response.json();
  return json;
};
