import React from 'react'
import Navbar from "./sections/Navbar"
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Grid from './sections/Grid'

const App = () => {
  return (
    <main className='max-w-full mx-auto'>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />

    </main>
  )
}

export default App