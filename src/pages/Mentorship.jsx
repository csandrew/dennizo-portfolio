import React from 'react'
import { Link } from 'react-router-dom'

const focusAreas = [
  {
    title: 'Creative direction',
    description:
      'Clarify your artistic identity, message, and the direction you want your music to take.'
  },
  {
    title: 'Song and performance development',
    description:
      'Work through songwriting, vocal expression, and preparation for recording or performance.'
  },
  {
    title: 'A sustainable next step',
    description:
      'Talk through practical goals and identify realistic actions for the next stage of your musical journey.'
  }
]

const Mentorship = () => (
  <div className="pt-20">
    <section className="bg-secondary text-white">
      <div className="container-custom py-20 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
          Mentorship
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-display font-bold leading-tight md:text-6xl">
          Grow as an artist with purpose, confidence, and a clear next step.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
          A thoughtful space for emerging and developing artists to reflect on
          their craft, strengthen their direction, and keep moving forward.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            to="/booking?service=Mentorship"
            className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Enquire about mentorship
          </Link>
          <Link
            to="/about"
            className="rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-secondary"
          >
            Read my story
          </Link>
        </div>
      </div>
    </section>

    <section className="container-custom grid gap-12 py-16 md:grid-cols-[0.8fr_1.2fr] md:py-24">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          The approach
        </p>
        <h2 className="mt-3 text-3xl font-display font-bold text-secondary md:text-4xl">
          Guidance grounded in listening and practical growth.
        </h2>
      </div>
      <div className="space-y-5 text-lg leading-relaxed text-gray-600">
        <p>
          Every artist has a different story, sound, and set of goals. Mentorship
          begins by understanding where you are now and what you hope to develop.
        </p>
        <p>
          From there, conversations can focus on your craft, creative choices,
          confidence, and practical next steps. The aim is to encourage
          thoughtful progress while helping you find a direction that feels
          authentic to you.
        </p>
        <p>
          The focus and format are agreed together, so the support is relevant
          to your needs rather than a one-size-fits-all programme.
        </p>
      </div>
    </section>

    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container-custom">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Areas of focus
          </p>
          <h2 className="mt-3 text-3xl font-display font-bold text-secondary md:text-4xl">
            Support shaped around your journey
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {focusAreas.map((area, index) => (
            <article
              key={area.title}
              className="rounded-2xl border border-gray-200 bg-white p-7"
            >
              <span className="text-sm font-semibold tracking-widest text-primary">
                0{index + 1}
              </span>
              <h3 className="mt-5 text-xl font-bold text-secondary">
                {area.title}
              </h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="container-custom py-16 md:py-20">
      <div className="rounded-3xl bg-secondary px-8 py-12 text-center text-white md:px-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
          Start a conversation
        </p>
        <h2 className="mt-3 text-3xl font-display font-bold md:text-4xl">
          Let’s talk about where you want to grow.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/75">
          Share a little about your musical journey and what kind of guidance
          would be useful. We can discuss the right next step together.
        </p>
        <Link
          to="/booking?service=Mentorship"
          className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Send a mentorship enquiry
        </Link>
      </div>
    </section>
  </div>
)

export default Mentorship
