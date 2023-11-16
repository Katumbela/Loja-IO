import {useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react'
import Nav from './componentes/nav'
import Rout from './rout';
import {BrowserRouter} from 'react-router-dom';
import Footer from './componentes/footer';
import Detalheproduto from './detalheproduto';
import Swal from 'sweetalert2';


const App = () =>{

  const navigate = useNavigate();

   //Favoritando Produtos
   const [favoritos, setFavoritos] = useState(
    JSON.parse(localStorage.getItem('favoritos')) || []
  );


  useEffect(() => {
    // Atualiza o localStorage sempre que os favoritos mudam
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);


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
   
const addcarrinho = (produto) => {
  const existe = carrinho.find((x) => x.id === produto.id);
  // eslint-disable-next-line react-hooks/rules-of-hooks
 

  if (existe) {
    Swal.fire({
      title: 'Produto adicionado',
      text: `${produto.Titulo} foi adicionado ao carrinho. Deseja finalizar a compra?`,
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Finalizar compra',
      cancelButtonText: 'Continuar comprando',
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirecionar para a página de finalização de compra
        // window.location.href = '/finalizar';
        
        navigate("/finalizar");
      } else {
        // Continuar comprando (fechar o popup)
        Swal.close();
      }
    });    
  } else {
    setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    Swal.fire({
      title: 'Produto adicionado',
      text: `${produto.Titulo} foi adicionado ao carrinho. Deseja finalizar a compra?`,
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Finalizar compra',
      cancelButtonText: 'Continuar comprando',
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirecionar para a página de finalização de compra
       
        navigate("/finalizar");
      } else {
        // Continuar comprando (fechar o popup)
        Swal.close();
      }
    });
    
  }
};
const buyNow = (produto) => {
  const existe = carrinho.find((x) => x.id === produto.id);
  // eslint-disable-next-line react-hooks/rules-of-hooks
 

  if (existe) {
     
    navigate("/finalizar");
  } else {
    setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
 

    navigate("/finalizar");
    
  }
};
  console.log(carrinho)
  // Favoritando


  const addfavorito = (produto) => {
    const existe = favoritos.find((x) => x.id === produto.id);

    if (existe) {
      Swal.fire(
        'Produto adicionado',
        `${produto.Titulo} foi adicionado aos favoritos com sucesso!`,
        'success'
      );
    } else {
      setFavoritos([...favoritos, { ...produto, quantidade: 1 }]);
      Swal.fire(
        'Produto adicionado',
        `${produto.Titulo} foi adicionado aos favoritos com sucesso!`,
        'success'
      );
    }
  };

  const removerFavorito = (produto) => {
    const novosFavoritos = favoritos.filter((x) => x.id !== produto.id);
    setFavoritos(novosFavoritos);
    Swal.fire(
      'Produto removido',
      `${produto.Titulo} foi removido dos favoritos com sucesso!`,
      'success'
    );
  };


  return(
    <>
      <Rout removerFav={removerFavorito} buyNow={buyNow} searchbtn={searchbtn} cart={carrinho} favs = {favoritos} produto={produto} setProduto={setProduto} detalhe={detalhe} ver={ver} fechar={fechar} setFechar={setFechar} carrinho={carrinho} setCarrinho={setCarrinho} addcarrinho={addcarrinho} favoritos={favoritos} setFavoritos={setFavoritos} addfavorito={addfavorito}/>
    </>
  )
}
 export default App
