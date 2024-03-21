import React, { useState } from 'react';

const AddBlog = ({ onAddBlog }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center font-poppins">Add Blog</h2>

      <form onSubmit={handleSubmit} className='w-full'>

        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-poppins font-semibold mb-2">Title</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="w-[600px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none " required />
        </div>

        <div className="mb-6">
          <label htmlFor="description" className="block text-gray-700 font-poppins font-semibold mb-2">Description</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none " rows="6" required ></textarea>
        </div>

        <div className='flex justify-center'>
          <button type="submit" className="bg-gray-900 font-poppins text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none ">Add Blog</button>
        </div>
        
      </form>
    </div>
  );
};

export default AddBlog;
