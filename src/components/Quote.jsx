import React from 'react'
import { motion } from 'framer-motion'

import { fadeIn } from '../utils/motion'

const Quote = () => {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      className='bg-[#3b7777] p-10 green text-center'
    >
      <motion.h2
        variants={fadeIn('right', 'spring', 0.3, 1)}
        initial='initial'
        whileInView='animate'
        className='text-white font-eczar italic text-xl md:text-2xl mb-3 '
      >
        “We don't have a choice on whether we DO social media, the question is
        how well we do it.”
      </motion.h2>
      <motion.h2
        variants={fadeIn('left', '', 0.5, 1)}
        initial='initial'
        whileInView='animate'
        className='text-white text-xl font-neuton md:text-2xl'
      >
        - Erik Qualman, Motivational Speaker and Bestselling Author
      </motion.h2>
    </motion.div>
  )
}

export default Quote
