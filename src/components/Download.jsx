import React from 'react'

const Download = () => {
  return (
 <section className='download-bg py-36'>

    <div className='flex justify-between items-center max-w-7xl mx-auto container'>

  {/* left section */}
    <div className='flex flex-col justify-start  '>
        <h3 className='text-4xl text-gray-700 font-poppins font-bold'>Mobile Apps</h3>
        <p  className='text-xl text-gray-700 font-poppins my-4'>Access our world of convenience on-the-go! Download our mobile app for seamless, anytime access to our services.</p>
 
 <div className='mt-8'>
 <img className='w-[400px]' src="https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png" alt="" />
   </div>

    </div>


    {/* right section */}

    <div>
        <img className='w-full object-cover' src="https://img.freepik.com/free-vector/speech-text-concept-illustration_114360-4162.jpg?t=st=1711018775~exp=1711022375~hmac=94c4ab8495094e2a1a193104aca390b50b61106506d01c0560893c351a1dba00&w=826" alt="" />

    </div>


    </div>

  

 </section>
  )
}

export default Download