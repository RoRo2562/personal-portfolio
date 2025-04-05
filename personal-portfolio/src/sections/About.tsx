import React, { useEffect, useRef, useState } from 'react'
import Globe, { GlobeMethods } from 'react-globe.gl'
import Button from '../components/Button'
import { SectionHeader } from '../components/SectionHeader'
import Card from '../components/Card'
import { div } from 'framer-motion/client'
import TechIcon from '../components/TechIcon'

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

import AnimeIcon from '/assets/hobby-icons/anime.svg'
import FootballIcon from '/assets/hobby-icons/football.svg'
import GamingIcon from '/assets/hobby-icons/gaming.svg'
import GymIcon from '/assets/hobby-icons/gym.svg'
import MusicIcon from '/assets/hobby-icons/music.svg'
import PokemonIcon from '/assets/hobby-icons/pokemon.svg'

import CardHeader from '../components/CardHeader'
import TechStackItem from '../components/TechStackItem'

const hobbies = [
    {
        title: 'Pokemon',
        iconType: PokemonIcon
    },
    {
        title: 'Football',
        iconType: FootballIcon
    },
    {
        title: 'Gym',
        iconType: GymIcon
    },
    {
        title: 'Anime',
        iconType: AnimeIcon
    },
    {
        title: 'Music',
        iconType: MusicIcon
    },
    {
        title: 'Gaming',
        iconType: GamingIcon
    },
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
        {/* <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5'>
                        <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
                        <div>
                            <p className='text-xl font-semibold mb-2 text-white font-generalsans'>Hey there, I'm Rohan</p>
                            <p className='text-[#afb0b6] text-base font-generalsans'>I am a Computer Science graduate (Distinction) with 10 months of software engineering experience, including at a startup founded by ex-EY, Deloitte, and Accenture executives. I have built and optimised high-traffic cloud apps, developed distributed systems, and applied parallel computing.</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5'>
                        <img src="assets/grid2.png" alt="grid-2" className='w-full sm:h-[276px] h-fit object-contain'/>
                        <div>
                            <p className='text-xl font-semibold mb-2 text-white font-generalsans'>Skill Stack</p>
                            <p className='text-[#afb0b6] text-base font-generalsans'>Java, Python, Swift, JavaScript, TypeScript, React Native, React, Node.js, Express, MongoDB, MySQL, Firebase, AWS, Docker, Git, CI/CD, Agile, Linux, Django, Flask, REST APIs.</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-4'>
                    <div className='w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5'>
                        <div className='rounded-4xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                            <Globe
                                ref={globeRef as React.MutableRefObject<GlobeMethods | undefined>} 
                                height={350}
                                width={350}
                                backgroundColor='rgba(0,0,0,0)'
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.jpg"
                                arcsData={arcsData}  // Add arcs data here
                                arcColor="color"  // Use the color defined in arcsData
                                arcDashLength={() => Math.random()}  // Randomize dash length
                                arcDashGap={() => Math.random()}     // Randomize dash gap
                                arcDashAnimateTime={() => Math.random() * 4000 + 500}  // Randomize animation time
                                labelsData={[{
                                    lat: -37.8102, lng: 144.962646,
                                    text: "I'm here",
                                    color: 'white',
                                    size: 20
                                }]}
                            />
                        </div>
                        <div>
                            <p className='text-xl font-semibold mb-2 text-white font-generalsans'>I'm based in Melbourne</p>
                            <p className='text-[#afb0b6] text-base font-generalsans'>Remote work available</p>
                            <Button name = "Contact Me" isBeam containerClass='w-full mt-10' />
                        </div>

                    </div>
                </div>
                <div className='xl:col-span-2 xl:row-span-3'>
                    <div className='w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5'>
                                <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain'/>
                                <div>
                                    <p className='text-xl font-semibold mb-2 text-white font-generalsans'>

                                    </p>
                                    <p className='text-[#afb0b6] text-base font-generalsans'>Remote work available</p>
                                </div>
                    </div>
                    
                </div>
                <div className='xl:col-span-1 xl:row-span-2'>
                        <div className='w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5'>
                            <img src="assets/grid4.png" alt="grid4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'/>
                            <div className='space-y-2'>
                                <p className='text-[#afb0b6] text-base font-generalsans text-center'>Contact Me</p>
                                <div className='cursor-pointer flex justify-center items-center gap-2' onClick={handleCopy}>
                                    <img src={hasCopied? 'assets/tick.svg': 'assets/copy.svg'} alt="" />
                                    <p className='lg:text-2xl md:text-xl font-medium bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent text-white'>rohan.sivam2562@gmail.com</p>

                                </div>

                            </div>
                        </div>
                </div>
        </div> */}
        <div className='container mx-auto'>
        <SectionHeader title='About Me' eyebrow='A little bit about me and how I create cool things' description='Always striving to do better' />
        <div className='mt-20 flex flex-col gap-8'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
            <Card className='h-[320px] md:col-span-2'>
                <CardHeader title='Hello' description='me' />
                <img src={MongoIcon} alt="What I want to add here" />
            </Card>
            <Card className='h-[320px] p-0 md:col-span-3'>
                <CardHeader title='My Tech Stack' description='Explore what tech stack I love using to create my apps' className='px-6 pt-6'/>
                <section className='skills-section'>
                    <TechStackItem items={techStack} className='mt-6 py-0.5'/>
                    <TechStackItem items={techStack} className='mt-6 py-0.5' direction='right'/>
                </section>
            </Card>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
                <Card className='h-[320px] p-0 flex flex-col col-span-3'>
                    <CardHeader title='Beyond the code' description="Here's a little more about my hobbies and interests" className='px-6 pt-6'/>
                    <div className='flex gap-4'>
                        {hobbies.map((hobby)=>(
                            <div key={hobby.title} className='inline-flex items-center gap-4 py-2 px-8 outline-2 outline-white/10 rounded-lg justify-center'>
                                <span className='font-medium'>{hobby.title}</span>
                                <span><img src={hobby.iconType} alt="" className='size-10' /></span>
                            </div>
                        ))

                        }
                    </div>
            
                </Card>
                <Card className='h-[320px] p-0 flex flex-col col-span-2'>
                    <CardHeader title='I work in Melbourne' description="I graduated from Monash in 2024 with a Bachelor's Degree of Computer Science" className='px-6 pt-6'/>
                    <div className='relative mt-auto overflow-hidden h-[400px]'>
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
            </div>
            <Card>

            </Card>
          
        </div>
        </div>
    </section>
  )
}

export default About