import axios from "axios";
// consumindo minha api countries
const api = axios.create({
  baseURL: "https://restcountries.com/v3.1", 
});

export default api;
