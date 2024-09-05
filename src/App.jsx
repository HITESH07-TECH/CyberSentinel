import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header />
      <HeroSection />
      <About />
      <Features/>
      <Footer />
    </div>
  );
}

export default App;
