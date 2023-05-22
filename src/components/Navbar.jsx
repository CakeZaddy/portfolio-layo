import React, { useState } from 'react'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const location = useLocation()

  const handleNav = () => {
    setNav(!nav)
  }

  function pathMatch(route) {
    if (route === location.pathname) {
      return true
    }
  }

  return (
    <div className='fixed flex font-eczar justify-between w-full items-center h-24 mx-auto z-[100] bg-gray-300 lg:px-[50px] xl:px-[100px] border-black border-b'>
      <h1 className='w-full text-3xl md:text-4xl font-semibold font-chivo text-center lg:text-left'>
        Ebunoluwa Oguntimehin
      </h1>
      <div className='lg:flex justify-center items-center gap-8 hidden'>
        <ul className='flex justify-center gap-3 xl:gap-5 items-center hover:text-gray-500 font-medium text-lg'>
          <NavLink to='/'>
            <li
              className={` cursor-pointer con hover:text-black ${
                pathMatch('/') && 'border-b-2 border-b-red-500'
              }`}
            >
              Home
            </li>
          </NavLink>
          <Link to='/about'>
            <li
              className={` cursor-pointer con hover:text-black ${
                pathMatch('/about') && 'border-b-2 border-b-red-500'
              }`}
            >
              About
            </li>
          </Link>
          <Link to='/services'>
            <li
              className={` cursor-pointer con hover:text-black ${
                pathMatch('/services') && 'border-b-2 border-b-red-500'
              }`}
            >
              Services
            </li>
          </Link>
          <Link to='/blog'>
            <li
              className={` cursor-pointer con hover:text-black ${
                pathMatch('/blog') && 'border-b-2 border-b-red-500'
              }`}
            >
              Blog
            </li>
          </Link>
          <Link to='/contact'>
            <li
              className={` cursor-pointer con hover:text-black ${
                pathMatch('/contact') && 'border-b-2 border-b-red-500'
              }`}
            >
              Contact
            </li>
          </Link>
        </ul>
        <div className='flex gap-3 justify-center mb-2'>
          <FaLinkedinIn className='h-6 w-6 hover:scale-125 ease-in-out duration-300 cursor-pointer' />
          <BsTwitter className='h-6 w-6 hover:scale-125 ease-in-out duration-300 cursor-pointer' />
          <BsInstagram className='h-6 w-6 hover:scale-125 ease-in-out duration-300 cursor-pointer' />
        </div>
        <div className='flex justify-center items-center'>
          <button className='h-[40px] w-[150px] bg-orange-400 font-medium text-lg cursor-pointer rounded-full'>
            Free Tips
          </button>
        </div>
      </div>
      <div
        className='fixed right-2 top-1 lg:hidden p-1 z-[51] cursor-pointer'
        onClick={handleNav}
      >
        {nav ? (
          <AiOutlineMenuFold size={30} />
        ) : (
          <AiOutlineMenuUnfold size={30} />
        )}
      </div>
      <div
        className={
          nav
            ? 'fixed lg:hidden left-0 top-0 w-full h-full bg-gray-300 ease-in-out duration-700 border-r border-black z-50'
            : 'fixed left-[-100%] lg:hidden top-0 w-[85%] h-full bg-gray-300 ease-in-out duration-700 border-r border-black z-50'
        }
      >
        <h1 className='text-center mt-10 text-3xl md:text-4xl font-chivo font-semibold'>
          Ebunoluwa Oguntimehin
        </h1>
        <ul className='text-center px-[120px] text-gray-500 font-semibold text-5xl pt-10'>
          <Link to='/'>
            <li
              className={`p-4 hover:text-black con cursor-pointer ${
                pathMatch('/') && 'text-black border-b-4 border-red-500'
              }`}
            >
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li
              className={`p-4 hover:text-black con cursor-pointer ${
                pathMatch('/about') && 'text-black border-b-4 border-red-500'
              }`}
            >
              About
            </li>
          </Link>
          <Link to='/services'>
            <li
              className={`p-4 hover:text-black con cursor-pointer ${
                pathMatch('/services') && 'text-black border-b-4 border-red-500'
              }`}
            >
              Services
            </li>
          </Link>
          <Link to='/blog'>
            <li
              className={`p-4 hover:text-black con cursor-pointer ${
                pathMatch('/blog') && 'text-black border-b-4 border-red-500'
              }`}
            >
              Blog
            </li>
          </Link>
          <Link to='/contact'>
            <li
              className={`p-4 hover:text-black con cursor-pointer ${
                pathMatch('/contact') && 'text-black border-b-4 border-red-500'
              }`}
            >
              Contact
            </li>
          </Link>
        </ul>
        <div className='flex gap-5 justify-center mt-10'>
          <FaLinkedinIn className='h-8 w-8 hover:scale-125 ease-in-out duration-300 cursor-pointer' />
          <BsTwitter className='h-8 w-8 hover:scale-125 ease-in-out duration-300 cursor-pointer' />
          <BsInstagram className='h-8 w-8 hover:scale-125 ease-in-out duration-300 cursor-pointer' />
        </div>
        <div className='flex justify-center items-center mt-10'>
          <button className='h-[50px] w-[200px] bg-orange-400 font-semibold text-xl cursor-pointer rounded-full'>
            Free Tips
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
