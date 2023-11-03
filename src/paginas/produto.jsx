import React, { useEffect, useState } from "react";
import { PiShoppingCartBold } from "react-icons/pi";
import { ImEye } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Detalheproduto from "../detalheproduto";
import "./estilos/produto.css";
import { BsCart2, BsCartPlus, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import homeproduto from "../homeproduto";
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

  const [categoria, setCat] = useState('Todos');
  const filtterproduto = (produto) => {

    const update = homeproduto.filter((x) => {
      return x.Cat === produto;
    });
    setProduto(update);

    setCat(produto);

  };
  const TodosProdutos = () => {
    setProduto(homeproduto);
    setCat('Todos');
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
      const produtosElement = document.querySelector('.categorias');
      if (produtosElement) {
        const shouldFix = window.scrollY >= SCROLL_THRESHOLD;
  
        setIsProdutosFixed(shouldFix);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <>
      {fechar ? (
        <div className='detalhe_produto py-5'>
          <div className='container-fluid '>
            <button onClick={() => setFechar(false)} className='btnfechar'><BiArrowBack /> Voltar</button>
            {
              homeproduto.map((curElm) => {
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
                          <BsStarFill className="text-warning" />
                          <BsStarFill className="text-warning" />
                          <BsStarFill className="text-warning" />
                          <BsStarHalf className="text-warning" />
                          <BsStar className="text-warning" />
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
      <div className={`produtos container my-4`}>
        <h2>Produtos > {categoria}</h2>
        <div className="row">
          <div className="filtro col-12 col-md-3 col-xxl-2">
            <div className={`categorias ${isProdutosFixed ? 'produtos-fixed' : ''}`}>
              <h3>Busque por categorias</h3>
              <ul>
                <li className={`${categoria == 'Todos' ? 'ativo' : ''}`} onClick={() => TodosProdutos()}>Todos Produtos</li>
                <li className={`${categoria == 'Tablet' ? 'ativo' : ''}`} onClick={() => filtterproduto("Tablet")}>Tablet</li>
                <li className={`${categoria == 'Smart Watch' ? 'ativo' : ''}`} onClick={() => filtterproduto("Smart Watch")}>Smart Watch</li>
                <li className={`${categoria == 'Headphone' ? 'ativo' : ''}`} onClick={() => filtterproduto("Headphone")}>Headphone</li>
                <li className={`${categoria == 'Camera' ? 'ativo' : ''}`} onClick={() => filtterproduto("Camera")}>Camera</li>
                <li className={`${categoria == 'Eletronicos' ? 'ativo' : ''}`} onClick={() => filtterproduto("Eletronicos")}>Electronicos</li>
                <li className={`${categoria == 'Processador' ? 'ativo' : ''}`} onClick={() => filtterproduto("Processador")}>Processador</li>
                <li className={`${categoria == 'PowerBank' ? 'ativo' : ''}`} onClick={() => filtterproduto("PowerBank")}>Powerbank</li>

              </ul>
            </div>
          </div>
          <div className="produto col-12 col-md-9 col-xxl-10">

            <div className=" container">
              {/*<center>
                    <h1 className="titulo">Explore Nossa Loja</h1>
                </center>*/}
              <div className="container-flui ">
                <div className="row ">
                  {
                    produto.map((curElm) => {
                      return (
                        <div className=" col-12 col-sm-6 col-md-4 col-lg-3  col-xxl-3" key={curElm.id}>
                          <div title={`Clique para ver ` + curElm.Titulo} className="box">
                            <div className="img_box">
                              <img src={curElm.Img} alt={curElm.Titulo} />
                              <div className="icone">
                                <li onClick={() => addcarrinho(curElm)}> <PiShoppingCartBold /></li>
                                <li onClick={() => ver(curElm)}><ImEye /></li>
                                <li> <AiOutlineHeart /></li>
                              </div>
                            </div>
                            <div onClick={() => ver(curElm)} className="detalhe d-t">
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

             { /*<center>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                  Anterior
                </button>
                <span>{currentPage}</span>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={endIndex >= produto.length}>
                  Próxima
                </button>
              </center>*/}
              {
                produto <= 0 &&
                <center>
                  <span className="text-secondary">Nenhum resultado encontrado</span>
                </center>
              }
            </div>
          </div>
        </div >
      </div >
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
export default Produto;
