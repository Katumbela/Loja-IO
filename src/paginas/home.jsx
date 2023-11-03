import React from "react"
import { Link } from "react-router-dom"
import { BsCart2, BsCart3, BsCartPlus, BsFillBarChartFill, BsStar, BsStarFill, BsStarHalf, BsTruck } from 'react-icons/bs';
import { BiArrowBack, BiDollarCircle } from 'react-icons/bi';
import { MdCardMembership } from 'react-icons/md';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { PiShoppingCartBold } from 'react-icons/pi';
import { ImEye } from 'react-icons/im';
import promoimg from '../img/smart watch.png'
import { AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai';
import Homeproduto from '../homeproduto';
import './estilos/home.css'
const Home = ({ detalhe, ver, fechar, setFechar, addcarrinho }) => {
    return (
        <>
            {
                fechar ?

                    <div className='detalhe_produto py-5'>
                        <div className='container-fluid '>
                            <button onClick={() => setFechar(false)} className='btnfechar'><BiArrowBack /> Voltar</button>
                            {
                                detalhe.map((curElm) => {
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
                                              <BsStarFill className="text-warning"/>
                                              <BsStarFill className="text-warning"/>
                                              <BsStarFill className="text-warning"/>
                                              <BsStarHalf className="text-warning"/>
                                              <BsStar className="text-warning"/>
                                            </p>
                                            <h3>{curElm.Preco} Kz</h3>
                                            <p className="text-secondary">
                                              Telefone recondicionado, vindo do lugar x ou algo parecido a isto, sei lá
                                            </p>
                                            <div className="d-flex gap-4 btns-buy flex-wrap ">
                                              <button onClick={() => addcarrinho(curElm)} className="w-sm-100">Adicionar ao carrinho <BsCartPlus /></button>
                    
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
                    </div> : null
            }
            <div className="top_banner banner_pub">
                <div className="text-center container">

                    <span>I O</span> <br />
                    <Link to={'/produtos'} className="btn plus">Todos Produtos</Link>
                </div>
            </div>

            {/*<div className="destaque">
                <div className=" container-lg">
                    <div className='box'>
                        <div className="box_img">
                            <img src='.\img\Mobile Phone.png' alt='mobile'></img>
                        </div>
                    </div>
                    <div className='box'>

                        <div className="box_img">
                            <img src='.\img\smart watch.png' alt='mobile' className=""></img>
                        </div> </div>
                    <div className='box'>
                        <div className="box_img">
                            <img src='.\img\tp6.png' alt='mobile'></img>
                        </div>
                    </div>
                    <div className='box'>
                        <div className="box_img">
                            <img src='.\img\headphone.png' alt='mobile'></img>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            */}
            <div className="produto container">
                <center>
                    <h1 className="titulo">Explore Nossa Loja</h1>
                </center>
                <div className="container-flui ">
                    <div className="row ">
                        {
                            Homeproduto.map((curElm) => {
                                return (
                                    <div className=" col-12 col-sm-6 col-md-4 col-lg-3  col-xxl-3" key={curElm.id}>
                                        <div  onClick={() => ver(curElm)} className="box">
                                            <div className="img_box">
                                                <img src={curElm.Img} alt={curElm.Titulo} />
                                                <div className="icone">
                                                    <li onClick={() => addcarrinho(curElm)}> <PiShoppingCartBold /></li>
                                                    <li onClick={() => ver(curElm)}><ImEye /></li>
                                                    <li> <AiOutlineHeart /></li>
                                                </div>
                                            </div>
                                            <div className="detalhe">
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
            </div>
            <div className="banner container">
                <div className="containe row">
                    <div className="detalhe text-center text-start-md  text-md-start col-12 col-md-7">
                        <div className="my-auto mt-5">
                            <h6>O produto mais recente</h6>
                            <h3>Apple Watch Pro Max</h3>
                            <p>70.000.00Kz</p>
                            <button>
                                <Link to='/produto' className='link'>Compre agora</Link>
                            </button>
                        </div>
                    </div>
                    <div className="img_box col-12  pt-md-0 py-5 text-center text-start-md  text-md-start col-md-5">
                        <img src={promoimg} alt="promo"></img>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home