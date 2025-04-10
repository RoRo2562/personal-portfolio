import { useEffect, useRef, useState } from 'react'
import Navbar from "./sections/Navbar"
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import { BrowserRouter } from "react-router";
import Contact from './sections/Contact'
import { motion, useInView } from 'framer-motion'
import Footer from './sections/Footer'

const App = () => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const aboutInView = useInView(aboutRef, { margin: "-40% 0px -40% 0px" });
  const experienceInView = useInView(experienceRef, { margin: "-40% 0px -40% 0px" });
  const projectsInView = useInView(projectsRef, { margin: "-40% 0px -40% 0px" });
  const contactInView = useInView(contactRef, { margin: "-40% 0px -40% 0px" });

  const [bgColor, setBgColor] = useState("#326D99");

  useEffect(() => {
    if (aboutInView) setBgColor("#1d3557");
    else if (experienceInView) setBgColor("#1d3557");
    else if (projectsInView) setBgColor("#f5f8ff");
    else if (contactInView) setBgColor("#f5f8ff");
  }, [aboutInView, experienceInView, projectsInView, contactInView]);

  const wrapperRef = useRef(null);
  return (
    <BrowserRouter>
      <motion.div
        style={{ backgroundColor: bgColor }}
        className="relative z-0 transition-colors duration-700"
      >
        <Navbar />
        <div className="wrapper" ref={wrapperRef}>
          <div id="home" className="z-10">
            <Hero />
          </div>
          <div id="about" ref={aboutRef} className="relative z-30 min-h-screen">
            <About />
          </div>
          <div id="experience" ref={experienceRef} className="relative z-30 min-h-screen">
            <Experience />
          </div>
          <div id="projects" ref={projectsRef} className="relative z-30 min-h-screen">
            <Projects />
          </div>
          <div id="contact" ref={contactRef} className="relative z-30 ">
            <Contact />
          </div>
        </div>
        <Footer />
      </motion.div>

    </BrowserRouter>
  )
}

export default App