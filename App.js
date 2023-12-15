import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import Footer from './components/Footer';
import CatalogItemPage from './pages/CatalogItemPage';


function App() {
  return (
    <div className='container mx-auto'>
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
    </div>
  );
}

export default App;
