import React, { useEffect } from 'react';

const Header = () => (
    <div id="home" className='w-full bg-black fixed top-0 left-0 z-50'>
    <div></div>
    
    <nav className='w-10/12 flex items-center justify-between bg-black py-6 mx-auto'>
    <div className='flex items-center justify-start text-white text-lg font-bold'>
                    CyberSentinel
    </div>
        <ul className='flex items-center justify-end gap-4 text-secondaryGolden'>
            <li className=''><a href="#home">Home</a></li>
            <li className=''><a href="#about">About</a></li>
            <li className=''><a href="#features">Features</a></li>
            <li className=''><a href="#contact">Team</a></li>
        </ul>
    </nav>
    
</div>
);

export default Header;
