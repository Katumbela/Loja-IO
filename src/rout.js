import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./paginas/home";
import Produto from "./paginas/produto";
import Carrinho from "./paginas/carrinho";
import Contato from "./paginas/contato";
import Sobre from "./paginas/sobre";
import Login from "./paginas/login";
import Favoritos from "./paginas/favoritos";
import Finalizar from "./paginas/finalizar";
import Sucesso from "./paginas/sucesso";
import { ToastProvider } from "react-toast-notifications";

const Rout = ({
  produto,
  favs,
  searchbtn,
  cart,
  setProduto,
  detalhe,
  ver,
  fechar,
  setFechar,
  carrinho,
  setCarrinho,
  addcarrinho,
  favoritos,
  setFavoritos,
  addfavorito,
}) => {
  return (
    <>
      <ToastProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                addfavorito={addfavorito}
                searchbtn={searchbtn}
                cart={carrinho}
                favs={favoritos}
                detalhe={detalhe}
                ver={ver}
                fechar={fechar}
                setFechar={setFechar}
                addcarrinho={addcarrinho}
              />
            }
          />
          <Route
            path="/produto"
            element={
              <Produto
                addfavorito={addfavorito}
                searchbtn={searchbtn}
                cart={carrinho}
                favs={favoritos}
                produto={produto}
                setProduto={setProduto}
                detalhe={detalhe}
                ver={ver}
                fechar={fechar}
                setFechar={setFechar}
                addcarrinho={addcarrinho}
              />
            }
          />
          <Route
            path="/carrinho"
            element={
              <Carrinho
                searchbtn={searchbtn}
                cart={carrinho}
                favs={favoritos}
                carrinho={carrinho}
                setCarrinho={setCarrinho}
              />
            }
          />
          <Route
            path="/contato"
            element={
              <Contato searchbtn={searchbtn} cart={carrinho} favs={favoritos} />
            }
          />
          <Route
            path="/sobre"
            element={
              <Sobre searchbtn={searchbtn} cart={carrinho} favs={favoritos} />
            }
          />
          <Route
            path="/login"
            element={
              <Login searchbtn={searchbtn} cart={carrinho} favs={favoritos} />
            }
          />
          <Route
            path="/favoritos"
            element={
              <Favoritos
                searchbtn={searchbtn}
                cart={carrinho}
                favs={favs}
                setFavoritos={setFavoritos}
              />
            }
          />
          <Route
            path="/finalizar"
            element={
              <Finalizar
                searchbtn={searchbtn}
                cart={carrinho}
                setCarrinho={setCarrinho}
                favs={favs}
                setFavoritos={setFavoritos}
              />
            }
          />
          <Route
            path="/successful_buy"
            element={
              <Sucesso
                searchbtn={searchbtn}
                cart={carrinho}
                favs={favs}
                setFavoritos={setFavoritos}
              />
            }
          />
        </Routes>
      </ToastProvider>
    </>
  );
};
export default Rout;
