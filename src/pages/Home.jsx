import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Serve from '../components/Services'
import Testimonials from '../components/Testimonials'
import Quote from '../components/Quote'
import Blogs from '../components/Blogs'

import { motion } from 'framer-motion'
import { pageVariant } from '../utils/motion'

const Home = () => {
  return (
    <motion.div
      variants={pageVariant()}
      initial='initial'
      animate='animate'
      exit='exit'
      className='overflow-hidden'
    >
      <Hero />
      <About />
      <Serve />
      <Testimonials />
      <Quote />
      <Blogs />
    </motion.div>
  )
}

export default Home
