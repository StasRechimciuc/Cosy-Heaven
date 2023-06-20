import React, { useState, useEffect, useContext } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { FaBars } from 'react-icons/fa'
import {BsCartPlusFill} from 'react-icons/bs'
import {GrLogin} from 'react-icons/gr'
import {context,useGlobalContext} from '../../context' 

const HamburgerMenu = () => {
  const { 
    windowWidth,
    setWindowWidth } = useGlobalContext()
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  
  return (
    <div>
      {windowWidth < 480 && (
        <FaBars className="menu-icon" onClick={handleMenuToggle} />
      )}
      <Menu isOpen={menuOpen} onStateChange={({ isOpen }) => setMenuOpen(isOpen)}>
        <header className='hamburger-header'>
              <h2 className='hamburger-title'>Cosy<span className='header__left-span'>Heaven</span></h2>
           <ul className='hamburger-links'>
            <li><a href="#" className='hamburger-link'>Home</a></li>
            <li><a href="#" className='hamburger-link'>About</a></li>
            <li><a href="#" className='hamburger-link'>Products</a></li>
           </ul>
           <div className="header__right">
            <div className='header__right-cart'>
                <a className='header__right-text'>Cart</a>
                <BsCartPlusFill className='header__icon'/>
            </div>
            <div className="header__right-login">
                <a className='header__right-text'>Login</a>
                <GrLogin className='header__icon'/>
            </div>
        </div>
        </header>
      </Menu>
    </div>
  );
};

export default HamburgerMenu;