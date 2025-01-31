import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import {BrowserRouter} from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import { ProductProvider } from './contexts/products.context';
import { CartDropdownProvider } from './contexts/cart-dropdown.context';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <CartDropdownProvider>
            <App />
          </CartDropdownProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
