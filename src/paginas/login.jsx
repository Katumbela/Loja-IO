import React from "react";
import "./estilos/login.css";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="log_container">
        <NavLink to="/" className="voltar"> <i className="bi bi-arrow-left"></i> Voltar </NavLink>
        <div className="card-login">
          <center>
            <img src={logo} style={{ height: "3em" }} alt="" />
            <br />
            <span>Sua Conta</span>
            <br />
          </center>

          <div className="row">
            <div className="col-12 my-3 col-md-12">
              <input
                type="text"
                name=""
                placeholder="Insira seu email"
                id=""
                className="form-control"
              />
            </div>

            <div className="col-12 my-3 col-md-12">
              <input
                type="text"
                name=""
                placeholder="Insira sua senha"
                id=""
                className="form-control"
              />
            </div>

            <div className="col-12 mb-3 mt-4 col-md-12">
            
            <button className="btn btn-primary w-100">Entrar </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
