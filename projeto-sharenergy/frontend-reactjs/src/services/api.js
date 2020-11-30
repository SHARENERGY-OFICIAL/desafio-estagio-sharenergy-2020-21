import axios from "axios";

const api = axios.create({
  baseURL:
    "https://raw.githubusercontent.com/SHARENERGY-OFICIAL/desafio-estagio-sharenergy-2020-21/main/dadosUsina.json",
});

export default api;
