import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal'
import { toast } from 'react-toastify';
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog,setSelectedBlog] = useState(null)
  const [modalOpen, setModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",

  });

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:4000/blog/get-blog');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  
  const handleEdit = (blog) => {
    setSelectedBlog(blog._id);
    setFormData({
      title: blog.title,
      description: blog.price,
      image: blog.images,
    
    }); 
    setModalOpen(true);
  };


  const handleSubmitUpdate = async () => {
    try {
     
      await axios.put(`http://localhost:4000/blog/update/${selectedBlog}`, { ...formData});
      toast.success("Blog has been Updated Sucessfully")

      setFormData({
        title: "",
        description: "",
        image: "",
    
      });
      setModalOpen(false);
      toast("Updated Blog Successfully!");
    } catch (error) {
      console.error("Error updating tour:", error);
    }
  };


  const handleDelete = async (blogId) => {
    try {
      await axios.delete(`http://localhost:4000/blog/delete/${blogId}`);
      
      setBlogs(prevBlogs => prevBlogs.filter(blog => blog._id !== blogId));
      toast("Blog deleted successfully!");
    } catch (error) {
      console.log('Error while deleting tour:', error);
    }
  };

  return (
    <div className="flex flex-wrap justify-between">
      {blogs.map((blog) => (
        <div key={blog._id} className="bg-white w-[300px] h-[200px] rounded-lg shadow-md mx-4 my-6">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-700 mb-2 text-base">{blog.description}</p>

            <div className="flex items-center justify-between">
              <button   onClick={() => handleEdit(blog)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2">
                Update
              </button>
              <button onClick={() => handleDelete(blog._id)} className="bg-black text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
              

              <Modal isOpen={modalOpen}>

              <form onSubmit={handleSubmitUpdate} className='w-full'>

<div className="mb-4">
  <label htmlFor="title" className="block text-gray-700 font-poppins font-semibold mb-2">Title</label>
  <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="w-[600px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none " required />
</div>

<div className="mb-6">
  <label htmlFor="description" className="block text-gray-700 font-poppins font-semibold mb-2">Description</label>
  <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none " rows="6" required ></textarea>
</div>

<div className="mb-6">
  <label htmlFor="image" className="block text-gray-700 font-poppins font-semibold mb-2">Image Url</label>
  <input name="image" value={formData.image} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none "  required  />
</div>

<div className='flex justify-center'>
  <button type="submit" className="bg-gray-700 font-poppins text-white font-semibold px-6 py-2 rounded-lg hover:bg-gray-900 focus:outline-none ">Update</button>
  <button type="submit" className="bg-gray-700 font-poppins text-white font-semibold px-6 py-2 rounded-lg hover:bg-gray-900 focus:outline-none ">Close</button>
</div>

</form>

                </Modal>

          
              
    </div>
  );
};

export default Blogs;
