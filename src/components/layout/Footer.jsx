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
        
        <div className="grid md:grid-cols-[auto_auto_auto_auto] justify-between gap-10">
          
          {/* Brand Section */}
          <div className="max-w-xs">
            <h3 className="text-3xl font-display mb-4">
              <span className="text-white">DENNIZO</span>
              <span className="text-pink_orchid">.</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Inspiring hearts, transforming lives, and glorifying God through music and mentorship.
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
                    // Added hover:translate-x-1 for a smooth slide effect
                    className="inline-block text-white/60 hover:text-pink_orchid hover:translate-x-1 transition-all duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section - Kit HTML Form */}
          <div className="w-full max-w-xs">
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
                  // Added hover:bg-white/15 and focus:ring-2 for better input feedback
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-pink_orchid/50 focus:border-pink_orchid transition-all duration-300"
                />
                <button 
                  type="submit" 
                  // Added hover:scale-[1.02] and hover:shadow-md for the button
                  className="w-full px-4 py-2.5 bg-white text-secondary font-semibold rounded-lg hover:bg-white/90 hover:scale-[1.02] hover:shadow-md transition-all duration-300"
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
              {/* Added group class so icon and text hover together */}
              <li className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 text-sm">
                <FontAwesomeIcon icon={faPhone} className="text-gray-400 group-hover:text-pink_orchid transition-colors duration-300 w-4" />
                <a href="tel:+254715175508">+254 715 175 508</a>
              </li>
              <li className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 text-sm">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 group-hover:text-pink_orchid transition-colors duration-300 w-4" />
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
                    // Added hover:-translate-y-1 and a colored glow using CSS variables
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
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
                // Added hover:text-pink_orchid and a subtle underline effect
                className="text-white/40 hover:text-pink_orchid transition-colors duration-300 text-xs uppercase tracking-wider relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-pink_orchid transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer