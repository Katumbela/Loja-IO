import React from 'react'
import {BsTelephone} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import {ImLocation} from 'react-icons/im';
import './estilos/contato.css'
const Contato = () => {
    return(
        <>
        
            <div className='container'>
                <h1>Entre em Contacto</h1><br/>
            </div>
            <div className='main_box'>
            <div className='box'>
                <div className="card">
                <div className='icone'>
                    <BsTelephone/>
                </div>
                    <div className='detalhe'>
                        <h6>Telefone</h6>
                        <p>+244 928 101 210</p>
                    </div>
                </div>
           
                <div className="card">
                <div className='icone'>
                    <AiOutlineMail/>
                </div>
                    <div className='detalhe'>
                        <h6> Email</h6>
                        <p>example@gmail.com</p>
                    </div>
                </div>
                <div className="card">
                    <div className='icone'>
                    <ImLocation/>
                </div>
                    <div className='detalhe'>
                        <h6>Endereço</h6>
                        <p>Cacuaco/Vila</p>
                    </div>
                    </div>
                    </div>
                </div>
        <div className='main'>
            <div class="box_input">
                    <div className='input'><input type="text" placeholder="Nome"></input></div>
                    <div className='input'><input type="text" placeholder="Email"></input></div>
                    <div className='input'><input type="text" placeholder="Telefone"></input></div>
               </div>
        </div>
            <div className="form-group">
            <div className="form-msm">
                <textarea placeholder="Mensagem"></textarea>
            </div>
                <div className="enviarbtn">
                    <button>Enviar</button>
                </div>
            </div>
           
        </>
    )
}
export default Contato