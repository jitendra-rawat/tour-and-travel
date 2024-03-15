import React from 'react';

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className='w-[300px]  my-10'>
      <img className=' object-cover' src={imageUrl} alt="" />
      <p className='text-xl text-center mb-4 font-poppins'>{title}</p>
      <p className='text-base text-center'>{description}</p>
    </div>
  );
};

const Works = () => {
  const cardsData = [
    {
      imageUrl: "https://esanchari.com/static/media/Book_Relax.b444ea034a5371170e08.png",
      title: "Book and Relax",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, exercitationem."
    },
    {
      imageUrl: "https://esanchari.com/static/media/Scan_Enter.a872e15607006b727cb4.png",
      title: "Scan and Enter",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, exercitationem."
    },
    {
      imageUrl: "https://esanchari.com/static/media/Best_Offers.e6e7ede3a269e627b241.png",
      title: "Best Offers",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, exercitationem."
    }
  ];

  return (
    <section className='max-w-7xl mx-auto container my-20'>
      <div>
        <h3 className='text-4xl text-gray-900 text-center font-bold font-poppins py-2'>How It Works</h3>
        <p className='text-xl text-gray-500 text-center font-semibold'>Keep calm & travel on</p>
      </div>

      <div className='flex justify-between items-center mt-16'>
        {cardsData.map((card, index) => (
          <Card key={index} imageUrl={card.imageUrl} title={card.title} description={card.description} />
        ))}
      </div>
    </section>
  );
};

export default Works;
