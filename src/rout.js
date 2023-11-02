import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from './paginas/home'
import Produto from './paginas/produto';
import Carrinho from './paginas/carrinho';
import Contato from './paginas/contato';
import Sobre from './paginas/sobre';
import Login from './paginas/login'
import Favoritos from './paginas/favoritos'
const Rout = ({produto, setProduto, detalhe, ver, fechar, setFechar, carrinho, setCarrinho, addcarrinho, favoritos, setFavoritos, addfavorito}) => {
    return(
        <>
       <Routes>
        <Route path= '/' element={<Home detalhe={detalhe} ver={ver} fechar={fechar} setFechar={setFechar} addcarrinho={addcarrinho}/>}/>
        <Route path= '/produto' element={<Produto produto={produto} setProduto={setProduto} detalhe={detalhe} ver={ver} fechar={fechar} setFechar={setFechar} addcarrinho={addcarrinho} addfavorito={addfavorito}/>}/>
        <Route path='/carrinho' element={<Carrinho carrinho={carrinho} setCarrinho={setCarrinho}/>} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/login' element={<Login />} />
        <Route path='/favoritos' element={<Favoritos favoritos={favoritos} setFavoritos={setFavoritos}/>} />
       </Routes>
       </>
    )
}
export default Rout