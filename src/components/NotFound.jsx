import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='w-full h-[600px] flex flex-col justify-center items-center'>
      {/* <div className='h-24'></div> */}
      <h1 className='text-center font-chivo text-3xl'>Error 404</h1>
      <p className='text-center font-eczar text-2xl'>Page not found</p>
      <Link to='/'>
        <p className='text-lg font-neuton hover:text-red-500'>Go To Homepage</p>
      </Link>
    </div>
  )
}

export default NotFound
