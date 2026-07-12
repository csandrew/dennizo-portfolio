import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const works = [
  {
    title: 'Wedding Celebration',
    subtitle: 'Elegant host for a luxury Nairobi wedding',
    details: 'Ceremony, reception, and live audience engagement.'
  },
  {
    title: 'Corporate Launch',
    subtitle: 'Flagship product launch event',
    details: 'Professional stage hosting and timeline coordination.'
  },
  {
    title: 'Festival Show',
    subtitle: 'High-energy performance at a live festival',
    details: 'Audience hype, introductions, and show pacing.'
  },
  {
    title: 'Charity Gala',
    subtitle: 'Benefiting local community initiatives',
    details: 'Hosted a successful charity event to raise funds for underprivileged children.'
  },
  {
    title: 'Community Event',
    subtitle: 'Local community celebration',
    details: 'Organized and hosted a community event to bring people together and promote unity.'
  },
  {
    title: 'Corporate Event',
    subtitle: 'Annual company conference',
    details: 'Managed the event from planning to execution, ensuring a seamless experience for all attendees.'
  }
]

const Portfolio = () => {
  return (
    <section className="py-20 bg-white" id="portfolio">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-body font-semibold text-sm uppercase tracking-widest mb-4">
            Portfolio
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <h2 className="section-title text-secondary">Recent events and performances</h2>
          <p className="section-subtitle text-gray-600">
            A selection of events where Dennizo Classic hosted, entertained, and created unforgettable moments.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {works.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-light rounded-3xl shadow-xl p-8 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">{work.title}</h3>
              <p className="text-gray-600 mb-4">{work.subtitle}</p>
              <p className="text-gray-500 leading-relaxed mb-6">{work.details}</p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white rounded-md text-sm font-semibold hover:bg-gold-light transition-colors"
              >
                Request a quote
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
