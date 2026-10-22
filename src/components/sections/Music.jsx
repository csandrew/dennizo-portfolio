import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const MusicVideos = () => {
  const videos = [
    {
      id: 'jFiq9IXSQcQ',
      title: 'Unifunze',
      description: 'Official lyrics video - Gospel music by Dennizo Classic',
      category: 'Gospel'
    },
    {
      id: 'PXGkTSX7Kfs',
      title: 'Mtihani ft Aela Wambui',
      description: 'Official video - Trending gospel song (Skiza 5371329)',
      category: 'Gospel'
    },
    {
      id: 'AgdqnlRyS_0',
      title: 'Auleria Part 1',
      description: 'Official music audio - Written by Dennizo Classic',
      category: 'Gospel'
    },
    {
      id: 'UexE32m1fQ8',
      title: 'Atatenda ft Starhil Patrick',
      description: 'Official music audio - Multi-language gospel song',
      category: 'Gospel'
    },
    {
      id: 'ymcVhCqa6kw',
      title: 'Dennizo Classic - Video 5',
      description: 'Gospel music video from Dennizo Classic',
      category: 'Gospel'
    },
    {
      id: 'SeNPX4JbfeM',
      title: 'Dennizo Classic - Video 6',
      description: 'Gospel music video from Dennizo Classic',
      category: 'Gospel'
    }
  ]

  return (
    <section className="py-20 bg-white" id="music-videos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest mb-4">
            Music &amp; Videos
          </span>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of events where Dennizo Classic hosted, entertained, and created unforgettable moments —
            along with his latest Gospel music releases.
          </p>
        </motion.div>

        <div>
          <h3 className="text-2xl font-display text-secondary mb-6 text-center">Music Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative bg-dark_amethyst">
                  <div className="relative pt-[56.25%]">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                  </div>
                  <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <FontAwesomeIcon icon={faYoutube} />
                    YouTube
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-secondary line-clamp-1">
                      {video.title}
                    </h4>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                      {video.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {video.description}
                  </p>
                  <a
                    href={`https://youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-sm transition-colors"
                  >
                    <FontAwesomeIcon icon={faPlay} className="text-xs" />
                    Watch on YouTube
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://youtube.com/@dennizoclassickenya1295?si=hVFnbia_Ti6y29d3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-body font-bold uppercase tracking-wider rounded-lg hover:bg-red-700 transition-colors"
            >
              <FontAwesomeIcon icon={faYoutube} className="text-xl" />
              Subscribe on YouTube
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MusicVideos
