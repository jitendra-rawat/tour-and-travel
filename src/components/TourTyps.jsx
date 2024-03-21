import React from 'react';

const TourType = () => {
  const tourTypes = [
    { imageUrl: 'https://img.freepik.com/free-vector/traveler-with-map-mountain-waterfall-landscape_107791-7840.jpg?t=st=1710490536~exp=1710494136~hmac=7ecc879e6ac5197765eeaaa2d1277d371e6094cc14db4eb09ed6fbde10330d2e&w=1380', link: '/page1', colSpan: 3, rowSpan: 2 },
    { imageUrl: 'https://img.freepik.com/free-vector/detailed-rath-yatra-celebration-illustration_23-2148971565.jpg?t=st=1710490565~exp=1710494165~hmac=7aa2ca1040ac07541419d999655694c01225f72e1d48ecc2f138083601db3d0e&w=826', link: '/page2', colSpan: 3, rowSpan: 1 },
    { imageUrl: 'https://img.freepik.com/free-vector/flat-design-camping-area-landscape-with-tent-mountain-night_23-2148650964.jpg?t=st=1711016797~exp=1711020397~hmac=be6d7f3fdef2e3ff09e35f0c235a863cd7b373b199dfbc8757150442411608c6&w=1060', link: '/page3', colSpan: 1, rowSpan: 1 },
    { imageUrl: 'https://img.freepik.com/free-vector/cyclist-flat-poster_1284-12573.jpg?t=st=1711017087~exp=1711020687~hmac=e478791842bf7b0da8197174b3cd88cb55d50d3d7107c6024ffd96279d05dd8e&w=1060', link: '/page4', colSpan: 1, rowSpan: 1 },
    { imageUrl: 'https://img.freepik.com/free-vector/car-with-luggage-roof-drive-overpass-road_107791-10079.jpg?t=st=1710838465~exp=1710842065~hmac=8fbe03ed6c95d9bff6c56cc03c5da08eb7ef75d13131fcac13fb65a30902d62a&w=1380', link: '/page5', colSpan: 1, rowSpan: 1 },
    { imageUrl: 'https://img.freepik.com/free-vector/winter-ski-resort-cartoon-composition_1284-71165.jpg?t=st=1710838216~exp=1710841816~hmac=69365a903a5565f3d16b26c7360ba0da76d8b1a919cb613df8bbf28411c45372&w=1380', link: '/page6', colSpan: 0, rowSpan: 0 },
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
