import React from 'react'
import { Tilt } from 'react-tilt'
import { Swiper, SwiperSlide } from 'swiper/react'

import { tiltOptions } from '../utils/motion'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation } from 'swiper'

const Slider = () => {
  return (
    <div className='font-neuton'>
      <Swiper
        // centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        // autoplay={{ delay: 2500, disableOnInteraction: false }}
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
        <SwiperSlide>
          <Tilt options={tiltOptions()}>
            <div className='w-full shadow-xl flex flex-col justify-center items-center rounded-lg  bg-slate-400'>
              <img
                className='rounded-full w-[180px] my-5'
                src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684233581/layo/abefe_logo_xrti2w.jpg'
                alt='/'
              />
              <div className='text-center mt-4 mx-auto px-5 mb-8'>
                <h4 className='font-semibold text-lg'>
                  "It's rare to come across a standout talent like Layo. She
                  would be an asset to any team"
                </h4>
                <p className='mt-2 px-11'>Abefe Segun</p>
                <p className=' px-11'>
                  Chief Operating Officer, Abefe's Kitchen UK
                </p>
              </div>
            </div>
          </Tilt>
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={tiltOptions()}>
            <div className='w-full shadow-xl flex flex-col justify-center items-center rounded-lg  bg-slate-400'>
              <img
                className='rounded-full w-[180px] my-5'
                src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684233581/layo/abefe_logo_xrti2w.jpg'
                alt='/'
              />
              <div className='text-center mt-4 mx-auto px-5 mb-8'>
                <h4 className='font-semibold text-lg'>
                  "It's rare to come across a standout talent like Layo. She
                  would be an asset to any team"
                </h4>
                <p className='mt-2 px-11'>Abefe Segun</p>
                <p className=' px-11'>
                  Chief Operating Officer, Abefe's Kitchen UK
                </p>
              </div>
            </div>
          </Tilt>
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={tiltOptions()}>
            <div className='w-full shadow-xl flex flex-col justify-center items-center rounded-lg  bg-slate-400'>
              <img
                className='rounded-full w-[180px] my-5'
                src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684233581/layo/abefe_logo_xrti2w.jpg'
                alt='/'
              />
              <div className='text-center mt-4 mx-auto px-5 mb-8'>
                <h4 className='font-semibold text-lg'>
                  "It's rare to come across a standout talent like Layo. She
                  would be an asset to any team"
                </h4>
                <p className='mt-2 px-11'>Abefe Segun</p>
                <p className=' px-11'>
                  Chief Operating Officer, Abefe's Kitchen UK
                </p>
              </div>
            </div>
          </Tilt>
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={tiltOptions()}>
            <div className='w-full shadow-xl flex flex-col justify-center items-center rounded-lg  bg-slate-400'>
              <img
                className='rounded-full w-[180px] my-5'
                src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684233581/layo/abefe_logo_xrti2w.jpg'
                alt='/'
              />
              <div className='text-center mt-4 mx-auto px-5 mb-8'>
                <h4 className='font-semibold text-lg'>
                  "It's rare to come across a standout talent like Layo. She
                  would be an asset to any team"
                </h4>
                <p className='mt-2 px-11'>Abefe Segun</p>
                <p className=' px-11'>
                  Chief Operating Officer, Abefe's Kitchen UK
                </p>
              </div>
            </div>
          </Tilt>
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={tiltOptions()}>
            <div className='w-full shadow-xl flex flex-col justify-center items-center rounded-lg  bg-slate-400'>
              <img
                className='rounded-full w-[180px] my-5'
                src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684233581/layo/abefe_logo_xrti2w.jpg'
                alt='/'
              />
              <div className='text-center mt-4 mx-auto px-5 mb-8'>
                <h4 className='font-semibold text-lg'>
                  "It's rare to come across a standout talent like Layo. She
                  would be an asset to any team"
                </h4>
                <p className='mt-2 px-11'>Abefe Segun</p>
                <p className=' px-11'>
                  Chief Operating Officer, Abefe's Kitchen UK
                </p>
              </div>
            </div>
          </Tilt>
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={tiltOptions()}>
            <div className='w-full shadow-xl flex flex-col justify-center items-center rounded-lg  bg-slate-400'>
              <img
                className='rounded-full w-[180px] my-5'
                src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684233581/layo/abefe_logo_xrti2w.jpg'
                alt='/'
              />
              <div className='text-center mt-4 mx-auto px-5 mb-8'>
                <h4 className='font-semibold text-lg'>
                  "It's rare to come across a standout talent like Layo. She
                  would be an asset to any team"
                </h4>
                <p className='mt-2 px-11'>Abefe Segun</p>
                <p className=' px-11'>
                  Chief Operating Officer, Abefe's Kitchen UK
                </p>
              </div>
            </div>
          </Tilt>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider
