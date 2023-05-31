import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeIn, slideIn, textVariant, zoomIn } from '../utils/motion'

const About = () => {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      className='px-6 md:px-[100px] lg:px-[150px] xl:px-[200px] xl:px[200px] md:flex mt-4 sm:mt-20 md:mt-[150px] lg:mt-[200px] font-neuton text-lg xl:mt-[250px] 2xl:mt-[300px] gap-10 mb-8 overflow-hidden'
    >
      <div className=''>
        <motion.h2
          variants={textVariant()}
          initial='initial'
          whileInView='animate'
          className='text-3xl font-semibold '
        >
          Hi, I'm Ebunoluwa
        </motion.h2>
        <div className='my-8 flex flex-col gap-3  '>
          <motion.p
            variants={fadeIn('right', 'tween', 0.3, 1)}
            initial='initial'
            whileInView='animate'
            className='font-bold'
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sunt
            at ex pariatur culpa accusamus sint magni, error repellendus cumque
            dolor? Itaque, nesciunt odit! Perferendis?
          </motion.p>
          <motion.p
            variants={fadeIn('right', 'tween', 0.75, 1)}
            initial='initial'
            whileInView='animate'
            className=''
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            distinctio culpa soluta pariatur laudantium. Vel commodi perferendis
            nulla libero eos in exercitationem optio atque a.
          </motion.p>
          <motion.p
            variants={fadeIn('right', 'tween', 1, 1)}
            initial='initial'
            whileInView='animate'
            className=''
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            distinctio culpa soluta pariatur laudantium. Vel commodi perferendis
            nulla libero eos in exercitationem optio atque a.
          </motion.p>
        </div>
        <NavLink to='/about'>
          <motion.button
            variants={zoomIn(0.5, 0.75)}
            initial='initial'
            whileInView='animate'
            className='h-[50px] w-[230px] bg-orange-400 hover:bg-orange-500 font-semibold text-lg cursor-pointer font-eczar rounded-full'
          >
            Know More About Me
          </motion.button>
        </NavLink>
      </div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        initial='initial'
        whileInView='animate'
        className='mt-8'
      >
        <img
          src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684222822/layo/layo_sej9br.jpg'
          alt=''
        />
      </motion.div>
    </motion.div>
  )
}

export default About
