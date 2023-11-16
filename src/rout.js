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
import NotFound from "./paginas/404";
import SubmitP from "./paginas/adicionar_produto";

const Rout = ({
  produto,
  favs,
  searchbtn,
  cart,
  setProduto,
  detalhe,
  ver,
  buyNow,
  fechar,
  removerFavorito,
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

        <Route element={<NotFound/>}/>
          <Route
            path="/"
            element={
              <Home
                addfavorito={addfavorito}
                searchbtn={searchbtn}
                cart={carrinho}
                removerFavorito={removerFavorito}
                favs={favoritos}
                detalhe={detalhe}
                buyNow={buyNow}
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
              removerFavorito={removerFavorito}
              buyNow={buyNow}
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
              removerFavorito={removerFavorito}
              buyNow={buyNow}
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
              <Contato 
              removerFavorito={removerFavorito} searchbtn={searchbtn} cart={carrinho} favs={favoritos} />
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
              setFechar={setFechar}
              buyNow={buyNow}
                searchbtn={searchbtn}
                fechar={fechar}
                cart={carrinho}
                removerFavorito={removerFavorito}
                favs={favs}
                ver={ver}
                setFavoritos={setFavoritos}
              />
            }
          />
          <Route
            path="/loja/adicionar/produto"
            element={
              <SubmitP
              buyNow={buyNow}
                searchbtn={searchbtn}
                cart={carrinho}
                favs={favs}
                removerFavorito={removerFavorito}
                setFavoritos={setFavoritos}
              />
            }
          />
          <Route
            path="/finalizar"
            element={
              <Finalizar

              buyNow={buyNow}
                searchbtn={searchbtn}
                cart={carrinho}
                setCarrinho={setCarrinho}
                favs={favs}
                removerFavorito={removerFavorito}
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
                removerFavorito={removerFavorito}
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
