import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {server} from '../utils'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${server}/message/post-message`, formData);
      toast.success('Message sent successfully');
      setFormData({
        name: '',
        email: '',
        mobileNumber: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-7xl container mx-auto flex justify-center items-start min-h-screen bg-gray-200 py-12 px-20 my-36 rounded-xl">
      {/* Left Section */}
      <div className="w-1/2 mr-4">
        <div className="mb-4">
          <h2 className="text-2xl  mb-2 font-bold font-poppins">Contact Details</h2>
          <p className="text-gray-700 mb-1 text-lg">Address: Dehradun,Uttrakhand, India</p>
          <p className="text-gray-700 mb-1 text-lg">Email: ajaymountainsoul@gmail.com</p>
          <p className="text-gray-700 mb-1 text-lg">Phone:+91 80064 04570</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 ml-4 bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl  mb-4 font-bold font-poppins">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-poppins ">Name</label>
            <input type="text"  name="name" value={formData.name} onChange={handleChange} className="mt-1 w-full border-gray-300 rounded-md shadow-sm" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-poppins ">Email</label>
            <input type="email"  name="email" value={formData.email} onChange={handleChange} className="mt-1 w-full border-gray-300 rounded-md shadow-sm" required />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-poppins">Phone</label>
            <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} className="mt-1 w-full border-gray-300 rounded-md shadow-sm" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-poppins">Message</label>
            <textarea  name="message" value={formData.message} onChange={handleChange} rows="4" className="mt-1 w-full border-gray-300 rounded-md shadow-sm" required></textarea>
          </div>
          <div>
            <button type="submit" className="font-poppins inline-flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-700 hover:bg-gray-900">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
