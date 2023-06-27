import React, {useContext,useEffect,useState} from 'react'
const AppContext = React.createContext()

const AppProvider = ({children}) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
const log = console.log
  return (
        <AppContext.Provider value={{ 
          windowWidth,
          setWindowWidth,
          log
          }}>
            {children}
        </AppContext.Provider>
  )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {useGlobalContext, AppProvider}