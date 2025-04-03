import React, { useRef } from 'react'
import Navbar from "./sections/Navbar"
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Grid from './sections/Grid'
import { BrowserRouter } from "react-router";

const App = () => {
  const wrapperRef = useRef(null);
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div className='wrapper' ref={wrapperRef}>
          <div id="hero" className='z-10'>
                <Hero scrollContainer={wrapperRef} />
          </div>
          <div className='relative z-30 bg-primary pt-24'>
            <About />
          </div>
          <div id="experience" className='relative z-30 bg-primary'>
              <Experience />
          </div>
          <div id="contact" className='relative z-30 bg-primary'>
              < Projects />
          </div>
        </div>
      </div>

    </BrowserRouter>
  )
}

export default App