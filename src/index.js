import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './store/cartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
         <App></App> 
      </BrowserRouter>
    </CartProvider>
    
     
    

  </React.StrictMode>
);



