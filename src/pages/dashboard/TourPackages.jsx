import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { toast } from 'react-toastify';

const TourPackages = () => {
  const [tours, setTours] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    images: [],
    location: '',
    overview: "",
    difficulty: "",
    duration: "",
    altitude: "",
    ageLimit: "",
    highlights: "",
    itinerary: "",
    facilities: "",
    inclusions: "",
    note: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${server}/tour/all`);
        setTours(response.data);
      } catch (error) {
        console.error('Error fetching tour data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: name === "images" ? value.split(",").map(url => url.trim()) : value,
    }));
  };
  
  const handleAddImage = () => {
    setAdditionalImages((prevImages) => [...prevImages, ""]);
  };

  const handleImageChange = (index, value) => {
    setAdditionalImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[index] = value;
      return updatedImages;
    });
  };

  const handleEdit = (tour) => {
    setSelectedTour(tour._id);
    setFormData({
      name: tour.name,
      price: tour.price,
      images: tour.images,
      location: tour.location,
      overview: tour.overview,
      difficulty: tour.difficulty,
      duration: tour.duration,
      altitude: tour.altitude,
      ageLimit: tour.ageLimit,
      highlights: tour.highlights,
      itinerary: tour.itinerary,
      facilities: tour.facilities,
      inclusions: tour.inclusions,
      note: tour.note,
    }); 
    setModalOpen(true);
  };

  const handleSubmitUpdate = async () => {
    try {
      const allImages = [...formData.images, ...additionalImages];
      await axios.put(`${server}/tour/update/${selectedTour}`, { ...formData, images: allImages });

      setFormData({
        name: "",
        price: "",
        images: [],
        location: '',
        overview: "",
        difficulty: "",
        duration: "",
        altitude: "",
        ageLimit: "",
        highlights: "",
        itinerary: "",
        facilities: "",
        inclusions: "",
        note: "",
      });
      setModalOpen(false);
      toast("Updated Tour Successfully!");
    } catch (error) {
      console.error("Error updating tour:", error);
    }
  };

  const handleDelete = async (tourId) => {
    try {
      await axios.delete(`${server}/tour/delete/${tourId}`);
      
      setTours(prevTours => prevTours.filter(tour => tour._id !== tourId));
      toast("Tour deleted successfully!");
    } catch (error) {
      console.log('Error while deleting tour:', error);
    }
  };

  return (
    <div className="tour-packages grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {tours.map(tour => (
        <div key={tour._id} className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold">{tour.name}</h2>
          <p className="text-gray-600">{tour.description}</p>
          <p className="text-gray-800 font-semibold mt-2">Price: {tour.price}</p>
          <div className="mt-4 flex justify-end">
            <button onClick={() => handleEdit(tour)} className="text-white px-4 py-2 rounded-lg bg-gray-700 font-semibold mr-2">Edit</button>
            <button onClick={() => handleDelete(tour._id)} className="px-4 py-2 rounded-lg text-white bg-gray-700 font-semibold">Delete</button>
          </div>
        </div>
      ))}
      
      <Modal isOpen={modalOpen}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {inputFields.map((field, index) => (
            <div key={index}>
              <label className="block text-gray-700 font-poppins" htmlFor={field.name}>{field.label}</label>
              {field.name === "images" ? (
                <>
                  <textarea
                    name={field.name}
                    value={formData[field.name].join(",")}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-md"
                    rows="4"
                    required
                  />
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
                  <button type="button" onClick={handleAddImage} className="mt-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-md">
                    Add Image
                  </button>
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
        <div className="mt-4 flex gap-4">
          <button onClick={handleSubmitUpdate} className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-md">
            Update
          </button>
          <button onClick={() => setModalOpen(false)} className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-md">
            Close
          </button>
        </div>
      </Modal>
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
  { name: "images", label: "Images Url" },
];

export default TourPackages;
