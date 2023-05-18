import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Quote from './components/Quote'
import Blogs from './components/Blogs'
import Footer from './components/Footer'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
// import BlogSlider from './components/BlogSlider'

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
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Quote />
      <Blogs />
      <Footer />
      {/* <BlogSlider /> */}
    </div>
  )
}

export default App
