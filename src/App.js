import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
// import Mockup from './components/Test';

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
