import React from 'react';
import { MdCardTravel } from "react-icons/md";
import { FaMessage, FaUser } from "react-icons/fa6";
import { TbBrandBooking } from "react-icons/tb";
import { LiaBlogSolid } from "react-icons/lia";
import { CgWebsite } from "react-icons/cg";

const DashboardCard = ({ icon, title, value }) => {
  const IconComponent = icon; 

  return (
    <div className='bg-white w-[300px] h-[250px] py-20 px-4 rounded-xl m-4'>
      {icon && <IconComponent size={50}  className='mx-auto' />} 
      <p className='text-lg text-gray-700 text-center font-poppins font-bold'>{title}</p>
      <p className='text-4xl text-gray-700 text-center font-poppins font-semibold'>{value}</p>
    </div>
  );
};

const DashboardData = () => {
  
  const cardsData = [
    { icon: MdCardTravel, title: 'Total Tour Packages Added', value: '8' },
    { icon: FaMessage,title: 'Total Messages Received', value: '18' },
    { icon: FaUser,title: 'Registered Users', value: '28' },
    { icon: TbBrandBooking,title: 'Total Booking', value: '48' },
    { icon: LiaBlogSolid,title: 'Number of Blogs', value: '10' },
    { icon: CgWebsite,title: 'Website Visits', value: '100' },
  ];

  return (
    <section className='flex flex-wrap justify-between'>
      {cardsData.map((card, index) => (
        <DashboardCard key={index} {...card} />
      ))}
    </section>
  );
};

export default DashboardData;
