import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faTiktok,
  faYoutube,
  faFacebook,
  faTwitter,
  faSpotify,
  faSoundcloud
} from '@fortawesome/free-brands-svg-icons'
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faHeart
} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Instagram',
      icon: faInstagram,
      url: 'https://instagram.com/dennizoclassic',
      color: '#E4405F'
    },
    {
      name: 'TikTok',
      icon: faTiktok,
      url: 'https://tiktok.com/@dennizoclassic',
      color: '#000000'
    },
    {
      name: 'YouTube',
      icon: faYoutube,
      url: 'https://youtube.com/@dennizoclassic',
      color: '#FF0000'
    },
    {
      name: 'Facebook',
      icon: faFacebook,
      url: 'https://facebook.com/dennizoclassic',
      color: '#1877F2'
    },

    {
      name: 'Spotify',
      icon: faSpotify,
      url: 'https://spotify.com/dennizoclassic',
      color: '#1DB954'
    },

  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Music', href: '/music' },
    { name: 'Contact', href: '/contact' },
    { name: 'Book Now', href: '/booking' },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ]

  return (
    <footer
      className="text-white py-16"
      style={{ backgroundColor: '#3C3B6E' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-display mb-4">
              <span className="text-white">DENNIZO</span>
              <span className="text-pink_orchid">.</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Professional MC & Entertainer<br />
              Creating unforgettable moments<br />
              across Kenya and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-pink_orchid transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm">
                <FontAwesomeIcon icon={faPhone} className="text-pink_orchid w-4" />
                <a href="tel:+254700000000">+254 700 000 000</a>
              </li>
              <li className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm">
                <FontAwesomeIcon icon={faEnvelope} className="text-pink_orchid w-4" />
                <a href="mailto:info@dennizoclassic.com">info@dennizoclassic.com</a>
              </li>
            
            </ul>


            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm py-6 uppercase tracking-wider">
                Connect With Me
              </h4>
              
              <div className="grid grid-cols-5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.08)',
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

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            &copy; {currentYear} Dennizo Classic. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-white/40 hover:text-pink_orchid transition-colors text-xs uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer