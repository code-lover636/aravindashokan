import { useState } from 'react'

import Navbar from './pages/Navbar'
import Experience from './pages/Experience'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Achievements from './pages/Achievements'
import Services from './pages/Services'
import Work from './pages/Work'


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Achievements />
      <Services />
      <Experience />
      <Work />
      <Contact />
    </>
  )
}

export default App
