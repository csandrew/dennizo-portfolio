import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center text-white pt-1 overflow-hidden">
      
      {/* Background Video Container */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.3)' }}
        >
          {/* PATH TO YOUR VIDEO */}
          <source src="/videos/hero-worship.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-secondary/70"></div>
      </div>

      <div className="container-custom relative z-10 py-48 md:py-64 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-display text-white leading-tight mb-4">
            <span className="block">Dennizo Classic</span>
          </h1>

          <p className="text-md text-gray-300 font-body font-light mb-8 max-w-2xl">
            With a heart for worship and a passion for service, my music honours God, uplifts people, and transforms gatherings into moments of unforgettable encounters.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/music"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/40 text-white font-body font-bold uppercase tracking-wider rounded-lg hover:bg-white hover:text-black transition-all"
            >
              ▶ My Music
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10">
            <div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">The sound</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">The story</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">The purpose</div>
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