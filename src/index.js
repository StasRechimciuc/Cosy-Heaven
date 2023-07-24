import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context';

import { BrowserRouter as Router } from 'react-router-dom'

import './components/Products/products.css'
import './components/Header/header.css'
import './components/About/about.css'
import './components/loading/loading.css'
import './components/ErrorPage/ErrorPage.css'
import './components/Product/Product.css'
import './components/Cart/Cart.css'
import './components/Login/Login.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <App />
      </AppProvider>
    </Router>
  </React.StrictMode>
);

