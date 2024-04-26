import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-transparent py-6 relative inset-x-0 top-0 z-20 shadow-lg ">
      <div className="container mx-auto lg:max-w-4xl xl:max-w-7xl flex justify-between items-center">
     <Link to={'/'}>  <h1 className="lg:text-2xl xl:text-4xl  font-semibold font-poppins">Busy Boots Travel</h1> </Link> 
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to={'/'} className="lg:text-base hover:text-gray-700 font-poppins font-semibold">Home</Link>
            </li>

            <li>
            <Link to={'/tour'} className="lg:text-base hover:text-gray-700 font-poppins font-semibold">Tours</Link>
            </li>
            <li>
            <Link to={'/blogs'} className="lg:text-base hover:text-gray-700 font-poppins font-semibold">Blogs</Link>
            </li>
            <li>
            <Link to={'/about'} className="lg:text-base hover:text-gray-700 font-poppins font-semibold">About</Link>
            </li>
            <li>
            <Link to={'/contact'} className="lg:text-base hover:text-gray-700 font-poppins font-semibold">Contact</Link>
            </li>
            {/* <li>
            <Link to={'/signup'} className="lg:text-base hover:text-gray-700 font-poppins font-semibold">Sign Up</Link>
            </li> */}
            <li>
            <Link to={'/login'} className="lg:text-base hover:text-gray-700 font-poppins font-semibold">Login</Link>
            </li>

            <li>
            <Link to={'/dashboard'} className="lg:text-base hover:text-gray-700 font-poppins font-semibold">Dashboard</Link>
            </li>
          
          
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
