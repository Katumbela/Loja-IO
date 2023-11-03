import React from "react";
import { PiShoppingCartBold } from "react-icons/pi";
import { ImEye } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Detalheproduto from "../detalheproduto";
import "./estilos/produto.css";
import { BsCart2, BsCartPlus, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
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
        <div className='detalhe_produto py-5'>
          <div className='container-fluid '>
            <button onClick={() => setFechar(false)} className='btnfechar'><BiArrowBack /> Voltar</button>
            {
              detalhe.map((curElm) => {
                return (
                  <div className='boxproduto py-5'>
                    <div className="row w-100 my-3">
                      <div className=' text-center col-12 col-md-4 col-xl-5 '>
                        <img src={curElm.Img} alt={curElm.Titulo} className="w-100 my-auto" />
                      </div>

                      <div className='detalhe px-4 px-md-0 col-12 col-md-8 col-xl-7 '>
                        <h1>{curElm.Titulo}</h1>
                        <h4 className="text-secondary">{curElm.Cat}</h4>
                        <p className="d-flex gap-2">
                          <BsStarFill className="text-warning"/>
                          <BsStarFill className="text-warning"/>
                          <BsStarFill className="text-warning"/>
                          <BsStarHalf className="text-warning"/>
                          <BsStar className="text-warning"/>
                        </p>
                        <h3>{curElm.Preco} Kz</h3>
                        <p className="text-secondary">
                          Telefone recondicionado, vindo do lugar x ou algo parecido a isto, sei lá
                        </p>
                        <div className="d-flex gap-4 btns-buy flex-wrap ">
                          <button className="w-sm-100">Adicionar ao carrinho <BsCartPlus /></button>

                          <button className="w-sm-100">Comprar agora <BsCart2 /></button>
                        </div>
                      </div>
                      <div className="col-12 px-4 px-md-5 mt-md-5 container mt-4">

                        <h2> Sobre este produto</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae nobis modi laudantium temporibus ut tempora beatae doloribus perspiciatis sapiente quae, omnis a, accusantium reprehenderit excepturi quas odit magni? Totam.
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div> 
      ) : null}
      <div className="produtos container my-4">
        <h2>Produtos</h2>
        <div className="row">
          <div className="filtro col-12 col-md-3 col-xxl-2">
            <div className="categorias">
              <h3>Busque por categorias</h3>
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
                
              </ul>
            </div>
          </div>
          <div className="produto col-12 col-md-9 col-xxl-10">
             <div className="container-fluid ">
                    <div className="row ">
                        {
                            produto.map((curElm) => {
                                return (
                                    <div className=" col-12 col-sm-6 col-lg-4  col-xxl-3" key={curElm.id}>
                                        <div onClick={() => ver(curElm)} className="box">
                                            <div className="img_box">
                                                <img src={curElm.Img} alt={curElm.Titulo} />
                                                <div className="icone">
                                                    <li onClick={() => addcarrinho(curElm)}> <PiShoppingCartBold /></li>
                                                    <li onClick={() => ver(curElm)}><ImEye /></li>
                                                    <li> <AiOutlineHeart /></li>
                                                </div>
                                            </div>
                                            <div className="detalhe">
                                                <p>{curElm.Cat}</p>
                                                <h3>{curElm.Titulo}</h3>
                                                <h4>{curElm.Preco} kz</h4>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Produto;
