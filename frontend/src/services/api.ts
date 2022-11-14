import axios from "axios";

const api = (token?: string) =>
  axios.create({
    baseURL: "http://localhost:3333",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

const apiIBGE = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
  headers: {
    "Content-Type": "application/json",
  },
});

export { api, apiIBGE };
