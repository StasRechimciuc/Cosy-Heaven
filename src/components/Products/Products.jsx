import React from 'react'
import { useGlobalContext } from '../../context'
import {Link} from 'react-router-dom'

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

      value,

      activeCategory,
      handleActiveCategory,

      clearFiltres,

      handleOption,

      handleSubmit,
      handleSearch,
      searchValue,
      searchResult,

    } = useGlobalContext()
     

  return (
  <section className="products">

    <div className="location">
    <h1><Link to='/'>Home</Link>/Products</h1> 
     </div>

    <div className="products-container">
    <form className="products-filters" onSubmit={(e) => handleSubmit(e)}>
      <input 
      type="text" 
      placeholder='Search' 
      className='products__search-inp' 
      value={searchValue}
      onChange={handleSearch}
      />
      <div className="products__categories">
        <h4 className='products-title'>Categories:</h4>
        <button
        
         className={activeCategory === 0 ? "products__categories-btn activeCategory" : "products__categories-btn"}
         onClick={() => handleActiveCategory(0,'all')}>
            All
          </button>
        <button
        
         className={activeCategory === 1 ? "products__categories-btn activeCategory" : "products__categories-btn"}
         onClick={() => handleActiveCategory(1,'livingRoom')}>
          Living Room</button>
        <button
        
         className={activeCategory === 2 ? "products__categories-btn activeCategory" : "products__categories-btn"}
         onClick={() => handleActiveCategory(2,'Kids')}>
            Kids
          </button>
        <button
        
         className={activeCategory === 3 ? "products__categories-btn activeCategory" : "products__categories-btn"}
         onClick={() => handleActiveCategory(3,'Dining')}>
            Dining
          </button>
        <button
        
         className={activeCategory === 4 ? "products__categories-btn activeCategory" : "products__categories-btn"}
         onClick={() => handleActiveCategory(4,'Bedroom')}>
            Bedroom
          </button>
        <button
        
         className={activeCategory === 5 ? "products__categories-btn activeCategory" : "products__categories-btn"}
         onClick={() => handleActiveCategory(5,'Kitchen')}>
            Kitchen
          </button>
      </div>
      <div className="products__colors">
      <h4 className='products-title'>Colors:</h4>
      <div className="products__colors-buttons">
        <button 
       
        className={color === 'all' ? 'all-colors all' : 'all-colors'}
        onClick={() => handleColor('all')}>
          All
         </button>

        <button 
       
        className={color === 'red' ? 'color-btn red activeColor' : 'color-btn red'}
        onClick={() => handleColor('red')}>
        </button>

        <button 
       
        className={color === 'blue' ? 'color-btn blue activeColor' : 'color-btn blue'}
        onClick={() => handleColor('blue')}>
        </button>

        <button 
       
        className={color === 'green' ? 'color-btn green activeColor' : 'color-btn green'}
        onClick={() => handleColor('green')}>
        </button>

        <button 
       
        className={color === 'black' ? 'color-btn black activeColor' : 'color-btn black'} 
        onClick={() => handleColor('black')}>
        </button>

        <button 
       
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
      <button className='clear-filters' onClick={clearFiltres}>Clear Filters</button>
    </form>


    <main className="products-section">
      <section className='products__filters2'>
        <div className="products__filters2-buttons">
          <button type='button' className={active==='squares' ? 'filters2-squares active' : 'filters2-squares'} onClick={() => setActive('squares')}><FaSortAmountUpAlt /></button>
          <button type='button' className={active === 'bars' ? 'filters2-bars active' : 'filters2-bars'} onClick={() => setActive('bars')}><FaBars /></button>
        </div>

        <h4 className='products__filters2-numbers'>{searchResult.length} Products Found</h4>
        <hr  className='line'/>
        <form className='filters2-form'>
          <label htmlFor="sort" className="products2-label">Sort by</label>
          <select name="sort" className="sort-input" onChange={(e) => handleOption(e)}>
            <option value="name-a">name (a - z)</option>
            <option value="name-z">name (z - a)</option>
            <option value="price-lowest">price (lowest)</option>
            <option value="price-highest">price (highest)</option>
          </select>
        </form>
      </section>

      {active === 'squares' ?
        <div className="allProducts">
        {searchResult.length === 0 ?
         <p className='allProducts-text'>Sorry,no products matched your search.</p> 
         : searchResult.map(item => {
          const { title, img, price, description, color, count, id } = item
        return(
      <div className="allProducts-image" key={nanoid()}>
        <Link
        to={`/Products/${title}`}
        state={{ title, img, price, description, color, count, id }}
        className="allProducts-icon"
        >
        <BsSearch />
      </Link>
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
      {searchResult.length === 0 ?
         <p className='allProducts-text'>Sorry,no products matched your search.</p> 
         : searchResult.map(item => {
        const {title, price, img, description, color, count, id} = item
        return (
      <div className="allProducts-image-col" key={nanoid()}>
        <img src={img} alt={title} className='products-img-col'/>
        <div className="allProducts-info-col">
          <h5>{title}</h5>
          <span className='description-span-col'>${price}</span>
          <p className='description-col'>{
            /* half of description */
           description.slice(0,Math.floor(description.length / 2))}...</p>
          <Link
          to={`/Products/${title}`}
          state={{ title, img, price, description, color, count, id }}
          >
          <button className="btn btn-col">More</button>
          </Link>
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