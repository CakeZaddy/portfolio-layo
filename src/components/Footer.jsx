import React from 'react'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#3b7777] green p-7 text-center grid md:grid-cols-3 xl:px-20 '>
      <div className=''>
        <h2 className='text-xl mb-5 font-medium'>Subscribe To My Newsletter</h2>
        <p className='text-lg'>
          Receive my latest updates, social media news, special offers, events
          and more. I promise not to spam your inbox
        </p>
        <button className='h-[50px] w-[200px] bg-orange-400 hover:bg-orange-500 font-medium text-lg cursor-pointer rounded-full my-8'>
          Subscribe Now!
        </button>
      </div>
      <hr className='mb-5 md:hidden' />
      <div className='mb-8'>
        <h2 className='text-xl mb-5 font-medium'>Connect With Me</h2>
        <div className='flex gap-2 justify-center mb-5'>
          <FaLinkedinIn className='h-5 w-5 hover:scale-125 ease-in-out duration-300 cursor-pointer' />
          <BsTwitter className='h-5 w-5 hover:scale-125 ease-in-out duration-300 cursor-pointer' />
          <BsInstagram className='h-5 w-5 hover:scale-125 ease-in-out duration-300 cursor-pointer' />
        </div>
        <ul className=' text-lg text-yellow-500 hover:text-yellow-600'>
          <Link to='/about'>
            <li className='hover:text-red-500'>About</li>
          </Link>
          <Link to='/services'>
            <li className='hover:text-red-500'>Services</li>
          </Link>
          <Link to='/blog'>
            <li className='hover:text-red-500'>Blog</li>
          </Link>
          <Link to='/contact'>
            <li className='hover:text-red-500'>Contact</li>
          </Link>
        </ul>
      </div>
      <hr className='mb-5 md:hidden' />
      <div className=''>
        <h2 className='text-xl mb-5 font-medium'>FREE Tips</h2>
        <p className='text-lg'>
          In this free resource, I provide some useful dates to help start your
          social media posting plan for February.
        </p>
        <button className='h-[50px] w-[200px] bg-orange-400 hover:bg-orange-500 font-medium text-lg cursor-pointer rounded-full my-8'>
          Free Post Ideas
        </button>
      </div>
    </div>
  )
}

export default Footer
