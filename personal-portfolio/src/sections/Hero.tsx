import React from 'react'
import { Canvas } from '@react-three/fiber'

const Hero = () => {
  return (
    <section className='min-h-screen w-full flex-col relative'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hey there, I am Rohan <span className='waving-hand'>👋</span></p>
            <p className='text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-black !leading-normal bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent'>
                Always Innovating
            </p>
        </div>
        <div className='w-full h-full absolute inset-0'>
            <Canvas className='w-full h-full'></Canvas>
        </div>

    </section>
  )
}

export default Hero