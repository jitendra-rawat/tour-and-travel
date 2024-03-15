import React from 'react';

const BlogCard = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 flex items-start my-10">

      <div className="w-[400px]">
        <img src={imageSrc} alt="Blog" className="w-full object-cover h-auto rounded-md" />
      </div>
      <div className="ml-4 flex-1">
        <h2 className="text-xl font-bold mb-2 font-poppins">{title}</h2>
        <p className="text-gray-700 font-poppins">{description}</p>
        <button className="mt-2 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-900 focus:outline-none">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
