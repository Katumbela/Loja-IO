import React, { useState } from "react";
import "./estilos/obtencao.css";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import { BsLock, BsLockFill } from "react-icons/bs";

import addToast, { useToasts } from 'react-toast-notifications'

import Swal from "sweetalert2";

const MetodoObtencao = ({ nextStep, setMetodoObtencao }) => {
  const [metodo, setMetodo] = useState("");

  const { addToast } = useToasts();

  const handleNext = () => {
    if (metodo) {
      nextStep();
      setMetodoObtencao(metodo);
    } else {

      addToast("Por favor, escolha uma forma de obtenção!", {
        appearance: "warning",
        autoDismiss: true,
      });
      // Swal.fire("Ups !","Por favor escolha uma forma de obtenção", "warning");
    
    }
  };

  return (
    <div className="estilo-final">
      <NavLink
        className={"cancel btn btn-outline-primary rounded-pill"}
        to={"/"}
      >
        Cancelar
      </NavLink>

      <div className="cardd py-4 px-5 rounded-4 shadow">
        <center>
          <img src={logo} alt="" style={{ height: "3em" }} />
        </center>
        <h4 className="me-5 pe-5 py-3">Como deseja obter ?</h4>
        <label>
          <input
            type="radio"
            value="encomendar"
            className="radio-input"
            checked={metodo === "encomendar"}
            onChange={() => setMetodo("encomendar")}
          />
          <span>Encomendar</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="levantamento"
            className="radio-input"
            checked={metodo === "levantamento"}
            onChange={() => setMetodo("levantamento")}
          />
          <span> Fazer levantamento</span>
        </label>
        <br />
        <div className="text-end">
          <button className="btn btn-primary" onClick={handleNext}>
            Próximo
          </button>
          <br />
          <div className="d-flex mt-3 mb-1 info justify-content-between">
            <NavLink to={"/"} className="back">
              Cancelar
            </NavLink>
            <span className="secure">
              <span className="my-auto">
                <BsLockFill />{" "}
              </span>
              <span className="my-auto">Secure connection</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetodoObtencao;
