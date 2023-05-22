import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Serve from '../components/Services'
import Testimonials from '../components/Testimonials'
import Quote from '../components/Quote'
import Blogs from '../components/Blogs'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Serve />
      <Testimonials />
      <Quote />
      <Blogs />
    </div>
  )
}

export default Home
