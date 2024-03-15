import React from 'react';

const BlogDetails = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg px-8 py-4  my-10">

      
        <img src={imageSrc} alt="Blog" className="max-w-lg mx-auto container object-cover h-[350px] rounded-md mb-2" />
    
     
        <h2 className="text-2xl font-bold mb-2 font-poppins text-center">{title}</h2>
        <p className="text-gray-700 font-poppins text-base text-justify">{description}</p>
      
    
    </div>
  );
};

export default BlogDetails;
