import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'

import prod1 from '../../assets/product-18.jpeg'
import prod2 from '../../assets/product-17.jpeg'

import { BsFillTrashFill } from 'react-icons/bs'
const Cart = () => {

const {

} = useGlobalContext()

  return (
    <section className="cart">
      <div className="location">
        <h1><Link to='/Home'>Home</Link>/Cart</h1>
      </div>

      <div className="cart-container">
        <main className="cart-items">
          <div className="cart-header">
            <p>Item</p>
            <p>Quantity</p>
            <p>Price</p>
            <p>Subtotal</p>
            <p>Delete</p>
          </div>
          <hr className='cart-line'/>
          <div className="cart-products">

            <article className="cart-product">
            <div className="cart-products__main">
              <img src={prod1} alt="product1" className='cart-img'/>
              <div className="products-cart__info">
                <h3 className="products-cart__h3">Chair</h3>
                <p>Color: red</p>
              </div>
            </div>
            <div className="cart-quantity">
              <p>3</p>
            </div>
            <div className="cart-price"><p>$1150.99</p></div>
            <div className="cart-subtotal"><p>$1131.51</p></div>
            <button className='btn cart-delete'><BsFillTrashFill /></button>
            </article>

            <article className="cart-product">
            <div className="cart-products__main">
              <img src={prod2} alt="product1" className='cart-img'/>
              <div className="products-cart__info">
                <h3 className="products-cart__h3">Chair</h3>
                <p>Color: red</p>
              </div>
            </div>
            <div className="cart-quantity">
              <p>3</p>
            </div>
            <div className="cart-price"><p>$1150.99</p></div>
            <div className="cart-subtotal"><p>$1131.51</p></div>
            <button className='btn cart-delete'><BsFillTrashFill /></button>
            </article>

          <hr className='cart-line '/>
          </div>

        </main>
        <div className="cart-buttons">
          <Link to='/Products'><button className="btn">Back to Products</button></Link>
          <button className="btn clear-cart">Clear Cart</button>
        </div>
        <div className="cart-checkout">
          <div className="cart-checkout__info">
            <div className="checkout-top">
              <div className="checkout-top__subtotal">
                <h2>Subtotal:</h2>
                <p>$13131.53</p>
                
              </div>
              <div className="checkout-top__fee">
                <h2>Shipping fee:</h2>
                <p>$2.35</p>
              </div>
              <hr className='cart-line'/>
            </div>
            <div className="checkout-total">
              <h2>Order total:</h2>
              <h2>$5221.31</h2>
            </div>
          </div>
          <button className="btn login-btn">login</button>
        </div>
      </div>

    </section>    
  )
}

export default Cart