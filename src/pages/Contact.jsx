import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      await axios.post('http://localhost:4000/message/post-message', formData);
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
    <div className="max-w-7xl container mx-auto flex justify-center items-start min-h-screen bg-gray-200 py-12 px-20 my-20 rounded-xl">
      {/* Left Section */}
      <div className="w-1/2 mr-4">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Contact Details</h2>
          <p className="text-gray-600 mb-1 text-base">Address: 123 Main Street, City, Country</p>
          <p className="text-gray-600 mb-1 text-base">Email: example@example.com</p>
          <p className="text-gray-600 mb-1 text-base">Phone: +1234567890</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 ml-4 bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 w-full border-gray-300 rounded-md shadow-sm" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 w-full border-gray-300 rounded-md shadow-sm" required />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700">Phone</label>
            <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} className="mt-1 w-full border-gray-300 rounded-md shadow-sm" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="mt-1 w-full border-gray-300 rounded-md shadow-sm" required></textarea>
          </div>
          <div>
            <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-700 hover:bg-gray-900">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
