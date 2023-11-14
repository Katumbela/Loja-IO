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
                                <li><a href="http://"><BsFacebook /></a></li>
                                <li><a href="http://"><BsWhatsapp /></a></li>
                                <li><a href="http://"><BsInstagram /></a></li>
                                <li><a href="http://"><BsTwitter /></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-12 my-2 c px-4 col-md-3  '>
                        <h3>Minha Conta</h3>
                        <ul>
                            <li><NavLink className='a' to={'/login'}>Login</NavLink></li>
                            <li><NavLink className='a' to={'/signup'}>Cadastro</NavLink></li>
                            <li><NavLink className='a' to={'/carrinho'}> Carrinho</NavLink></li>
                        </ul>
                    </div>

                    <div className='col-12 my-2 c col-md-3 px-3  '>
                        <h3>Links Rápidos</h3>
                        <ul>
                            <li><NavLink className='a' to={'/'}>Pagina Inicial</NavLink></li>
                            <li><NavLink className='a' to={'/produto'}>Productos</NavLink></li>
                            <li><NavLink className='a' to={'/sobre'}>Sobre</NavLink></li>
                            <li><NavLink className='a' to={'/sobre'}>Contacto</NavLink></li>
                        </ul>
                    </div>
                    <div className='col-12 my-2 c col-md-3 px-3  '>
                        <h3>Legal</h3>
                        <ul>
                            <li><NavLink className='a' to={'/reembolso'}>Políticas de reembolso</NavLink></li>
                            <li><NavLink className='a' to={'/entregas'}>Entregas</NavLink></li>
                            <li><NavLink className='a' to={'/legal'}>Legal</NavLink></li>
                            <li><NavLink className='a' to={'/termos'}>Politicas e Termos</NavLink></li>
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