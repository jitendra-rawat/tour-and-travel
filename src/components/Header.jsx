import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-transparent py-6 relative inset-x-0 top-0 z-20 shadow-lg">
      <div className="container mx-auto max-w-sm lg:max-w-4xl xl:max-w-7xl flex justify-between items-center">
        <Link to={'/'}>
          <h1 className="lg:text-2xl xl:text-4xl font-semibold font-poppins">Busy Boots Travel</h1>
        </Link>
        <nav className="lg:hidden">
          <button className="block text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </nav>
        <nav className={`lg:flex ${isOpen ? 'flex flex-col absolute bg-white w-full left-0 top-full mt-2 p-4 rounded-lg shadow-lg' : 'hidden'}`}>
          <ul className="lg:flex lg:space-x-6">
            <li>
              <Link to={'/'} className="block lg:text-base hover:text-gray-700 font-poppins font-semibold">Home</Link>
            </li>
            <li>
              <Link to={'/tour'} className="block lg:text-base hover:text-gray-700 font-poppins font-semibold">Tours</Link>
            </li>
            <li>
              <Link to={'/blogs'} className="block lg:text-base hover:text-gray-700 font-poppins font-semibold">Blogs</Link>
            </li>
            <li>
              <Link to={'/about'} className="block lg:text-base hover:text-gray-700 font-poppins font-semibold">About</Link>
            </li>
            <li>
              <Link to={'/contact'} className="block lg:text-base hover:text-gray-700 font-poppins font-semibold">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
