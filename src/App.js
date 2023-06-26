import './App.css';
import Header from './components/Header/Header'
import About from './components/About/About'
import Products from './components/Products/Products'
import Navbar from './components/Navbar/Navbar';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Navbar />
      <Routes>
          <Route path='/' element={<Header />} />
          <Route path="/About" element={<About />} />
          <Route path='/Products' element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
