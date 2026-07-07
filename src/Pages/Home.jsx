import React from 'react'
import Navbar from '../Component/Navbar'
import HeroH from '../Component/HeroH'
import WhyCH from '../Component/WhyCH'
import Services from '../Component/Services'
import HowItWorks from '../Component/HowItWorks'
import Testimonials from '../Component/Testimonials'
import CTA from '../Component/CTA'
import Footer from '../Component/Footer'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroH/>
      <WhyCH/>
      <Services/>
      <HowItWorks/>
      <Testimonials/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default Home