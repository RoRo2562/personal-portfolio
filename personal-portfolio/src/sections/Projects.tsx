import { useEffect, useState } from 'react'
import { motion, } from "framer-motion";
import { SectionHeader } from '../components/SectionHeader';
import { containerVariants, fadeInElements } from '../utils/motion';

const Projects = () => {
    const projects = [
      {
        title: "FitHub",
        src: "/project-assets/fithub.jpg",
        tags: ['Swift','Firebase','Core Data'],
        desc: 'A full-featured iOS app (Swift, SwiftUI) enabling users to track nutrition and create custom workout plans.'
      },
      {
        title: "Food Reviewing Platform",
        src: "/project-assets/moneats.png",
        tags: ['Java','Kotlin','SQLite'],
        desc: 'A full-featured iOS app (Swift, SwiftUI) enabling users to track nutrition and create custom workout plans.'
      },
      {
        title: "Package Management system",
        src: "/project-assets/fithub.jpg",
        tags: ['Angular','Javascript','Node JS','MongoDB',],
        desc: 'A full-featured iOS app (Swift, SwiftUI) enabling users to track nutrition and create custom workout plans.'
      },
    ]
    const [selectedProject, setSelectedProject] = useState(0);

  
    // Fixing possible infinite loop by ensuring the selectedProject is updated only when needed
    const handleMouseOver = (index:number) => {
      if (index !== selectedProject) {
        setSelectedProject(index); // Only update when index is different
      }
    };
  
    useEffect(() => {
      // Optional: You can add a cleanup function if you need to handle side effects on mount/unmount
    }, [selectedProject]); // Make sure to control the dependencies carefully
  
    return (
      <div className="relative">
        
        {/* Sticky top section */}
        <SectionHeader title='' eyebrow='Projects' description="some cool work I've done" className='text-[#676c82]'/>

  
        {/* Scrollable content */}
        <motion.div
          className="p-[10%] text-[#676c82] flex flex-col gap-4 z-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }} // triggers when 20% of section is visible
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onMouseOver={() => handleMouseOver(index)}
              className="w-full uppercase text-[4vw] lg:text-[3vw] font-bold border-b border-black grid grid-cols-1 justify-start cursor-pointer relative min-h-[120px] sm:flex-col"
              variants={fadeInElements} // now handled via parent
            >
              <h2 className="mb-[10%] lg:mb-[5%] cursor-default">{project.title}</h2>

              <div className="grid grid-cols-1 xl:grid-cols-2 mb-[2%]">
                <p className='text-[#676c82] font-medium text-[3vw] xl:text-lg col-span-1 align-bottom'>{project.desc}</p>
                <div className='col-span-1 flex xl:justify-end gap-2 max-h-[50px]'>
                  {project.tags.map((tag, idx) => (
                    <motion.div
                      key={idx}
                      className="inline-flex items-center py-[1%] px-4 border border-[#826fa0]/20 rounded-full text-[2vw] lg:text-sm"
                    >
                      <p>{tag}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    );

  
}

export default Projects