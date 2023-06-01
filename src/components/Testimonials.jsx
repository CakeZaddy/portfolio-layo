import React from 'react'
// import Slider from './Slider'
import { motion } from 'framer-motion'

import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { fadeIn, textVariant, tiltOptions, zoomIn } from '../utils/motion'
import { testimonials } from '../constants'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Tilt } from 'react-tilt'

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <Tilt options={tiltOptions()}>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.3, 0.75)}
      initial='initial'
      whileInView='animate'
      className='w-full shadow-xl flex flex-col justify-center items-center rounded-lg  bg-slate-400 font-neuton'
    >
      <img
        className='rounded-full w-[180px] my-5'
        src={image}
        alt={`feedback-by-${name}`}
      />
      <div className='text-center mt-4 mx-auto px-5 mb-8'>
        <h4 className='font-semibold text-lg'>{testimonial}</h4>
        <p className='mt-2 px-11'>{name}</p>
        <p className=' px-11'>
          {designation} of {company}
        </p>
      </div>
    </motion.div>
  </Tilt>
)

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
      <div className='mx-5 2xl:mx-[100px] mt-10 h-full'>
        <Swiper
          // centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={true}
          loop={true}
          modules={[Pagination, Navigation]}
          className='mySwiper'
          spaceBetween={30}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {/* <Slider /> */}
          {testimonials.map((testimonial, index, id) => (
            <SwiperSlide key={testimonial.id}>
              <FeedbackCard
                key={testimonial.id}
                index={index}
                {...testimonial}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
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
