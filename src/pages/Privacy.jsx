import React from 'react'
import { Link } from 'react-router-dom'

const Privacy = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display text-dark_amethyst mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600">
            Dennizo Classic ("we", "our", "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, and safeguard your information 
            when you visit our website or book our services.
          </p>

          <h2 className="text-2xl font-display text-dark_amethyst mt-8 mb-4">Information We Collect</h2>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, phone number, event details when you book or contact us</li>
            <li><strong>Usage Data:</strong> How you interact with our website</li>
            <li><strong>Cookies:</strong> We use cookies to improve your experience</li>
          </ul>

          <h2 className="text-2xl font-display text-dark_amethyst mt-8 mb-4">How We Use Your Information</h2>
          <ul className="text-gray-600 space-y-2">
            <li>To provide and maintain our services</li>
            <li>To process your bookings and inquiries</li>
            <li>To communicate with you about your events</li>
            <li>To improve our website and services</li>
            <li>To send you promotional materials (you can opt out anytime)</li>
          </ul>

          <h2 className="text-2xl font-display text-dark_amethyst mt-8 mb-4">Information Sharing</h2>
          <p className="text-gray-600">
            We do not sell, trade, or rent your personal information to third parties. 
            Your information is only shared as necessary to provide our services to you.
          </p>

          <h2 className="text-2xl font-display text-dark_amethyst mt-8 mb-4">Data Security</h2>
          <p className="text-gray-600">
            We implement appropriate security measures to protect your personal information. 
            However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-2xl font-display text-dark_amethyst mt-8 mb-4">Your Rights</h2>
          <ul className="text-gray-600 space-y-2">
            <li>Access your personal data</li>
            <li>Request corrections to your data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2 className="text-2xl font-display text-dark_amethyst mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have questions about this Privacy Policy, contact us at:<br />
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

export default Privacy