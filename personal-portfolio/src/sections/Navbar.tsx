import React, { useState } from 'react'


const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen)

    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-[#1D2D44]'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center py-5 mx-auto sm:px-10 px-5'>
                    <a href="/" className='text-[#748CAB] font-bold text-xl hover:text-[#F0EBD8] transition-colors'>Rohan</a>
                    <button className='cursor-pointer' onClick={toggleMenu}>
                        <img src={isOpen? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className='h-6 w-6' />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar