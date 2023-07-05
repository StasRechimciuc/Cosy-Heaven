import './App.css';
import Header from './components/Header/Header'
import About from './components/About/About'
import Products from './components/Products/Products'
import Navbar from './components/Navbar/Navbar';
import Loading from './components/loading/Loading'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart'

import { useContext } from 'react';
import { useGlobalContext } from './context';

import { Route, Routes } from 'react-router-dom';

function App() {
  const {loading} = useGlobalContext()

  return (
    <div className="App">
      {
        loading ? <Loading /> : ''
      }
     <Navbar />
      <Routes>
          <Route path='/' element={ <Header />} />
          <Route path="/About" element={ <About />} />
          <Route path='/Products' element={ <Products />} />
          <Route path='/Products/:productId' element={ <Product />} />
          <Route path='/Cart' element={ <Cart />} />
          <Route path='*' element={ <ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
