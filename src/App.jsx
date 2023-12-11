import React from 'react'
import NavBar from './component/NavBar'
import HeroSection from './component/HeroSection'
import Story from './component/Story'
import Best from './component/Best'
import Box from './component/Box'
import Testimonials from './component/Testimonials'
import NewsEvent from './component/NewsEvent'
import Contact from './component/Contact'
import Footer from './component/Footer'

const App = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Story />
      <Best />
      <Box />
      <Testimonials />
      <NewsEvent />
      <Contact />
      <Footer />
    </>
  )
}

export default App