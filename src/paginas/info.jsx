import React, { useState } from "react";

const InformacoesEntrega = ({ prevStep, setInformacoesEntrega, nextStep }) => {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [pais, setPais] = useState("");

  const handleNext = () => {
    // Verifique se todos os campos estão preenchidos antes de avançar
    if (nomeCompleto && endereco && email && telefone && pais) {
      setInformacoesEntrega({
        nomeCompleto,
        endereco,
        email,
        telefone,
        pais,
      });
      nextStep();
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div>
      <h4>Informações de Entrega</h4>
      <form>
        <label>
          Nome Completo:
          <input type="text" value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} />
        </label>
        <label>
          Endereço:
          <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Telefone:
          <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        </label>
        <label>
          País:
          <input type="text" value={pais} onChange={(e) => setPais(e.target.value)} />
        </label>
      </form>
      <button onClick={prevStep}>Anterior</button>
      <button onClick={handleNext}>Próximo</button>
    </div>
  );
};

export default InformacoesEntrega;
