import React, { useState } from 'react'
import { navLinks } from '../constants'




const NavItems = () => {
  return (
    <ul className='flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20'>
        {navLinks.map((link)=>(
            <li key={link.id} className='text-neutral-400 hover:text-white font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5'>
                <a href={link.href} className='text-lg md:text-base hover:text-white transition-colors' onClick={() =>{}}>
                    {link.name}
                    </a>
            </li>
        ))}
    </ul>
  )
}

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen)

    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-[#1D2D44]'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center py-5 mx-auto sm:px-10 px-5'>
                    <a href="/" className='text-[#748CAB] font-bold text-xl hover:text-[#F0EBD8] transition-colors'>Rohan</a>
                    <button className='cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label='Toggle Menu' onClick={toggleMenu}>
                        <img src={isOpen? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className='h-6 w-6' />
                    </button>
                    <nav className='sm:flex hidden'>
                        <NavItems />
                    </nav>
                </div>
            </div>
            <div className={`absolute left-0 right-0 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${isOpen ? 'max-h-screen': 'max-h-0'}`}>
                <nav className='p-5'>
                    <NavItems />
                </nav>
            </div>
        </header>
    )
}

export default Navbar