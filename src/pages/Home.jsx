import React from 'react'
import Hero from '../components/sections/Hero'

import AboutSection from '../components/sections/About'
import MusicVideosSection from '../components/sections/Music'

import Testimonials from '../components/sections/Testimonials'
import BookingSection from '../components/sections/Booking'

const Home = () => {
  return (
    <>
      <Hero />
      
      <AboutSection />
      <MusicVideosSection />
      
      <Testimonials />
      <BookingSection />
    </>
  )
}

export default Home