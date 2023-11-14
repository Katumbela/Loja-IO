import React, { useState } from "react";

const MetodoPagamento = ({ prevStep, nextStep, setMetodoPagamento }) => {
  const [metodoPagamentoLocal, setMetodoPagamentoLocal] = useState("");

  const handleNext = () => {
    if (metodoPagamentoLocal) {
      nextStep();
      setMetodoPagamento(metodoPagamentoLocal);
    } else {
      alert("Por favor, escolha um método de pagamento.");
    }
  };

  return (
    <div>
      <h4>Escolha o método de pagamento:</h4>
      
      <label>
        <input
          type="radio"
          name="metodoPagamento"
          checked={metodoPagamentoLocal === "Transferencia" ? true : false}
          onChange={() => setMetodoPagamentoLocal("Transferencia")}
        />
        Transferências
      </label>


      <label>
        <input
          type="radio"
          name="metodoPagamento"
          checked={metodoPagamentoLocal === "Deposito" ? true : false}
          onChange={() => setMetodoPagamentoLocal("Deposito")}
        />
        Depósito
      </label>


     {/* 
      <label>
        <input
          type="radio"
          name="metodoPagamento"
          value="deposito"
          checked={metodoPagamentoLocal === "deposito"}
          onChange={() => setMetodoPagamentoLocal("Depósito")}
        />
        Depósito
      </label> */}

      <label>
        <input
          type="radio"
          name="metodoPagamento"
          value="Cash"
          checked={metodoPagamentoLocal === "Cash" ? true : false}
          onChange={() => setMetodoPagamentoLocal("Cash")}
        />
        Cash
      </label>

      <button onClick={prevStep}>Anterior</button>
      <button onClick={handleNext}>Próximo</button>
    </div>
  );
};

export default MetodoPagamento;
