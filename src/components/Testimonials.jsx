import React from 'react'
import Slider from './Slider'

const Testimonials = () => {
  return (
    <div className=''>
      <div className='py-10 px-5'>
        <h2 className='text-3xl text-center md:font-medium md:text-4xl'>
          Client Testimonials
        </h2>
      </div>
      <div className='mx-5 2xl:mx-[100px] mt-10'>
        <Slider />
      </div>
      <div className='flex justify-center items-center'>
        <button className='h-[50px] w-[220px] bg-orange-400 hover:bg-orange-500 font-medium text-lg cursor-pointer rounded-full my-8'>
          Full Testimonials
        </button>
      </div>
    </div>
  )
}

export default Testimonials
