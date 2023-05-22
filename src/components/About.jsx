import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div className='px-6 md:px-[100px] lg:px-[150px] xl:px-[200px] xl:px[200px] md:flex mt-4 sm:mt-20 md:mt-[150px] lg:mt-[200px] font-neuton text-lg xl:mt-[250px] 2xl:mt-[300px] gap-10 mb-8'>
      <div className=''>
        <h2 className='text-3xl font-semibold '>Hi, I'm Ebunoluwa</h2>
        <div className='my-8 flex flex-col gap-3  '>
          <p className='font-bold'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sunt
            at ex pariatur culpa accusamus sint magni, error repellendus cumque
            dolor? Itaque, nesciunt odit! Perferendis?
          </p>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            distinctio culpa soluta pariatur laudantium. Vel commodi perferendis
            nulla libero eos in exercitationem optio atque a.
          </p>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            distinctio culpa soluta pariatur laudantium. Vel commodi perferendis
            nulla libero eos in exercitationem optio atque a.
          </p>
        </div>
        <NavLink to='/about'>
          <button className='h-[50px] w-[230px] bg-orange-400 hover:bg-orange-500 font-semibold text-lg cursor-pointer font-eczar rounded-full'>
            Know More About Me
          </button>
        </NavLink>
      </div>
      <div className='mt-8'>
        <img
          src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684222822/layo/layo_sej9br.jpg'
          alt=''
        />
      </div>
    </div>
  )
}

export default About
