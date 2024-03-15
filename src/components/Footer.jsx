import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-28">
      <div className="container max-w-7xl mx-auto text-gray-300">
        <div className="flex justify-between items-start">

          {/* First Section: Logo and Description */}
          <div className="mb-4  ">
          <h2 className='text-4xl text-white mb-2 font-bold font-poppins'>Travelify</h2>
            <p className=" text-base font-poppins w-[300px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, atque!</p>
          </div>

          {/* Second Section: Quick Links */}
          <div className="mb-4  ">
            <h4 className="text-lg font-bold mb-2 font-poppins">Quick Links</h4>
            <div className='flex flex-col'>
              <a href="#" className="text-gray-300 hover:text-white  font-poppins">Home</a>
              <a href="#" className="text-gray-300 hover:text-white font-poppins">About Us</a>
              <a href="#" className="text-gray-300 hover:text-white font-poppins" >Contact Us</a>
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

   
      </div>
    </footer>
  );
};

export default Footer;
