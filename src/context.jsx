import React, {useContext,useEffect,useState, useSyncExternalStore} from 'react'
import images from './components/images'
import { useLocation } from 'react-router-dom'

const AppContext = React.createContext()

const AppProvider = ({children}) => {

  const log = console.log
  const location = useLocation()

  /* =============Window Width=============== */
const [windowWidth,setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize',handleResize)

    return (() => window.removeEventListener('resize',handleResize))

  },[])

  /* =============Loading=============== */
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 1000)
  },[window.location.pathname])

  /* =============Grid/Column Layout Products =============== */
  const [active,setActive] = useState('squares')  

/* =============Category active =============== */
const [activeCategory,setActiveCategory] = useState(0)
const [selectedCategory,setSelectedCategory] = useState('all')

const handleActiveCategory = (index,category) => {
  setActiveCategory(index)
  setSelectedCategory(category)
}
const filteredByCategory = images === 'all' ? images 
: images.filter(image => image.categories.includes(selectedCategory))

  /* =============Color active =============== */
  const [color,setColor] = useState('all')
  const handleColor = color => {
    setColor(color)
  }
  const filteredByColor = color === 'all' ? filteredByCategory 
   : filteredByCategory.filter(image => image.color.includes(color)) 

/* =============Range-Input=============== */
const [value, setValue] = useState(3000);

const handleRangeChange = (event) => {
  setValue(parseInt(event.target.value))
}
let filteredByPrice = value === 3000 ? filteredByColor 
: filteredByColor.filter(image => image.price < value)

/* =============Select-Input=============== */

const [selectedOption,setSelectedOption] = useState('name-a')

const handleOption = (e) => {
  setSelectedOption(e.target.value)
}

let filteredBySort
if(selectedOption === 'price-lowest') {
  filteredBySort = filteredByPrice.sort((a,b) => a.price - b.price)
}else if(selectedOption === 'price-highest') {
  filteredBySort = filteredByPrice.sort((a,b) => b.price - a.price)
}else if(selectedOption === 'name-a') {
  filteredBySort = filteredByPrice
}else if(selectedOption === 'name-z') {
  filteredBySort = filteredByPrice.reverse()
}

/* =============Search-Input=============== */
  const [searchValue,setSearchValue] = useState('')
  const [searchResult,setSearchResult] = useState(filteredBySort)

  const handleSubmit = e => {
    e.preventDefault()
    if(searchValue !== null) {
      setSearchValue(searchValue)
    }
}

  const handleSearch = e => {
    const {target} = e
    setSearchValue(target.value)
  }

  useEffect(()=> {
    setSearchResult(filteredBySort.filter(item => item.title.toLocaleLowerCase().includes(searchValue)))
  },[searchValue,color,value,selectedCategory,selectedOption])

  /* =============Clear Filtres =============== */
  const clearFiltres = () => {
    setActiveCategory(0)
    setColor('all')
    setValue(3000)
    setSelectedCategory('all')
    setSelectedOption('name-a')
    setSearchValue('')
    document.querySelector('.sort-input').value='name-a'
  }

  /* ============ Select-Extra-Image =============== */
  const [extraImage,setExtraImage] = useState(null)
 
  useEffect(()=> {
   location.state ? setExtraImage(location.state.img) : setExtraImage(null)
  },[location])

  const handleExtraImage = e => {
    const {target} = e
    setExtraImage(target.src)
  }


  /* ============ Cart =============== */
  const [cart,setCart] = useState([])

useEffect(() => {
  const storedCart = JSON.parse(localStorage.getItem('cart'))
  storedCart && setCart(storedCart)
},[])

/* de facut ca cand e deja un item de un fel in cart sa nu il pot adauga */
const addToCart = () => {
  const newCartObject = location.state
  setCart([...cart, newCartObject])

  const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const updatedCartItems = [...existingCartItems, newCartObject];
  setCart(updatedCartItems)
  localStorage.setItem('cart', JSON.stringify(updatedCartItems));
}

const deleteFromCart = (index) => {
  const updatedCart = [...cart]; 
  updatedCart.splice(index, 1); 
  setCart(updatedCart);
  localStorage.setItem('cart',JSON.stringify(updatedCart))
};
/* =============== Quantity =================== */
const [quantity,setQuantity] = useState(1)

const incrementCount = index => {
  const incremented = [...cart]
  if(incremented[index].count <= 9 ) {
    incremented[index].count++
    setQuantity(incremented[index].count)
  }
}
/* quantity de rezolvat la reload page */
const decrementCount = index => {
  const decremented = [...cart]
  if(decremented[index].count >= 2 ) {
    decremented[index].count--
    setQuantity(decremented[index].count)
  }
}

/* =============== Clear Cart =================== */

  const handleClearCart = () => {
    setCart([])
    localStorage.clear()
  }

  return (
        <AppContext.Provider value={{ 
      log,
      handleRangeChange,

      windowWidth,

      loading,

      active,
      setActive,

      color,
      handleColor,

      value,

      activeCategory,
      handleActiveCategory,

      clearFiltres,

      filteredByPrice,

      handleOption,
      
      handleSubmit,
      handleSearch,
      searchValue,
      searchResult,

      location,

      extraImage,
      handleExtraImage,

      cart,setCart,
      addToCart,deleteFromCart,

      incrementCount,decrementCount,

      quantity,

      handleClearCart
          }}>
            {children}
        </AppContext.Provider>
  )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {useGlobalContext, AppProvider}