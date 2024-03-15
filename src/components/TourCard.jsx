import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const TourCard = ({ images, title, price, location, duration }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg mx-auto my-8">
      <div className="relative">
        <Slider {...settings}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Tour ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          ))}
        </Slider>
      </div>
      
      <div className="px-6 py-6">
        <p className="text-xl font-bold font-poppins">{title}</p>

        <p className="font-semi-bold text-base  font-poppins text-gray-500 my-1">
          Location: {location}
        </p>

       
          <p className=" text-base text-gray-500  font-poppins ">
            Duration: {duration}
          </p>
          <p className=" text-base text-gray-500  font-poppins">
            Price: ${price}
          </p>
        </div>
   

      <div className="px-6 pb-4">
   <Link to={'/tour'}>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Book Now
        </button>

        </Link>   
      </div>
    </div>
  );
};

export default TourCard;
