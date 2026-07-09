import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone, faMusic, faHeart, faUsers, faStar, faCalendarCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <section className="py-20 bg-gray-300" id="about">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest">
            About Me
          </span>
           <div className="w-24 h-1 bg-primary mx-auto rounded-full m-4"></div>
          <h2 className="text-4xl md:text-5xl font-display text-secondary mt-2 mb-4">
            A Trusted Voice for Every Event
          </h2>
        
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
            Dennizo Classic combines professional MC hosting, live event direction, and high-energy entertainment 
            to keep audiences engaged from start to finish.
          </p>
        </motion.div>

        {/* Image & Bio Section - Full width, balanced */}
        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto mb-20">
          {/* Image - Larger, with animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-2/5 flex-shrink-0"
          >
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800"
                  alt="Dennizo Classic - Professional MC & Gospel Artist"
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Badge - Floating */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl animate-bounce-slow">
                MC & Gospel Artist
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-primary/20 rounded-full"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-secondary/10 rounded-full"></div>
            </div>
          </motion.div>

          {/* Bio - Larger text, better spacing */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-3/5"
          >
            <h3 className="text-3xl font-display text-secondary mb-6">
              Professional MC & Gospel Artist
            </h3>
            <div className="space-y-5 text-gray-600 text-base leading-relaxed">
              <p>
                Dennizo Classic is a dynamic Master of Ceremonies and Gospel artist 
                with over <span className="text-primary font-semibold">5+ years</span> of experience hosting events across Kenya. 
                Known for his charismatic stage presence, professional poise, and ability 
                to connect with diverse audiences, Dennizo brings a unique blend of 
                entertainment and inspiration to every platform.
              </p>
              <p>
                Whether commanding the stage at a wedding reception, leading a corporate 
                gala, or ministering through Gospel music, Dennizo delivers excellence 
                with authenticity. His versatility allows him to seamlessly transition 
                between professional hosting and soul-stirring musical performances, 
                making him a sought-after personality for events that demand both 
                elegance and energy.
              </p>
              <p className="text-primary font-medium italic">
                "With a passion for transforming moments into unforgettable experiences, 
                Dennizo continues to inspire audiences across Kenya and beyond."
              </p>
            </div>

            {/* Stats - Bigger, more prominent */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t-2 border-primary/20">
              <div className="text-center">
                <div className="text-4xl font-display text-primary">200+</div>
                <div className="text-sm text-gray-500 font-medium mt-1">Events Hosted</div>
              </div>
              <div className="text-center border-l-2 border-r-2 border-gray-200">
                <div className="text-4xl font-display text-primary">50K+</div>
                <div className="text-sm text-gray-500 font-medium mt-1">Audience Reached</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display text-primary">5+</div>
                <div className="text-sm text-gray-500 font-medium mt-1">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services/Specialties - Full width cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display text-secondary mb-3">Areas of Expertise</h3>
            <p className="text-gray-500">Delivering excellence across every platform</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: faMicrophone,
                title: 'MC Hosting',
                description: 'Professional master of ceremonies for weddings, corporate events, concerts, and private functions.'
              },
              {
                icon: faMusic,
                title: 'Gospel Music',
                description: 'Soul-stirring Gospel performances that inspire, uplift, and minister to audiences with authenticity.'
              },
              {
                icon: faUsers,
                title: 'Event Direction',
                description: 'Seamless event flow management, audience engagement, and coordination from start to finish.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-50 hover:bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <FontAwesomeIcon icon={item.icon} className="text-primary text-2xl group-hover:text-white transition-all duration-300" />
                </div>
                <h4 className="text-xl font-bold text-secondary mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values - Full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mt-20 pt-16 border-t-2 border-gray-200"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display text-secondary mb-3">My Values</h3>
            <p className="text-gray-500">What drives me to deliver excellence every time</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: faStar,
                title: 'Excellence',
                description: 'Committed to the highest standards of professionalism'
              },
              {
                icon: faHeart,
                title: 'Authenticity',
                description: 'Genuine connection with every audience and client'
              },
              {
                icon: faUsers,
                title: 'Versatility',
                description: 'Adaptable to any event type, culture, or audience'
              },
              {
                icon: faCalendarCheck,
                title: 'Reliability',
                description: 'Punctual, prepared, and professional every time'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <FontAwesomeIcon icon={item.icon} className="text-secondary text-2xl group-hover:text-white transition-all duration-300" />
                </div>
                <h4 className="text-base font-bold text-secondary">{item.title}</h4>
                <p className="text-sm text-gray-500 mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-12 border-t-2 border-gray-200"
        >
          <p className="text-gray-600 text-lg mb-6">Ready to make your event unforgettable?</p>
          <a
            href="/booking"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Book Dennizo Now
            <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default About