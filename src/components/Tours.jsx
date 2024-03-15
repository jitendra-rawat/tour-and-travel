import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import TourCard from './TourCard';

const Tours = () => {
  const tourData = [
    {
      title: 'Char Dham Yatra',
      price: 500,
      location: 'Hawaii',
      duration: '5 days',
      images: [
        'https://via.placeholder.com/800x600',
        'https://via.placeholder.com/800x600',
        'https://via.placeholder.com/800x600',
      ],
    },
    {
      title: 'Adi Kailash Yatra',
      price: 500,
      location: 'Hawaii',
      duration: '5 days',
      images: [
        'https://via.placeholder.com/800x600',
        'https://via.placeholder.com/800x600',
        'https://via.placeholder.com/800x600',
      ],
    },
  ];

  return (
    <div className="container mx-auto max-w-7xl my-28">
      <div>
        <h3 className="text-4xl font-bold font-poppins">Featured things to do</h3>
        <p className="text-xl font-bold font-poppins text-gray-500 my-2">
          Popular things to do that eSanchari recommends for you
        </p>
      </div>
      <div className="my-8 flex flex-wrap justify-evenly items-center">
        {tourData.map((tour, index) => (
        
          <Link key={index} to={`/tour/${tour.title}`}>
            <TourCard
              title={tour.title}
              price={tour.price}
              location={tour.location}
              duration={tour.duration}
              images={tour.images}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tours;
