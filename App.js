import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import CatalogPage from './pages/CatalogPage.jsx';
import CartPage from './pages/CartPage.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import CatalogItemPage from './pages/CatalogItemPage.jsx';

import {
  RecoilRoot,
} from 'recoil';


function App() {
  return (
    <div className='container mx-auto'>
      <RecoilRoot>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element = {<LandingPage />} />
            <Route path="/catalog" element = {<CatalogPage />} />
            <Route path="/catalog/:id" element = {<CatalogItemPage />} />
            <Route path="/cart" element = {<CartPage />} />
          </Routes>
          <Footer />
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
