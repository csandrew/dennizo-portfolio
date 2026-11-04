import React from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    number: '01',
    title: 'Music production',
    description:
      'Develop a song from its first idea into a polished production, with a collaborative process shaped around your sound and purpose.'
  },
  {
    number: '02',
    title: 'Songwriting',
    description:
      'Find the right story, structure, and language for your song, whether you are starting with a theme, a melody, or a first draft.'
  },
  {
    number: '03',
    title: 'Vocal coaching',
    description:
      'Build confidence, expression, and preparation for recording or live performance through focused, practical vocal guidance.'
  },
  {
    number: '04',
    title: 'Music direction',
    description:
      'Bring a clear musical vision to rehearsals, worship teams, and live programmes with thoughtful preparation and direction.'
  },
  {
    number: '05',
    title: 'Consultation',
    description:
      'Get a considered second perspective on your music project, creative direction, or next steps as an artist.'
  },
  {
    number: '06',
    title: 'Event hosting',
    description:
      'Create a confident, engaging atmosphere and a well-paced programme for your celebration, gathering, or special event.'
  },
  {
    number: '07',
    title: 'Mentorship',
    description:
      'Receive personalized guidance and support to navigate your creative journey and achieve your artistic goals.'
  },
  {
    number: '08',
    title: 'High school & Campus tours',
    description:
      'Bring live performance or professional event hosting to a campus programme. Share your event details to discuss the right fit.'
  }
]

const Services = () => (
  <div className="pt-20">
    <section className="bg-secondary text-white">
      <div className="container-custom py-20 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
          Services
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-display font-bold leading-tight md:text-6xl">
          Thoughtful creative support, from first idea to live moment.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
          Explore music, performance, and event services designed around your
          goals. Every enquiry starts with a conversation about what you need.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            to="/booking"
            className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Discuss a project
          </Link>
          <Link
            to="/music"
            className="rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-secondary"
          >
            Explore the music
          </Link>
        </div>
      </div>
    </section>

    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container-custom">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            How I can help
          </p>
          <h2 className="mt-3 text-3xl font-display font-bold text-secondary md:text-4xl">
            Services for artists, teams, and events
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="flex min-h-64 flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
            >
              <span className="text-sm font-semibold tracking-widest text-primary">
                {service.number}
              </span>
              <h3 className="mt-5 text-xl font-bold text-secondary">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-gray-600">
                {service.description}
              </p>
              <Link
                to={`/booking?service=${encodeURIComponent(service.title)}`}
                className="mt-6 inline-flex font-semibold text-primary hover:text-primary-dark"
              >
                Enquire about this service <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="container-custom py-16 md:py-20">
      <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-gray-100 p-8 md:flex-row md:items-center md:p-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Artist development
          </p>
          <h2 className="mt-3 text-3xl font-display font-bold text-secondary">
            Looking for ongoing guidance?
          </h2>
          <p className="mt-3 leading-relaxed text-gray-600">
            Explore a more personal approach to creative growth through
            mentorship.
          </p>
        </div>
        <Link
          to="/mentorship"
          className="shrink-0 rounded-lg border border-secondary px-6 py-3 font-semibold text-secondary transition-colors hover:bg-secondary hover:text-white"
        >
          Explore mentorship
        </Link>
      </div>
    </section>
  </div>
)

export default Services
