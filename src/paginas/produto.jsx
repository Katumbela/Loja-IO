import React, { useEffect, useState } from "react";
import { PiShoppingCartBold } from "react-icons/pi";
import { ImEye } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Detalheproduto from "../detalheproduto";
import "./estilos/produto.css";
import {
  BsCamera,
  BsCamera2,
  BsCart2,
  BsCartPlus,
  BsHeadphones,
  BsPersonWorkspace,
  BsPhoneFlip,
  BsPhoneLandscape,
  BsPower,
  BsStar,
  BsStarFill,
  BsStarHalf,
  BsTools,
  BsWatch,
} from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import homeproduto from "../homeproduto";
import {
  FaBroadcastTower,
  FaPowerOff,
  FaProcedures,
  FaSuperpowers,
} from "react-icons/fa";
import Nav from "../componentes/nav";
import Footer from "../componentes/footer";
import getProdutoData from "./get_produtos";
const Produto = ({
  produto,
  setProduto,
  detalhe,
  buyNow,
  ver,
  searchbtn,
  cart,
  favs,
  fechar,
  setFechar,
  addcarrinho,
  addfavorito,
}) => {
  const [categoria, setCat] = useState("Todos");
 
  const [produtos, setProdutos] = useState([]);
  
 
  const filtterproduto = (produto) => {
    const update = produtos.filter((x) => {
      return x.categoria === produto;
    });
    setProduto(update);
    setProdutos(update);

    setCat(produto);
  };
  const TodosProdutos = () => {
    setProduto(produtos);
    setProdutos(produtos);
    fetchData();
    setCat("Todos");
  };

  const fetchData = async () => {
    const data = await getProdutoData();
    setProdutos(data);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Número de itens por página

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = produto.slice(startIndex, endIndex);

  const [isProdutosFixed, setIsProdutosFixed] = useState(false);

  useEffect(() => {
    const SCROLL_THRESHOLD = 25; // Ajuste conforme necessário

    const handleScroll = () => {
      const produtosElement = document.querySelector(".categorias");
      if (produtosElement) {
        const shouldFix = window.scrollY >= SCROLL_THRESHOLD;

        setIsProdutosFixed(shouldFix);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      const data = await getProdutoData();
      setProdutos(data);
    };

    fetchData();
  }, []); // o segundo argumento do useEffect é um array de dependências, coloque aqui qualquer dependência necessária

  const [curImg, setCurImg] = useState('');

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
            {detalhe.map((curElm) => {
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
                                        <li onClick={() => addfavorito(curElm)}>
                                          {" "}
                                          <AiOutlineHeart />
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
      ): null}
      <div className={`produtos container my-4`}>
        {/* <h3 className="titulo-produtos">
          Produtos {">"} {categoria}
        </h3> */}
        <div className="row">
          <div className="filtro col-12 col-md-2 col-xxl-2">
            <div
              className={`categorias ${
                isProdutosFixed ? "produtos-fixed shadow-md" : ""
              }`}
            >
              <h3 className="cat-t">Categorias</h3>
              <ul>
                <li
                  className={`${categoria == "Todos" ? "ativo" : ""}`}
                  onClick={() => TodosProdutos()}
                >
                  {" "}
                  <span className="icone">
                    <BsCart2 />
                  </span>{" "}
                  <span className="texto todos-texto">
                    {" "}
                    Todos <div className="hide-sm">Produtos</div>
                  </span>
                </li>
                <li
                  className={`${categoria == "Tablet" ? "ativo" : ""}`}
                  onClick={() => filtterproduto("Tablet")}
                >
                  {" "}
                  <span className="icone">
                    <BsPhoneFlip />
                  </span>{" "}
                  <span className="texto">Tablets</span>
                </li>
                <li
                  className={`${categoria == "Smart Watch" ? "ativo" : ""}`}
                  onClick={() => filtterproduto("Smart Watch")}
                >
                  {" "}
                  <span className="icone">
                    <BsWatch />
                  </span>{" "}
                  <span className="texto"> Smart Watch</span>
                </li>
                <li
                  className={`${categoria == "Headphone" ? "ativo" : ""}`}
                  onClick={() => filtterproduto("Headphone")}
                >
                  {" "}
                  <span className="icone">
                    <BsHeadphones />
                  </span>{" "}
                  <span className="texto"> Headphone</span>
                </li>
                <li
                  className={`${categoria == "Camera" ? "ativo" : ""}`}
                  onClick={() => filtterproduto("Camera")}
                >
                  {" "}
                  <span className="icone">
                    <BsCamera />
                  </span>{" "}
                  <span className="texto"> Camera</span>
                </li>
                <li
                  className={`${categoria == "Eletronicos" ? "ativo" : ""}`}
                  onClick={() => filtterproduto("Eletronicos")}
                >
                  <span className="icone">
                    <BsTools />
                  </span>{" "}
                  <span className="texto"> Electronicos</span>
                </li>
                <li
                  className={`${categoria == "Processador" ? "ativo" : ""}`}
                  onClick={() => filtterproduto("Processador")}
                >
                  <span className="icone">
                    <FaBroadcastTower />
                  </span>{" "}
                  <span className="texto">Processador</span>
                </li>
                <li
                  className={`${categoria == "PowerBank" ? "ativo" : ""}`}
                  onClick={() => filtterproduto("PowerBank")}
                >
                  <span className="icone">
                    <BsPower />
                  </span>{" "}
                  <span className="texto">Powerbank</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="produto col-12 col-md-10 col-xxl-10">
            <div className=" container">
              {/*<center>
                    <h1 className="titulo">Explore Nossa Loja</h1>
                </center>*/}
              <div className="container-flui ">
                <div className="row ">
                  {produtos.map((curElm) => {
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
                            <img src={curElm.imagens[0]?.url} alt={curElm.nome} />
                            <div className="icone">
                              <li
                                onClick={() => 
                                            addcarrinho(curElm)
                                    }
                              >
                                {" "}
                                <PiShoppingCartBold />
                              </li>
                              
                              <li onClick={() => {ver(curElm); setCurImg(curElm.imagens[0]?.url);}}>
                                  <ImEye />
                              </li>
                              <li  onClick={() => 
                                            addfavorito(curElm)
                                    }>
                                {" "}
                                <AiOutlineHeart />
                              </li>
                            </div>
                          </div>
                          <div
                            onClick={() => {ver(curElm); setCurImg(curElm.imagens[0]?.url)}}
                            className="detalhe d-t"
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

              {/*<center>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                  Anterior
                </button>
                <span>{currentPage}</span>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={endIndex >= produto.length}>
                  Próxima
                </button>
              </center>*/}
              {produto <= 0 && (
                <center className="n">
                  <span className="text-secondary ">
                    Nenhum resultado encontrado
                  </span>
                </center>
              )}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};
export default Produto;
