import React from "react";
import "./estilos/login.css";
import logo from "../img/logo.png";
const NotFound = () => {
  document.title = "Erro 404 | Loja IO";
  return (
    <>
      <div className="log_container">
        <br />
        <br />
        <br />
        <br />
        <center>
          <img src={logo} style={{ height: "4em" }} alt="" />
        </center>
        <br />
        <center>
          <h1>Erro 404 </h1>
          <p>Pagina não encontrada ou em contrução !</p>


            <br />
            <a href="/" className="btn btn-outline-primary">Inicio</a>
        </center>
        
      </div>
    </>
  );
};
export default NotFound;
