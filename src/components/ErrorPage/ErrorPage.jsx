import React from 'react'
import {BiSad} from 'react-icons/bi'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <section className='error-section'>
        <h1>Error <span className='error-section__span'>404</span></h1>
        <h4><span className='error-section__span'>Sorry,the page you ent</span> ered cannot be found <BiSad /> </h4>
        <Link to='/'><button className="btn">Back to home</button></Link>
    </section>
  )
}

export default ErrorPage