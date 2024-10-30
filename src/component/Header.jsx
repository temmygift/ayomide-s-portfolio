import React from 'react';

const Header = ({ setClick }) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 h-24">
      <div className="text-white text-3xl font-bold cursor-pointer" onClick={() => setClick('home')}>
        OKE AYOMIDE
      </div>
      <ul className="flex space-x-8">
        <li>
          <a 
            href="#home" 
            className="text-gray-300 hover:text-white text-xl" 
            onClick={() => setClick('home')}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            className="text-gray-300 hover:text-white text-xl" 
            onClick={() => setClick('about')}
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#services" 
            className="text-gray-300 hover:text-white text-xl" 
            onClick={() => setClick('services')}
          >
            Services
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className="text-gray-300 hover:text-white text-xl" 
            onClick={() => setClick('contact')}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;




