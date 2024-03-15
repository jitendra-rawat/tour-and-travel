import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Works from '../components/Works'
import Download from '../components/Download'
import Newsletter from '../components/Newsletter'
import TourCard from '../components/TourCard'
import Tours from '../components/Tours'
import TourType from '../components/TourTyps'


const Home = () => {
  return (

<div>
  <Hero />
  <TourType />

 <Tours/>
  <Services />
  <Works />
  <Download />
  <Newsletter />

</div>

  )
}

export default Home