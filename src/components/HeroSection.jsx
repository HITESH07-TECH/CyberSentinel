import React from 'react';
import backgroundImage from '../assets/background.png';

const HeroSection = () => (
  <div 
    className="h-screen flex items-center justify-center flex-col gap-y-4 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      height: '100vh',
    }}
  >
    <h1 className="text-white text-4xl font-bold text-center">Protect Your Network with Advanced DDoS Solutions</h1>
    <p className="text-white text-lg font-bold text-center">Secure, reliable, and trusted by top companies.</p>
    <div className='mt-6 flex items-center justify-center flex-col md:flex-row gap-4'>
    <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" href='/GetStarted'>
     <a href='/GetStarted'> Get Started</a>
    </button>
    <button className="mt-4 px-6 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition" href="/LogIn">
     <a href='/LogIn'> Log in</a>
    </button>
    </div>
  </div>
);

export default HeroSection;

