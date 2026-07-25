import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faTiktok,
  faYoutube,
  faFacebook,
  faSpotify
} from '@fortawesome/free-brands-svg-icons'
import {
  faPhone,
  faEnvelope,
  faHeart
} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  const currentYear = new Date().getFullYear()

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

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
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
        <div className="grid md:grid-cols-[auto_auto_auto_1fr] gap-10">
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl font-display mb-4">
              <span className="text-white">DENNIZO</span>
              <span className="text-pink_orchid">.</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Gospel Artist | Music Director | Professional MC<br />
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

          {/* Newsletter Section - Kit HTML Form */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Weekly Inspiration
            </h4>
            <p className="text-white/60 text-sm mb-4">
              Subscribe to receive weekly inspiration from Dennizo.
            </p>

            <form 
              action="https://app.kit.com/forms/9724728/subscriptions" 
              method="post" 
              className="space-y-3"
            >
              <div className="flex flex-col gap-2">
                <input 
                  type="email" 
                  name="email_address" 
                  placeholder="Enter your email address" 
                  required 
                  className="w-full px-4 py-2.5 rounded-lg text-gray-800 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-pink_orchid transition-colors"
                />
                <button 
                  type="submit" 
                  className="w-full px-4 py-2.5 bg-white text-secondary font-semibold rounded-lg hover:bg-white/80 transition-all"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm">
                <FontAwesomeIcon icon={faPhone} className="text-gray-400 w-4" />
                <a href="tel:+254715175508">+254 715 175 508</a>
              </li>
              <li className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 w-4" />
                <a href="mailto:info@dennizoclassic.com">info@dennizoclassic.com</a>
              </li>
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm py-6 uppercase tracking-wider">
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