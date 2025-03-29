import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Stars } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader'
// import { Leva, useControls } from 'leva'
import ForestHouse from '../components/ForestHouse'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../components/Target'
import Plumbob from '../components/Plumbob'
import Pokeball from '../components/ Pokeball'
import Campfire from '../components/Campfire'
import ReactLogo from '../components/React'


const Hero = () => {
    // const x = useControls('PokemonRoom',{
    //     positionX:{
    //         value: 2.6,
    //         min:-10,
    //         max:50
    //     },
    //     positionY:{
    //         value: -21,
    //         min:-50,
    //         max:50
    //     },
    //     positionZ:{
    //         value: -67,
    //         min:-67,
    //         max:50
    //     },
    //     rotationX:{
    //         value: 0,
    //         min:-10,
    //         max:10
    //     },
    //     rotationY:{
    //         value: Math.PI/2,
    //         min:-10,
    //         max:10
    //     },
    //     rotationZ:{
    //         value: 0,
    //         min:-10,
    //         max:10
    //     },
    //     scale:{
    //         value: 0.6,
    //         min:0.00000001,
    //         max:10
    //     },
    // })
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
            <Canvas className='w-full h-full'>
                <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault position={[0,0,20]} />
                <group renderOrder={-1}>
                <Stars 
                radius={700}  // Increase radius to spread stars further out
                depth={500}   // Increase depth for a deeper starfield
                count={10000} // Increase number of stars
                factor={50}   // Increase factor to make stars larger
                saturation={0} // Keep stars white
                fade// Push stars into the background
                />
                </group>
                <Campfire position = {sizes.housePosition} rotation={[0,-Math.PI/3,0]} scale={sizes.houseScale}/>
                <group>
                    <Pokeball position={sizes.targetPosition} />
                </group>
                <group>
                    <Plumbob position={sizes.cubePosition} scale={0.004}/>
                    <ReactLogo position = {sizes.reactLogoPosition} />
                </group>
                <ambientLight intensity={1} />
                <directionalLight position={[10,10,10]} />
                </Suspense>
            </Canvas>
        </div>

    </section>
  )
}

export default Hero