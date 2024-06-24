import React from 'react'
import Hero from '../components/Hero'

const HomePage = () => {
  return (
    <>
    <Hero/>
    <div className='md:flex w-full'>
        <div className=' w-full h-60 bg-neutral-300'>
            Schedule
        </div>
        <div className='w-full h-60 bg-neutral-400'>
            Directory
        </div>
    </div>
    </>
  )
}

export default HomePage
