import Position from '../components/Position'
import HouseCanvas from '../components/HouseCanvas'
import { motion, useScroll, useTransform } from 'framer-motion';


const Hero = ({scrollContainer}) => {
  const { scrollY } = useScroll();

// Create parallax transforms
// const starsY = useTransform(scrollY, [0, 500], [0, -50]);
// const planetsY = useTransform(scrollY, [0, 500], [0, -100]);
// const mountain1Y = useTransform(scrollY, [0, 500], [0, -150]);
// const mountain2Y = useTransform(scrollY, [0, 500], [0, -200]);
// const craterY = useTransform(scrollY, [0, 500], [0, -250]);

const cloudGroups = [
  { y: useTransform(scrollY, [0, 1000], [-50, -350]), clouds: ['cloud_10.svg', 'cloud_6.svg'] },
  { y: useTransform(scrollY, [0, 1000], [0, -300]), clouds: ['cloud_2.svg'] },
  { y: useTransform(scrollY, [0, 1000], [0, -250]), clouds: ['cloud_3.svg'] },
  { y: useTransform(scrollY, [0, 1000], [50, -200]), clouds: ['cloud_7.svg', 'cloud_5.svg'] },
  { y: useTransform(scrollY, [0, 1000], [0, -150]), clouds: ['cloud_8.svg'] },
];

const mobileCloudGroups = [
  { y: useTransform(scrollY, [0, 700], [0, -250]), clouds: ['cloud_9.svg'] },
  { y: useTransform(scrollY, [0, 700], [0, -150]), clouds: ['cloud_11.svg'] },
  { y: useTransform(scrollY, [0, 700], [0, -150]), clouds: ['cloud_1.svg'] },
  { y: useTransform(scrollY, [0, 700], [0, -150]), clouds: ['cloud_8.svg'] },
  { y: useTransform(scrollY, [0, 700], [0, -150]), clouds: ['cloud_7.svg'] },
]
  return (
    <section className="parallax hero-section h-[100vh]">
      <div className='parallax__content absolute top-[18%] sm:top-[16%] lg:top-[24%] w-full mx-auto lg:pl-[10vh] lg:pr-[30vh] xl:pl-20 xl:pr-72 2xl:px-20 3xl:px-20 flex flex-col lg:flex-row items-start z-10'>
        <div className="flex-1 lg:mb-0">
          <h1 className='font-medium text-white text-[40px] xs:text-[70px] sm:text-[68px] md:text-[80px] lg:text-[100px] 2xl:text-[140px] leading-[110px] 2xl:leading-[160px]'>
            ROHAN <br className='hidden xl:block' /> SIVAM
          </h1>
          {/* <h1 className='font-medium text-white text-[40px] xs:text-[70px] sm:text-[68px] md:text-[80px] lg:text-[100px] 2xl:text-[140px] leading-[110px] 2xl:leading-[160px]'>
            SIVAM
          </h1> */}
          {/* <Position /> */}
        </div>
        <div className="flex-1 flex justify-start lg:justify-end mt-4 sm:mt-14 ml-8 xs:ml-[-4vh] sm:ml-[-17vh] md:ml-[-26vh] lg:mt-10 2xl:mt-0">
          <div className='font-bold text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[46px] sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-white text-left'>
            {/* I love crafting <br/> captivating experiences for the digital world to savor. */}
          </div>
        </div>
      </div>
      {/* <motion.img style={{ y: starsY }} className="parallax__stars" src="./parallax/cloud_4.svg" alt="" />
      <motion.img style={{ y: starsY }} className="parallax__stars" src="./parallax/cloud_6.svg" alt="" />
      <motion.img style={{ y: planetsY }} className="parallax__planets" src="./parallax/cloud_2.svg" alt="" />
      <motion.img style={{ y: mountain1Y }} className="parallax__mountain1" src="./parallax/cloud_3.svg" alt="" />
      <motion.img style={{ y: mountain2Y }} className="parallax__mountain2" src="./parallax/cloud_7.svg" alt="" />
      <motion.img style={{ y: craterY }} className="parallax__crater" src="./parallax/cloud_8.svg" alt="" />
      <motion.img style={{ y: mountain2Y }} className="parallax__mountain2" src="./parallax/cloud_5.svg" alt="" /> */}
      {cloudGroups.map((group, i) =>
        group.clouds.map((src, j) => (
          <motion.img
            key={`${i}-${j}`}
            style={{ y: group.y }}
            className={`cloud cloud--group${i + 1}`}
            src={`./parallax/${src}`}
            alt=""
          />
        ))
      )}

      {mobileCloudGroups.map((group, i) =>
        group.clouds.map((src, j) => (
          <motion.img
            key={`${i}-${j}`}
            style={{ y: group.y }}
            className={`cloud mobile-cloud--group${i + 1} lg:hidden`}
            src={`./parallax/${src}`}
            alt=""
          />
        ))
      )}

      {/* <img className="parallax__stars" src="./parallax/clouds_1.svg" alt="" />
      <img className="parallax__planets mobile-bottom" src="./parallax/clouds_2.svg" alt="" />
      <img className="parallax__mountain1" src="./parallax/clouds_3.svg" alt="" />
      <img className="parallax__mountain2 mobile-bottom" src="./parallax/clouds_4.svg" alt="" />
      <img className="parallax__crater" src="./parallax/clouds_5.svg" alt="" /> */}

      <HouseCanvas />
    </section>

  )
}

export default Hero