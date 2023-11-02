import React, {useState} from 'react'
import Nav from './componentes/nav'
import Rout from './rout';
import {BrowserRouter} from 'react-router-dom';
import Footer from './componentes/footer';
import Detalheproduto from './detalheproduto';
const App = () =>{
   //Favoritando Produtos
   const [favoritos, setFavoritos] = useState([])
  //adicionando produto ao carrinho
  const [carrinho, setCarrinho] = useState([])
  // detalhes do produto
  const [fechar, setFechar] = useState(false)
  const [detalhe, setDetalhe] = useState([])
  //filtrando produto
  const [produto, setProduto] = useState(Detalheproduto)
  const searchbtn = (produto) =>
  {
    const change = Detalheproduto.filter((x) =>
    {
      return x.Cat === produto
    })
    setProduto(change)
  }
  // detalhes do produto
  const ver = (produto) =>
  {
    setDetalhe([{...produto}])
    setFechar(true)
  }
  // adicionando ao carrinho
   
  const addcarrinho = (produto) =>
  {
    const existe = carrinho.find((x) =>
    {
      return x.id === produto.id
    })
    if(existe)
    {
      alert("Este produto já foi adicionado ao carrinho")
    }
    else
    {
      setCarrinho([...carrinho, {...produto, quantidade:1}])
      alert("O produto foi adicionado ao carrinho")
    }
  } 
  console.log(carrinho)
  // Favoritando
  const addfavorito = (produto) =>{}
  return(
    <>
      <BrowserRouter>
    <Nav searchbtn={searchbtn}/>
      <Rout produto={produto} setProduto={setProduto} detalhe={detalhe} ver={ver} fechar={fechar} setFechar={setFechar} carrinho={carrinho} setCarrinho={setCarrinho} addcarrinho={addcarrinho} favoritos={favoritos} setFavoritos={setFavoritos} addfavorito={addfavorito}/>
      <Footer/> 
    </BrowserRouter>
    </>
  )
}
 export default App
