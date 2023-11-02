import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import {BsWhatsapp } from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import './footer.css'

const Footer = () => {
    return (
        <>
        <div className='footer'>
            <div className='container'>
                <div className='sobre'>
                    <div className='logo'>
                        <img src='.\img\logo2.jpg ' alt='logo'></img>
                    </div>
                   <div className='icone'>
                        <li><BsFacebook/></li>
                        <li><BsWhatsapp/></li>
                        <li><BsInstagram/></li>
                        <li><BsTwitter/></li>
                    </div>
                </div>
          
           <div className='conta'>
            <h3>Minha Conta</h3>
            <ul>
                <li>Login</li>  
                <li>Cadastro</li>
                <li>Carrinho</li>
            </ul>
            </div>
           <div className= 'pagina'>
            <h3>Paginas</h3>
            <ul>
                 <li>Pagina Inicial</li>
                    <li>Producto</li>
                    <li>Sobre</li>
                    <li>Contacto</li>
            </ul>
        </div>
             </div>
        </div>
        </>
    )
}
export default Footer