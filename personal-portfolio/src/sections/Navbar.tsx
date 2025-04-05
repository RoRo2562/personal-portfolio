import React, { useEffect, useRef, useState } from 'react'
import { navLinks } from '../constants'
import { twMerge } from 'tailwind-merge'




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
    const [isAudioPlaying,setIsAudioPlaying] = useState(false)
    const [isIndicatorActive,setIndicatorActive] = useState(false)

    const navContainerRef =  useRef(null)
    const audioElementRef = useRef(null)

    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev)
        setIndicatorActive((prev) => !prev)
    }
    
    const [isOpen,setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen)

    useEffect(()=>{
        if(isAudioPlaying){
            audioElementRef.current.play();
        }else{
            audioElementRef.current.pause();
        }
    },[isAudioPlaying])

    return (
        // <header className='fixed top-0 left-0 right-0 z-50 bg-[#1D2D44]'>
        //     <div className='max-w-7xl mx-auto'>
        //         <div className='flex justify-between items-center py-5 mx-auto sm:px-10 px-5'>
        //             <a href="/" className='text-[#748CAB] font-bold text-xl hover:text-[#F0EBD8] transition-colors'>Rohan</a>
        //             <button className='cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label='Toggle Menu' onClick={toggleMenu}>
        //                 <img src={isOpen? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className='h-6 w-6' />
        //             </button>
        //             <nav className='sm:flex hidden'>
        //                 <NavItems />
        //             </nav>
        //         </div>
        //     </div>
        //     <div className={`absolute left-0 right-0 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${isOpen ? 'max-h-screen': 'max-h-0'}`}>
        //         <nav className='p-5'>
        //             <NavItems />
        //         </nav>
        //     </div>
        // </header>
        // <div className='flex justify-center items-center fixed top-3 z-40'>
        <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'>
            <header className='absolute top-1/2 w-full'>
                <nav className='flex size-full items-center justify-between p-4'>
                    <div className='flex items-center gap-7'>
                        <img src='/assets/logo.png' alt='me' className='w-10' />
                    </div>
                    <div className='flex h-full items-center'>
                        <div className='hidden md:block'>
                            {navLinks.map((item)=>(
                                <a href={`#${item.name.toLowerCase()}`}key={item.id} className='relative ms-10 font-general text-xs uppercase text-blue-50 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white cursor-pointer'>
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