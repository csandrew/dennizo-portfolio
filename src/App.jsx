import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Booking from './pages/Booking'
import Portfolio from './pages/Portfolio'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="booking" element={<Booking />} />
          <Route path="portfolio" element={<Portfolio />} />          
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App