import React from 'react'
import NotFound from '../components/NotFound'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
// import Blog from './pages/Blog'
import Contact from '../pages/Contact'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode='wait' initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<NotFound />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
