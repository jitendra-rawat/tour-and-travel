import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { server } from './utils';

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
    itinerary: [], 
    facilities: "", 
    inclusions: "", 
    note: "", 
  };

  const [formData, setFormData] = useState(initialState);
  const [additionalImages, setAdditionalImages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAddImage = () => {
    if (additionalImages.length < 3) {
      setAdditionalImages(prevImages => [...prevImages, ""]);
    } else {
      toast.error("You can add up to 3 images only!");
    }
  };

  const handleImageChange = (index, value) => {
    setAdditionalImages(prevImages => {
      const updatedImages = [...prevImages];
      updatedImages[index] = value;
      return updatedImages;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const allImages = [...formData.images, ...additionalImages];
      await axios.post(`${server}/tour/add-tour`, { ...formData, images: allImages });

      setFormData(initialState);
      setAdditionalImages([]);
      toast.success("Added New Tour Successfully!");
    } catch (error) {
      console.error("Error adding tour:", error);
      toast.error("Failed to add tour");
    }
  };

  return (
    <div className="bg-white rounded-lg p-8 my-20 w-[900px] mx-auto container h-[700px] overflow-y-scroll">
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
              {field.name === "images" ? (
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
