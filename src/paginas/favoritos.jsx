import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { ImEye } from "react-icons/im";
import { PiShoppingCartBold } from "react-icons/pi";
import Nav from "../componentes/nav";
import Footer from "../componentes/footer";
import { BsCart2, BsCartPlus, BsHeartFill, BsHeartbreak, BsHeartbreakFill, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import getProdutoData from "./get_produtos";
import { BiArrowBack } from "react-icons/bi";
const Favoritos = ({
  cart,
  ver,
  searchbtn,
  favoritos,
  setFechar,
  buyNow,
  addcarrinho,
  fechar,
  favs,
  removerFavorito,
  setFavoritos,
}) => {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProdutoData();
      setProdutos(data);
    };

    fetchData();
  }, []); // o segundo argumento do useEffect é um array de dependências, coloque aqui qualquer dependência necessária

  const [curImg, setCurImg] = useState("");

  const formatter = new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "AOA", // Código de moeda para Kwanza Angolano
    minimumFractionDigits: 2,
  });

  return (
    <>
      <Nav searchbtn={searchbtn} cart={cart} favs={favs} />
   {fechar ? (
        <div className="detalhe_produto py-5">
          <div className="container-fluid ">
            <button
              title="Voltar"
              onClick={() => setFechar(false)}
              className="btnfechar"
            >

              <BiArrowBack />
            </button>
            {produtos.map((curElm) => {
              return (
                <div className="boxproduto py-5">
                  <div className="row w-100 my-3">
                    <div className="d-flex justify-content-center gap-4 text-center col-12 col-md-4 col-xl-5 ">
                      <div className="">
                      
                          {curElm?.imagens.map((imagem, index) => (
                           
                           <p>
                              <img 
                              onClick={()=> setCurImg(imagem.url)}
                                src={imagem.url}
                                title="Clique para ver esta imagem"
                                style={{
                                  height: "2.6em",
                                  width: "2.6em",
                                  margin: ".2rem 0",
                                  border:'2px solid green',
                                  cursor:'pointer'
                                }}
                                alt=""
                              /> </p>
                            
                          ))}
                        </div>
                        <img
                          src={curImg}
                          alt={curElm.nome}
                          className="img-see my-2"
                        />
                    </div>

                    <div className="detalhe px-4 px-md-0 col-12 col-md-8 col-xl-7 ">
                      <h1>{curElm.nome}</h1>
                      <h4 className="text-secondary">{curElm.Cat}</h4>
                      <p className="d-flex gap-2">
                        <BsStarFill className="text-warning" />
                        <BsStarFill className="text-warning" />
                        <BsStarFill className="text-warning" />
                        <BsStarHalf className="text-warning" />
                        <BsStar className="text-warning" />
                      </p>
                      <h3>{formatter.format(curElm.preco)} </h3>
                      <p className="text-secondary">{curElm.estado}</p>
                      <div className="d-flex gap-4 btns-buy flex-wrap ">
                        <button
                          onClick={() => addcarrinho(curElm)}
                          className="w-sm-100 btn-outline"
                        >
                          Adicionar ao carrinho <BsCartPlus />
                        </button>

                        <button
                          onClick={() => buyNow(curElm)}
                          className="w-sm-100"
                        >
                          Comprar agora <BsCart2 />
                        </button>
                      </div>
                    </div>
                    <div className="col-12 px-4 px-md-5 mt-md-5 container mt-4">
                      <div className="produto mt-3 mb-5 container">
                        <h2> Sobre este produto</h2>
                        <p className="mw-75">{curElm.descricao}</p>

                        <br />
                        <hr />
                        <br />
                        <br />
                        <h2>Pode Gostar também de...</h2>
                        {/*<center>
                                                            <h1 className="titulo">Explore Nossa Loja</h1>
                                                        </center>*/}
                        <div className="container-flui ">
                          <div className="d-flex gap-2 overflow-x-scroll sroll-x">
                            {produtos.slice(0, 10).map((curElm) => {
                              return (
                                <div className=" mx-2 " key={curElm.id}>
                                  <div
                                    title={`Clique para ver ` + curElm.nome}
                                    className="box"
                                  >
                                    <div className="img_box">
                                      <img src={curElm.imagens[0]?.url} alt={curElm.nome} />
                                      <div className="icone">
                                        <li onClick={() => addcarrinho(curElm)}>
                                          {" "}
                                          <PiShoppingCartBold />
                                        </li>
                                        <li onClick={() => {ver(curElm); setCurImg(curElm.imagens[0]?.url);}}>
                                          <ImEye />
                                        </li>
                                        <li 
                                    title={`Remover ` + curElm.nome + ' dos favoritos'} onClick={() => removerFavorito(curElm)}>
                                          <BsHeartbreakFill className="text-danger" />
                                        </li>
                                       
                                      </div>
                                    </div>
                                    <div
                                      onClick={() => {ver(curElm); setCurImg(curElm.imagens[0]?.url)}}
                                      className="detalhe d-t"
                                    >
                                      <p>{curElm.Cat}</p>
                                      <h5>{curElm.nome}</h5>
                                      <h4>{formatter.format(curElm.preco)} </h4>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
      <div className="container">
        <div clasName="Conteudo">
          {favs.map((curElm) => {
            return (
              <div className="itensfav">
                <br />
                <h2>Seus Favoritos</h2>
                <div className="produto container">
                  <div className="container-flui ">
                    <div className="row ">
                      {favs.slice(0, 8).map((curElm) => {
                        return (
                          <div
                            className=" col-12 col-sm-6 col-md-4 col-lg-3  col-xxl-3"
                            key={curElm.id}
                          >
                            <div
                              title={`Clique para ver ` + curElm.nome}
                              className="box"
                            >
                              <div className="img_box">
                                <img
                                  src={curElm.imagens[0]?.url}
                                  alt={curElm.nome}
                                />
                                <div className="icone">
                                  <li onClick={() => addcarrinho(curElm)}>
                                    {" "}
                                    <PiShoppingCartBold />
                                  </li>
                                  <li
                                    onClick={() => {
                                      ver(curElm);
                                      setCurImg(curElm.imagens[0]?.url);
                                    }}
                                  >
                                    <ImEye />
                                  </li>
                                 
                                  <li 
                                    title={`Remover ` + curElm.nome + ' dos favoritos'} onClick={() => removerFavorito(curElm)}>
                                          <BsHeartbreakFill className="text-danger" />
                                        </li>
                                </div>
                              </div>
                              <div
                                onClick={() => {
                                  ver(curElm);
                                  setCurImg(curElm.imagens[0]?.url);
                                }}
                                className="detalhe"
                              >
                                <p>{curElm.Cat}</p>
                                <h3>{curElm.nome}</h3>
                                <h4>{formatter.format(curElm.preco)} kz</h4>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      {favs.length <= 0 && (
        <center>
          <BsHeartFill className="text-danger fs-icon" />
          <h3 className="text-secondary">Não tem nenhum favorito ainda!</h3>
        </center>
      )}
      <br />
      <br />
      <br />

      <Footer />
    </>
  );
};
export default Favoritos;
