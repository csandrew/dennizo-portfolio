import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Music', href: '/music' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Left */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <span className="text-2xl font-display text-primary font-bold">
              DENNIZOCLASSIC<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Centered Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-body text-sm font-semibold uppercase tracking-wider transition-colors ${
                    location.pathname === item.href 
                      ? 'text-primary' 
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Book Me Button - Right */}
          <div className="hidden md:block flex-shrink-0">
            <Link
              to="/booking"
              className="px-6 py-2.5 bg-primary text-white font-body font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block w-6 h-0.5 transition-all bg-primary ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 transition-all bg-primary ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 transition-all bg-primary ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white py-4 shadow-lg border-t border-gray-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2.5 px-4 text-sm font-semibold uppercase tracking-wider text-gray-600 hover:text-primary hover:bg-gray-200 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="block mx-4 mt-4 py-2.5 bg-primary text-white font-body font-bold text-sm uppercase tracking-wider rounded-lg text-center hover:bg-primary-dark transition-colors shadow-md"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header