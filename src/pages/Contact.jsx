import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faTiktok,
  faYoutube,
  faFacebook,
  faSpotify
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faHeart } from '@fortawesome/free-solid-svg-icons'  // Added faHeart

const Contact = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: faInstagram,
      url: 'https://www.instagram.com/dennizo_classic_kenya',
      color: '#E4405F'
    },
    {
      name: 'Boomplay',
      icon: faHeart,
      url: 'https://www.boomplay.com/artist/121186191',
      color: '#FF6B6B'
    },
    {
      name: 'TikTok',
      icon: faTiktok,
      url: 'https://vt.tiktok.com/ZSXjfyujq/',
      color: '#000000'
    },
    {
      name: 'YouTube',
      icon: faYoutube,
      url: 'https://youtube.com/@dennizoclassickenya1295',
      color: '#FF0000'
    },
    {
      name: 'Facebook',
      icon: faFacebook,
      url: 'https://www.facebook.com/Dennizoclassicke',
      color: '#1877F2'
    },
    {
      name: 'Spotify',
      icon: faSpotify,
      url: 'https://open.spotify.com/artist/6baGEd0XvHieMCojmrywsx',
      color: '#1DB954'
    },
  ]

  return (
    <section className="min-h-screen py-24 bg-gray-100 flex items-center justify-center">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left Column - Contact Info */}
            <div className="p-12" style={{ backgroundColor: '#3C3B6E' }}>
              <h1 className="text-4xl font-display font-bold text-white mb-6">Contact Dennizo Classic</h1>
              <p className="text-gray-200 mb-8">
                Ready to bring your next event to life? Send a message, book a call, or request a quote.
              </p>

              <div className="space-y-6 text-sm text-gray-200">
                <div>
                  <span className="block font-semibold text-white">Email</span>
                  <a href="mailto:info@dennizoclassic.com" className="hover:text-pink_orchid transition-colors">
                    info@dennizoclassic.com
                  </a>
                </div>
                <div>
                  <span className="block font-semibold text-white">Phone</span>
                  <a href="tel:+254700000000" className="hover:text-pink_orchid transition-colors">
                    +254 700 000 000
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                  Connect With Me
                </h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        color: social.color
                      }}
                      title={social.name}
                    >
                      <FontAwesomeIcon icon={social.icon} className="text-lg" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="p-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4" style={{ color: '#B22234' }}>
                    Get in touch
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Whether you need an MC for a wedding, corporate event, or music production, I'm here to help.
                  </p>
                </div>

                <div className="grid gap-6">
                  <div className="p-6 bg-gray-50 rounded-3xl border border-gray-200">
                    <h3 className="font-semibold text-lg mb-2" style={{ color: '#3C3B6E' }}>
                      Quick Booking
                    </h3>
                    <p className="text-gray-600">Use the booking page to submit your event details and receive availability quickly.</p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-3xl border border-gray-200">
                    <h3 className="font-semibold text-lg mb-2" style={{ color: '#3C3B6E' }}>
                      Need a quote?
                    </h3>
                    <p className="text-gray-600">Share your event date, size, and vision and I'll provide a custom package.</p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-3xl border border-gray-200">
                    <h3 className="font-semibold text-lg mb-2" style={{ color: '#3C3B6E' }}>
                      Stay connected
                    </h3>
                    <p className="text-gray-600">Follow on socials for behind-the-scenes updates and event highlights.</p>
                  </div>
                </div>

                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold uppercase tracking-widest rounded-md transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#B22234' }}
                >
                  Request a booking
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact