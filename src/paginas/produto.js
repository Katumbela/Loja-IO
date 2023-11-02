import React from "react";
import { PiShoppingCartBold } from "react-icons/pi";
import { ImEye } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Detalheproduto from "../detalheproduto";
import "./estilos/produto.css"; 
const Produto = ({
  produto,
  setProduto,
  detalhe,
  ver,
  fechar,
  setFechar,
  addcarrinho,
  addfavorito,
}) => {
  const filtterproduto = (produto) => {
    const update = Detalheproduto.filter((x) => {
      return x.Cat === produto;
    });
    setProduto(update);
  };
  const TodosProdutos = () => {
    setProduto(Detalheproduto);
  };
  return (
    <>
      {fechar ? (
        <div className="detalhe_produto">
          <div className="container">
            <button onClick={() => setFechar(false)} className="btnfechar">
              <AiOutlineCloseCircle />
            </button>
            {detalhe.map((curElm) => {
              return (
                <div className="boxproduto">
                  <div className="img_box">
                    <img src={curElm.Img} alt={curElm.Titulo}></img>
                  </div>
                  <div className="detalhe">
                    <h4>{curElm.Cat}</h4>
                    <h2>{curElm.Titulo}</h2>
                    <p>lorem lorem lorem lorem lorem lorem</p>
                    <h3>{curElm.Preco}</h3>
                    <button>Adicionar ao carrinho</button>
                  </div>
                </div>
              );
            })}
            <div className="boxproduto"></div>
          </div>
        </div>
      ) : null}
      <div className="produtos">
        <h2>Produtos</h2>
        <p>Inicio|produtos</p>
        <div className="container">
          <div className="filtro">
            <div className="categorias">
              <h3>categorias</h3>
              <ul>
                <li onClick={() => TodosProdutos()}>Todos Produtos</li>
                <li onClick={() => filtterproduto("Tablet")}>Tablet</li>
                <li onClick={() => filtterproduto("Smart Watch")}>
                  Smart Watch
                </li>
                <li onClick={() => filtterproduto("Headphone")}>Headphone</li>
                <li onClick={() => filtterproduto("Camera")}>Camera</li>
                <li onClick={() => filtterproduto("Electronicos")}>
                  Electronicos
                </li>
                <li onClick={() => filtterproduto("Processador")}>
                  Processador
                </li>
                <li onClick={() => filtterproduto("Powerbank")}>Powerbank</li>
                <li onClick={() => filtterproduto("Playstation")}>
                  Playstation 4
                </li>
              </ul>
            </div>
          </div>
          <div className="produtobox">
            <div className="conteudo">
              {produto.map((curElm) => {
                return (
                  <>
                    <div className="box" key={curElm.id}>
                      <div className="img_box">
                        <img src={curElm.Img} alt={curElm.Titulo}></img>
                        <div className="icone">
                          <li onClick={() => addcarrinho(curElm)}>
                            <PiShoppingCartBold />
                          </li>
                          <li onClick={() => ver(curElm)}>
                            <ImEye />
                          </li>
                          <li onClick={() => addfavorito(curElm)}>
                            <AiOutlineHeart />
                          </li>
                        </div>
                      </div>
                      <div className="detalhe">
                        <p>{curElm.Cat}</p>
                        <h3>{curElm.Titulo}</h3>
                        <h4>{curElm.Preco}kz</h4>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Produto;
