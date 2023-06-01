import { useState } from 'react'
import {
  // Route,
  BrowserRouter as Router,
  // Routes,
  // useLocation,
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedRoutes from './components/AnimatedRoutes'

import { MdLightMode, MdDarkMode } from 'react-icons/md'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
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
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  )
}

export default App
