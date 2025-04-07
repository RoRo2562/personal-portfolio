import React, { useRef } from 'react'
import Navbar from "./sections/Navbar"
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Grid from './sections/Grid'
import { BrowserRouter } from "react-router";
import Contact from './sections/Contact'

const App = () => {
  const wrapperRef = useRef(null);
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div>
          <Navbar />
        </div>
        <div className='wrapper' ref={wrapperRef}>
          <div id="hero" className='z-10'>
                <Hero scrollContainer={wrapperRef} />
          </div>
          <div className='relative z-30 bg-primary'>
            <About />
          </div>
          <div id="experience" className='relative z-30 bg-primary'>
              <Experience />
          </div>
          <div id="projects" className='relative z-30 bg-primary'>
              < Projects />
          </div>
          <div id="contact" className='relative z-30 bg-primary'>
              {/* < Projects /> */}
              <Contact />
          </div>
        </div>
      </div>

    </BrowserRouter>
  )
}

export default App