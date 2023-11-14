import React from "react";
import "./estilos/sobre.css";
import logo from "../img/logo.png";

const Termos = () => {
  return (
    <div className="container">
      <div className="sobre">
        <h2>Termos de uso e compra</h2>
        <br />
        <div className="row">
          <div className="col-12 col-sm-10">
            <p>
              Bem-vindo á nossa loja online de electrônicos! Somos uma empresa
              que nasceu da paixão por tecnologia e inovação, e estamos
              empenhados em oferecer aos nosos clientes os melhores produtos e
              serviços do mercado.
            </p>
          </div>
          <div className="img text-center col-12 col-sm-2">
            <img src={logo} alt="alexa" className="w-100"></img>
          </div>
        </div>
        <br />

        <p>
          Nossa missão é proporcionar uma experiência de compra online fácil,
          segura e agradável, oferecendo uma ampla variedade de produtos
          eletrônicos de alta qualidade a preços competitivos. Trabalhamos com
          as principais marcas do mercado para garantir que nossos clientes
          tenham acesso aos produtos mais recentes e avançados.
        </p>

        <div className="conteudo">

        </div>
        <div className="contact">
          <h3>Entrar em contacto</h3>
          <p></p>

          <div className="row">
            <div className="col-2 col-md-6 col-xxl-5">
              <p>
                Preencha o formulário abaixo para entrar em contacto connosco.
              </p>
              <div className="row">
                <div className="col-12 my-2 col-lg-6">
                  <input
                    placeholder="Nome completo"
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                  />
                </div>
                <div className="col-12 my-2 col-lg-6">
                  <input
                    placeholder="Seu e-mail"
                    type="email"
                    name=""
                    id=""
                    className="form-control"
                  />
                </div>
                <div className="col-12 my-2">
                  <input
                    placeholder="Assunto"
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                  />
                </div>
                <div className="col-12 my-2">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="4"
                    placeholder="Escreva sua mensagem"
                    className="form-control"
                  ></textarea>
                </div>
                <div className="col-12 my-2">
                  <button className="btn-primary rounded-0 btn">Enviar</button>
                </div>
              </div>
            </div>
            <div className="col-2 col-md-6 col-xxl-7">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62899657.99098638!2d-36.809641366561046!3d15.799183813367788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f76f87cfc9cb%3A0xe75faf7d53546198!2sArotec!5e0!3m2!1spt-PT!2sao!4v1699963329911!5m2!1spt-PT!2sao" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Termos;
