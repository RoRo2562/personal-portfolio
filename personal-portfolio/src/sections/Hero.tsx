import HouseCanvas from '../components/HouseCanvas'
import { motion, useScroll, useTransform } from 'framer-motion';
import { riseWithFade } from '../utils/motion';


const Hero = () => {
  const { scrollY } = useScroll();

const cloudGroups = [
  { y: useTransform(scrollY, [0, 800], [-50, -650]), clouds: ['cloud_10.svg', 'cloud_6.svg'] },
  { y: useTransform(scrollY, [0, 800], [0, -1100]), clouds: ['cloud_2.svg'] },
  { y: useTransform(scrollY, [0, 800], [0, -550]), clouds: ['cloud_3.svg'] },
  { y: useTransform(scrollY, [0, 800], [50, -1000]), clouds: ['cloud_7.svg', 'cloud_5.svg'] },
  { y: useTransform(scrollY, [0, 800], [0, -550]), clouds: ['cloud_8.svg'] },
  { y: useTransform(scrollY, [0, 800], [2000, 200]), clouds: ['cloud_10.svg', 'cloud_6.svg'] },
  { y: useTransform(scrollY, [0, 800], [2000, -100]), clouds: ['cloud_7.svg', 'cloud_5.svg'] },
];

const mobileCloudGroups = [
  { y: useTransform(scrollY, [0, 700], [0, -250]), clouds: ['cloud_9.svg'] },
  { y: useTransform(scrollY, [0, 700], [0, -150]), clouds: ['cloud_11.svg'] },
  { y: useTransform(scrollY, [0, 700], [0, -150]), clouds: ['cloud_1.svg'] },
  { y: useTransform(scrollY, [0, 700], [0, -150]), clouds: ['cloud_8.svg'] },
  { y: useTransform(scrollY, [0, 700], [0, -150]), clouds: ['cloud_7.svg'] },
]
  return (
    <motion.section className="parallax hero-section h-[100vh]" initial='initial' animate='animate'>
      <div className='parallax__content absolute top-[18%] sm:top-[16%] lg:top-[24%] w-full mx-auto lg:pl-[10vh] lg:pr-[30vh] xl:pl-20 xl:pr-72 2xl:px-20 3xl:px-20 flex flex-col lg:flex-row items-start z-10'>
        <div className="flex-1 lg:mb-0">
          <motion.h1 className='special-font uppercase font-zentry font-medium text-white text-[40px] xs:text-[70px] sm:text-[68px] md:text-[80px] lg:text-[100px] 2xl:text-[140px] leading-[110px] 2xl:leading-[160px] block' variants={riseWithFade}>
            ROHAN SIVAM
          </motion.h1>
        </div>
        <div className="flex-1 flex justify-start lg:justify-end mt-4 sm:mt-14 ml-8 xs:ml-[-4vh] sm:ml-[-17vh] md:ml-[-26vh] lg:mt-10 2xl:mt-0">
          <div className='font-bold text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[46px] sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-white text-left'>
            {/* I love crafting <br/> captivating experiences for the digital world to savor. */}
          </div>
        </div>
      </div>
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
      <HouseCanvas />
    </motion.section>

  )
}

export default Hero