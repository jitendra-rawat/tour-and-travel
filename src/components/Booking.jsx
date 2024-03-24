import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {server} from '../utils'

const Booking = ({ tourName }) => {

  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    date: '',
    tourName: tourName,
    numberOfPeople: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${server}/booking/post-bookings`, formData);
      
   setFormData({
    name: '',
    mobileNumber: '',
    email: '',
    date: '',
    tourName: tourName,
    numberOfPeople: ''

   })
      toast.success('Booking successful!');
    } catch (error) {
    
      console.error('Error posting booking data:', error);
    }
  };
  return (
    <div className="w-[400px] mx-auto bg-white p-8 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-poppins font-semibold mb-2">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block text-gray-700 font-poppins font-semibold mb-2">Mobile Number</label>
          <input type="text" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-poppins font-semibold mb-2">Email Address</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="date" className="block text-gray-700 font-poppins font-semibold mb-2">Date</label>
          <input 
            type="date" 
            id="date" 
            name="date" 
            value={formData.date ? formData.date.slice(0, 10) : ''} 
            onChange={handleChange} 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
          />
        </div>

        <div className="mb-6">
          <label htmlFor=" numberOfPeople" className="block text-gray-700 font-poppins font-semibold mb-2">Number of Persons</label>
          <input type="text" name="numberOfPeople" value={formData.numberOfPeople} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
        </div>

        <div className="mb-6">
          <label htmlFor="tourName" className="block text-gray-700 font-poppins font-semibold mb-2">Tour Name</label>
          <input 
            type="text"  
            name="tourName" 
            value={formData.tourName} 
            readOnly={true} 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none " 
          />
        </div>

        <div className='flex justify-center'>
          <button type="submit" className="bg-gray-900 font-poppins text-white font-semibold px-6 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-700">Book Now</button>
        </div>

        <p className='mt-8 block text-gray-700 text-xs font-poppins font-semibold mb-2'>Check-Post Charges : To be paid by the customer directly, charges not included in the package.</p>
      </form>
    </div>
  );
};

export default Booking;
