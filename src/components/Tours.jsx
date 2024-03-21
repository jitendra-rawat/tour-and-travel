import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom'; 
import TourCard from './TourCard';
import axios from 'axios';

const Tours = () => {

  const [tours, setTours] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/tour/all');
        setTours(response.data);
      } catch (error) {
        console.error('Error fetching tour data:', error);
      }
    };

    fetchData();
  }, []);

 

  return (
    <div className="container mx-auto max-w-7xl my-28">
      <div>
        <h3 className="text-4xl font-bold font-poppins">Featured things to do</h3>
        <p className="text-xl font-bold font-poppins text-gray-500 my-2">
          Popular things to do that eSanchari recommends for you
        </p>
      </div>
      <div className="my-8 flex flex-wrap justify-evenly items-center">

        {tours.map((tour, index) => (
        
          <Link key={index} to={`/tour/${tour._id}`}>
            <TourCard
            id={tour._id}
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
