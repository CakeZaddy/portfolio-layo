import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Quote from './components/Quote'
import Blogs from './components/Blogs'
import Footer from './components/Footer'
// import BlogSlider from './components/BlogSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Quote />
      <Blogs />
      <Footer />
      {/* <BlogSlider /> */}
    </>
  )
}

export default App
