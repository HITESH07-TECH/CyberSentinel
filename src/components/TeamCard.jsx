import React, { useState } from 'react';

const FCard = ({ image, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`relative w-64 h-80 cursor-pointer transform transition-transform duration-500 hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.5)] ${
        isFlipped ? 'rotate-y-180' : ''
      }`}
      onClick={handleFlip}
    >
      {/* Front Side */}
      <div
        className={`absolute w-60 h-60 bg-black shadow-lg rounded-3xl mt-8 p-4 flex flex-col justify-center items-center backface-hidden transform ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <img src={image} alt={title} className="w-50 h-50 rounded-2xl mb-8" />
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      {/* Back Side */}
      <div
        className={`absolute w-full h-full bg-gray-500 shadow-lg rounded-3xl p-4 flex justify-center items-center text-center  text-white backface-hidden transform rotate-y-180 ${
          isFlipped ? 'rotate-y-0' : 'rotate-y-180'
        }`}
      >
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FCard;
