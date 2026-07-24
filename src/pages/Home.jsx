import React from 'react'
import Hero from '../components/sections/Hero'

import AboutSection from '../components/sections/About'
import PortfolioSection from '../components/sections/Portfolio'

import Testimonials from '../components/sections/Testimonials'
import BookingSection from '../components/sections/Booking'

const Home = () => {
  return (
    <>
      <Hero />
      
      <AboutSection />
      <PortfolioSection />
      
      <Testimonials />
      <BookingSection />
    </>
  )
}

export default Home