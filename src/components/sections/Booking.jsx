import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    eventTime: '',
    location: '',
    budget: '',
    message: '',
    confirmDetails: false,
    acceptTerms: false
  })

  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Check if both checkboxes are checked
    if (!formData.confirmDetails) {
      alert('Please confirm your details for appointment booking.')
      return
    }
    
    if (!formData.acceptTerms) {
      alert('Please accept the Terms & Conditions to proceed.')
      return
    }
    
    setStatus('submitting')
    
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
        eventTime: '',
        location: '',
        budget: '',
        message: '',
        confirmDetails: false,
        acceptTerms: false
      })
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section className="py-20 bg-white text-gray-700" id="booking">
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

        <div className="flex flex-col gap-6 max-w-3xl mx-auto border border-primary rounded-lg p-6 md:p-10 bg-gray-100 shadow-lg">
          
          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700"
                  placeholder="+254 700 000 000"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700"
                placeholder="you@example.com"
              />
            </div>

            {/* Event Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Type *
              </label>
              <select
                name="eventType"
                required
                value={formData.eventType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700"
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

            {/* Preferred Date & Time */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time *
                </label>
                <input
                  type="time"
                  name="eventTime"
                  required
                  value={formData.eventTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <input
                type="text"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700"
                placeholder="City, Venue"
              />
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700"
              >
                <option value="">Select budget range</option>
                <option value="under-50k">Under 50,000 KES</option>
                <option value="50k-100k">50,000 - 100,000 KES</option>
                <option value="100k-200k">100,000 - 200,000 KES</option>
                <option value="200k-plus">200,000+ KES</option>
              </select>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700"
                placeholder="Tell me about your event..."
              ></textarea>
            </div>

            {/* Appointment Booking - Grid Section */}
            <div className="border-t-2 border-primary/30 pt-6">
              <h3 className="text-lg font-semibold text-secondary mb-4">
                Appointment Booking *
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Confirm Details */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <input
                    type="checkbox"
                    name="confirmDetails"
                    id="confirmDetails"
                    required
                    checked={formData.confirmDetails}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary flex-shrink-0"
                  />
                  <label htmlFor="confirmDetails" className="text-sm text-gray-700">
                    I confirm my details for appointment booking
                  </label>
                </div>

                {/* Terms & Conditions */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    id="acceptTerms"
                    required
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary flex-shrink-0"
                  />
                  <label htmlFor="acceptTerms" className="text-sm text-gray-700">
                    I have read & understood the terms & conditions
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className={`w-full py-4 bg-primary text-white font-bold uppercase tracking-wider rounded-lg transition-all ${
                status === 'submitting'
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-primary-dark transform hover:scale-[1.02]'
              }`}
            >
              {status === 'submitting' ? 'Sending...' : 'Submit'}
            </button>

            {/* Legal Agreement Text */}
            <p className="text-xs text-gray-500 text-center">
              By submitting you agree to:{' '}
              <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              {' | '}
              <Link to="/terms" className="text-primary hover:underline">Terms & Conditions</Link>
            </p>

            {status === 'success' && (
              <div className="p-4 bg-green-50 border border-green-500 rounded-lg text-green-700 text-center">
                ✅ Thank you! I'll get back to you within 2 hours.
              </div>
            )}
            
            {status === 'error' && (
              <div className="p-4 bg-red-50 border border-red-500 rounded-lg text-red-700 text-center">
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