import React from 'react';
import FCard from './TeamCard';

const Footer = () => (
  <footer className="footer" id="contact">
    <div className="text-center">
      <h1 className="abosule inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.7)] w-10/12 mx-auto capitalize font-white  text-5xl md:text-6xl inline-block text-left mb-10 text-white neon-green mt-8">
        Made by Team CyberSentinels
      </h1>
    </div>
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-20">
        <FCard
          image="/hitesh.jpg"
          title="Hitesh Bajaj"
          description="This is the description for Card 1"
        />
        <FCard
          image="/yogesh.jpg"
          title="Yogesh Bajaj"
          description="This is the description for Card 2"
        />
        <FCard
          image="/manasvi.jpg"
          title="Manasvi"
          description="This is the description for Card 3"
        />
        <FCard
          image="/tejasvi.png"
          title="Tejasvi"
          description="This is the description for Card 4"
        />
        <FCard
          image="/arambh.jpg"
          title="Arambh"
          description="This is the description for Card 1"
        />
        <FCard
          image="/piyush.jpg"
          title="Piyush"
          description="This is the description for Card 1"
        />
        
      </div>
    </div>
    <h1 className='text-white bg-black p-4 shadow-lg rounded-lg transition-all shadow-white hover:scale-105'> Team CyberSentinels is a group of innovative thinkers and tech enthusiasts, building the future of secure web solutions.</h1>
  </footer>
);

export default Footer;
