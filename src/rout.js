import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from './paginas/home'
import Produto from './paginas/produto';
import Carrinho from './paginas/carrinho';
import Contato from './paginas/contato';
import Sobre from './paginas/sobre';
import Login from './paginas/login'
import Favoritos from './paginas/favoritos'
const Rout = ({produto, favs, searchbtn, cart, setProduto, detalhe, ver, fechar, setFechar, carrinho, setCarrinho, addcarrinho, favoritos, setFavoritos, addfavorito}) => {
    return(
        <>
       <Routes>
        <Route path= '/' element={<Home addfavorito={addfavorito} searchbtn={searchbtn} cart={carrinho} favs = {favoritos}  detalhe={detalhe} ver={ver} fechar={fechar} setFechar={setFechar} addcarrinho={addcarrinho}/>}/>
        <Route path= '/produto' element={<Produto  addfavorito={addfavorito} searchbtn={searchbtn} cart={carrinho} favs = {favoritos}  produto={produto} setProduto={setProduto} detalhe={detalhe} ver={ver} fechar={fechar} setFechar={setFechar} addcarrinho={addcarrinho} />}/>
        <Route path='/carrinho' element={<Carrinho searchbtn={searchbtn} cart={carrinho} favs = {favoritos}  carrinho={carrinho} setCarrinho={setCarrinho}/>} />
        <Route path='/contato' element={<Contato searchbtn={searchbtn} cart={carrinho} favs = {favoritos}  />} />
        <Route path='/sobre' element={<Sobre searchbtn={searchbtn} cart={carrinho} favs = {favoritos} />} />
        <Route path='/login' element={<Login searchbtn={searchbtn} cart={carrinho} favs = {favoritos} />} />
        <Route path='/favoritos' element={<Favoritos  searchbtn={searchbtn} cart={carrinho} favs = {favs}  setFavoritos={setFavoritos}/>} />
       </Routes> 
       </>
    )
}
export default Rout