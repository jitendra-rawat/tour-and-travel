import React, { useState } from 'react';
import DashboardData from './DashboardData';
import TourPackages from './TourPackages';
import AddTour from './AddTour';
import Messages from './Messages';
import RegisteredUser from './RegisteredUser';
import Booking from './Booking';
import Blogs from './Blogs';
import AddBlog from './AddBlog';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'Dashboard':
        return <DashboardData />;
      case 'Tour Packages':
        return <TourPackages />;
      case 'Add a New Tour Package':
        return <AddTour />;
      case 'Messages':
        return <Messages />;
 
      case 'Bookings':
        return <Booking />;
        case 'Blogs':
            return <Blogs />;
            case 'Add Blog':
                return <AddBlog />;
      default:
        return <DashboardData />;
    }
  };

  return (
    <section className='bg-gray-200 h-screen flex justify-start items-stretch mt-24'>
      {/* left section */}
         
      <div className='bg-gray-600 h-screen max-w-xs container'>
  <div className=' my-20 max-w-[500px] mx-auto container flex flex-col justify-start text-white'>
    <button className='text-base text-white mb-8 cursor-pointer font-poppins font-bold' onClick={() => handleOptionClick('Dashboard')}>Dashboard</button>
    <button className='text-base text-white mb-8 cursor-pointer font-poppins font-bold' onClick={() => handleOptionClick('Tour Packages')}>Tour Packages</button>
    <button className='text-base text-white mb-8 cursor-pointer font-poppins font-bold' onClick={() => handleOptionClick('Add a New Tour Package')}>Add a New Tour Package</button>
    <button className='text-base text-white mb-8 cursor-pointer font-poppins font-bold' onClick={() => handleOptionClick('Messages')}>Messages</button>

    <button className='text-base text-white mb-8 cursor-pointer font-poppins font-bold' onClick={() => handleOptionClick('Bookings')}>Bookings</button>
    <button className='text-base text-white mb-8 cursor-pointer font-poppins font-bold' onClick={() => handleOptionClick('Blogs')}>Blogs</button>
    <button className='text-base text-white mb-8 cursor-pointer font-poppins font-bold' onClick={() => handleOptionClick('Add Blog')}>Add Blog</button>
  </div>
</div>


      {/* right section */}
      <div className='py-20 px-20'>
        {renderContent()}
      </div>
    </section>
  );
};

export default Dashboard;
