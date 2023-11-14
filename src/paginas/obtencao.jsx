import React, { useState } from "react";

const MetodoObtencao = ({ nextStep , setMetodoObtencao }) => {
  const [metodo, setMetodo] = useState("");

  const handleNext = () => {
    if (metodo) {
      nextStep();
      setMetodoObtencao(metodo);
    } else {
      alert("Por favor, escolha um método de obtenção.");
    }
  };

  return (
    <div>
      <h4>Como pretende obter os produtos?</h4>
      <label>
        <input
          type="radio"
          value="encomendar"
          checked={metodo === "encomendar"}
          onChange={() => setMetodo("encomendar")}
        />
        Encomendar
      </label>
      <label>
        <input
          type="radio"
          value="levantamento"
          checked={metodo === "levantamento"}
          onChange={() => setMetodo("levantamento")}
        />
        Fazer levantamento
      </label>
      <button onClick={handleNext}>Próximo</button>
    </div>
  );
};

export default MetodoObtencao;
