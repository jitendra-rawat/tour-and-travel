import React, { useState } from "react";

const AddTour = ({ onAddTour }) => {
  const [formData, setFormData] = useState({
    name: "",
    overview: "",
    difficulty: "",
    duration: "",
    altitude: "",
    ageLimit: "",
    highlights: [],
    itinerary: [],
    facilities: [],
    inclusions: [],
    note: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    onAddTour(formData);
  
    setFormData({
      name: "",
      overview: "",
      difficulty: "",
      duration: "",
      altitude: "",
      ageLimit: "",
      highlights: [],
      itinerary: [],
      facilities: [],
      inclusions: [],
      note: [],
    });
  };

  return (
    <div className="bg-white rounded-lg p-8 mb-20 w-[900px] mx-auto container h-[700px] overflow-y-scroll">
      <h2 className="font-poppins text-2xl text-center mb-4 font-bold">
        Add New Tour
      </h2>
      <form onSubmit={handleSubmit} className="space-4 w-full ">


<div className="flex items-center justify-between mb-2">


        {/* tour name */}
        <div>
          <label className="block text-gray-700 font-poppins" htmlFor="name">
            Tour Name
          </label>
          <input
            type="text"
       
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-[400px] border border-gray-300 p-2 rounded-md"
            required
          />
        </div>


            {/* difficulty */}

            <div>
          <label className="block text-gray-700 font-poppins" htmlFor="name">
         Difficulty
          </label>
          <input
            type="text"
           
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            className="w-[400px] border border-gray-300 p-2 rounded-md"
            required
          />
        </div>

   

        </div>


        <div className="flex items-center justify-between mb-2" >

              {/* duration */}

        <div>
          <label className="block text-gray-700 font-poppins" htmlFor="name">
         Duration
          </label>
          <input
            type="text"
           
            name=" duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-[400px] border border-gray-300 p-2 rounded-md"
            required
          />
        </div>

        {/* altitude */}
        <div>
          <label className="block text-gray-700 font-poppins" htmlFor="name">
         Altitude
          </label>
          <input
            type="text"
           
            name="altitude"
            value={formData.altitude}
            onChange={handleChange}
            className="w-[400px] border border-gray-300 p-2 rounded-md"
            required
          />
        </div>


          </div>


    

        {/* age limit */}

        <div className="mb-2">
          <label className="block text-gray-700 font-poppins" htmlFor="name">
     Age Limit
          </label>
          <input
            type="text"
           
            name="ageLimit"
            value={formData.ageLimit}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>


        {/* highlights */}
        <div className="mb-2">
          <label
            className="block text-gray-700 font-poppins"
            htmlFor="overview"
          >
          Highlights
          </label>
          <textarea
          
            name="highlights"
            value={formData.highlights}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            rows="4"
            required
          ></textarea>
        </div>


        {/* itinerary */}

        <div className="mb-2">
          <label
            className="block text-gray-700 font-poppins"
            htmlFor="overview"
          >
       Itinerary
          </label>
          <textarea
          
            name="itinerary"
            value={formData.itinerary}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            rows="4"
            required
          ></textarea>
        </div>


        {/* facilities */}

        <div className="mb-2">
          <label
            className="block text-gray-700 font-poppins"
            htmlFor="overview"
          >
     Facilities
          </label>
          <textarea
          
            name="facilities"
            value={formData.facilities}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            rows="4"
            required
          ></textarea>
        </div>


        {/* inclusions */}

        <div className="mb-2">
          <label
            className="block text-gray-700 font-poppins"
            htmlFor="overview"
          >
  Inclusions
          </label>
          <textarea
          
            name="inclusions"
            value={formData.inclusions}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            rows="4"
            required
          ></textarea>
        </div>

             {/* overview */}
             <div className="mb-2">
          <label
            className="block text-gray-700 font-poppins"
            htmlFor="overview"
          >
            Overview
          </label>
          <textarea
            id="overview"
            name="overview"
            value={formData.overview}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            rows="4"
            required
          ></textarea>
        </div>


        {/* notes */}

        <div className="mb-2">
          <label
            className="block text-gray-700 font-poppins"
            htmlFor="overview"
          >
 Note
          </label>
          <textarea
          
            name="note"
            value={formData.note}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            rows="4"
            required
          ></textarea>
        </div>



      
        <div className="mt-4">
          <button
            type="submit"
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-md"
          >
            Add Tour
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTour;
