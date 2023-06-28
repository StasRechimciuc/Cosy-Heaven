import React,{useState} from 'react'
import { useGlobalContext } from '../../context'
import {Link} from 'react-router-dom'
import images from '../images'

import { nanoid } from 'nanoid'

import {BsSearch} from 'react-icons/bs'
import {FaBars, FaSortAmountUpAlt} from 'react-icons/fa'

const Products = () => {
     const { log } = useGlobalContext()

     const [value, setValue] = useState(3000);

     const handleRangeChange = (event) => {
       setValue(parseInt(event.target.value));
     };

  return (
  <section className="products">

    <div className="location">
    <h1><Link to='/'>Home</Link>/Products</h1> 
     </div>

    <div className="products-container">
    <form className="products-filters">
      <input type="text" placeholder='Search' className='products__search-inp'/>
      <div className="products__categories">
        <h4 className='products-title'>Categories:</h4>
        <button type='button' className="products__categories-btn">All</button>
        <button type='button' className="products__categories-btn">Living Room</button>
        <button type='button' className="products__categories-btn">Kids</button>
        <button type='button' className="products__categories-btn">Dining</button>
        <button type='button' className="products__categories-btn">Bedroom</button>
        <button type='button' className="products__categories-btn">Kitchen</button>
      </div>
      <div className="products__colors">
      <h4 className='products-title'>Colors:</h4>
      <div className="products__colors-buttons">
        <button type='button' className='all-colors'>All</button>
        <button type='button' className="color-btn red"></button>
        <button type='button' className="color-btn blue"></button>
        <button type='button' className="color-btn green"></button>
        <button type='button' className="color-btn black"></button>
        <button type='button' className="color-btn white"></button>
      </div>
      </div>
      <div className="products__price">
      <h4 className='products-title'>Price:</h4>
      <input 
      type="range" 
      min="0"
      max="3000"
      step="25"
      value={value} 
      onChange={handleRangeChange} 
      className="products-range"/>
      <span className='products-span'>${value}</span>
      </div>
      <button type='button' className='clear-filters'>Clear Filters</button>
    </form>


    <main className="products-section">
      <section className='products__filters2'>
        <div className="products__filters2-buttons">
          <button type='button' className='filters2-squares'><FaSortAmountUpAlt /></button>
          <button type='button' className='filters2-bars'><FaBars /></button>
        </div>
        <hr  className='line'/>
        <form className='filters2-form'>
          <label htmlFor="sort" className="products2-label">Sort by</label>
          <select name="sort" className="sort-input">
            <option value="price-lowest">price (lowest)</option>
            <option value="price-highest">price (highest)</option>
            <option value="name-a">name (a - z)</option>
            <option value="name-z">name (z - a)</option>
          </select>
        </form>
      </section>

      <div className="allProducts">
        
        {
          images.map(item => {
            const { title, img, price } = item
            return(
              <div className="allProducts-image" key={nanoid()}>
                  <BsSearch className='allProducts-icon'/>
                <img src={img} alt={title} className='products-img'/>
                <div className="allProducts-info">
                  <p>{title}</p>
                  <span>${price}</span>
                </div>
            </div>
            )
            
          })
        }
        
      </div>
    </main>
   </div>
  </section>
  )
}

export default Products