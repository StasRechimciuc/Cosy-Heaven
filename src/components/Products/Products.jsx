import React,{useState} from 'react'
import { useGlobalContext } from '../../context'
import {Link} from 'react-router-dom'

import images from '../images'

import product1 from '../../assets/product-1.jpeg'

import { nanoid } from 'nanoid'

import {BsSearch} from 'react-icons/bs'
import {FaBars, FaSortAmountUpAlt} from 'react-icons/fa'

const Products = () => {
     const { 
      log,
      handleRangeChange,
      active,
      setActive,
      color,
      handleColor,
      filteredByColor,
      value,
      activeCategory,
      handleActiveCategory,
      clearFiltres,
      filteredByCategory,
      filteredByPrice,
      handleOption
    } = useGlobalContext()
     

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
        <button
         type='button'
         className={activeCategory === 0 ? "products__categories-btn activeCategory" : "products__categories-btn"}
         onClick={() => handleActiveCategory(0,'all')}>
            All
          </button>
        <button
         type='button'
         className={activeCategory === 1 ? "products__categories-btn activeCategory" : "products__categories-btn"}
         onClick={() => handleActiveCategory(1,'livingRoom')}>
          Living Room</button>
        <button
         type='button'
         className={activeCategory === 2 ? "products__categories-btn activeCategory" : "products__categories-btn"}
         onClick={() => handleActiveCategory(2,'Kids')}>
            Kids
          </button>
        <button
         type='button'
         className={activeCategory === 3 ? "products__categories-btn activeCategory" : "products__categories-btn"}
         onClick={() => handleActiveCategory(3,'Dining')}>
            Dining
          </button>
        <button
         type='button'
         className={activeCategory === 4 ? "products__categories-btn activeCategory" : "products__categories-btn"}
         onClick={() => handleActiveCategory(4,'Bedroom')}>
            Bedroom
          </button>
        <button
         type='button'
         className={activeCategory === 5 ? "products__categories-btn activeCategory" : "products__categories-btn"}
         onClick={() => handleActiveCategory(5,'Kitchen')}>
            Kitchen
          </button>
      </div>
      <div className="products__colors">
      <h4 className='products-title'>Colors:</h4>
      <div className="products__colors-buttons">
        <button 
        type='button' 
        className={color === 'all' ? 'all-colors all' : 'all-colors'}
        onClick={() => handleColor('all')}>
          All
         </button>

        <button 
        type='button' 
        className={color === 'red' ? 'color-btn red activeColor' : 'color-btn red'}
        onClick={() => handleColor('red')}>
        </button>

        <button 
        type='button' 
        className={color === 'blue' ? 'color-btn blue activeColor' : 'color-btn blue'}
        onClick={() => handleColor('blue')}>
        </button>

        <button 
        type='button' 
        className={color === 'green' ? 'color-btn green activeColor' : 'color-btn green'}
        onClick={() => handleColor('green')}>
        </button>

        <button 
        type='button' 
        className={color === 'black' ? 'color-btn black activeColor' : 'color-btn black'} 
        onClick={() => handleColor('black')}>
        </button>

        <button 
        type='button' 
        className={color === 'white' ? 'color-btn white activeColor' : 'color-btn white'}
        onClick={() => handleColor('white')}>
        </button>

      </div>
      </div>
      <div className="products__price">
      <h4 className='products-title'>Price:</h4>
      <input 
      type="range" 
      min="0"
      max="3000"
      step="50"
      value={value} 
      onChange={handleRangeChange} 
      className="products-range"/>
      <span className='products-span'>${value}</span>
      </div>
      <button type='button' className='clear-filters' onClick={clearFiltres}>Clear Filters</button>
    </form>


    <main className="products-section">
      <section className='products__filters2'>
        <div className="products__filters2-buttons">
          <button type='button' className={active==='squares' ? 'filters2-squares active' : 'filters2-squares'} onClick={() => setActive('squares')}><FaSortAmountUpAlt /></button>
          <button type='button' className={active === 'bars' ? 'filters2-bars active' : 'filters2-bars'} onClick={() => setActive('bars')}><FaBars /></button>
        </div>

        <h4 className='products__filters2-numbers'>{filteredByPrice.length} Products Found</h4>
        <hr  className='line'/>
        <form className='filters2-form'>
          <label htmlFor="sort" className="products2-label">Sort by</label>
          <select name="sort" className="sort-input" onChange={(e) => handleOption(e)}>
            <option value="price-lowest">price (lowest)</option>
            <option value="price-highest">price (highest)</option>
            <option value="name-a">name (a - z)</option>
            <option value="name-z">name (z - a)</option>
          </select>
        </form>
      </section>

      {active === 'squares' ?
        <div className="allProducts">
        {filteredByPrice.length === 0 ?
         <p className='allProducts-text'>Sorry,no products matched your search.</p> 
         : filteredByPrice.map(item => {
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
    })}
        </div>
        :
        <section className="allProducts-col">
      {filteredByPrice.length === 0 ?
         <p className='allProducts-text'>Sorry,no products matched your search.</p> 
         : filteredByPrice.map(item => {
        const {title, price, img, description} = item
        return (
      <div className="allProducts-image-col" key={nanoid()}>
        <img src={img} alt={title} className='products-img-col'/>
        <div className="allProducts-info-col">
          <h5>{title}</h5>
          <span className='description-span-col'>${price}</span>
          <p className='description-col'>{
            /* half of description */
           description.slice(0,Math.floor(description.length / 2.5))}...</p>
          <button className="btn btn-col">More</button>
        </div>
      </div> 
        )
      })    
      }
      </section>
      }
    </main>
   </div>
  </section>
  )
}
export default Products