import React from 'react'
import { Link } from 'react-router-dom'

const Terms = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display text-dark_amethyst mb-8">Terms & Conditions</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600">
            By using the Dennizo Classic website and booking our services, you agree to these 
            Terms & Conditions. Please read them carefully.
          </p>

          <h2 className="text-2xl font-display text-dark_amethyst mt-8 mb-4">Booking Terms</h2>
          <ul className="text-gray-600 space-y-2">
            <li>A non-refundable deposit of 50% is required to secure your booking</li>
            <li>The remaining balance must be paid at least 7 days before the event</li>
            <li>All bookings are subject to availability</li>
            <li>We reserve the right to refuse service</li>
          </ul>

          <h2 className="text-2xl font-display text-dark_amethyst mt-8 mb-4">Cancellation Policy</h2>
          <ul className="text-gray-600 space-y-2">
            <li><strong>More than 30 days notice:</strong> Full refund minus deposit</li>
            <li><strong>15-30 days notice:</strong> 50% refund</li>
            <li><strong>Less than 15 days notice:</strong> No refund</li>
            <li>All cancellations must be in writing</li>
          </ul>

          <h2 className="text-2xl font-display text-dark_amethyst mt-8 mb-4">Event Day</h2>
          <ul className="text-gray-600 space-y-2">
            <li>We arrive at least 2 hours before event start time</li>
            <li>We require access to setup area and power source</li>
            <li>We reserve the right to adjust the program as needed</li>
            <li>We maintain professional conduct at all times</li>
          </ul>

          <h2 className="text-2xl font-display text-dark_amethyst mt-8 mb-4">Liability</h2>
          <p className="text-gray-600">
            Dennizo Classic is not liable for:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>Equipment failure beyond our control</li>
            <li>Audience behavior or actions</li>
            <li>Changes to the event program</li>
            <li>Third-party services or vendors</li>
          </ul>

          <h2 className="text-2xl font-display text-dark_amethyst mt-8 mb-4">Intellectual Property</h2>
          <p className="text-gray-600">
            All content on this website, including text, images, and videos, is the property 
            of Dennizo Classic and may not be reproduced without permission.
          </p>

          <h2 className="text-2xl font-display text-dark_amethyst mt-8 mb-4">Photography & Media</h2>
          <p className="text-gray-600">
            By booking our services, you grant us permission to use event photos and videos 
            for promotional purposes unless otherwise agreed in writing.
          </p>

          <h2 className="text-2xl font-display text-dark_amethyst mt-8 mb-4">Governing Law</h2>
          <p className="text-gray-600">
            These terms are governed by the laws of Kenya. Any disputes shall be resolved 
            in the courts of Nairobi, Kenya.
          </p>

          <h2 className="text-2xl font-display text-dark_amethyst mt-8 mb-4">Contact</h2>
          <p className="text-gray-600">
            For questions about these Terms & Conditions, contact us:<br />
            <strong>Email:</strong> info@dennizoclassic.com<br />
            <strong>Phone:</strong> +254 700 000 000
          </p>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <Link to="/" className="text-pink_orchid hover:text-pink_orchid/80 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terms