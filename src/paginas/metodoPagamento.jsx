import React, { useState } from "react";
import { BsLockFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import logo from '../img/logo.png'
import addToast, { useToasts } from 'react-toast-notifications'

const MetodoPagamento = ({ prevStep, nextStep, setMetodoPagamento }) => {
  const [metodoPagamentoLocal, setMetodoPagamentoLocal] = useState("");

  const { addToast } = useToasts();
  const handleNext = () => {
    if (metodoPagamentoLocal) {
      nextStep();
      setMetodoPagamento(metodoPagamentoLocal);
    } else {
      addToast("Por favor, escolha um método de pagamento", {
        appearance: "warning",
        autoDismiss: true,
      });
      // Swal.fire("Ups !", "Por favor escolha um método de pagamento", "warning");
    }
  };

  return (
    <div className="estilo-final">
      <NavLink
        className={"cancel btn btn-outline-primary rounded-pill"}
        to={"/"}
      >
        {" "}
        Cancelar{" "}
      </NavLink>
      <div className="cardd rounded-3 shadow py-4 px-5">
        
        <center><img src={logo} className="mb-3 mt-1" style={{height:'3em'}} alt="" /></center>
        
        <h4>Escolha o método de pagamento:</h4>

        <label>
          <input
            type="radio"
            name="metodoPagamento"
            checked={metodoPagamentoLocal === "Transferencia" ? true : false}
            onChange={() => setMetodoPagamentoLocal("Transferencia")}
          />
          <span>Transferência</span>
        </label>

        <br />
        <label>
          <input
            type="radio"
            name="metodoPagamento"
            checked={metodoPagamentoLocal === "Deposito" ? true : false}
            onChange={() => setMetodoPagamentoLocal("Deposito")}
          />
          <span>Depósito</span>
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="metodoPagamento"
            value="Cash"
            checked={metodoPagamentoLocal === "Cash" ? true : false}
            onChange={() => setMetodoPagamentoLocal("Cash")}
          />
         <span> Cash</span>
        </label>

        <div className="text-end">
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

          <div className="d-flex mt-1 mb-1 info justify-content-between">
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

export default MetodoPagamento;
