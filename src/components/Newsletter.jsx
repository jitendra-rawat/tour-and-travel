import React from 'react';

const Newsletter = () => {
  return (
    <section className='max-w-sm lg:max-w-7xl mx-auto container my-20 lg:my-28 flex flex-wrap justify-between items-center'>

      {/* Left Section */}
      <div className="lg:w-1/2 ">
        <h3 className='text-4xl text-gray-900 font-bold font-poppins pb-4'>Join Our Newsletter</h3>
        <p className='text-lg text-gray-700 mb-6 font-poppins'>Subscribe to our newsletter for the latest updates and special offers.</p>
        <div className="flex">
          <input type="email" placeholder="Your email address" className="px-4 py-2 rounded-l-lg focus:outline-none  w-[200px]" />
          <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-r-lg ">Subscribe</button>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2">
        <img src="https://esanchari.com/static/media/Home_newsletter.fb1ccbc7ace958b9665c.png" alt="Newsletter" className="w-full h-auto" />
      </div>

    </section>
  );
};

export default Newsletter;
