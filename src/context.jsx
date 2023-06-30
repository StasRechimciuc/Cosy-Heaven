import React, {useContext,useEffect,useState} from 'react'
import images from './components/images'
const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const log = console.log

/* =============Range-Input=============== */
  const [value, setValue] = useState(3000);

     const handleRangeChange = (event) => {
       setValue(parseInt(event.target.value));
     };
  
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

  /* =============Color active =============== */
  const [color,setColor] = useState(0)
  const handleColor = color => setColor(color)

/* =============Category active =============== */
  const [activeCategory,setActiveCategory] = useState(0)
  const handleActiveCategory = category => setActiveCategory(category)

  /* =============Clear Filtres =============== */
  const clearFiltres = () => {
    setActiveCategory(0)
    setColor(0)
    setValue(3000)
  }
  
  return (
        <AppContext.Provider value={{ 
          handleRangeChange,
          windowWidth,
          setWindowWidth,
          log,
          loading,
          active,
          setActive,
          color,
          setColor,
          handleColor,
          value,
          activeCategory,
          setActiveCategory,
          handleActiveCategory,
          clearFiltres
          }}>
            {children}
        </AppContext.Provider>
  )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {useGlobalContext, AppProvider}