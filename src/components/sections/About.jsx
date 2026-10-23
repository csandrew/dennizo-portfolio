import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  // Make sure to replace these URLs with your actual uploaded image paths
  const showcaseItems = [
    {
      title: 'Music & Releases',
      description: 'Listen, watch, discover.',
      image: '/images/music-releases.jpg'
    },
    {
      title: 'Songwriting',
      description: 'The craft behind the music.',
      image: '/images/song-writing.jpg'
    },
    {
      title: 'Live & Events',
      description: 'Performances and appearances.',
      image: '/images/live-events.jpg'
    },
    {
      title: 'Mentorship',
      description: 'Guidance, growth, and purpose.',
      image: '/images/mentorship.jpg'
    }
  ]

  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest">
            About
          </span>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-3 mb-4"></div>
          
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            Dennizo Classic combines mentorship, songwriting, music production, professional MC hosting,
            and live event coordination to touch hearts, transform lives, and glorify God.
          </p>
        </motion.div>

        {/* Image & Bio Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-2/5 flex-shrink-0"
          >
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-500">
                <img
                  src='/images/dennizo-classic-portrait.jpg'
                  alt="Dennizo Classic - Music Director & Mentor"
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl">
                Music Director & Mentor
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-primary/20 rounded-full"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-secondary/10 rounded-full"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-3/5"
          >
            <h3 className="text-2xl font-display text-secondary mb-6">
              My Journey in Music & Ministry
            </h3>
            <div className="space-y-5 text-gray-600 text-base leading-relaxed">
              <p>
                Dennizo Classic's journey with music is one of faith, discovery, and purpose.
                It began in the humble setting of a local church in Kenya, where the harmonies of worship first captured my heart.
                As a young boy, I would sit in the pews, mesmerized not just by the melodies, but by the way music seemed to speak to the soul.
                It was there that I first understood: music was more than sound.
              </p>
              <p>
                Encouraged by my family and church community, I began to explore my musical gifts — learning to sing, to play, and to write.
                My songs are simple expressions of faith that carry an authenticity resonating with all who hear them.
              </p>
              <p>
                Over time, my role expanded beyond the microphone.
                I became a worship leader, a music director, and eventually, a mentor to other young artists.
                Each step deepened my conviction that music, when offered with excellence and reverence to the Lord, opens hearts and transforms lives.
              </p>
              <p className="text-primary font-medium italic">
                "With a passion for transforming moments into unforgettable experiences,
                I continue to inspire audiences across Kenya and beyond."
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t-2 border-primary/20">
              <div className="text-center">
                <div className="text-4xl font-display text-primary">15+</div>
                <div className="text-sm text-gray-500 font-medium mt-1">SONGS WRITTEN & PRODUCED</div>
              </div>
              <div className="text-center border-l-2 border-r-2 border-gray-200">
                <div className="text-4xl font-display text-primary">50K+</div>
                <div className="text-sm text-gray-500 font-medium mt-1">LIVE PERFORMANCES & EVENTS</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display text-primary">5+</div>
                <div className="text-sm text-gray-500 font-medium mt-1">YEARS IN MUSIC MINISTRY</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* The Craft Continuation Section */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="max-w-6xl mx-auto mt-24"
        >
          <div className="mb-10">
            <h2 className="text-3xl font-display text-secondary">The Craft</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            {showcaseItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-4 h-64 md:h-80">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-1">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About