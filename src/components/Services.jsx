import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import { Tilt } from 'react-tilt'

import { services } from '../constants'

import { fadeIn, tiltOptions } from '../utils/motion'
import { textVariant } from '../utils/motion'

const ServiceCard = ({ id, image, service, info, index }) => (
  // <Tilt options={tiltOptions()}>
  //   <motion.div
  //     variants={slideIn('right', 'tween', 0.2, 1)}
  //     initial='initial'
  //     whileInView='animate'
  //     className='w-full h-full shadow-xl flex flex-col justify-center items-center rounded-lg  duration-300 bg-slate-300'
  //   >
  //     <div className='w-full h-[250px]'>
  //       <img
  //         className='w-full object-cover'
  //         src={image}
  //         alt={`image-of-${service}`}
  //       />
  //     </div>
  //     <div className='text-center mt-4 mx-auto bg-slate-300'>
  //       <h4 className='font-semibold font-eczar'>
  //         {id}. {service}
  //       </h4>
  //       <p className='mt-2 px-11'>{info}</p>
  //     </div>
  //     <Link to='/services'>
  //       <button className='h-[40px] w-[180px] bg-orange-400 hover:bg-orange-500 font-medium text-lg cursor-pointer font-eczar rounded-full my-8'>
  //         Discover More
  //       </button>
  //     </Link>
  //   </motion.div>
  // </Tilt>
  <Tilt options={tiltOptions()}>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.65)}
      initial='initial'
      whileInView='animate'
      className='w-full h-full shadow-xl flex flex-col justify-center items-center rounded-lg  duration-300 bg-slate-300'
    >
      <div className='w-full h-full'>
        <img
          className='w-full h-full'
          src={image}
          alt={`image-of-${service}`}
        />
      </div>
      <div className='text-center mt-4 mx-auto'>
        <h4 className='font-semibold font-eczar'>
          {id}. {service}
        </h4>
        <p className='mt-2 px-11'>{info}</p>
      </div>
      <Link to='/services'>
        <button className='h-[40px] w-[180px] bg-orange-400 hover:bg-orange-500 font-medium text-lg cursor-pointer rounded-full my-8 font-eczar'>
          Discover More
        </button>
      </Link>
    </motion.div>
  </Tilt>
)

const Services = () => {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      className='w-full py-10 px-10 font-neuton text-lg bg-gray-400 overflow-hidden'
    >
      <div className=''>
        <motion.h2
          variants={textVariant()}
          initial='initial'
          whileInView='animate'
          className='text-3xl text-center text-white font-eczar md:font-medium md:text-4xl'
        >
          How Can I Help You With Your Social Media Strategy?
        </motion.h2>
        <div className='my-10 mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {/* <Tilt options={tiltOptions()}>
            <motion.div
              variants={slideIn('left', 'tween', 0.2, 1)}
              initial='initial'
              whileInView='animate'
              className='w-full h-full shadow-xl flex flex-col justify-center items-center rounded-lg  duration-300 bg-slate-300'
            >
              <div className='w-full h-full'>
                <img
                  className='w-full h-full'
                  src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684227376/layo/brainstorm_kwpdbp.jpg'
                  alt='/'
                />
              </div>
              <div className='text-center mt-4 mx-auto'>
                <h4 className='font-semibold font-eczar'>
                  1. Social Media Strategy Brainstorm
                </h4>
                <p className='mt-2 px-11'>
                  If you’re planning on creating a social media strategy for
                  your business, but don’t know where to start, or need some
                  initial direction, discover my brand NEW 90-minute Social
                  Media Strategy Brainstorm session
                </p>
              </div>
              <Link to='/services'>
                <button className='h-[40px] w-[180px] bg-orange-400 hover:bg-orange-500 font-medium text-lg cursor-pointer rounded-full my-8 font-eczar'>
                  Discover More
                </button>
              </Link>
            </motion.div>
          </Tilt> */}
          {services.map((service, index, id) => (
            <ServiceCard key={service.id} index={index} {...service} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Services
