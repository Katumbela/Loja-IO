import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import './footer.css'

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
                            <li>Pagina Inicial</li>
                            <li>Producto</li>
                            <li>Sobre</li>
                            <li>Contacto</li>
                        </ul>
                    </div>
                    <div className='col-12 my-2 c col-md-3 px-3  '>
                        <h3>Legal</h3>
                        <ul>
                            <li>Políticas de reembolso</li>
                            <li>Entregas</li>
                            <li>Locais de Recolhas</li>
                            <li>Politicas e Termos</li>
                        </ul>
                    </div>
                </div>
            </div>
            <center className="bg-light copy">&copy; 2023 &middot; IO &middot; Desenvolvido por <a href="http://www.arotec.ao">AROTEC</a></center>
        </>
    )
}
export default Footer