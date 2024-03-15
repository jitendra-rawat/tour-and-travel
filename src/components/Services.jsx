import React from 'react';

const Service = () => {
  const services = [
    {
      title: 'Web Development',
      subtitle: 'We create stunning and responsive websites tailored to your business needs.',
      icon: 'bg-blue-500',
    },
    {
      title: 'Graphic Design',
      subtitle: 'We offer creative and eye-catching graphic design solutions for your brand.',
      icon: 'bg-green-500',
    },
    {
      title: 'Digital Marketing',
      subtitle: 'We provide result-oriented digital marketing strategies to boost your online presence.',
      icon: 'bg-yellow-500',
    },
    {
      title: 'SEO Optimization',
      subtitle: 'We optimize your website for search engines to improve your website\'s visibility and ranking.',
      icon: 'bg-red-500',
    },
  ];

  return (
    <section className=" py-16 max-w-7xl mx-auto container">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-semibold text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center">
                <div className={`h-12 w-12 mx-auto text-white rounded-full ${service.icon}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 0a1 1 0 011 1v5.586l1.707-1.707a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 6.586V1a1 1 0 011-1zm-1 14.586l-1.707 1.707a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 11-1.414 1.414L11 14.586V20a1 1 0 11-2 0v-5.414zM5 12a1 1 0 100 2h10a1 1 0 100-2H5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mt-4">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
