import React from "react"
import { Link } from "react-router-dom"
import { BsTruck } from 'react-icons/bs';
import { BiDollarCircle } from 'react-icons/bi';
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

                    <div className='detalhe_produto'>
                        <div className='container-fluid '>
                            <button onClick={() => setFechar(false)} className='btnfechar'><AiOutlineCloseCircle /></button>
                            {
                                detalhe.map((curElm) => {
                                    return (
                                        <div className='boxproduto row'>
                                            <div className='img_box text-center pt-4 col-12 col-md-4'>
                                               <br />
                                                <img src={curElm.Img} alt={curElm.Titulo}></img>
                                            </div>
                                            <div className='detalhe col-12 col-md-8'>
                                                <h5>{curElm.Cat}</h5>
                                                <h3>{curElm.Titulo}</h3>
                                                <p>lorem lorem lorem lorem lorem lorem</p>
                                                <h3>{curElm.Preco}</h3>
                                                <button>Adicionar ao carrinho</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className='boxproduto'></div>
                        </div>
                    </div> : null
            }
            <div className="top_banner banner_pub">
                <div className="text-center container">

                    <span>I O</span> <br />
                    <button className="btn plus">Todos Produtos</button>
                </div>
            </div>

            <div className="destaque">
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
            <div className="produto ">
                <center>
                    <h1>Explore Nossa Loja</h1>
                </center>
                <div className="container-fluid ">
                    <div className="row ">
                        {
                            Homeproduto.map((curElm) => {
                                return (
                                    <div className=" col-12 col-sm-6 col-lg-3  col-xxl-3" key={curElm.id}>
                                        <div className="box">
                                            <div className="img_box text-center">
                                                <center><img src={curElm.Img} alt={curElm.Titulo}/></center>
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