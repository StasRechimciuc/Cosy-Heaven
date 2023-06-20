import { useGlobalContext } from '../../context'
import {BsCartPlusFill} from 'react-icons/bs'

import {GrLogin} from 'react-icons/gr'
import {BsSearch} from 'react-icons/bs'
import {GiArchiveResearch} from 'react-icons/gi'
import {BiHappyAlt} from 'react-icons/bi' 
import {GiWoodBeam} from 'react-icons/gi'

import '../Hamburger/hamburger.css'
import HamburgerMenu from '../Hamburger/Hamburger'

const Header = () => {
    const { windowWidth } = useGlobalContext()
    /* sa pun in context.jsx useeffectu si windowwidth  ---> */

    /* import winwidth aici si useeffect fac ceva cu dansu */
    /* daca e width < 480 pun hamburger altfel tot musoru din header */
    /* cand termin hamburger fac new branch in git bush  */
    /* media query basic in app css ---> */
    /* media query pt fiecare musor in header css */

    return (
    <div className="home-section">
    {  windowWidth < 480 ? 
    <div className="hamburger-header">
        <HamburgerMenu />
        <h2 className='hamburger-title'>Cosy<span className='header__left-span'>Heaven</span></h2>
    </div> :
    <header className='header'>
        <div className="header__left">
            <h2 className='header__left-title'>Cosy<span className='header__left-span'>Heaven</span></h2>
        </div>
        <ul className='header__left-links'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Products</a></li>
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
    </header>}
    <div className="hero">
        <div className="hero__left">
            <h2>Design Your <br/>Comfort Zone</h2>
            <p className='hero__left-text'>Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Iusto, at sed omnis 
                corporis doloremque possimus velit! 
                Repudiandae nisi odit, aperiam odio ducimus,
                 obcaecati libero et quia tempora excepturi 
                 quis alias?
            </p>
            <button className="btn">Shop now</button>
        </div>
        <div className="hero__right">
            <div className="images">
                <div className="main-img img">
                    <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg" alt="mainImg" />
                </div>
                <div className="sec-img img">
                    <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.789918645915c8acb36f.jpeg" alt="secImg" />
                </div>
            </div>
        </div>
    </div>

    <section className="featured">
        <div className="featured__content">
            <h2>Featured Products</h2>
            <div className="featured__content-images">
                <div className="featured__content-img">
                        <img src="https://www.course-api.com/images/store/product-7.jpeg" alt="featuredImg1" className="img" />
                    <div className="overlay">
                        <BsSearch className='searchIcon'/>
                    </div>
                    <div className="featured__content-info">
                        <p>Wooden Gardrobe</p>
                        <span>$360.88</span>
                    </div>
                </div>
                <div className="featured__content-img">
                    <img src="https://www.course-api.com/images/store/product-8.jpeg" alt="featuredImg2" className="img" />
                    <div className="overlay">
                        <BsSearch className='searchIcon'/>
                    </div>
                    <div className="featured__content-info">
                        <p>Wooden desk</p>
                        <span>$245.20</span>
                    </div>
                </div>
                <div className="featured__content-img">
                    <img src="https://www.course-api.com/images/store/product-10.jpeg" alt="featuredImg3" className="img" />
                    <div className="overlay">
                        <BsSearch className='searchIcon'/>
                    </div>
                    <div className="featured__content-info">
                        <p>Leather Sofa</p>
                        <span><s>$450.99</s>  $370.00</span>
                    </div>
                </div>
            </div> 
            <button className="btn featured__content-btn">All products</button>
        </div>
    </section>

    <section className="cards">
        <div className="cards__title">
            <h4 className='cards__title-h4'>Custom Furniture for <br/> Each Client</h4>
            <p className='cards__title-text'>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Omnis minus vero sunt <br/>impedit nulla hic voluptas sed 
            eligendi dicta ad.
            </p>
        </div>
        <div className="cards__services">
            <article className="card__service-article">
                <span className='cards__service-icon'><GiArchiveResearch className='card__service-icon'/></span> 
                <h3>Originality</h3>
                <p>Lorem ipsum dolor sit amet
                 consectetur adipisicing elit.
                  Voluptatum voluptate at repellat 
                  illo ipsum suscipit, inventore qui
                   vero voluptatibus, ab velit 
                   consectetur voluptas, quam 
                   perspiciatis.
                </p>
            </article>
            <article className="card__service-article">
                <span className='cards__service-icon'><BiHappyAlt className='card__service-icon'/></span> 
                <h3>Comfort</h3>
                <p>Lorem ipsum dolor sit amet
                 consectetur adipisicing elit.
                  Voluptatum voluptate at repellat 
                  illo ipsum suscipit, inventore qui
                   vero voluptatibus, ab velit 
                   consectetur voluptas, quam 
                   perspiciatis.
                </p>
            </article>
            <article className="card__service-article">
                <span className='cards__service-icon'><GiWoodBeam className='card__service-icon'/></span> 
                <h3>Ecological</h3>
                <p>Lorem ipsum dolor sit amet
                 consectetur adipisicing elit.
                  Voluptatum voluptate at repellat 
                  illo ipsum suscipit, inventore qui
                   vero voluptatibus, ab velit 
                   consectetur voluptas, quam 
                   perspiciatis.
                </p>
            </article>
        </div>
    </section>

    <section className="footer-section">
        <form className="footer__info">
            <div className="footer__join">
                <h2>Join our newsletter and get 21% off</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Quis voluptatem quos velit neque quisquam modi deleniti
                     ad debitis inventore ducimus!
                </p>
            </div>
            <div className="footer__email">
                <input type="email" name='email' placeholder='Email' className='footer__email-inp'/>
                <button className="footer__btn">Subscribe</button>
            </div>
        </form>
        <footer className="footer__copyright">© 2023 <span>|Cosy Heaven|</span>All rights reserved</footer>
    </section>
    </div>
  )
}

export default Header