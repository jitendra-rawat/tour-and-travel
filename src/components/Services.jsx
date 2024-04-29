import React from 'react';

const Service = () => {
  const services = [
    {
      title: 'Customized Tour Packages',
      subtitle: 'Tailored itineraries based on preferences, budget, and interests for personalized travel experiences.',
      icon: 'bg-blue-500',
    },
    {
      title: 'Accommodation Arrangements',
      subtitle: 'Booking flights, hotels, and transportation for a comfortable and convenient travel experience.',
      icon: 'bg-green-500',
    },
    {
      title: 'Guided Tours and Excursions',
      subtitle: 'Expert-led exploration of attractions, landmarks, and cultural sites with insightful commentary.',
      icon: 'bg-yellow-500',
    },
    {
      title: 'Destination Management Services',
      subtitle: 'Coordinating logistics, activities, and assistance at destinations for a seamless travel experience.',
      icon: 'bg-red-500',
    },
  ];

  return (
    <section className=" py-16 max-w-sm lg:max-w-7xl mx-auto container">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-bold font-poppins  text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center">
                <div className={`h-12 w-12 mx-auto text-white rounded-full ${service.icon}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 0a1 1 0 011 1v5.586l1.707-1.707a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 6.586V1a1 1 0 011-1zm-1 14.586l-1.707 1.707a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 11-1.414 1.414L11 14.586V20a1 1 0 11-2 0v-5.414zM5 12a1 1 0 100 2h10a1 1 0 100-2H5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-poppins font-semibold text-gray-900 mt-4">{service.title}</h3>
                <p className="text-gray-700 font-poppins text-base mt-2">{service.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
