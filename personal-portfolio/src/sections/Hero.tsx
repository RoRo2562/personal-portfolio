import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'
import ForestHouse from '../components/ForestHouse'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'


const Hero = () => {
    const x = useControls('PokemonRoom',{
        positionX:{
            value: -146,
            min:-300,
            max:50
        },
        positionY:{
            value: 38,
            min:-50,
            max:50
        },
        positionZ:{
            value: -7,
            min:-50,
            max:50
        },
        rotationX:{
            value: -7,
            min:-10,
            max:10
        },
        rotationY:{
            value: -1.6,
            min:-10,
            max:10
        },
        rotationZ:{
            value: -7,
            min:-10,
            max:10
        },
        scale:{
            value: 1,
            min:0.00000001,
            max:10
        },
    })
    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})
    const isSmall = useMediaQuery({maxWidth: 440})

    const sizes = calculateSizes(isSmall,isMobile,isTablet);
  return (
    <section className='min-h-screen w-full flex-col relative'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hey there, I am Rohan <span className='waving-hand'>👋</span></p>
            <p className='text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-black !leading-normal bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent'>
                Always Innovating
            </p>
        </div>
        <div className='w-full h-full absolute inset-0'>
            <Leva />
            <Canvas className='w-full h-full'>
                <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault position={sizes.housePosition} rotation={[-7, -1.6,-7]} scale={sizes.houseScale} />
                <ForestHouse />
                </Suspense>
            </Canvas>
        </div>

    </section>
  )
}

export default Hero