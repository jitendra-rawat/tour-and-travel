import React from 'react';

const TourType = () => {
  const tourTypes = [
    { imageUrl: 'https://img.freepik.com/free-vector/traveler-with-map-mountain-waterfall-landscape_107791-7840.jpg?t=st=1710490536~exp=1710494136~hmac=7ecc879e6ac5197765eeaaa2d1277d371e6094cc14db4eb09ed6fbde10330d2e&w=1380', link: '/page1', colSpan: 3, rowSpan: 2 },
    { imageUrl: 'https://img.freepik.com/free-vector/detailed-rath-yatra-celebration-illustration_23-2148971565.jpg?t=st=1710490565~exp=1710494165~hmac=7aa2ca1040ac07541419d999655694c01225f72e1d48ecc2f138083601db3d0e&w=826', link: '/page2', colSpan: 3, rowSpan: 1 },
    { imageUrl: 'https://img.freepik.com/free-vector/india-boat-river-scenery-cartoon_18591-52439.jpg?t=st=1710490612~exp=1710494212~hmac=e699a5d3cbea6289541e9ae2e6cd529b85b298cdb89e18084a446caaac69ef15&w=826', link: '/page3', colSpan: 1, rowSpan: 1 },
    { imageUrl: 'https://img.freepik.com/free-vector/asean-building-illustration_23-2148722210.jpg?t=st=1710490641~exp=1710494241~hmac=8c925f242978a14230f6dedd5495772deff9f11d3832f31f5f33d62f1c022e95&w=1060', link: '/page4', colSpan: 1, rowSpan: 1 },
    { imageUrl: 'https://img.freepik.com/free-vector/flat-landscape-high-mountain-peaks-background-with-sky-sun-clouds-vector-illustration_1284-75778.jpg?t=st=1710490691~exp=1710494291~hmac=ecae37db64c2d63180904bc9e4886b6f79924cf079d1ced03858d6947cef28f1&w=1380', link: '/page5', colSpan: 1, rowSpan: 1 },
    { imageUrl: 'https://img.freepik.com/free-vector/hand-drawn-person-snowshoeing-illustration_23-2149196478.jpg?t=st=1710491014~exp=1710494614~hmac=06307c8cb0b234f4d1c441c15984106b12269c335375850e7abbf9543383dc4b&w=826', link: '/page6', colSpan: 0, rowSpan: 0 },
  ];

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 max-w-7xl mx-auto container mt-20">
      {tourTypes.map((tour, index) => (
        <a key={index} href={tour.link} className={`col-span-${tour.colSpan} row-span-${tour.rowSpan}`}>
          <img src={tour.imageUrl} alt={`Tour Type ${index + 1}`} className="w-full h-[300px] object-cover rounded-xl cursor-pointer hover:scale-75" />
        </a>
      ))}
    </div>
  );
};

export default TourType;
