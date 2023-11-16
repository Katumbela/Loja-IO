import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import './estilos/carrinho.css'
import { BsCart4, BsTrash3 } from 'react-icons/bs';
import Nav from '../componentes/nav';
import Footer from '../componentes/footer';
const Carrinho = ({cart, favs, searchbtn, carrinho, setCarrinho }) => {
    // aumentar quantidade do poduto
    const mais = (produto) => {
        const existe = carrinho.find((x) => {
            return x.id === produto.id
        })
        setCarrinho(carrinho.map((curElm) => {
            return curElm.id === produto.id ? { ...existe, quantidade: existe.quantidade + 1 } : curElm
        }))
    }
    // Decrementando produto
    const menos = (produto) => {
        const existe = carrinho.find((x) => {
            return x.id === produto.id
        })
        setCarrinho(carrinho.map((curElm) => {
            return curElm.id === produto.id ? { ...existe, quantidade: existe.quantidade - 1 } : curElm
        }))
    }
    //Remover produto
    const remover = (produto) => {
        const existe = carrinho.find((x) => {
            return x.id === produto.id
        })
        if (existe.quantidade > 0) {
            setCarrinho(carrinho.filter((x) => {
                return x.id !== produto.id
            }))
        }
    }
    // Preço Total
    const Precototal = carrinho.reduce((preco, item) => preco + item.quantidade * item.Preco, 0)

    const [curImg, setCurImg] = useState("");

  const formatter = new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "AOA", // Código de moeda para Kwanza Angolano
    minimumFractionDigits: 2,
  });


    return (
        <>

<Nav searchbtn={searchbtn} cart={cart} favs = {favs} />
            <div className='carcontainer'>
                {
                    carrinho.length === 0 &&
                    <center>
                        <div className=' py-5 my-5'>
                            <BsCart4 className='fs-1' />
                            <br />
                            <br />
                            <h2 className='vazio'>Seu carrinho está vazio</h2>
                            <br />
                            <Link to='/produto' className='btn btn-dark rounded-0'>Veja os produtos</Link>

                        </div>
                    </center>
                }

                <div className='conteudo container'>
                    {
                        carrinho.length > 0 &&
                        <div className='container-md my-2 cc d-flex justify-content-between'>
                            <h2 className='my-auto precototal'>total:{Precototal} AOA</h2>

                            <NavLink  to={'/finalizar'}  className='checkout'>Checkout</NavLink>
                        </div>
                    }
                    {
                        carrinho.map((curElm) => {
                            return (
                                <div className="container-md cc">
                                    <div className='item_carrinho row' key={curElm.id}>
                                        <div className='box_img col-4 col-md-3 '>
                                            <img src={curElm.imagens[0]?.url} alt={curElm.nome} className='' />
                                        </div>
                                        <div className='detalhe col-8 col-md-9 position-relative'>
                                            <div className='info'>
                                                <h3>{curElm.nome}</h3>
                                                <p>Preço: {formatter.format(curElm.preco)}kz</p>
                                                <div className='quantidade'>
                                                    <button className='menos' onClick={() => menos(curElm)}>-</button>
                                                    <span className='my-auto' > {curElm.quantidade} </span>
                                                    <button className='mais' onClick={() => mais(curElm)}>+</button>
                                                </div>
                                                <h4>{curElm.quantidade + ' x ' + curElm.preco} aoa</h4>
                                                <div className='fechar'>
                                                    <button title={'Remover este produto'} className='remover text-danger' onClick={() => remover(curElm)}><BsTrash3 /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {
                        carrinho.length > 0 &&
                        <div className='container d-flex justify-content-between my-3 cc'>
                            <div className="">
                                <h2 className='precototal'>total:{Precototal} AOA</h2>
                                <span className="text-secondary">Ship fee: 0 AOA</span> <br />
                                <span className="text-secondary">Discount: 0 AOA</span> <br />
                            </div>
                            <NavLink to={'/finalizar'} className='checkout'>Checkout</NavLink>
                        </div>
                    }
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Carrinho