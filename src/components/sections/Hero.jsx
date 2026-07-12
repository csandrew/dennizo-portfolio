import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center text-white pt-20">
      {/* Darker Background with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1600')] bg-cover bg-center"
          style={{ filter: 'brightness(0.3)' }}
        ></div>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-secondary/70"></div>
      </div>

      <div className="container-custom relative z-10 py-48 md:py-64 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/*<div className="inline-block bg-dark_amethyst/60 backdrop-blur-sm px-4 py-2 rounded-md mb-6 border border-pink_orchid/20">
            <span className="text-pink_orchid font-body font-semibold text-xs uppercase tracking-widest">
              Professional MC & Gospel Artist 
            </span>
          </div> */}

          <h1 className="text-5xl md:text-7xl font-display text-white leading-tight mb-4">
            <span className="block">Dennizo Classic</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 font-body font-light mb-2">
            Gospel Artist | Music Director | Professional MC
          </p>

          <p className="text-md text-gray-300 font-body font-light mb-8 max-w-2xl">
            Bringing energy, elegance, and unforgettable moments to weddings,
            corporate events & live shows across Kenya
          </p>


          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-body font-bold uppercase tracking-wider rounded-lg hover:bg-accent/80 transition-all transform hover:scale-105"
            >
              Book Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/40 text-white font-body font-bold uppercase tracking-wider rounded-lg hover:bg-white hover:text-black transition-all"
            >
              ▶ Watch Showreel
            </Link>

          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10">
            <div>
              <div className="text-3xl font-display text-accent">200+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Events Hosted</div>
            </div>
            <div>
              <div className="text-3xl font-display text-accent">50K+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Audience Reached</div>
            </div>
            <div>
              <div className="text-3xl font-display text-accent">5+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
