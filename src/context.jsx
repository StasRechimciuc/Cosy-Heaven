import React, {useContext,useEffect,useState} from 'react'
import images from './components/images'
const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const log = console.log

  /* =============Resize=============== */
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', handleWindowResize)
    
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])
  
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
const filteredByPrice = value === 3000 ? filteredByColor 
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
  /* =============Clear Filtres =============== */
  const clearFiltres = () => {
    setActiveCategory(0)
    setColor('all')
    setValue(3000)
    setSelectedCategory('all')
    setSelectedOption('name-a')
  }
  
  return (
        <AppContext.Provider value={{ 
          

          windowWidth,
          setWindowWidth,

          log,

          loading,

          active,
          setActive,

          color,
          handleColor,
          filteredByColor,

          value,
          handleRangeChange,
          filteredByPrice,

          activeCategory,
          setActiveCategory,
          handleActiveCategory,
          filteredByCategory,

          handleOption,

          clearFiltres,
          }}>
            {children}
        </AppContext.Provider>
  )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {useGlobalContext, AppProvider}