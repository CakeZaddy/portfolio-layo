import React from 'react'
import { Link } from 'react-router-dom'

import laptop from '../assets/service-laptop.jpg'
import Testimonials from '../components/Testimonials'
// import yourself from '../assets/do-it-yourself.jpg'

const Services = () => {
  return (
    <div className='font-neuton'>
      <div className='bg-[#3b7777] green h-24'></div>
      <div className='bg-[#3b7777] green text-white text-center text-4xl font-semibold font-eczar py-10'>
        <h2>My Social Media Services</h2>
      </div>
      <div className='bg-gray-400 text-center py-10 px-5 lg:grid grid-cols-2 md:px-[150px] xl:px-[250px]  gap-7'>
        <div className=''>
          <h2 className='text-2xl font-eczar py-5 px-5 md:px-10 md:text-2xl'>
            Want To Get More From Your Social Media Activities?
          </h2>
          <p className='text-xl pb-4'>
            It’s my mission to help small businesses like yours use social media
            more effectively, so you get the results you deserve. It shouldn’t
            feel overwhelming either, so I want to share my years of experience
            and expertise with you so you can use social media more efficiently.
            After all, everyone leads busy lives.
          </p>
          <p className='text-xl pb-4'>
            Whether you’re looking for someone to create your social media
            strategy, or you need some initial guidance, I’m here to help, with
            high-quality services to fit a range of budgets and requirements.
          </p>
        </div>
        <img className='w-full  py-5' src={laptop} alt='laptop' />
      </div>
      <div className='px-5 py-10'>
        <h2 className='font-eczar text-2xl lg:text-3xl text-center px-5 pb-5'>
          Here Are Some Of My Services
        </h2>
        <div className='py-5 lg:grid grid-cols-2 md:px-[150px] xl:px-[250px]  gap-7'>
          <img
            className='w-full'
            src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684227376/layo/brainstorm_kwpdbp.jpg'
            alt=''
          />
          <div className=''>
            <h2 className='font-bold text-lg md:text-xl lg:text-2xl py-5'>
              DO IT YOURSELF
            </h2>
            <h2 className='font-bold pb-5 md:text-lg lg:text-xl'>
              1. Social Media Strategy Brainstorm
            </h2>
            <p className='text-lg pb-5 lg:text-xl'>
              If you’re planning on creating a social media strategy for your
              business, but don’t know where to start, or need some initial
              direction, discover my brand NEW 90-minute Social Media Strategy
              Brainstorm session.
            </p>
            <Link to='/contact'>
              <button className='py-2 w-[350px] bg-orange-400 font-semibold text-xl cursor-pointer rounded-full hover:bg-orange-500'>
                Know More
              </button>
            </Link>
          </div>
        </div>
        <div className='py-5 lg:grid grid-cols-2 md:px-[150px] xl:px-[250px]  gap-7'>
          <img
            className='w-full'
            src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684227376/layo/support_eslik0.jpg'
            alt=''
          />
          <div className=''>
            <h2 className='font-bold text-lg md:text-xl lg:text-2xl py-5'>
              DONE WITH YOU
            </h2>
            <h2 className='font-bold pb-5 md:text-lg lg:text-xl'>
              2. One-To-One Social Media Strategy Support Via Voxer
            </h2>
            <p className='text-lg lg:text-xl pb-5'>
              As you create your social media strategy, know that you have
              expert support available at the click of a button. I’m ready to
              answer your questions, share tips, provide recommendations and
              more.
            </p>
            <Link to='/contact'>
              <button className='py-2 w-[350px] bg-orange-400 font-semibold text-xl cursor-pointer rounded-full hover:bg-orange-500'>
                Know More
              </button>
            </Link>
          </div>
        </div>
        <div className='py-5 lg:grid grid-cols-2 md:px-[150px] xl:px-[250px]  gap-7'>
          <img
            className='w-full'
            src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684227376/layo/bespoke_jmwjie.jpg'
            alt=''
          />
          <div className=''>
            <h2 className='font-bold text-lg md:text-xl lg:text-2xl py-5'>
              DONE FOR YOU
            </h2>
            <h2 className='font-bold pb-5 md:text-lg lg:text-xl'>
              3. Bespoke Social Media Strategy
            </h2>
            <p className='text-lg lg:text-xl pb-5'>
              Having a clear strategy ensures you get more from your activities,
              and you don’t waste time and money on areas that add little or no
              value. Let me help you create an effective strategy for your
              business.
            </p>
            <Link to='/contact'>
              <button className='py-2 w-[350px] bg-orange-400 font-semibold text-xl cursor-pointer rounded-full hover:bg-orange-500'>
                Know More
              </button>
            </Link>
          </div>
        </div>
        <div className='py-5 lg:grid grid-cols-2 md:px-[150px] xl:px-[250px]  gap-7'>
          <img
            className='w-full'
            src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684227376/layo/1-1_x7idps.jpg'
            alt=''
          />
          <div className=''>
            <h2 className='font-bold text-lg md:text-xl lg:text-2xl py-5'>
              ONGOING SUPPORT
            </h2>
            <h2 className='font-bold pb-5 md:text-lg lg:text-xl'>
              4. One-To-One Virtual Consultancy
            </h2>
            <p className='text-lg lg:text-xl pb-5'>
              Once you have a social media strategy, I want to continue
              supporting you on your journey. We can talk through your
              challenges, ensure your strategy is being implemented effectively
              and plan ahead so your social media continues to benefit your
              business.
            </p>
            <Link to='/contact'>
              <button className='py-2 w-[350px] bg-orange-400 font-semibold text-xl cursor-pointer rounded-full hover:bg-orange-500'>
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='bg-[#3b7777] flex green py-10 flex-col justify-center items-center '>
        <p className='text-xl lg:text-2xl text-center pb-5 px-[50px] md:px-[100px] lg:px-[150px] xl:px-[300px] '>
          If you’re looking for something slightly different to the above,
          please do still get in touch and I’d be happy to discuss how I may be
          able to help.
        </p>
        <Link to='/contact'>
          <button className='py-2 w-[250px] bg-orange-400 font-semibold text-xl cursor-pointer rounded-full hover:bg-orange-500'>
            Contact Me
          </button>
        </Link>
      </div>
      <Testimonials />
    </div>
  )
}

export default Services
