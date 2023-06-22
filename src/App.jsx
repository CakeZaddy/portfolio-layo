import { useState, useEffect } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedRoutes from './components/AnimatedRoutes'

import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import NotFound from './components/NotFound'
import Contact from './pages/Contact'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const ScrollToTop = () => {
    const location = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [location])

    return null
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div
        onClick={toggleDarkMode}
        className='fixed z-[102] top-2 left-2 ease-in-out duration-500'
      >
        {darkMode ? <MdLightMode size={30} /> : <MdDarkMode size={30} />}
      </div>
      <Router>
        <Navbar />
        {/* <AnimatedRoutes /> */}
        <AnimatePresence mode='sync' initial={false}>
          <ScrollToTop />
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<NotFound />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Router>
    </div>
  )
}

export default App
