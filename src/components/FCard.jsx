import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PCard({ description, title , icon}) {
  return (
    <div className='bg-black w-36 h-36 md:w-64 md:h-64 rounded-lg shadow-[0px_0px_10px_0px_purple] flex flex-col items-center justify-center mx-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-xl text-center'>
      <FontAwesomeIcon icon={icon} size="2x" className="text-white mb-2" />
      <h3 className='mt-4 text-xl font-semibold text-white'>{title}</h3>
      <p className='h-20 object-cover text-white'>{description}</p>
    </div>
  );
}
