import React from 'react';

const TourPackageCard = ({ title, location, duration, price }) => {
  return (
    <div className="bg-white w-[300px] h-[250px] rounded-lg shadow-md  mx-4 my-6">
 
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-2">Location: {location}</p>
        <p className="text-gray-700 mb-2">Duration: {duration}</p>
        <p className="text-gray-700 mb-4">Price: {price}</p>
        <div className="flex justify-between">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Update
          </button>
          <button className="bg-black  text-white font-bold py-2 px-4 rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const TourPackages = () => {
 
  const tourPackages = [
    {
      title: 'Mountain Trek',
      location: 'Himalayas, Nepal',
      duration: '5 days',
      price: '$1000',
    },
    {
      title: 'Desert Safari',
      location: 'Sahara Desert, Morocco',
      duration: '3 days',
      price: '$800',
    },
    {
      title: 'Island Hopping',
      location: 'Philippines',
      duration: '7 days',
      price: '$1200',
    },
    {
      title: 'City Explorer',
      location: 'New York, USA',
      duration: '4 days',
      price: '$900',
    },
  ];

  return (
    <div className="flex flex-wrap justify-between">
      {tourPackages.map((tour, index) => (
        <TourPackageCard key={index} {...tour} />
      ))}
    </div>
  );
};

export default TourPackages;
