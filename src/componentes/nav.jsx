import React, { useState } from 'react';
import { FaArrowRight, FaSearch, FaSignInAlt, FaTruckMoving, FaUser } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './nav.css'
import logo from '../img/logo.png'


const Nav = ({ searchbtn, cart, favs }) => {
  const [search, setSearch] = useState()
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  let qntC = 0;

  cart.map((item) => (qntC += item.quantidade));

  let qntF = 0;

  favs.map((item) => (qntF += item.quantidade));


  return (
    <>
      {/*<div className='d-flex livre justify-content-center'>

        <FaTruckMoving className='icone mx-5' />

        <span>Entregas grátis para compras acima de 100.000kz</span>
      </div>*/}

      <div className='main_header bg-white'>
        <div className='container bg-white d-flex justify-content-between'>
          <a href="/">
            <img src={logo} alt='logo' className='logo' />
          </a>

          <div className='caixa_pesquisa'>
            <input type='text' value={search} placeholder='Pesquise o seu produto' autoComplete='off' onChange={(e) => setSearch(e.target.value)}></input>
          </div>

          <div className='icone'>
            {
              isAuthenticated &&
              (
                <div className='conta'>
                  <div className='icone_usuario'>
                    <FaUserCircle />
                  </div>
                  <p>Olá, {user.name}</p>
                </div>
              )
            }
            <div className='icone1'>
              <Link to="/favoritos" className='link position-relative thumb-item fav'> {qntF >= 1 && <span className="thumb">{qntF}</span>} <AiOutlineHeart /></Link>
              <Link to="/carrinho" className='link position-relative thumb-item cart'>{qntC >= 1 && <span className="thumb">{qntC}</span>} <BsCart3 /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='header'>
        <div className='container'>
          <div className='nav'>
            <ul>
              <li>
                <Link to='/' className='link'>Inicio</Link>
              </li> 
              <li>
                <Link to='/produto' className='link'>Produto</Link>
              </li>
              <li>
                <Link to='/sobre' className='link position-relative'>Sobre</Link>
              </li>
              {/* <li>
                <Link to='/contato' className='link '>Contacto </Link>
              </li> */}
            </ul>
          </div>
          <div className='loginout'>
            {
              isAuthenticated ?
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><FiLogOut /></button>
                :
                <Link to='/login' className=' login-btn'>Entrar <FaSignInAlt className='icon ms-1' /></Link>
            }
          </div>
        </div>
      </div>
    </>
  )
}
export default Nav
