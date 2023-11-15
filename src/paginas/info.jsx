import React, { useEffect, useState } from "react";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import { BsLockFill } from "react-icons/bs";
import addToast, { useToasts } from "react-toast-notifications";

const InformacoesEntrega = ({ prevStep, setInformacoesEntrega, nextStep }) => {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [pais, setPais] = useState("");

  const { addToast } = useToasts();

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
      addToast("Por favor preencha as informações de entrega", {
        appearance: "warning",
        autoDismiss: true,
      });

      // alert("Por favor, preencha todos os campos.");
    }
  };

  const [paises, setPaises] = useState([]);

  useEffect(() => {
    const fetchPaises = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setPaises(data);
      } catch (error) {
        console.error("Erro ao buscar países:", error);
      }
    };

    fetchPaises();
  }, []);

  return (
    <div className="estilo-final">
      <div className="cardd infoo py-4 px-4 bg-white rounded-4 shadow">
        <center>
          <img src={logo} className="mb-2" style={{ height: "2em" }} alt="" />
        </center>
        <h4 className="w-100">Informações de Entrega</h4>
        <form>
          <label>
            <span>Nome Completo</span>
            <input
              className="form-control rounded-3 rounded-3 shadow-sm"
              type="text"
              value={nomeCompleto}
              onChange={(e) => setNomeCompleto(e.target.value)}
            />
          </label>

          <label>
            <span>Endereço:</span>
            <input
              className="form-control rounded-3 rounded-3 shadow-sm"
              type="text"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </label>
          <label>
            <span> Email:</span>
            <input
              className="form-control rounded-3 rounded-3 shadow-sm"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span>Telefone:</span>
            <input
              className="form-control rounded-3 rounded-3 shadow-sm"
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </label>
          <label>
            <span> País:</span>
            <select
              className="form-control rounded-3 rounded-3 shadow-sm"
              onChange={(e) => setPais(e.target.value)}
            >
              <option value="">Selecione um país</option>
              {paises.map((pais) => (
                <option key={pais.cca2} value={pais.name.common}>
                  {pais.name.common}
                </option>
              ))}
            </select>
          </label>
        </form>

        <div className="">
          <div className="d-flex mt-3 justify-content-between">
            <button onClick={prevStep} className="btn btn-outline-primary">
              Anterior
            </button>
            <button className="btn btn-primary" onClick={handleNext}>
              {" "}
              Próximo
            </button>
          </div>

          <br />

          <div className="d-flex mt-1 mb-1 info justify-content-end">
            <span className="secure">
              <span className="my-auto">
                <BsLockFill />
              </span>
              <span className="my-auto">Secure connection</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformacoesEntrega;
