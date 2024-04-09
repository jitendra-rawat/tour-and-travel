import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';
import { server } from '../utils';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get(`${server}/blog/get-blog`)
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []); 

  return (
    <div className='max-w-7xl mx-auto container mt-36'>
      <h1 className="text-3xl font-bold mb-8 font-poppins text-center"> Read Our Latest Blogs</h1>
      <div className="flex flex-col ">
        {blogs.map(blog => (
          <Link to={`/blogs/${blog._id}`} key={blog._id}>
            <BlogCard
              title={blog.title}
              description={blog.description.slice(0, 250) + '...'} 
              imageSrc={blog.image}
            />
          </Link>   
        ))}
      </div>
    </div>
  );
};

export default Blogs;
