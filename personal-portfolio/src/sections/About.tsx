import React, { useEffect, useRef, useState } from 'react'
import Globe, { GlobeMethods } from 'react-globe.gl'
import Button from '../components/Button'

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)
    const globeRef = useRef<GlobeMethods | null>(null);
    // Generate random arcs data
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
    const handleCopy = () => {
        navigator.clipboard.writeText('rohan.sivam2562@gmail.com')
        setHasCopied(true)
        setTimeout(() =>{
            setHasCopied(false)
        },2000)
    }
    useEffect(() => {
        if (globeRef.current) {
            const controls = globeRef.current.controls();
            controls.autoRotate = true; 
            controls.autoRotateSpeed = 0.8; // Adjust speed if needed
        }
    }, []);

  return (
    <section className='c-space my-20'>
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
        <h1>About Me</h1>
        <h2>A snippet of me</h2>
        <h3>Learn a little more about me, what I love doing and what I strive for</h3>
        <div>
            <
        </div>
    </section>
  )
}

export default About