import React from 'react'
import { Link } from 'react-router-dom'

import extra1 from '../../assets/extra-product-1.jpeg'
import extra2 from '../../assets/extra-product-2.jpeg'
import extra3 from '../../assets/extra-product-3.jpeg'
import extra4 from '../../assets/extra-product-4.jpeg'

import { nanoid } from 'nanoid'

import { useGlobalContext } from '../../context'

const Product = () => {

    const {
        log,
        location,

        count,setCount,

        extraImage,
        handleExtraImage,

        addToCart,
        incrementCount,decrementCount

    } = useGlobalContext()

    const {title,price,img,description} = location.state
    const extras = [img,extra1,extra2,extra3,extra4]
    return (
    <section className="individualProduct">
        <div className="product-overlay" style={{backgroundImage:`url(${img})`}}></div>
        <div className="location">
            <h1><Link to='/'>Home</Link>/<Link to='/Products'>Products</Link>/{title}</h1> 
        </div>
        
        <div className="product-container">
            <div className="container-left">
                <img src={extraImage} alt={title} />
                <div className="extra-images">                
                {
                extras.map((extra,index) => (
                    <img
                     src={extra}
                     alt='extra-Image' 
                     className='extra-img'
                     key={nanoid()}
                     onClick={e => handleExtraImage(e)}
                     />
                ))
                }
            </div>
            </div>

            <div className="container-right">
                <div className="container-right__info">
                    <h2 className='container-right__h2'>{title}</h2>
                    <p className='container-right__text'>{description}</p>
                    <h2 className='container-right__h2'>Price: ${price}</h2>
                </div>
                <Link to='/Products'><button className="btn">Back to products</button></Link>
                <div className="available">
                <h3>Available:</h3>
                <p>In stock</p>
            </div>
            <Link to='/Cart'><button className="btn cart-btn" onClick={addToCart}>Add to cart</button></Link>
            </div>
        </div>
    </section>
  )
}

export default Product