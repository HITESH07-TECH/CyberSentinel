import React, { useState } from 'react';

const FCard = ({ image, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`relative w-64 h-80 cursor-pointer transform transition-transform duration-500 ${
        isFlipped ? 'rotate-y-180' : ''
      }`}
      onClick={handleFlip}
    >
      {/* Front Side */}
      <div
        className={`absolute w-full h-full bg-white shadow-lg rounded-lg p-4 flex flex-col justify-center items-center backface-hidden transform ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <img src={image} alt={title} className="w-32 h-32 mb-4 rounded-full" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      {/* Back Side */}
      <div
        className={`absolute w-full h-full bg-gray-200 shadow-lg rounded-lg p-4 flex justify-center items-center text-center backface-hidden transform rotate-y-180 ${
          isFlipped ? 'rotate-y-0' : 'rotate-y-180'
        }`}
      >
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FCard;
