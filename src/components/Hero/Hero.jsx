import React from 'react'
import hero from '../../assets/hero.jpg'

const Hero = () => {
  return (
    <div className='max-w-[1300px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center rounded-2xl'>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold rounded-xl'>The <span className='text-purple-500'>Best</span></h1>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-purple-500'>Foods</span> Delivered</h1>
        </div>
        <img className='w-full max-h-[500px] object-cover rounded-2xl' src={hero} alt=''></img>
      </div>
    </div>
  )
}

export default Hero
