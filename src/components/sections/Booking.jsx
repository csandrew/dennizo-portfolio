import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useForm, ValidationError } from '@formspree/react'

const serviceOptions = [
  'Event hosting',
  'Music production',
  'Songwriting',
  'Vocal coaching',
  'Music direction',
  'Mentorship',
  'Consultation',
  'Collaboration / other'
]

const fieldClassName =
  'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20'

const Booking = () => {
  const [state, handleSubmit] = useForm('xgogglea')
  const [searchParams] = useSearchParams()
  const requestedService = searchParams.get('service')
  const initialService = serviceOptions.includes(requestedService) ? requestedService : ''
  const [service, setService] = useState(initialService)
  const isEventEnquiry = service === 'Event hosting'

  if (state.succeeded) {
    return (
      <section className="min-h-[70vh] bg-gray-50 px-4 py-28">
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 text-center shadow-sm md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Enquiry received
          </p>
          <h1 className="mt-4 text-3xl font-display font-bold text-secondary md:text-4xl">
            Thank you for getting in touch.
          </h1>
          <p className="mt-4 leading-relaxed text-gray-600">
            Your enquiry has been submitted. I’ll review the details and follow
            up using the contact information you provided to discuss
            availability and next steps.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Return home
            </Link>
            <Link
              to="/services"
              className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-secondary transition-colors hover:bg-gray-50"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="pt-20">
      <section className="bg-secondary text-white">
        <div className="container-custom py-16 text-center md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            Enquiries &amp; bookings
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-display font-bold md:text-5xl">
            Tell me what you have in mind.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/75">
            Share a few details about your event or creative project. I’ll be in
            touch to discuss availability, fit, and the next step.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container-custom">
          <ol className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {[
              ['01', 'Share your brief', 'Tell me what you need and when.'],
              ['02', 'Discuss the details', 'We’ll confirm fit, scope, and availability.'],
              ['03', 'Agree next steps', 'Move forward once the details are clear.']
            ].map(([number, title, description]) => (
              <li key={number} className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {number}
                </span>
                <div>
                  <h2 className="font-semibold text-secondary">{title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-custom grid gap-10 py-12 md:grid-cols-[0.7fr_1.3fr] md:py-16">
        <aside>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Start here
          </p>
          <h2 className="mt-3 text-3xl font-display font-bold text-secondary">
            A little context helps me respond well.
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            Choose the service you’re interested in and share your goals,
            timeline, or any questions. This form is an enquiry, not a confirmed
            booking; arrangements are agreed directly after we connect.
          </p>
          <div className="mt-8 space-y-3 border-t border-gray-200 pt-6 text-sm text-gray-600">
            <p>
              Prefer email?{' '}
              <a
                href="mailto:info@dennizoclassic.com"
                className="font-semibold text-primary hover:underline"
              >
                info@dennizoclassic.com
              </a>
            </p>
            <p>
              <Link to="/contact" className="font-semibold text-primary hover:underline">
                View contact details and social links
              </Link>
            </p>
          </div>
        </aside>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-9"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-700">
              Your name <span className="text-primary">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className={fieldClassName}
              placeholder="Full name"
            />
            <ValidationError field="name" errors={state.errors} className="mt-1 block text-sm text-red-600" />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
                Email address <span className="text-primary">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={fieldClassName}
                placeholder="you@example.com"
              />
              <ValidationError field="email" errors={state.errors} className="mt-1 block text-sm text-red-600" />
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gray-700">
                Phone or WhatsApp <span className="text-gray-400">(optional)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className={fieldClassName}
                placeholder="+254 ..."
              />
              <ValidationError field="phone" errors={state.errors} className="mt-1 block text-sm text-red-600" />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="mb-2 block text-sm font-semibold text-gray-700">
              What are you enquiring about? <span className="text-primary">*</span>
            </label>
            <select
              id="service"
              name="service"
              required
              value={service}
              onChange={(event) => setService(event.target.value)}
              className={fieldClassName}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <ValidationError field="service" errors={state.errors} className="mt-1 block text-sm text-red-600" />
          </div>

          {isEventEnquiry && (
            <div className="grid gap-5 rounded-xl bg-gray-50 p-5 md:grid-cols-2">
              <div>
                <label htmlFor="event-date" className="mb-2 block text-sm font-semibold text-gray-700">
                  Event date <span className="text-primary">*</span>
                </label>
                <input
                  id="event-date"
                  name="event_date"
                  type="date"
                  required
                  className={fieldClassName}
                />
                <ValidationError field="event_date" errors={state.errors} className="mt-1 block text-sm text-red-600" />
              </div>
              <div>
                <label htmlFor="event-location" className="mb-2 block text-sm font-semibold text-gray-700">
                  Event location <span className="text-primary">*</span>
                </label>
                <input
                  id="event-location"
                  name="event_location"
                  type="text"
                  required
                  className={fieldClassName}
                  placeholder="City or venue"
                />
                <ValidationError field="event_location" errors={state.errors} className="mt-1 block text-sm text-red-600" />
              </div>
            </div>
          )}

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="timeline" className="mb-2 block text-sm font-semibold text-gray-700">
                Preferred timeline <span className="text-gray-400">(optional)</span>
              </label>
              <input
                id="timeline"
                name="timeline"
                type="text"
                className={fieldClassName}
                placeholder="e.g. March 2027 or flexible"
              />
            </div>
            <div>
              <label htmlFor="budget" className="mb-2 block text-sm font-semibold text-gray-700">
                Budget range <span className="text-gray-400">(optional)</span>
              </label>
              <select id="budget" name="budget" defaultValue="" className={fieldClassName}>
                <option value="">Prefer to discuss</option>
                <option value="under-50000-kes">Under KES 50,000</option>
                <option value="50000-100000-kes">KES 50,000–100,000</option>
                <option value="100000-200000-kes">KES 100,000–200,000</option>
                <option value="over-200000-kes">Over KES 200,000</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-700">
              Tell me about your plans <span className="text-primary">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className={fieldClassName}
              placeholder="What are you working on, what support are you looking for, and what would you like to achieve?"
            />
            <ValidationError field="message" errors={state.errors} className="mt-1 block text-sm text-red-600" />
          </div>

          <div className="flex items-start gap-3">
            <input
              id="privacy-consent"
              name="privacy_consent"
              type="checkbox"
              value="I agree to be contacted about this enquiry"
              required
              className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <label htmlFor="privacy-consent" className="text-sm leading-relaxed text-gray-600">
              I agree to be contacted about this enquiry and understand my
              information will be handled in line with the{' '}
              <Link to="/privacy" className="font-semibold text-primary hover:underline">
                Privacy Policy
              </Link>
              . <span className="text-primary">*</span>
            </label>
          </div>

          {state.errors && (
            <p role="alert" className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
              Your enquiry could not be submitted. Please check the fields above
              and try again, or email info@dennizoclassic.com.
            </p>
          )}

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full rounded-lg bg-primary px-6 py-4 font-bold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {state.submitting ? 'Sending enquiry…' : 'Send enquiry'}
          </button>
          <p className="text-center text-xs text-gray-500">
            Fields marked * are required. Submitting this form does not confirm
            availability or create a booking.
          </p>
        </form>
      </section>
    </div>
  )
}

export default Booking
