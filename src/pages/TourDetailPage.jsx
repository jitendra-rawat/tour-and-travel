import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import TourDetail from '../components/TourDetail';
import axios from 'axios'; 

const TourDetailPage = () => {
    const [tour, setTour] = useState(null); 
    const { id } = useParams(); 

    useEffect(() => {
       
        const fetchTourData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/tour/${id}`);
       
                setTour(response.data); 
            } catch (error) {
                console.error('Error fetching tour data:', error);
            }
        };

        fetchTourData(); 
    }, [id]); 

    return (
        <div className='max-w-7xl mx-auto container mt-28'>
            {tour ? (
                <TourDetail tour={tour} images={tour.images} />
            ) : (
                <p>Loading...</p> 
            )}
        </div>
    );
}

export default TourDetailPage;
