import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import About from './components/about/About'
import Accommodation from './components/accommodations/Accommodation'


function App() {


  return (
    <>
      <Navbar/>
      <Intro/>
      <About/>
      <Accommodation/>
    </>
  )
}

export default App
