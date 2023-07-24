import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import { nanoid } from 'nanoid'

import { BsFillTrashFill } from 'react-icons/bs'
const Cart = () => {

const {
  log,
  cart,
  deleteFromCart,
  incrementCount,decrementCount,
  handleClearCart,
  windowWidth,
  subTotal,shoppingFee,orderTotal,
  
} = useGlobalContext()

  return (
    <section className="cart">
      <div className="location">
        <h1><Link to='/Home'>Home</Link>/Cart</h1>
      </div>
    
    {cart.length > 0 ? <div className="cart-container">
        <main className="cart-items">
          <div className="cart-header">
            <p>Item</p>
            <p>Quantity</p>
            <p>Price</p>
            {windowWidth >= 1285 && <p>Subtotal</p>}
            <p>Delete</p>
          </div>
          <hr className='cart-line'/>
          <div className="cart-products">
          {
            cart.map((cartItem,index) => {
              const { price, img, title, color, count } = cartItem
              return(
                <article className="cart-product" key={nanoid()}>
                  <div className="cart-products__main">
                    <img src={img} alt={title} className='cart-img'/>
                    <div className="products-cart__info">
                      <h3 className="products-cart__h3">{title}</h3>
                      <p>Color: {color}</p>
                      {windowWidth <= 1285 && <div><p className="cart-subtotal">${parseFloat(price * count).toFixed(2)}</p></div>}
                    </div>
                  </div>
                 <div className="count">
                    <button className="counter-btn minus" onClick={() => decrementCount(index)}>-</button>
                    <p>{count}</p>
                    <button className="counter-btn plus" onClick={() =>incrementCount(index)}>+</button>
                </div>
                <div className="cart-price"><p>${price}</p></div>
                {windowWidth >= 1285 && <div><p className="cart-subtotal">${parseFloat(price * count).toFixed(2)}</p></div>}
                <button className='btn cart-delete' onClick={() => deleteFromCart(index)}><BsFillTrashFill /></button>
            </article>
              )
            })
          }
          <hr className='cart-line '/>
          </div>
        </main>
        <div className="cart-buttons">
          <Link to='/Products'><button className="btn">Back to Products</button></Link>
          <button className="btn clear-cart" onClick={handleClearCart}>Clear Cart</button>
        </div>

        <div className="cart-checkout">
          <div className="cart-checkout__info">
            <div className="checkout-top">
              <div className="checkout-top__subtotal">
                <h2>Subtotal:</h2>
                <p>${subTotal.toFixed(2)}</p>
                
              </div>
              <div className="checkout-top__fee">
                <h2>Shipping fee:</h2>
                <p>${shoppingFee.toFixed(2)}</p>
              </div>
              <hr className='cart-line'/>
            </div>
            <div className="checkout-total">
              <h2>Order total:</h2>
              <h2>${orderTotal.toFixed(2)}</h2>
            </div>
          </div>
          <button className="btn login-btn">login</button>
        </div>


      </div>
  : <div className="empty-cart">
    <hr className='cart-line'/>
    <h1>Empty Cart...</h1>
      <Link to='/Products'><button className="btn">Fill it</button></Link>
    <hr className='cart-line'/>
    </div>
    }
    </section>    
  )
}

export default Cart