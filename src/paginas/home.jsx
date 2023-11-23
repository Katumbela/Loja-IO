import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BsArrowRight,
  BsCart2,
  BsCart3,
  BsCartPlus,
  BsFillBarChartFill,
  BsStar,
  BsStarFill,
  BsStarHalf,
  BsTruck,
} from "react-icons/bs";
import { BiArrowBack, BiDollarCircle } from "react-icons/bi";
import { MdCardMembership } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { PiShoppingCartBold } from "react-icons/pi";
import { ImEye } from "react-icons/im";
import promoimg from "../img/ip2.jpg";
import { AiOutlineHeart, AiOutlineCloseCircle } from "react-icons/ai";
import Homeproduto from "../homeproduto";
import "./estilos/home.css";
import Nav from "../componentes/nav";
import Footer from "../componentes/footer";
import getProdutoData from "./get_produtos";
import capa1 from "../img/capa1.png";
import capa2 from "../img/capa2.png";
import air from "../img/mac1.png";

const Home = ({
  searchbtn,
  addfavorito,
  favs,
  cart,
  favoritos,
  detalhe,
  ver,
  fechar,
  buyNow,
  setFechar,
  addcarrinho,
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
            {detalhe.map((curElm) => {
              return (
                <div className="boxproduto py-5">
                  <div className="row w-100 my-3">
                    <div className="d-flex justify-content-center gap-4 text-center col-12 col-md-4 col-xl-5 ">
                      <div className="">
                        {curElm?.imagens.map((imagem, index) => (
                          <p>
                            <img
                              onClick={() => setCurImg(imagem.url)}
                              src={imagem.url}
                              title="Clique para ver esta imagem"
                              style={{
                                height: "2.6em",
                                width: "2.6em",
                                margin: ".2rem 0",
                                border: "2px solid green",
                                cursor: "pointer",
                              }}
                              alt=""
                            />{" "}
                          </p>
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
                                        <li onClick={() => addfavorito(curElm)}>
                                          {" "}
                                          <AiOutlineHeart />
                                        </li>
                                      </div>
                                    </div>
                                    <div
                                      onClick={() => {
                                        ver(curElm);
                                        setCurImg(curElm.imagens[0]?.url);
                                      }}
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

      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img src={capa1} className=" w-100" alt="..." />
          </div>
          <div className="carousel-item bg-white ">
            <div className="row text-center px-md-5 container py-md-5">
              <div className="col-12 col-md-6">
                <h3>Black Friday</h3>
                <h2 className="" style={{textDecoration:'none', fontSize: '40px'}}>MacBook Pro M1</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde praesentium tempore hic debitis dolorum. Nemo aut dolores quidem similique non corrupti, hic debitis eum iste maiores aspernatur deserunt culpa! Adipisci.</p>
                <button className="btn btn-primary">Comprar agora</button>
              </div>
              <div className="col-12 text-center col-md-6">
              <img src={air} className="" style={{height:'18em'}} alt="..." />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={capa2} className=" w-100" alt="..." />
          </div>
        </div>
      </div>

      {/* <div className="top_banner banner_pub">
        <div className="text-center container">
          <span>Loja de Eletrônicos</span> <br />
          <Link to={"/produto"} className="btn plus">
            Todos Produtos
          </Link>
        </div>
      </div> */}

      {/*<div className="destaque">
                <div className=" container-lg">
                    <div className='box'>
                        <div className="box_img">
                            <img src='.\img\Mobile Phone.png' alt='mobile'></img>
                        </div>
                    </div>
                    <div className='box'>

                        <div className="box_img">
                            <img src='.\img\smart watch.png' alt='mobile' className=""></img>
                        </div> </div>
                    <div className='box'>
                        <div className="box_img">
                            <img src='.\img\tp6.png' alt='mobile'></img>
                        </div>
                    </div>
                    <div className='box'>
                        <div className="box_img">
                            <img src='.\img\headphone.png' alt='mobile'></img>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            */}

      <div className="produto container">
        <br />
        {/*<center>
                    <h1 className="titulo">Explore Nossa Loja</h1>
                </center>*/}
        <div className="container-flui ">
          <div className="row ">
            {produtos.slice(0, 8).map((curElm) => {
              return (
                <div
                  className=" col-12 col-sm-6 col-md-4 col-lg-3  col-xxl-3"
                  key={curElm.id}
                >
                  <div title={`Clique para ver ` + curElm.nome} className="box">
                    <div className="img_box">
                      <img src={curElm.imagens[0]?.url} alt={curElm.nome} />
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
                        <li onClick={() => addfavorito(curElm)}>
                          {" "}
                          <AiOutlineHeart />
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
                      <p>{curElm.categoria}</p>
                      <h3>{curElm.nome}</h3>
                      <h4>{formatter.format(curElm.preco)} </h4>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* {Homeproduto.slice(0, 8).map((curElm) => {
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
                        <li onClick={() => addcarrinho(curElm)}>
                          {" "}
                          <PiShoppingCartBold />
                        </li>
                        <li onClick={() => {ver(curElm); setCurImg(curElm.imagens[0]?.url)}}>
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
                    <div onClick={() => {ver(curElm); setCurImg(curElm.imagens[0]?.url)}} className="detalhe">
                      <p>{curElm.Cat}</p>
                      <h3>{curElm.nome}</h3>
                      <h4>{formatter.format(curElm.preco)} kz</h4>
                    </div>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
      <center className="my-4">
        <NavLink to={"/produto"} className="btn-primary btn">
          Todos os produtos <BsArrowRight />{" "}
        </NavLink>
      </center>
      <div className="banner mt-2 px-2 mx-0 mx-sm-auto container">
        <div className="containe row">
          <div className="detalhe text-center text-start-md  text-md-start col-12 col-md-7">
            <div className="my-auto mt-4 mt-md-5">
              <h6>O produto mais recente</h6>
              <h3>Iphone 12 Pro Ma Pro Max</h3>
              <p>170.000.00Kz</p>
              <Link to="/produto" className="lin btn-primary rounded-0 btn ">
                Compre agora
              </Link>
            </div>
          </div>
          <div className="img_box col-12  pt-md-0 py-4 py-md-3 text-center text-start-md  text-md-start col-md-5">
            <img src={promoimg} className="rounded-2" alt="promo"></img>
          </div>
        </div>
      </div>

      <div className="produto mt-3 mb-5 container">
        <br />
        <h2>Mais Produtos</h2>
        {/*<center>
                    <h1 className="titulo">Explore Nossa Loja</h1>
                </center>*/}
        <div className="container-flui ">
          <div className="row ">
            {produtos.slice(3).map((curElm) => {
              return (
                <div
                  className=" col-12 col-sm-6 col-md-4 col-lg-3  col-xxl-3"
                  key={curElm.id}
                >
                  <div title={`Clique para ver ` + curElm.nome} className="box">
                    <div className="img_box">
                      <img src={curElm.imagens[0]?.url} alt={curElm.nome} />
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
                        <li onClick={() => addfavorito(curElm)}>
                          {" "}
                          <AiOutlineHeart />
                        </li>
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        ver(curElm);
                        setCurImg(curElm.imagens[0]?.url);
                      }}
                      className="detalhe d-t"
                    >
                      <p>{curElm.Cat}</p>
                      <h3>{curElm.nome}</h3>
                      <h4>{formatter.format(curElm.preco)} </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Home;
