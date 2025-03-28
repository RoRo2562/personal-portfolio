import React from 'react'
import Navbar from "./sections/Navbar"
import Hero from './sections/Hero'

const App = () => {
  return (
    <main className='max-w-full mx-auto'>
      <Navbar />
      <Hero />
    </main>
  )
}

export default App