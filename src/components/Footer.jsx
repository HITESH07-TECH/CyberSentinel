import React from 'react';
import FCard from './TeamCard';

const Footer = () => (
  <footer className="footer" id="contact">
    <div className="text-center">
      <h1 className="text-white bg-black p-4 shadow-lg rounded-lg transition-all shadow-white hover:scale-105">
        Made by Team CyberSentinels
      </h1>
    </div>
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <FCard
          image="/path-to-your-image.jpg"
          title="Card 1"
          description="This is the description for Card 1"
        />
        <FCard
          image="/path-to-your-image.jpg"
          title="Card 2"
          description="This is the description for Card 2"
        />
        <FCard
          image="/path-to-your-image.jpg"
          title="Card 3"
          description="This is the description for Card 3"
        />
        <FCard
          image="/path-to-your-image.jpg"
          title="Card 4"
          description="This is the description for Card 4"
        />
        <FCard
          image="/path-to-your-image.jpg"
          title="Card 1"
          description="This is the description for Card 1"
        />
        <FCard
          image="/path-to-your-image.jpg"
          title="Card 1"
          description="This is the description for Card 1"
        />
        
      </div>
    </div>
    <h1> Team CyberSentinels is a group of innovative thinkers and tech enthusiasts, building the future of secure web solutions.</h1>
  </footer>
);

export default Footer;
