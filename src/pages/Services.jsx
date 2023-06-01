import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import {
  fadeIn,
  pageVariant,
  slideIn,
  staggerContainer,
  textVariant,
  zoomIn,
} from '../utils/motion'

import { services } from '../constants'
import laptop from '../assets/service-laptop.jpg'
import Testimonials from '../components/Testimonials'
// import yourself from '../assets/do-it-yourself.jpg'

const Service = ({ id, title, service, info, image }) => (
  <div className='py-5 lg:grid grid-cols-2 md:px-[150px] xl:px-[250px]  gap-7'>
    <motion.img
      variants={slideIn('left', 'tween', 0.2, 1)}
      initial='initial'
      whileInView='animate'
      className='w-full'
      src={image}
      alt={`pic-of-${title}`}
    />
    <div className=''>
      <motion.h2
        variants={zoomIn(0.2, 0.75)}
        initial='initial'
        whileInView='animate'
        className='font-bold text-lg md:text-xl lg:text-2xl py-5'
      >
        {title}
      </motion.h2>
      <motion.h2
        variants={fadeIn('', '', 0.3, 1)}
        initial='initial'
        whileInView='animate'
        className='font-bold pb-5 md:text-lg lg:text-xl'
      >
        {id}. {service}
      </motion.h2>
      <motion.p
        variants={fadeIn('', '', 0.3, 1)}
        initial='initial'
        whileInView='animate'
        className='text-lg pb-5 lg:text-xl'
      >
        {info}
      </motion.p>
      <Link to='/contact'>
        <motion.button
          variants={zoomIn(0.5, 1)}
          initial='initial'
          whileInView='animate'
          className='py-2 w-[350px] bg-orange-400 font-semibold text-xl cursor-pointer rounded-full hover:bg-orange-500'
        >
          Know More
        </motion.button>
      </Link>
    </div>
  </div>
)

const Services = () => {
  return (
    <motion.div
      variants={pageVariant()}
      initial='initial'
      animate='animate'
      exit='exit'
      className='font-neuton overflow-hidden'
    >
      <div className='bg-[#3b7777] green h-24'></div>
      <div className='bg-[#3b7777] green text-white text-center text-4xl font-semibold font-eczar py-10'>
        <motion.h2 variants={textVariant()}>My Social Media Services</motion.h2>
      </div>
      <div className='bg-gray-400 text-center py-10 px-5 lg:grid grid-cols-2 md:px-[150px] xl:px-[250px]  gap-7'>
        <div className=''>
          <motion.h2
            variants={textVariant()}
            className='text-2xl font-eczar py-5 px-5 md:px-10 md:text-2xl'
          >
            Want To Get More From Your Social Media Activities?
          </motion.h2>
          <motion.p
            variants={fadeIn('', '', 0.3, 1)}
            initial='initial'
            whileInView='animate'
            className='text-xl pb-4'
          >
            It’s my mission to help small businesses like yours use social media
            more effectively, so you get the results you deserve. It shouldn’t
            feel overwhelming either, so I want to share my years of experience
            and expertise with you so you can use social media more efficiently.
            After all, everyone leads busy lives.
          </motion.p>
          <motion.p
            variants={fadeIn('', '', 0.3, 1)}
            initial='initial'
            whileInView='animate'
            className='text-xl pb-4'
          >
            Whether you’re looking for someone to create your social media
            strategy, or you need some initial guidance, I’m here to help, with
            high-quality services to fit a range of budgets and requirements.
          </motion.p>
        </div>
        <motion.img
          variants={slideIn('right', 'tween', 0.2, 1)}
          initial='initial'
          whileInView='animate'
          className='w-full  py-5'
          src={laptop}
          alt='laptop'
        />
      </div>
      <div className='px-5 py-10'>
        <motion.h2
          variants={zoomIn(0.2, 0.75)}
          initial='initial'
          whileInView='animate'
          className='font-eczar text-2xl lg:text-3xl text-center px-5 pb-5'
        >
          Here Are Some Of My Services
        </motion.h2>
        {services.map((service, index) => (
          <Service key={service.service} index={index} {...service} />
        ))}
      </div>
      <div className='bg-[#3b7777] flex green py-10 flex-col justify-center items-center '>
        <motion.p
          variants={fadeIn('', '', 0.3, 1)}
          initial='initial'
          whileInView='animate'
          className='text-xl lg:text-2xl text-center pb-5 px-[50px] md:px-[100px] lg:px-[150px] xl:px-[300px] '
        >
          If you’re looking for something slightly different to the above,
          please do still get in touch and I’d be happy to discuss how I may be
          able to help.
        </motion.p>
        <Link to='/contact'>
          <motion.button
            variants={zoomIn(0.5, 1)}
            initial='initial'
            whileInView='animate'
            className='py-2 w-[250px] bg-orange-400 font-semibold text-xl cursor-pointer rounded-full hover:bg-orange-500'
          >
            Contact Me
          </motion.button>
        </Link>
      </div>
      <Testimonials />
    </motion.div>
  )
}

export default Services
