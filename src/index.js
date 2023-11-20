import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card from './components/Card';
import NotFound from './components/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/> 
        <Route path='/dentistas' element={<Card />}/> 
        <Route path='*' element={<NotFound />}/> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
