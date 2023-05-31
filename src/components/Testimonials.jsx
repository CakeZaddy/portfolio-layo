import React from 'react'
import Slider from './Slider'
import { motion } from 'framer-motion'

import { textVariant, zoomIn } from '../utils/motion'

const Testimonials = () => {
  return (
    <motion.div initial='initial' animate='animate' className=''>
      <div className='py-10 px-5'>
        <motion.h2
          variants={textVariant()}
          initial='initial'
          whileInView='animate'
          className='text-3xl font-eczar text-center md:font-medium md:text-4xl'
        >
          Client Testimonials
        </motion.h2>
      </div>
      <motion.div
        variants={zoomIn(0.1, 1)}
        initial='initial'
        whileInView='animate'
        className='mx-5 2xl:mx-[100px] mt-10 h-full'
      >
        <Slider />
      </motion.div>
      <div className='flex justify-center items-center'>
        <motion.button
          variants={zoomIn(0.5, 1)}
          initial='initial'
          whileInView='animate'
          className='h-[50px] w-[220px] bg-orange-400 hover:bg-orange-500 font-medium text-lg cursor-pointer font-eczar rounded-full my-8'
        >
          Full Testimonials
        </motion.button>
      </div>
    </motion.div>
  )
}

export default Testimonials
