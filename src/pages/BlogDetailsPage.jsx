import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BlogDetails from '../components/BlogDetails';
import {server} from '../utils'

const BlogDetailsPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${server}/blog/get-blog/${id}`);
        setBlog(response.data); 
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <div className='max-w-7xl mx-auto container my-20'>
      {blog ? (
        <BlogDetails
          key={blog._id}
          title={blog.title}
          description={blog.description}
          imageSrc={blog.imageSrc}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogDetailsPage;
