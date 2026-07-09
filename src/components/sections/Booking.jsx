import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    budget: '',
    message: ''
  })

  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    
    // Send to your email or CRM
    try {
      await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        location: '',
        budget: '',
        message: ''
      })
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section className="py-20 bg-gray-300 text-gray-700" id="booking">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >

          <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest mb-4">
            Bookings
          </span>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full m-4"></div>
          <h2 className="section-title text-secondary">Book Now</h2>
         
          <p className="section-subtitle text-gray-700">
            Let's create unforgettable moments together
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 max-w-3xl mx-auto border border-primary rounded-lg p-6 md:p-10 bg-white shadow-lg">
          
          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-6 bg-gray-300 px-6 py-4 rounded-3xl">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-400 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary text-gray-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-400 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary text-gray-400"
                  placeholder="+254 700 000 000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-400 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary text-gray-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Event Type *
              </label>
              <select
                name="eventType"
                required
                value={formData.eventType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-400 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary text-gray-400"
              >
                <option value="">Select event type</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate Event</option>
                <option value="concert">Concert</option>
                <option value="party">Private Party</option>
                <option value="product-launch">Product Launch</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Event Date *
                </label>
                <input
                  type="date"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-400 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary text-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-400 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary text-gray-400"
                  placeholder="City, Venue"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Budget Range
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-400 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary text-gray-500"
              >
                <option value="">Select budget range</option>
                <option value="under-50k">Under 50,000 KES</option>
                <option value="50k-100k">50,000 - 100,000 KES</option>
                <option value="100k-200k">100,000 - 200,000 KES</option>
                <option value="200k-plus">200,000+ KES</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Additional Details
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-400 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary text-gray-400"
                placeholder="Tell me about your event..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className={`w-full py-4 bg-primary text-white font-bold uppercase tracking-wider rounded-lg transition-all ${
                status === 'submitting'
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-primary-dark transform hover:scale-[1.02]'
              }`}
            >
              {status === 'submitting' ? 'Sending...' : 'Request Booking'}
            </button>

            {status === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-300 text-center">
                ✅ Thank you! I'll get back to you within 2 hours.
              </div>
            )}
            
            {status === 'error' && (
              <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-300 text-center">
                ❌ Something went wrong. Please call me directly or try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Booking