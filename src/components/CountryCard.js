import React from "react";
import "./CountryCard.css";
// crio uma funcao repassando todos esses requisitos (nome, capital, etc)
function CountryCard({ nome, capital, populacao, bandeira }) {
  return (
    // crio a div retornando a imagem da banceira e o nome do pais mais os outros requisitos juntos também
    <div className="country-card"> 
      <img src={bandeira} alt={`Bandeira de ${nome}`} />
      <h2>{nome}</h2>
      <p><strong>Capital:</strong> {capital}</p>
      <p><strong>População:</strong> {populacao.toLocaleString()}</p>
    </div>
  );
}

export default CountryCard;
