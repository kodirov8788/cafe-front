import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='products/issiq' element={<h1>Issiq ichimliklar</h1>} />
          <Route path='products/gazsiz' element={<h1>gazsiz ichimliklar</h1>} />
          <Route path='products/gazlik' element={<h1>gazlik ichimliklar</h1>} />
          <Route path='products/taomlar' element={<h1>Taomlar</h1>} />
        </Route>
      </Routes>

    </BrowserRouter>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
