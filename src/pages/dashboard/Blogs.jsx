import React from 'react';

const BlogCard = ({ title, description }) => {
  return (
    <div className="bg-white w-[300px] h-[200px] rounded-lg shadow-md mx-4 my-6">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-2 text-base">{description}</p>

        
        <div className="flex items-center justify-between">
       
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2">
              Update
            </button>
            <button className="bg-black text-white font-bold py-2 px-4 rounded">
              Delete
            </button>
        
        </div>
      </div>
    </div>
  );
};

const Blogs = () => {
  const blogs = [
    {
      title: 'Mountain Trek',
      description: 'lorem lipsum lorem lipsum lorem lipsum',
    },
    {
      title: 'Desert Safari',
      description: 'Sahara Desert, Morocco',
    },
    {
      title: 'Island Hopping',
      description: 'Philippines',
    },
    {
      title: 'City Explorer',
      description: 'New York, USA',
    },
  ];

  return (
    <div className="flex flex-wrap justify-between">
      {blogs.map((tour, index) => (
        <BlogCard key={index} {...tour} />
      ))}
    </div>
  );
};

export default Blogs;
