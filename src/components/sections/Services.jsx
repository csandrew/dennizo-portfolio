import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Event Hosting',
    description: 'Smooth ceremony flow, audience engagement, and effective announcements for every celebration.'
  },
  {
    title: 'Live Entertainment',
    description: 'High-energy stage presence, interactions, and music direction that keep the crowd excited.'
  },
  {
    title: 'Program Production',
    description: 'Support with event schedules, speaker coordination, and seamless transitions.'
  }
]

const Services = () => {
  return (
    <section className="py-20 bg-gray-950 text-white" id="services">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-secondary font-body font-semibold text-sm uppercase tracking-widest mb-4">
            What I do
          </p>
          <h2 className="section-title text-white">Services for every event</h2>
          <p className="section-subtitle text-gray-400">
            From weddings to corporate launches, the right host keeps your event running smooth and memorable.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#111827] border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
