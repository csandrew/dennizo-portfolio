import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael",
      event: "Wedding, Karen - Nairobi",
      quote: "Dennizo brought incredible energy to our wedding. From the ceremony to the reception, he kept everyone engaged and entertained. Our guests are still talking about his hosting months later!",
      rating: 5
    },
    {
      id: 2,
      name: "John Kamau",
      event: "Corporate Gala - Safari Park Hotel",
      quote: "Professional, punctual, and highly engaging. Dennizo elevated our corporate gala to another level. He understood our brand and delivered exactly what we needed. Highly recommended!",
      rating: 5
    },
    {
      id: 3,
      name: "Jane Wanjiru",
      event: "Product Launch - Nairobi CBD",
      quote: "The perfect blend of professionalism and entertainment. Dennizo made our product launch memorable and helped us connect with our audience in a meaningful way.",
      rating: 5
    },
    {
      id: 4,
      name: "David Ochieng",
      event: "Birthday Party - Westlands",
      quote: "Amazing MC! Dennizo kept the energy high all night long. He interacted with every guest and made my wife's 40th birthday absolutely unforgettable.",
      rating: 5
    },
    {
      id: 5,
      name: "Mercy Atieno",
      event: "Corporate Retreat - Naivasha",
      quote: "Dennizo was the highlight of our corporate retreat. His ability to engage professionals while keeping the atmosphere light and fun was remarkable.",
      rating: 5
    },
    {
      id: 6,
      name: "Peter & Grace",
      event: "Wedding, Runda - Nairobi",
      quote: "Dennizo made our special day even more special. His energy, charm, and professionalism were beyond our expectations. We highly recommend him!",
      rating: 5
    }
  ]

  const activeTestimonial = testimonials[activeIndex]

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + testimonials.length) % testimonials.length)
  }

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
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
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-display text-secondary">
            What clients <span className="text-primary">say.</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft') showPrevious()
            if (event.key === 'ArrowRight') showNext()
          }}
          className="outline-none"
        >
          {/* Card */}
          <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm sm:p-12">
            <AnimatePresence mode="wait" initial={false}>
              <motion.blockquote
                key={activeIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.22 }}
                aria-live="polite"
              >
                {/* Stars */}
                <div className="flex gap-1" style={{ color: '#B22234' }}>
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="w-5 h-5" />
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-6 text-lg leading-8 sm:text-xl text-gray-700 italic">
                  "{activeTestimonial.quote}"
                </p>

                {/* Footer */}
                <footer className="mt-8 border-t border-gray-100 pt-6">
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-bold" style={{ color: '#3C3B6E' }}>
                        {activeTestimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {activeTestimonial.event}
                      </p>
                    </div>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between gap-4">
            {/* Previous Button */}
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gray-300 text-xl transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ color: '#3C3B6E' }}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
            </button>

            {/* Dots */}
            <div
              className="flex items-center justify-center gap-2"
              aria-label={`Testimonial ${activeIndex + 1} of ${testimonials.length}`}
            >
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                  className={`h-2.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    index === activeIndex ? 'w-7' : 'w-2.5'
                  }`}
                  style={{
                    backgroundColor: index === activeIndex ? '#B22234' : '#D1D5DB'
                  }}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={showNext}
              aria-label="Next testimonial"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gray-300 text-xl transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ color: '#3C3B6E' }}
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials