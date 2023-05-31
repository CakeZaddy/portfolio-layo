import React from 'react'
import { motion } from 'framer-motion'

import { fadeIn, slideIn, textVariant } from '../utils/motion'

import work from '../assets/workwith.jpg'
import Testimonials from '../components/Testimonials'
import Services from '../components/Services'

const About = () => {
  const animationVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      className='pb-5 overflow-hidden'
      initial='initial'
      animate='animate'
    >
      <div className='bg-[#3b7777] green h-24'></div>
      <motion.div
        className='bg-[#3b7777] green text-white text-center text-4xl font-semibold font-eczar px-5 py-10'
        variants={animationVariants}
      >
        <motion.h2 variants={textVariant()}>
          About Ebunoluwa Oguntimehin
        </motion.h2>
      </motion.div>
      <div className='py-7 px-10 md:py-[80px] md:px-[150px]'>
        <motion.p
          variants={fadeIn('', '', 0.3, 1)}
          initial='initial'
          whileInView='animate'
          className='font-neuton text-center text-2xl md:text-3xl '
        >
          I’m an experienced Social Media Consultant specialising in Social
          Media Strategy. I help ambitious small businesses use organic social
          media more effectively and productively, saving time, money and stress
        </motion.p>
      </div>
      <div className='bg-gray-400 px-10 py-10 lg:px-[100px] lg:py-[60px] lg:grid grid-cols-2 gap-8'>
        <div className=''>
          <motion.h2
            variants={textVariant()}
            initial='initial'
            whileInView='animate'
            className='text-left text-3xl font-neuton pb-10'
          >
            How I Started Social Media Marketing?
          </motion.h2>
          <div className='flex flex-col gap-6 font-neuton text-xl'>
            <motion.p
              variants={fadeIn('', '', 0.3, 1)}
              initial='initial'
              whileInView='animate'
              className=''
            >
              During my university placement year at Xerox Europe, I was asked
              to join their exciting new social media group. Social media was
              only just starting to grab the attention of businesses, and it was
              here I realised this was my passion and I made it my career. I’ve
              never looked back since!
            </motion.p>
            <motion.p
              variants={fadeIn('', '', 0.3, 1)}
              initial='initial'
              whileInView='animate'
              className=''
            >
              After graduating with a 1st from Bournemouth University, I joined
              De Vere Hotels, where I completely fell in love with the
              hospitality industry. I was a social media team of one, so I was
              kept very busy, and it required lots of self-learning! I developed
              their social media brand guidelines and successfully managed their
              brand-level social media accounts. I also worked with each hotel
              to establish its own on-brand social media presence.
            </motion.p>
            <motion.p
              variants={fadeIn('', '', 0.3, 1)}
              initial='initial'
              whileInView='animate'
              className=''
            >
              I worked at a London-based social media agency before taking the
              bold decision to set up my own freelance business in 2013. It’s
              been a fantastic journey, and I’ve met many wonderful people. I
              enjoy understanding businesses social media challenges, helping to
              simplify and demystifying social media while sharing my insights
              to help others reach their goals.
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          initial='initial'
          whileInView='animate'
          className='pt-5'
        >
          <img
            className='w-full'
            src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684767192/layo/82DC857D-4866-4AA8-8E0C-AB5B6464350A_hvguv2.jpg'
            alt=''
          />
        </motion.div>
      </div>
      <div className='px-10 py-10 lg:px-[100px] lg:py-[60px] lg:grid  grid-cols-2 gap-8'>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          initial='initial'
          whileInView='animate'
          className='pt-5'
        >
          <img className='w-full' src={work} alt='' />
        </motion.div>
        <div className=''>
          <motion.h2
            variants={textVariant()}
            initial='initial'
            whileInView='animate'
            className='text-left text-3xl font-neuton pb-10'
          >
            Why Work With Me?
          </motion.h2>
          <div className='flex flex-col gap-6 font-neuton text-xl'>
            <motion.p
              variants={fadeIn('', '', 0.3, 1)}
              initial='initial'
              whileInView='animate'
              className=''
            >
              With my in-house and agency experience, I can personally relate to
              your social media challenges while ensuring you receive a
              professional, efficient service. However, I strive to take things
              a step further. When working with me, there are no tick-box
              exercises or shortcuts. I understand how important and unique you
              are, so I will carefully take the time to get to know your
              business to help find the very best, personalised solutions to fit
              your needs and those of your customers. I give every brand I work
              with the same care and attention I would give to my own.
            </motion.p>
            <motion.p
              variants={fadeIn('', '', 0.3, 1)}
              initial='initial'
              whileInView='animate'
              className=''
            >
              When working with me, I won’t pass you on to anyone else. You’ll
              work with me directly, which means benefiting from my wealth of
              social media experience and expertise.
            </motion.p>
            <motion.p
              variants={fadeIn('', '', 0.3, 1)}
              initial='initial'
              whileInView='animate'
              className=''
            >
              I fully appreciate that seeking external social media support is a
              big decision for any business, and you need to find someone you
              can rely on and trust. So, instead of listening to me explain why
              I’m the perfect fit for you, I will let the wonderful
              recommendations below from my clients speak for themselves.
            </motion.p>
          </div>
        </div>
      </div>
      <Services />
      <Testimonials />
    </motion.div>
  )
}

export default About
