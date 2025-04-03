import Position from '../components/Position'
import HouseCanvas from '../components/HouseCanvas'



const Hero = ({scrollContainer}) => {
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
    // const isMobile = useMediaQuery({maxWidth: 768})
    // const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})
    // const isSmall = useMediaQuery({maxWidth: 440})

    // const sizes = calculateSizes(isSmall,isMobile,isTablet);
  return (
    // <div>
    // <div className='absolute bottom-7 left-0 right-0 w-full z-10 sm:px-10 px-5'>
    //         <a href="#contact" className='w-fit'>
    //             <Button name="Let's work together" isBeam containerClass='sm:w-fit w-full sm:min-w-96'/>
    //         </a>
    //     </div>
    // <section className='min-h-screen w-full flex-col relative'>
    //     <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 sm:px-10 px-5 gap-3'>
    //         <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hey there, I am Rohan <span className='waving-hand'>👋</span></p>
    //         <p className='text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-black !leading-normal bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent'>
    //             Always Innovating
    //         </p>
    //     </div>
    //     <img className="parallax__clouds1" src="./parallax/clouds_1.svg" alt="" />
    //     <img className="parallax__clouds2" src="./parallax/clouds_2.svg" alt="" />
    //     {/* <div className='w-full h-full absolute inset-0'>
    //         <Canvas className='w-full h-full'>
    //             <Suspense fallback={<CanvasLoader />}>
    //             <PerspectiveCamera makeDefault position={[0,0,20]} />
    //             <group renderOrder={-1}>
    //             <Stars 
    //             radius={700}  // Increase radius to spread stars further out
    //             depth={500}   // Increase depth for a deeper starfield
    //             count={10000} // Increase number of stars
    //             factor={50}   // Increase factor to make stars larger
    //             saturation={0} // Keep stars white
    //             fade// Push stars into the background
    //             />
                
    //             </group>
    //             <HeroCamera isMobile = {isMobile}>
    //             <House position = {sizes.moonPosition} rotation={[0,-Math.PI/2,0]} scale={sizes.moonScale}/>
    //             <pointLight 
    //                 position={[sizes.moonPosition[0] + 5, sizes.moonPosition[1] + 5, sizes.moonPosition[2] + 5]} 
    //                 intensity={2} 
    //                 color="white"
    //                 castShadow 
    //             />
    //             </HeroCamera>
    //             <group>
    //                 <PythonLogo position={sizes.targetPosition} scale={0.035} />
    //             </group>
    //             <group>
    //                 <ReactLogo position = {sizes.reactLogoPosition} />
    //                 <GithubLogo position = {sizes.githubPosition} scale={0.7} />
    //             </group>
    //             <ambientLight intensity={1} />
    //             <directionalLight position={[10,10,10]} />
    //             </Suspense>
    //         </Canvas>
    //     </div> */}


    // // </section>
    // // </div>
    <section className="parallax hero-section">
      <div className='parallax__content absolute top-[18%] sm:top-[16%] lg:top-[24%] w-full mx-auto lg:pl-[10vh] lg:pr-[30vh] xl:pl-20 xl:pr-72 2xl:px-20 3xl:px-20 flex flex-col lg:flex-row items-start z-10'>
        <div className="flex-1 lg:mb-0">
          <h1 className='font-medium text-white text-[40px] xs:text-[70px] sm:text-[68px] md:text-[80px] lg:text-[100px] 2xl:text-[140px] leading-[110px] 2xl:leading-[160px]'>
            ROHAN SIVAM
          </h1>
          <Position />
        </div>
        <div className="flex-1 flex justify-start lg:justify-end mt-4 sm:mt-14 ml-8 xs:ml-[-4vh] sm:ml-[-17vh] md:ml-[-26vh] lg:mt-10 2xl:mt-0">
          <div className='font-bold text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[46px] sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-white text-left'>
            {/* I love crafting <br/> captivating experiences for the digital world to savor. */}
          </div>
        </div>
      </div>

      <img className="parallax__stars" src="./parallax/clouds_1.svg" alt="" />
      <img className="parallax__planets mobile-bottom" src="./parallax/clouds_2.svg" alt="" />
      <img className="parallax__mountain1" src="./parallax/clouds_3.svg" alt="" />
      <img className="parallax__mountain2 mobile-bottom" src="./parallax/clouds_4.svg" alt="" />
      <img className="parallax__crater" src="./parallax/clouds_5.svg" alt="" />

      <HouseCanvas scrollContainer={scrollContainer} />
    </section>

  )
}

export default Hero