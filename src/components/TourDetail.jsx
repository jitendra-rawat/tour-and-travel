import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Booking from "../components/Booking";
import { SiLevelsdotfyi } from "react-icons/si";
import { IoTime } from "react-icons/io5";
import { FaMountain } from "react-icons/fa6";
import { FaChild } from "react-icons/fa6";
import { FaStickyNote } from "react-icons/fa";
import { BsHighlights } from "react-icons/bs";
import { MdCardTravel } from "react-icons/md";
import { MdFeaturedPlayList } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
import { MdNoteAlt } from "react-icons/md";

const TourDetail = ({ tour, images }) => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

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
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <Slider {...settings}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Tour ${index + 1}`}
              className="w-full h-[700px] object-cover"
            />
          ))}
        </Slider>
      </div>

      <div className="my-20 px-10">
        <h2 className="text-4xl font-bold mb-4 font-poppins">{tour.name}</h2>
        <p className="text-xl font-poppins text-gray-600 mb-4">
          {tour.overview}
        </p>

        {/* highlights */}

        <div className="my-20">
          <div className="flex gap-2">
            <BsHighlights size={30} />
            <h2 className="text-xl font-poppins font-semibold mb-4">
              Highlights
            </h2>
          </div>
          <ul className="list-disc list-inside text-base font-poppins">
            {tour.highlights.map((highlight, index) => (
              <li key={index} className="mb-2 text-base">
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* info */}

        <div className="grid grid-cols-4 gap-4 my-16">
          <div className="flex gap-4 items-center">
            <SiLevelsdotfyi size={30} />
            <div>
              <h3 className="text-xl font-semibold font-poppins">
                Difficulty
              </h3>
              <p className="text-base font-poppins">{tour.difficulty}</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <IoTime size={30} />
            <div>
              <h3 className="text-xl font-semibold font-poppins">Duration</h3>
              <p className="text-base font-poppins">{tour.duration}</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <FaMountain size={30} />
            <div>
              <h3 className="text-xl font-semibold font-poppins">Altitude</h3>
              <p className="text-base font-poppins">{tour.altitude}</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <FaChild size={30} />
            <div>
              <h3 className="text-xl font-semibold font-poppins">Age Limit</h3>
              <p className="text-base font-poppins">{tour.ageLimit}</p>
            </div>
          </div>
        </div>

        {/* itinerary */}

        <div className="my-20">
          <div className="flex gap-2">
            <MdCardTravel size={30} />
            <p
              className="text-xl font-poppins font-semibold mb-4"
              onClick={() => toggleAccordion(null)}
            >
              Itinerary
            </p>
          </div>
          <div className="accordion">
            {tour.itinerary.map((item, index) => (
              <div key={index} className="mb-4 border-b border-gray-300">
                <h3
                  className="flex items-center justify-between cursor-pointer text-base font-semibold font-poppins"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="py-2 text-base font-poppins">
                    {item.title}
                  </span>
                  <span className="material-icons text-gray-400">
                    {openAccordionIndex === index ? "arrow_upward" : "arrow_downward"}
                  </span>
                </h3>
                {openAccordionIndex === index && (
                  <p className="text-gray-600 mt-2 py-2 text-base font-poppins">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* facilities and booking */}
        <div className="my-20 flex justify-between items-start">
          {/* features */}
          <div>
            <div>
              <div className="flex gap-2">
                <MdFeaturedPlayList size={30} />
                <h2 className="text-xl font-poppins font-semibold mb-4">
                  Features
                </h2>
              </div>
              <ul className="list-disc list-inside text-base font-poppins">
                {tour.facilities.map((facility, index) => (
                  <li key={index} className="mb-2">
                    {facility}
                  </li>
                ))}
              </ul>
            </div>

            {/* inclusions */}
            <div className="my-20">
              <div className="flex gap-2">
                <IoAddCircle size={30} />
                <h2 className="text-xl font-poppins font-semibold mb-4">
                  Inclusions
                </h2>
              </div>
              <ul className="list-disc list-inside text-base font-poppins">
                {tour.inclusions.map((inclusion, index) => (
                  <li key={index} className="mb-2">
                    {inclusion}
                  </li>
                ))}
              </ul>
            </div>

            {/* notes */}
            <div className="my-20">
              <div className="flex gap-2">
                <MdNoteAlt size={30} />
                <h2 className="text-xl font-poppins font-semibold mb-4">
                  Note
                </h2>
              </div>
              <ul className="list-disc list-inside text-base font-poppins">
                {tour.note.map((note, index) => (
                  <li key={index} className="mb-2">
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* booking */}
          <div>
            <Booking tourName={tour.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
