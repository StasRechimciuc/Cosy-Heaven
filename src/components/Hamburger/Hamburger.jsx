import React, { useState } from 'react';
import { BsCartPlusFill } from 'react-icons/bs';
import { GrLogin } from 'react-icons/gr';
import './hamburger.css';

import { Link } from 'react-router-dom'

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }


  return (
    <div>
      <nav>
        <div className="burger-menu" onClick={handleMenuToggle}>
          <div className={`burger-bar ${isMenuOpen ? 'clicked' : 'unclicked'}`}></div>
          <div className={`burger-bar ${isMenuOpen ? 'clicked' : 'unclicked'}`}></div>
        </div>
      </nav>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className='header__left-links'>
                <li onClick={handleMenuToggle}><Link to="/">Home</Link></li>
                <li onClick={handleMenuToggle}><Link to="/About">About</Link></li>
                <li onClick={handleMenuToggle}><Link to="/Products">Products</Link></li>
            </ul>
        <div className="header__right">
          <div className="header__right-cart">
            <a className="header__right-text">Cart</a>
            <BsCartPlusFill className="header__icon" />
          </div>
          <div className="header__right-login">
            <a className="header__right-text">Login</a>
            <GrLogin className="header__icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;