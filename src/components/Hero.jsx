import React from 'react';

const Hero = () => {
  return (
    <section className='hero-bg h-screen flex items-center justify-center  '>
      <div className='max-w-sm lg:max-w-7xl container mx-auto flex flex-col justify-center items-center '>
        <h1 className='text-5xl text-black text-left font-bold mb-4 leading-tight font-poppins'>It's Time to Explore the World</h1>
        <h2 className='text-xl text-black mb-8 text-left font-poppins'>Discover amazing destinations and create unforgettable memories.</h2>
        
        <div className='flex justify-start'>
          <button className='bg-white font-poppins text-black hover:scale-110 hover:text-gray-200 hover:bg-black px-8 py-3 rounded-full shadow-lg font-semibold text-lg transition duration-300 ease-in-out'>Book Now</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
