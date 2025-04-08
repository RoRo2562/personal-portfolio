import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { myProjects } from '../constants'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
// import { Canvas } from '@react-three/fiber';
// import { Center, OrbitControls } from '@react-three/drei';
// import CanvasLoader from '../components/CanvasLoader';
// import DemoComputer from '../components/DemoComputer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScroll, useTransform, motion } from "framer-motion";

const projectCount = myProjects.length;

const Projects = () => {
    const projects = [
      {
        title: "FitHub",
        src: "/project-assets/fithub.jpg"
      },
      {
        title: "Food Reviewing Platform",
        src: "/project-assets/moneats.png"
      },
      {
        title: "Package Management system",
        src: "/project-assets/fithub.jpg"
      },
    ]
    const [selectedProject, setSelectedProject] = useState(0);

    // Get scroll position
    const { scrollYProgress } = useScroll();
    const yRange = useTransform(scrollYProgress, [0, 1], [0, 200]); // Adjust range based on how far you want to scroll the text
  
    // Fixing possible infinite loop by ensuring the selectedProject is updated only when needed
    const handleMouseOver = (index) => {
      console.log(index)
      if (index !== selectedProject) {
        setSelectedProject(index); // Only update when index is different
      }
      console.log(projects[selectedProject].src)
    };
  
    useEffect(() => {
      // Optional: You can add a cleanup function if you need to handle side effects on mount/unmount
    }, [selectedProject]); // Make sure to control the dependencies carefully
  
    return (
      <div className="relative">
        {/* Sticky top section */}
        <div className="sticky top-0 h-screen z-0 pointer-events-none">
          <div className="flex h-full justify-between gap-[5%] p-[10%] text-white">
            {/* Image */}
            <div className="relative w-[40%]">
              <img
                src={projects[selectedProject].src}
                alt="Project"
                className="object-cover w-full h-full"
              />
            </div>
  
            {/* Left Column */}
            <div className="w-[20%] text-[1.6vw] flex items-start">
              <p>Designing thoughtful user experiences</p>
            </div>
  
            {/* Right Column with Framer Motion animation */}
            <motion.div
              className="w-[20%] text-[1vw] relative"
              style={{
                y: yRange, // Animate vertical position based on scroll progress
              }}
            >
              <p>
                I specialize in designing thoughtful user experiences that combine
                aesthetics with usability to enhance digital interactions and leave a
                lasting impression.
              </p>
            </motion.div>
          </div>
        </div>
  
        {/* Scrollable content */}
        <div className="mt-[100vh] p-[10%] text-white flex flex-col gap-10 z-20">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseOver={() => handleMouseOver(index)} // Ensure selectedProject only updates if necessary
              className="w-full uppercase text-[3vw] border-b border-white flex justify-end cursor-pointer"
            >
              <h2 className="mt-[40px] mb-[20px] cursor-default">{project.title}</h2>
            </div>
          ))}
        </div>
      </div>
    );

  
}

export default Projects