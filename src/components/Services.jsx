import React from 'react'

const Services = () => {
  return (
    <div className='w-full py-10 px-10 bg-gray-400'>
      <div className=''>
        <h2 className='text-3xl text-center text-white md:font-medium md:text-4xl'>
          How Can I Help You With Your Social Media Strategy?
        </h2>
        <div className='my-10 mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          <div className='w-full shadow-xl flex flex-col justify-center items-center rounded-lg hover:scale-105 duration-300 bg-slate-300'>
            <img
              className='w-full md:h-full'
              src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684227376/layo/brainstorm_kwpdbp.jpg'
              alt='/'
            />
            <div className='text-center mt-4 mx-auto'>
              <h4 className='font-semibold'>
                1. Social Media Strategy Brainstorm
              </h4>
              <p className='mt-2 px-11'>
                If you’re planning on creating a social media strategy for your
                business, but don’t know where to start, or need some initial
                direction, discover my brand NEW 90-minute Social Media Strategy
                Brainstorm session
              </p>
            </div>
            <button className='h-[40px] w-[180px] bg-orange-400 hover:bg-orange-500 font-medium text-lg cursor-pointer rounded-full my-8'>
              Discover More
            </button>
          </div>
          <div className='w-full shadow-xl flex flex-col justify-center items-center rounded-lg hover:scale-105 duration-300 bg-slate-300'>
            <img
              className='w-full md:h-full'
              src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684227376/layo/support_eslik0.jpg'
              alt='/'
            />
            <div className='text-center mt-4 mx-auto'>
              <h4 className='font-semibold'>
                2. One-To-One Social Media Strategy Support
              </h4>
              <p className='mt-2 px-11'>
                As you create your social media strategy, know that you have
                expert support available at the click of a button. I’m ready to
                answer your questions, share tips, provide recommendations and
                more.
              </p>
            </div>
            <button className='h-[40px] w-[180px] bg-orange-400 hover:bg-orange-500 font-medium text-lg cursor-pointer rounded-full my-8'>
              Discover More
            </button>
          </div>
          <div className='w-full shadow-xl flex flex-col justify-center items-center rounded-lg hover:scale-105 duration-300 bg-slate-300'>
            <img
              className='w-full md:h-full'
              src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684227376/layo/bespoke_jmwjie.jpg'
              alt='/'
            />
            <div className='text-center mt-4 mx-auto'>
              <h4 className='font-semibold'>
                3. Bespoke Social Media Strategy
              </h4>
              <p className='mt-2 px-11'>
                Having a clear strategy ensures you get more from your
                activities, and you don’t waste time and money on areas that add
                little or no value. Let me help you create an effective strategy
                for your business
              </p>
            </div>
            <button className='h-[40px] w-[180px] bg-orange-400 hover:bg-orange-500 font-medium text-lg cursor-pointer rounded-full my-8'>
              Discover More
            </button>
          </div>
          <div className='w-full shadow-xl flex flex-col justify-center items-center rounded-lg hover:scale-105 duration-300 bg-slate-300'>
            <img
              className='w-full md:h-full'
              src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684227376/layo/1-1_x7idps.jpg'
              alt='/'
            />
            <div className='text-center mt-4 mx-auto'>
              <h4 className='font-semibold'>
                4. One-To-One Virtual Consultancy
              </h4>
              <p className='mt-2 px-11'>
                Once you have a social media strategy, I want to continue
                supporting you on your journey. We can talk through your
                challenges, ensure your strategy is being implemented
                effectively and plan ahead so your social media continues to
                benefit your business
              </p>
            </div>
            <button className='h-[40px] w-[180px] bg-orange-400 hover:bg-orange-500 font-medium text-lg cursor-pointer rounded-full my-8'>
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
