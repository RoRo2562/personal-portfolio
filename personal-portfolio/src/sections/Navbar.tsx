import React, { useEffect, useRef, useState } from 'react'
import { navLinks } from '../constants'
import { twMerge } from 'tailwind-merge'
import * as ReactUse from 'react-use'
import gsap from 'gsap'




const NavItems = ({className}:{className?:string}) => {
  return (
    <nav className='flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
        {navLinks.map((link)=>(
                <a href={link.href} key={link.id} className={twMerge('px-8 py-2 rounded-full text-white/70 text-lg font-semibold hover:bg-white/10 hover:text-white transition duration-300',className)} onClick={() =>{}}>
                    {link.name}
                    </a>
        ))}</nav>
  )
}

const Navbar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  // Refs for audio and navigation container
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = ReactUse.useWindowScroll();
  console.log(currentScrollY); 
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    console.log(currentScrollY)
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
  }, [currentScrollY]);  // Logs whenever currentScrollY changes

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? '0%' : '-120%',
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

    return (
        <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 text-white'>
            <header className='absolute top-1/2 w-full -translate-y-1/2'>
                <nav className='flex size-full items-center justify-between p-4 '>
                    <div className='flex items-center gap-7'>
                        <img src='/assets/logo.png' alt='me' className='w-10' />
                    </div>
                    <div className='flex h-full items-center'>
                        <div className='hidden md:block'>
                            {navLinks.map((item)=>(
                                <a href={`#${item.name.toLowerCase()}`}key={item.id} className='relative ms-10 font-general text-xs uppercase after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white cursor-pointer'>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <button className='ml-10 flex items-center space-x-0.5' onClick={toggleAudioIndicator}>
                            <audio ref={audioElementRef} className='hidden' src='/audio/loop.mp3' loop />
                                {[1,2,3,4].map((bar)=>(
                                    <div key={bar} className={`indicator-line h-1 w-px rounded-full bg-white transition-all duration-200 ease-in-out ${isIndicatorActive? 'active':''}`} style={{animationDelay:`${bar*0.1}s`}} >
                                        
                                    </div>
                                ))}
                        </button>
                    </div>
                </nav>
            </header>
         </div>
    )
}

// className = 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'
export default Navbar