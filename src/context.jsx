import React, {useContext,useEffect,useState} from 'react'
const AppContext = React.createContext()

const AppProvider = ({children}) => {
  /* =============RESIZE=============== */
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleWindowResize);
    
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, [])
  
  /* =============LOADING =============== */
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 1500)
  },[window.location.pathname])
    
const log = console.log
  return (
        <AppContext.Provider value={{ 
          windowWidth,
          setWindowWidth,
          log,
          loading
          }}>
            {children}
        </AppContext.Provider>
  )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {useGlobalContext, AppProvider}