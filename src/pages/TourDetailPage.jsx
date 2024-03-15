import React from 'react';
import TourDetail from '../components/TourDetail';

const TourDetailPage = () => {

    const tour = {
        name: 'Example Tour',
        overview: 'This is a sample tour overview.',
        highlights: [
            'Highlight 1',
            'Highlight  2',
            'Highlight 3',
        ],
        difficulty: 'Intermediate',
        duration: '5 days',
        altitude: '1000m',
        ageLimit: '18+',
        images: [
            'https://via.placeholder.com/800x600',
            'https://via.placeholder.com/800x600',
            'https://via.placeholder.com/800x600',
        ],
        itinerary: [
            {
                title: 'Day 1',
                description: 'Itinerary details for Day 1',
            },
            {
                title: 'Day 2',
                description: 'Itinerary details for Day 2',
            },
            {
                title: 'Day 3',
                description: 'Itinerary details for Day 3',
            },
        ],
        facilities: [
            'Facility 1',
            'Facility 2',
            'Facility 3',
        ],

        inclusions: [
            'inclusions 1',
            'inclusions 2',
            'inclusions 3',
        ],
        note: [
            'Note 1',
            'Note 2',
            'Note 3',
        ],

    };
      
    return (
        <div className='max-w-7xl mx-auto container my-8'>
            <TourDetail tour={tour} images={tour.images} />
        </div>
    );
}

export default TourDetailPage;
