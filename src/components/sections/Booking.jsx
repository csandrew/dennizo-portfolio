import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'

const Booking = () => {
  const [state, handleSubmit] = useForm('xgogglea')
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if (!formData.confirmDetails) {
      alert('Please confirm your details for appointment booking.')
      return
    }
    if (!formData.acceptTerms) {
      alert('Please accept the Terms & Conditions to proceed.')
      return
    }

    await handleSubmit(e)

    if (state.succeeded) {
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
    }
  }

  if (state.succeeded) {
    return (
      <section className="py-20 bg-gray-100" id="booking">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-3xl font-display text-secondary mb-4">Thank You!</h2>
            <p className="text-gray-600 text-lg">
              Your booking request has been received. I'll get back to you within 2 hours.
            </p>
            <Link to="/" className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
              Return Home
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-100" id="booking">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest">
            Bookings
          </span>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-3 mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-display text-secondary">Book Now</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">
            Let's create unforgettable moments together
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700"
                  placeholder="Your name" />
                <ValidationError field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700"
                  placeholder="+254 700 000 000" />
                <ValidationError field="phone" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700"
                placeholder="denizzoclassic@gmail.com" />
              <ValidationError field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Type *</label>
              <select name="eventType" required value={formData.eventType} onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700">
                <option value="">Select event type</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate Event</option>
                <option value="concert">Concert</option>
                <option value="party">Private Party</option>
                <option value="product-launch">Product Launch</option>
                <option value="other">Other</option>
              </select>
              <ValidationError field="eventType" errors={state.errors} className="text-red-500 text-sm mt-1" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                <input type="date" name="eventDate" required value={formData.eventDate} onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700" />
                <ValidationError field="eventDate" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                <input type="time" name="eventTime" required value={formData.eventTime} onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700" />
                <ValidationError field="eventTime" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
              <input type="text" name="location" required value={formData.location} onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700"
                placeholder="City, Venue" />
              <ValidationError field="location" errors={state.errors} className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
              <select name="budget" value={formData.budget} onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700">
                <option value="">Select budget range</option>
                <option value="under-50k">Under 50,000 KES</option>
                <option value="50k-100k">50,000 - 100,000 KES</option>
                <option value="100k-200k">100,000 - 200,000 KES</option>
                <option value="200k-plus">200,000+ KES</option>
              </select>
              <ValidationError field="budget" errors={state.errors} className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
              <textarea name="message" rows="4" value={formData.message} onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700"
                placeholder="Tell me about your event..." />
              <ValidationError field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
            </div>

            {/* Appointment Booking Section */}
            <div className="border-t-2 border-primary/30 pt-6">
              <h3 className="text-lg font-semibold text-secondary mb-4">Appointment Booking *</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <input type="checkbox" name="confirmDetails" id="confirmDetails" required checked={formData.confirmDetails} onChange={handleChange}
                    className="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary flex-shrink-0" />
                  <label htmlFor="confirmDetails" className="text-sm text-gray-700">I confirm my details for appointment booking</label>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <input type="checkbox" name="acceptTerms" id="acceptTerms" required checked={formData.acceptTerms} onChange={handleChange}
                    className="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary flex-shrink-0" />
                  <label htmlFor="acceptTerms" className="text-sm text-gray-700">I have read & understood the terms & conditions</label>
                </div>
              </div>
            </div>

            <button type="submit" disabled={state.submitting}
              className={`w-full py-4 bg-primary text-white font-bold uppercase tracking-wider rounded-lg transition-all ${state.submitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-dark transform hover:scale-[1.02]'}`}>
              {state.submitting ? 'Sending...' : 'Submit'}
            </button>

            <p className="text-xs text-gray-500 text-center">
              By submitting you agree to: <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link> | <Link to="/terms" className="text-primary hover:underline">Terms & Conditions</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Booking