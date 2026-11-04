import React from 'react'
import Hero from '../components/sections/Hero'

import AboutSection from '../components/sections/About'
import MusicVideosSection from '../components/sections/Music'
import Testimonials from '../components/sections/Testimonials'
import BookingSection from '../components/sections/Booking'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Hero />
      
      <AboutSection />
      <MusicVideosSection />
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container-custom grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Creative services
            </p>
            <h2 className="mt-3 text-2xl font-display font-bold text-secondary">
              Make your next music or event project happen.
            </h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              Explore music production, songwriting, vocal coaching, music
              direction, consultation, event hosting, and campus tours or
              performances.
            </p>
            <Link
              to="/services"
              className="mt-6 inline-flex font-semibold text-primary hover:text-primary-dark"
            >
              Explore services <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </article>
          <article className="rounded-2xl bg-secondary p-8 text-white shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Artist development
            </p>
            <h2 className="mt-3 text-2xl font-display font-bold">
              Build your craft and find your direction.
            </h2>
            <p className="mt-3 leading-relaxed text-white/75">
              Learn about a personal, purpose-led approach to creative
              mentorship for developing artists.
            </p>
            <Link
              to="/mentorship"
              className="mt-6 inline-flex font-semibold text-white hover:text-white/80"
            >
              Discover mentorship <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </article>
        </div>
      </section>
      <Testimonials />
      <BookingSection />
    </>
  )
}

export default Home