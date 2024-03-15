import React from 'react';
import BlogCard from '../components/BlogCard';

const Blogs = () => {
  // Static data for three blogs
  const blogs = [
    {
      id: 1,
      title: "Blog Title 1",
      description: "Description of Blog 1 goes here. This is a short description.",
      imageSrc: "https://cdn.pixabay.com/photo/2017/09/23/19/07/vishnu-temple-2779856_1280.jpg"
    },
    {
      id: 2,
      title: "Blog Title 2",
      description: "Description of Blog 2 goes here. This is a short description.",
      imageSrc: "https://cdn.pixabay.com/photo/2022/12/20/11/17/hiking-7667621_1280.jpg"
    },
    {
      id: 3,
      title: "Blog Title 3",
      description: "Description of Blog 3 goes here. This is a short description.",
      imageSrc: "https://cdn.pixabay.com/photo/2018/12/24/22/19/camping-3893587_1280.jpg"
    }
  ];

  return (
    <div className='max-w-7xl mx-auto container my-20'>
      <h1 className="text-3xl font-bold mb-8 font-poppins text-center"> Read Our Latest Blogs</h1>
      <div className="flex flex-col ">
        {blogs.map(blog => (
          <BlogCard
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

export default Blogs;
