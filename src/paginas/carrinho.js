import React from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './estilos/carrinho.css'
const Carrinho = ({carrinho, setCarrinho}) => {
    // aumentar quantidade do poduto
    const mais = (produto) => 
    {
        const existe = carrinho.find((x) => 
        {
            return x.id === produto.id
        })
        setCarrinho(carrinho.map((curElm) => 
        {
            return curElm.id === produto.id ? {...existe, quantidade: existe.quantidade + 1} : curElm
        }))
    }
     // Decrementando produto
     const menos = (produto) => 
     {
         const existe = carrinho.find((x) => 
         {
             return x.id === produto.id
         })
         setCarrinho(carrinho.map((curElm) => 
         {
             return curElm.id === produto.id ? {...existe, quantidade: existe.quantidade - 1} : curElm
         }))
     }
     //Remover produto
    const remover = (produto) => 
    {
        const existe = carrinho.find((x) => 
        {
            return x.id === produto.id
        })
        if(existe.quantidade > 0)
        {
            setCarrinho(carrinho.filter((x) => 
            {
                return x.id !== produto.id
            }))
        }
    }
     // Preço Total
     const Precototal = carrinho.reduce((preco, item) => preco + item.quantidade * item.Preco, 0)

    return(
    <>
    <div className='carcontainer'>
        {
            carrinho.length === 0 &&
            <div className='carrinhovazio'>
            <h2 className='vazio'>Seu carrinho está vazio</h2>
            <button>
                <Link to='/produto' className='btn'>Compre agora</Link>
            </button>
            </div>
        }
        <div className='conteudo'>
        {
            carrinho.map((curElm) => 
                {
                    return(
                        <div className='item_carrinho' key={curElm.id}>
                            <div className='box_img'>
                                <img src={curElm.Img} alt={curElm.Titulo}></img>
                            </div>
                            <div className='detalhe'>
                                <div className ='info'>
                                <h4>{curElm.Cat}</h4>
                                <h3>{curElm.Titulo}</h3>
                                <p>{curElm.Preco}kz</p>
                                <div className='quantidade'>
                                    <button className='mais' onClick={() => mais(curElm)}>+</button>
                                    <input type='text' value={curElm.quantidade}></input>
                                    <button className='menos' onClick={() =>menos(curElm)}>-</button>
                                </div>
                                <h4>total:{curElm.Preco * curElm.quantidade}kz</h4>
                                <div className='fechar'>
                                <button className='remover'onClick={() =>remover(curElm)}><AiOutlineClose/></button>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                })
            }
            
        </div>
        {
            carrinho.length > 0 &&
            <>
            <h2 className='precototal'>total:{Precototal}kz</h2>
            <button className='checkout'>Checkout</button>
            </>
        }
    </div>
    </>
    )
}

export default Carrinho