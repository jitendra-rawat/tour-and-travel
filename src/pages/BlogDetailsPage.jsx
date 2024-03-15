import React from 'react';

import BlogDetails from '../components/BlogDetails';

const BlogDetailsPage = () => {
 
  const blogs = [
    {
      id: 1,
      title: "Blog Title 1",
      description: "Description of Blog 1 goes here. This is a short description.Description of Blog 1 goes here. This is a short description.",
      imageSrc: "https://cdn.pixabay.com/photo/2017/09/23/19/07/vishnu-temple-2779856_1280.jpg"
    },

  ];

  return (
    <div className='max-w-7xl mx-auto container my-20'>
    
      <div className="flex flex-col ">
        {blogs.map(blog => (
          <BlogDetails
            key={blog.id}
            title={blog.title}
            description={blog.description}
            imageSrc={blog.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogDetailsPage;
