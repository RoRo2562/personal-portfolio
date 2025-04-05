import Position from '../components/Position'
import HouseCanvas from '../components/HouseCanvas'



const Hero = ({scrollContainer}) => {
  return (
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