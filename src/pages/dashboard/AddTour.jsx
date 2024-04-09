import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import {server} from './utils'

const AddTour = () => {
  
  const initialState = {
    name: "",
    price: "",
    images: [],
    location:'',
    overview: "",
    difficulty: "",
    duration: "",
    altitude: "",
    ageLimit: "",
    highlights: "", 
    itinerary: [], // Change to array
    facilities: "", 
    inclusions: "", 
    note: "", 
  };

  const [formData, setFormData] = useState(initialState);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [additionalItinerary, setAdditionalItinerary] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "images" ? value.split(",").map(url => url.trim()) : value,
    }));
  };

  const handleAddImage = () => {
    if (additionalImages.length < 4) {
      setAdditionalImages((prevImages) => [...prevImages, ""]);
    } else {
      toast("You can add up to 4 images only!");
    }
  };

  const handleAddItinerary = () => {
    setAdditionalItinerary((prevItinerary) => [...prevItinerary, ""]);
  };

  const handleItineraryChange = (index, value) => {
    setAdditionalItinerary((prevItinerary) => {
      const updatedItinerary = [...prevItinerary];
      updatedItinerary[index] = value;
      return updatedItinerary;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Filter out empty strings from the itinerary
      const filteredItinerary = formData.itinerary.filter(item => item.trim() !== "");
  
      const allImages = [...formData.images, ...additionalImages];
      const allItinerary = [...filteredItinerary, ...additionalItinerary];
      await axios.post(`${server}/tour/add-tour`, { ...formData, images: allImages, itinerary: allItinerary });
  
      setFormData(initialState);
      setAdditionalImages([]);
      setAdditionalItinerary([]);
      toast("Added New Tour Successfully!");
  
    } catch (error) {
      console.error("Error adding tour:", error);
    }
  };
  

  return (
    <div className=" bg-white rounded-lg p-8 mb-20 w-[900px] mx-auto container h-[700px] overflow-y-scroll">
      <h2 className="font-poppins text-2xl text-center mb-4 font-bold">
        Add New Tour
      </h2>
      <form onSubmit={handleSubmit} className="space-4 w-full">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {inputFields.map((field) => (
            <div key={field.name}>
              <label
                className="block text-gray-700 font-poppins"
                htmlFor={field.name}
              >
                {field.label}
              </label>
              {field.name === "images" || field.name === "itinerary" ? (
                <>
                  <textarea
                    name={field.name}
                    value={field.name === "images" ? formData[field.name].join(",") : additionalItinerary.join("\n")}
                    onChange={field.name === "images" ? handleChange : (e) => handleItineraryChange(0, e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded-md"
                    rows={field.name === "images" ? "4" : "2"}
                    required
                  ></textarea>

                  {field.name === "images" && (
                    <>
                      {additionalImages.map((image, index) => (
                        <input
                          key={index}
                          type="text"
                          value={image}
                          onChange={(e) => handleImageChange(index, e.target.value)}
                          className="w-full border border-gray-300 p-2 rounded-md mt-2"
                          placeholder="Enter image URL"
                        />
                      ))}
                      {additionalImages.length < 3 && (
                        <button type="button" onClick={handleAddImage} className="mt-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-md">
                          Add Image
                        </button>
                      )}
                    </>
                  )}

                  {field.name === "itinerary" && (
                    <>
                      {additionalItinerary.slice(1).map((item, index) => (
                        <input
                          key={index + 1}
                          type="text"
                          value={item}
                          onChange={(e) => handleItineraryChange(index + 1, e.target.value)}
                          className="w-full border border-gray-300 p-2 rounded-md mt-2"
                          placeholder={`Enter itinerary for Day ${index + 2}`}
                        />
                      ))}
                      <button type="button" onClick={handleAddItinerary} className="mt-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-md">
                        Add Itinerary
                      </button>
                    </>
                  )}
                </>
              ) : (
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-md"
                  required
                />
              )}
            </div>
          ))}
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

const inputFields = [
  { name: "name", label: "Tour Name" },
  { name: "price", label: "Price" },
  { name: "location", label: "Location" },
  { name: "overview", label: "Overview" },
  { name: "difficulty", label: "Difficulty" },
  { name: "duration", label: "Duration" },
  { name: "altitude", label: "Altitude" },
  { name: "ageLimit", label: "Age Limit" },
  { name: "highlights", label: "Highlights" },
  { name: "itinerary", label: "Itinerary" },
  { name: "facilities", label: "Facilities" },
  { name: "inclusions", label: "Inclusions" },
  { name: "note", label: "Note" },
  { name: "images", label: "Images (comma-separated URLs)" },
];

export default AddTour;
