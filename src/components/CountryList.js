import React, { useEffect, useState } from "react";
import api from "../services/api";
import CountryCard from "./CountryCard";

function CountryList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // aqui eu pego todo o conteudo da api country e apresento ela com o nome, capital, populacao e bandeira
    api.get("/all").then((response) => {
      const data = response.data.slice(0, 10).map((country) => ({
        nome: country.name.common,
        capital: country.capital?.[0] || "N/A",
        populacao: country.population,
        bandeira: country.flags.png,
      }));
      // apresento os dados da api
      setCountries(data);
    });
  }, []);

  return ( 
    <div>
      {countries.map((country) => (
        <CountryCard key={country.nome} {...country} />
      ))}
    </div>
  );
}

export default CountryList;
