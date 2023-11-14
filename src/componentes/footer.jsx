import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import './footer.css'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='foot '>
                <div className='container py-5 row'>

                    <div className='col-12 my-2 text-start px-4 container col-md-3'>
                       
                            <img src='.\img\logo.png ' alt='logo' className='logo-f'></img>
                        
                        <div className='icone'>
                            <ul>
                                <li><BsFacebook /></li>
                                <li><BsWhatsapp /></li>
                                <li><BsInstagram /></li>
                                <li><BsTwitter /></li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-12 my-2 c px-4 col-md-3  '>
                        <h3>Minha Conta</h3>
                        <ul>
                            <li>Login</li>
                            <li>Cadastro</li>
                            <li>Carrinho</li>
                        </ul>
                    </div>

                    <div className='col-12 my-2 c col-md-3 px-3  '>
                        <h3>Links Rápidos</h3>
                        <ul>
                            <li><NavLink to={'/'}>Pagina Inicial</NavLink></li>
                            <li><NavLink to={'/produto'}>Productos</NavLink></li>
                            <li><NavLink to={'/sobre'}>Sobre</NavLink></li>
                            <li><NavLink to={'/sobre'}>Contacto</NavLink></li>
                        </ul>
                    </div>
                    <div className='col-12 my-2 c col-md-3 px-3  '>
                        <h3>Legal</h3>
                        <ul>
                            <li><NavLink to={'/reembolso'}>Políticas de reembolso</NavLink></li>
                            <li><NavLink to={'/entregas'}>Entregas</NavLink></li>
                            <li><NavLink to={'/legal'}>Legal</NavLink></li>
                            <li><NavLink to={'/termos'}>Politicas e Termos</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <center className="bg-light copy">&copy; 2023 &middot; IO &middot; Desenvolvido por <a href="http://www.arotec.ao">AROTEC</a></center>
            <div className="chat">
                <a href="http://wa.me/244928134249"><BsWhatsapp/></a>
            </div>
        </>
    )
}
export default Footer