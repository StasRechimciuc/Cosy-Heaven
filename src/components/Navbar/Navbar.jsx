import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import './navbar.css'
import { useGlobalContext } from '../../context'

import {BsCartPlusFill} from 'react-icons/bs'
import {GrLogin} from 'react-icons/gr'

import '../Hamburger/hamburger.css'
import HamburgerMenu from '../Hamburger/Hamburger'

const Navbar = () => {

const { windowWidth,cart } = useGlobalContext()



  return (
    <nav className='navbar'>
    {  windowWidth < 1024 ? 
        <div className="hamburger-header">
            <h2 className='hamburger-title'>Cosy<span className='header__left-span'>Heaven</span></h2>
            <HamburgerMenu />
        </div> :
        <header className='header'>
            <div className="header__left">
                <h2 className='header__left-title'>Cosy<span className='header__left-span'>Heaven</span></h2>
            </div>
            <ul className='header__left-links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Products">Products</Link></li>
            </ul>
            <div className="header__right">
                <div className='header__right-cart'>
                    <Link to='/Cart' className='header__right-text header__right-cart'>Cart</Link>
                    <BsCartPlusFill className='header__icon'/>
                    <span className="cart-counter">{cart.length}</span>
                </div>
                <div className="header__right-login">
                    <Link to='/Login' className='header__right-text'>Login</Link>
                    <GrLogin className='header__icon'/>
                </div>
            </div>
        </header>
    }
     </nav>
  )
}

export default Navbar