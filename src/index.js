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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='products/issiq' element={<Issiq />} />
          <Route path='products/gazlik' element={<Gazlik />} />
          <Route path='products/gazsiz' element={<Gazsiz />} />
          <Route path='products/taomlar' element={<Taomlar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
