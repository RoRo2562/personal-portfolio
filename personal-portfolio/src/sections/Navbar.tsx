import { useEffect, useRef, useState } from 'react'
import { navLinks } from '../constants'
import * as ReactUse from 'react-use'
import gsap from 'gsap'


const Navbar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  // Refs for audio and navigation container
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  const { y: currentScrollY } = ReactUse.useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    const audioRef = audioElementRef.current;
    if (!audioRef) return;
  
    if (isAudioPlaying) {
      audioRef.play();
    } else {
      audioRef.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    const navRef = navContainerRef.current;
    if (!navRef) return;
  
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navRef.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navRef.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navRef.classList.add("floating-nav");
    }
  
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
                        <img src='/assets/logo.svg' alt='me' className='w-10' />
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

export default Navbar