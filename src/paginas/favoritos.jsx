import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { ImEye } from "react-icons/im";
import { PiShoppingCartBold } from "react-icons/pi";
import Nav from "../componentes/nav";
import Footer from "../componentes/footer";
import { BsHeartFill } from "react-icons/bs";
const Favoritos = ({cart, searchbtn, favoritos, addcarrinho, ver, favs, setFavoritos }) => {
  return (
    <>
    
<Nav searchbtn={searchbtn} cart={cart} favs = {favs} />

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
                              title={`Clique para ver ` + curElm.Titulo}
                              className="box"
                            >
                              <div className="img_box">
                                <img src={curElm.Img} alt={curElm.Titulo} />
                                <div className="icone">
                                  <li onClick={() => addcarrinho(curElm)}>
                                    {" "}
                                    <PiShoppingCartBold />
                                  </li>
                                  <li onClick={() => ver(curElm)}>
                                    <ImEye />
                                  </li>
                                  <li>
                                    {" "}
                                    <AiOutlineHeart />
                                  </li>
                                </div>
                              </div>
                              <div
                                onClick={() => ver(curElm)}
                                className="detalhe"
                              >
                                <p>{curElm.Cat}</p>
                                <h3>{curElm.Titulo}</h3>
                                <h4>{curElm.Preco} kz</h4>
                              </div>
                            </div>
                          </div>
                        );
                      })
                      }
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      {
        favs.length <= 0 && 
        <center>
            <BsHeartFill className="text-danger fs-icon" />
            <h3 className="text-secondary">
                Não tem nenhum favorito ainda!
            </h3>
        </center>
      }
      <br />
      <br />
      <br />

      <Footer />
    </>
  );
};
export default Favoritos;
