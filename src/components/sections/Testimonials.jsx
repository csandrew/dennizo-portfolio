import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons'

const Testimonials = () => {
  const scrollContainer = useRef(null)

  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael",
      event: "Wedding, Karen - Nairobi",
      quote: "Dennizo brought incredible energy to our wedding. From the ceremony to the reception, he kept everyone engaged and entertained. Our guests are still talking about his hosting months later!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
    },
    {
      id: 2,
      name: "John Kamau",
      event: "Corporate Gala - Safari Park Hotel",
      quote: "Professional, punctual, and highly engaging. Dennizo elevated our corporate gala to another level. He understood our brand and delivered exactly what we needed. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
    },
    {
      id: 3,
      name: "Jane Wanjiru",
      event: "Product Launch - Nairobi CBD",
      quote: "The perfect blend of professionalism and entertainment. Dennizo made our product launch memorable and helped us connect with our audience in a meaningful way.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
    },
    {
      id: 4,
      name: "David Ochieng",
      event: "Birthday Party - Westlands",
      quote: "Amazing MC! Dennizo kept the energy high all night long. He interacted with every guest and made my wife's 40th birthday absolutely unforgettable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    {
      id: 5,
      name: "Mercy Atieno",
      event: "Corporate Retreat - Naivasha",
      quote: "Dennizo was the highlight of our corporate retreat. His ability to engage professionals while keeping the atmosphere light and fun was remarkable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150"
    },
    {
      id: 6,
      name: "Peter & Grace",
      event: "Wedding, Runda - Nairobi",
      quote: "Dennizo made our special day even more special. His energy, charm, and professionalism were beyond our expectations. We highly recommend him!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
    }
  ]

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const card = scrollContainer.current.querySelector('.testimonial-card')
      if (card) {
        const cardWidth = card.offsetWidth + 32
        scrollContainer.current.scrollBy({
          left: direction === 'left' ? -cardWidth : cardWidth,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <section className="py-20 bg-gray-100" id="testimonials">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest mb-4">
            Testimonials
          </span>
           <div className="w-24 h-1 bg-primary mx-auto rounded-full m-4"></div>
          <h2 className="section-title text-secondary">What Clients Say</h2>
          
          <p className="section-subtitle text-gray-600">
            Real feedback from real events. Here's what clients have to say 
            about working with Dennizo.
          </p>
        </motion.div>

        <div className="relative">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 -translate-x-5 shadow-lg"
            style={{ backgroundColor: '#B22234' }}
            aria-label="Scroll left"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
          </button>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 translate-x-5 shadow-lg"
            style={{ backgroundColor: '#B22234' }}
            aria-label="Scroll right"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
          </button>

          {/* Horizontal Scroll */}
          <div 
            ref={scrollContainer}
            className="flex gap-8 overflow-x-auto pb-6 px-4 scroll-smooth"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#B22234 transparent',
              msOverflowStyle: 'none'
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="testimonial-card min-w-[420px] md:min-w-[380px] max-w-[380px] flex-shrink-0"
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border-t-4 flex flex-col" style={{ borderTopColor: '#B22234' }}>
                  {/* Header with quote and rating */}
                  <div className="flex items-start justify-between mb-4">
                    <FontAwesomeIcon 
                      icon={faQuoteLeft} 
                      className="text-3xl opacity-20 flex-shrink-0"
                      style={{ color: '#3C3B6E' }}
                    />
                    <div className="flex flex-shrink-0 ml-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FontAwesomeIcon 
                          key={i} 
                          icon={faStar} 
                          className="w-4 h-4"
                          style={{ color: '#B22234' }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Quote - with fixed height and overflow */}
                  <div className="flex-1 mb-4">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed italic line-clamp-6">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Client Info - fixed at bottom */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100 mt-auto">
                    {/*<img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 flex-shrink-0"
                      style={{ borderColor: '#3C3B6E' }}
                    /> */}
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-base truncate" style={{ color: '#3C3B6E' }}>
                        {testimonial.name}
                      </h4>
                      <p className="text-sm truncate" style={{ color: '#4B5563' }}>
                        {testimonial.event}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Hint */}
          <div className="text-center text-sm mt-4" style={{ color: '#4B5563' }}>
            ← Click arrows to scroll through testimonials →
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials