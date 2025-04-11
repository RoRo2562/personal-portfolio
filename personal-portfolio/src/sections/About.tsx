import React, { useEffect, useRef, useState } from 'react'
import Globe, { GlobeMethods } from 'react-globe.gl'
import { SectionHeader } from '../components/SectionHeader'
import Card from '../components/Card'

import GithubIcon from '/assets/tech-icons/github.svg';
import FigmaIcon from '/assets/tech-icons/figma.svg';
import ReactIcon from '/assets/tech-icons/react.svg';
import FirebaseIcon from '/assets/tech-icons/firebase.svg';
import SwiftIcon from '/assets/tech-icons/swift.svg';
import TypescriptIcon from '/assets/tech-icons/typescript.svg';
import JavascriptIcon from '/assets/tech-icons/javascript.svg';
import Css3Icon from '/assets/tech-icons/css.svg';
import Html5Icon from '/assets/tech-icons/html.svg'
import AngularIcon from '/assets/tech-icons/angular.svg'
import MongoIcon from '/assets/tech-icons/mongodb.svg'
import NodeIcon from '/assets/tech-icons/nodejs.svg'
import TailwindIcon from '/assets/tech-icons/tailwind.svg'
import PythonIcon from '/assets/tech-icons/python.svg'

import CardHeader from '../components/CardHeader'
import TechStackItem from '../components/TechStackItem'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";

import VideoPreview from "../components/VideoPreview";
import { BentoTilt } from '../components/BentoTilt'
import { containerVariants, fadeInElements } from '../utils/motion';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const hobbies = [
'Pokemon','Football','Gym','Anime'

]

const techStack = [
    {
        title: 'Typescript',
        iconType: TypescriptIcon
    },
    {
        title: 'Javascript',
        iconType: JavascriptIcon
    },
    {
        title: 'HTML5',
        iconType: Html5Icon
    },
    {
        title: 'CSS3',
        iconType: Css3Icon
    },
    {
        title: 'React',
        iconType: ReactIcon
    },
    {
        title: 'Github',
        iconType: GithubIcon
    },
    {
        title: 'Swift',
        iconType:SwiftIcon
    },
    {
        title: 'Angular',
        iconType:AngularIcon
    },
    {
        title: 'Python',
        iconType:PythonIcon
    },
    {
        title: 'NodeJS',
        iconType:NodeIcon
    },
    {
        title: 'Figma',
        iconType:FigmaIcon
    },
    {
        title: 'Firebase',
        iconType:FirebaseIcon
    },
    {
        title: 'Tailwind',
        iconType:TailwindIcon
    },
    {
        title: 'MongoDB',
        iconType:MongoIcon
    },
]



const About = () => {

    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
  
    const [loading, setLoading] = useState(true);
  
    const totalVideos = 4;
    const mainVideoRef = useRef<HTMLVideoElement | null>(null);
    const nextVideoRef = useRef<HTMLVideoElement | null>(null);
    const previewVideoRef = useRef<HTMLVideoElement | null>(null);

    const handleMainVideoLoad = () => {
        setLoading(false);
      };
  
  
    const handleMiniVdClick = () => {
      setHasClicked(true);
  
      setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
    };
  
    useGSAP(() => {
        if (hasClicked && nextVideoRef.current) {
          gsap.set("#next-video", { visibility: "visible" });
      
          nextVideoRef.current.play().catch((error) => {
            console.error("Error playing video:", error);
          });
      
          gsap.to("#next-video", {
            transformOrigin: "center center",
            scale: 1,
            width: "100%",
            height: "100%",
            duration: 1,
            ease: "power1.inOut"
          });
      
          gsap.from("#current-video", {
            transformOrigin: "center center",
            scale: 0,
            duration: 1.5,
            ease: "power1.inOut"
          });
        }
      }, {
        dependencies: [currentIndex],
        revertOnUpdate: true,
      });
      
  
    const getVideoSrc = (index:number) => `videos/hero-${index}.mp4`;
    // const [hasCopied, setHasCopied] = useState(false)
    const globeRef = useRef<GlobeMethods | null>(null);
    // // Generate random arcs data
    const arcsData = [...Array(10).keys()].map(() => ({
        startLat: (Math.random() - 0.5) * 180,  // Random start latitude
        startLng: (Math.random() - 0.5) * 360,  // Random start longitude
        endLat: (Math.random() - 0.5) * 180,    // Random end latitude
        endLng: (Math.random() - 0.5) * 360,    // Random end longitude
        color: [
            ['red', 'white', 'blue', 'green'][Math.floor(Math.random() * 4)],
            ['red', 'white', 'blue', 'green'][Math.floor(Math.random() * 4)],
        ],
    }));
    // const handleCopy = () => {
    //     navigator.clipboard.writeText('rohan.sivam2562@gmail.com')
    //     setHasCopied(true)
    //     setTimeout(() =>{
    //         setHasCopied(false)
    //     },2000)
    // }
    useEffect(() => {
        if (globeRef.current) {
            const controls = globeRef.current.controls();
            controls.autoRotate = true; 
            controls.autoRotateSpeed = 0.8; // Adjust speed if needed
        }
    }, []);

  return (
    <section className='py-20 about-section'>
        <motion.div className='container mx-auto' variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}>
            <SectionHeader title='Always striving to do better' eyebrow='About Me' description='and how I create cool things'/>
            <div className='mt-20 flex flex-col gap-8'>
                <motion.div className='grid grid-cols-1 md:grid-cols-5 gap-8' variants={fadeInElements} >
                    <BentoTilt className='h-[320px] md:col-span-2 about-card'>
                        <Card className=''>
                            <CardHeader title='Hey there!' description="" className='pl-10 md:py-4'/>
                            <p className='font-circular-web text-[3.5vw] md:text-[1.5vw] xl:text-[1vw] text-blue-50 px-10 overflow-auto'>I'm Rohan, a passionate and curious software developer based in Melbourne. I love building meaningful digital experiences, whether it's through mobile apps, web platforms, or backend systems. I'm currently working as a Junior Software Engineer at GRC Ready, where I’m gaining hands-on experience crafting full stack web solutions.</p>
                        </Card>
                    </BentoTilt>
                    <BentoTilt className='h-[320px] p-0 md:col-span-3 about-card'>
                        <Card className=''>
                            <CardHeader title='My Tech Stack' description='Explore what tech stack I love using to create my apps' className='px-6 pt-6'/>
                            <section className='skills-section'>
                                <TechStackItem items={techStack} className='py-0.5'/>
                                <TechStackItem items={techStack} className='mt-6 py-0.5' direction='right'/>
                            </section>
                        </Card>
                    </BentoTilt>
                </motion.div>
                <motion.div className='grid grid-cols-1 md:grid-cols-5 gap-8' variants={fadeInElements}>
                    <BentoTilt className='h-[320px] p-0 md:col-span-3 about-card'>
                        <Card className=''>
                            <h1 className="special-font uppercase font-zentry font-black text-3xl sm:right-10 sm:text-3xl md:text-5xl lg:text-5xl absolute top-5 left-10 z-40 text-blue-75">
                                My Hobbies
                            </h1>
                            <h1 className="special-font uppercase font-zentry font-black text-2xl sm:right-10 sm:text-2xl md:text-3xl lg:text-3xl absolute bottom-5 right-10 z-40 text-blue-75">
                                {hobbies[currentIndex-1]}
                            </h1>
                            
                            {loading && (
                                <div className="absolute inset-0 z-[100] flex items-center justify-center bg-blue-75/60">
                                    <div className="three-body">
                                    <div className="three-body__dot"></div>
                                    <div className="three-body__dot"></div>
                                    <div className="three-body__dot"></div>
                                    </div>
                                </div>
                            )}
                            <div className='relative z-10 h-full w-full overflow-hidden rounded-lg bg-blue-75' id='video-frame'>
                                <div className="mask-clip-path absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                                    <VideoPreview>
                                        <div
                                            onClick={handleMiniVdClick}
                                            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
                                        >
                                            <video
                                            ref={previewVideoRef}
                                            src={getVideoSrc((currentIndex % totalVideos) + 1)}
                                            loop
                                            muted
                                            playsInline
                                            preload='metadata'
                                            id="current-video"
                                            className="size-64 origin-center object-cover object-center rounded-lg"
                                            />
                                        </div>
                                    </VideoPreview>
                                </div>
                                <video
                                    ref={nextVideoRef}
                                    src={getVideoSrc(currentIndex)}
                                    loop
                                    playsInline
                                    muted
                                    preload='metadata'
                                    id="next-video"
                                    className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                                />
                                <video
                                    ref={mainVideoRef}
                                    src={getVideoSrc(
                                    currentIndex === totalVideos - 1 ? 1 : currentIndex
                                    )}
                                    autoPlay
                                    loop
                                    playsInline
                                    muted
                                    preload='metadata'
                                    className="absolute left-0 top-0 size-full object-cover object-center"
                                    onLoadedData={handleMainVideoLoad}
                                />
                            </div>
                        </Card>
                    </BentoTilt>
                    <BentoTilt className='h-[320px] p-0 flex flex-col md:col-span-2 about-card'>
                        <Card className=''>
                            <CardHeader title='I work in Melbourne' description="" className='px-6 pt-6'/>
                            <div className='relative mt-auto overflow-hidden h-full w-full'>
                                <div className='absolute -top-20 left-1/2 -translate-x-1/2'>
                                    <Globe
                                        ref={globeRef as React.MutableRefObject<GlobeMethods | undefined>} 
                                        height={600}
                                        width={600}
                                        backgroundColor='rgba(0,0,0,0)'
                                        showAtmosphere
                                        showGraticules
                                        globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
                                        arcsData={arcsData}
                                        arcColor="color"
                                        arcDashLength={() => Math.random()}
                                        arcDashGap={() => Math.random()}
                                        arcDashAnimateTime={() => Math.random() * 4000 + 500}
                                        labelsData={[{
                                        lat: -37.8102, lng: 144.962646,
                                        text: "I'm here",
                                        color: 'white',
                                        size: 20
                                        }]}
                                    />
                                </div>
                            </div>
                        </Card> 
                    </BentoTilt> 
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default About