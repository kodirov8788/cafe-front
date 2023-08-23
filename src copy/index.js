import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Issiq from './components/Issiq/Issiq';
import Gazlik from './components/Gazlik/Gazlik';
import Gazsiz from './components/Gazsiz/Gazsiz';
import Taomlar from './components/Taomlar/Taomlar';
import Cart from './pages/Cart/Cart';
import { ContextProvider } from './context/ProductContext';
import Navbar from './components/Navbar/Navbar';
import Order from './pages/order/Order';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='products/issiq' element={<Issiq />} />
            <Route path='products/gazlik' element={<Gazlik />} />
            <Route path='products/gazsiz' element={<Gazsiz />} />
            <Route path='products/taomlar' element={<Taomlar />} />
          </Route>
          <Route path='order' element={<Order />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);

reportWebVitals();
