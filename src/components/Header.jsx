import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-transparent py-6  shadow-lg">
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
     <Link to={'/'}>  <h1 className="text-4xl  font-semibold font-poppins">Travelify</h1> </Link> 
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to={'/'} className=" hover:text-gray-700 font-poppins font-semibold">Home</Link>
            </li>

            <li>
            <Link to={'/'} className=" hover:text-gray-700 font-poppins font-semibold">Tours</Link>
            </li>
            <li>
            <Link to={'/blogs'} className=" hover:text-gray-700 font-poppins font-semibold">Blogs</Link>
            </li>
            <li>
            <Link to={'/about'} className=" hover:text-gray-700 font-poppins font-semibold">About</Link>
            </li>
            <li>
            <Link to={'/contact'} className=" hover:text-gray-700 font-poppins font-semibold">Contact</Link>
            </li>
            <li>
            <Link to={'/signup'} className=" hover:text-gray-700 font-poppins font-semibold">Sign Up</Link>
            </li>
            <li>
            <Link to={'/login'} className=" hover:text-gray-700 font-poppins font-semibold">Login</Link>
            </li>

            <li>
            <Link to={'/dashboard'} className=" hover:text-gray-700 font-poppins font-semibold">Dashboard</Link>
            </li>
          
          
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
