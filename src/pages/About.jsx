import React from 'react';

const About = () => {
  return (
    <div className="container max-w-7xl mx-auto mt-36">

      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2 font-poppins">Welcome to the World of Remarkable Adventure</h1>
        <p className="text-gray-600 font-poppins text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. In omnis unde doloremque. Doloribus sit vero corrupti non facilis expedita id!</p>
      </div>

      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center py-16">
        <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold mb-2 font-poppins">Safe & Verified</h2>
          <p className="text-gray-700 text-base font-poppins">We strongly believe in uncompromised safety of our customers. Our team has physically verified all our vendor partners across 75+ Safety and Quality Guidelines, that includes everything from certifications and licenses to equipment standards and maintenance. Know more about our Guidelines</p>
        </div>
        <div className="md:w-1/2 md:pl-4">
          <img className='rounded-lg' src="https://img.freepik.com/free-photo/endurance-hiker-people-freedom-mountaineering_1253-670.jpg?t=st=1710479814~exp=1710483414~hmac=0d771b30f0d91f7bb160b3709872058949275ad5e706343c811732364906b489&w=1060" alt="Image 1" className="w-full h-auto" />
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row items-center py-16">
        <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0 order-2 md:order-1">
          <img className='rounded-lg' src="https://img.freepik.com/free-photo/young-woman-is-practicing-yoga-near-river_155003-11358.jpg?t=st=1710479949~exp=1710483549~hmac=6afe3aed7c63f1c827a72710a6b6c6c9a9cf0de666b60aa5526e792ab3f6c48a&w=1060" alt="Image 2" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 md:pl-4 order-1 md:order-2">
          <h2 className="text-2xl font-semibold mb-2 font-poppins ">Authentic Experiences</h2>
          <p className="text-gray-700 font-poppins text-base">What you see is what you get. Whether you want to bungee jump or zip-line, we have chosen vendor partners, that are committed to delivering experiences that give you an adrenaline-rush.</p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row items-center py-16">
        <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold mb-2 font-poppins ">Best Cancellation Policy</h2>
          <p className="text-gray-700 font-poppins text-base ">At AdventuRush, our customers come first. Our booking policy has no hidden charges and we have the best-in-industry cancellation policies for you</p>
        </div>
        <div className="md:w-1/2 md:pl-4">
          <img  src="https://img.freepik.com/free-photo/full-shot-man-living-healthy-lifestyle_23-2151201900.jpg?t=st=1711190373~exp=1711193973~hmac=ff02d2057efe86b9906f1e615e4921be04e60fb7ca7f056b6e623cdc33f31d3e&w=1060" alt="Image 3" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Section 4 */}
      <div className="flex flex-col md:flex-row items-center py-16">
        <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0 order-2 md:order-1">
          <img  src="https://img.freepik.com/free-photo/tourist-tents-are-green-misty-forest-mountains_146671-18467.jpg?t=st=1711190288~exp=1711193888~hmac=df1c1e74e76aff80a73ad3cd95e88e7ba7a807e31d4d3ee8d3b038751c67842c&w=1060" alt="Image 4" className="w-full h-auto rounded-lg" />
        </div>
        <div className="md:w-1/2 md:pl-4 order-1 md:order-2">
          <h2 className="text-2xl font-semibold mb-2 font-poppins ">Seamless Experience</h2>
          <p className="text-gray-700 text-base font-poppins">Our easy-to-use online platform is designed to give you concise yet complete information. Post your booking, we assign you a dedicated customer support team for any queries.</p>
        </div>
      </div>

      
    </div>
  );
};

export default About;
