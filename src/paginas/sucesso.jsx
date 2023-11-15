import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { ImEye } from "react-icons/im";
import { PiShoppingCartBold } from "react-icons/pi";
import Nav from "../componentes/nav";
import box from '../img/box.gif'
import logo from '../img/logo.png'
import Footer from "../componentes/footer";
import { BsHeartFill } from "react-icons/bs";


const Sucesso = ({cart, searchbtn, favoritos, addcarrinho, ver, favs, setFavoritos }) => {
  return (
    <div className="">
    
    
      
        <center className=" mx-auto " style={{marginTop:'20vh'}}>
        <img src={logo} alt="" style={{height:'3em'}} />
        <br />
        <img src={box} alt="" />
            <h4 className="text-secondary w-75 text-primary">
                Sua encomenda foi recebida com sucesso e está sendo processada pela nossa equipe!
            </h4>
            <p className="text-secondary" style={{width:'55%'}}>
                Vá para a pagina de rastreio e insira o codigo da sua compra para submeter o comprovativo, ou envie por email informando como titulo "<b>Compra - #Codigo de compra</b>"
            </p>
            <a href="/" className="btn btn-primary">OK</a>
        </center>
      
      

    </div>
  );
};
export default Sucesso;
