import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card from './components/common/card/Card';
import NotFound from './components/common/notFound/NotFound';
import Home from './components/pages/home/Home';
import Contact from './components/pages/contact/Contact';
import Favorite from './components/pages/favorite/Favorite';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="favorite" element={<Favorite />} />
          {/* <Route path='dentistas' element={<Card />} /> */}
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode >
);

reportWebVitals();
