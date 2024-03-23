import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-20">
      <div className="container max-w-7xl mx-auto text-gray-300">

        <div className="flex justify-between items-start">

          {/* First Section:*/}
          <div className="mb-4  ">
          <h2 className='text-4xl text-white mb-2 font-bold font-poppins'>Busy Boots Travel</h2>
            <p className=" text-base font-poppins w-[300px]">Discover new horizons with our premier tour and travel services. From breathtaking landscapes to cultural gems, let us guide your journey.</p>
          </div>

          {/* Second Section: */}
          <div className="mb-4  ">
            <h4 className="text-lg font-bold mb-2 font-poppins">Quick Links</h4>
            <div className='flex flex-col'>
             <Link to={'/'}  className="text-gray-300 hover:text-white  font-poppins">Home</Link>
             <Link to={'/tour'}   className="text-gray-300 hover:text-white font-poppins">Tours</Link>
             <Link to={'/blogs'}  className="text-gray-300 hover:text-white font-poppins" >Blogs</Link>
             <Link to={'/about'}  className="text-gray-300 hover:text-white font-poppins" >About Us</Link>
             <Link to={'/contact'}  className="text-gray-300 hover:text-white font-poppins" >Contact Us</Link>
             <Link to={'/login'}  className="text-gray-300 hover:text-white font-poppins" >Admin Login</Link>
            </div>
          </div>

          {/* Third Section: Policies */}
          <div className="mb-4  ">
            <h4 className="text-lg font-bold mb-2 font-poppins">Policies</h4>
            <div className='flex flex-col'>
              <a href="#" className="text-gray-300 hover:text-white  font-poppins">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white font-poppins">Terms of Service</a>
            </div>
          </div>

          {/* Fourth Section: Social Media Links */}
          <div className="mb-4 ">
            <h4 className="text-lg font-bold mb-2 font-poppins">Connect With Us</h4>
            <div className='flex flex-col'>
              <a href="#" className="text-gray-300 hover:text-white  font-poppins">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-white  font-poppins">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-white font-poppins">Instagram</a>
            </div>
          </div>
        </div>


        <div className='mt-36 '>
          <p className='text-gray-200 text-center text-base font-poppins'>Developed by- <span className='font-bold '>Jitendra Rawat</span> </p>
        </div>

   
      </div>
    </footer>
  );
};

export default Footer;
