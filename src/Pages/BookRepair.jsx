import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import HeroB from '../Component/HeroB'
import RepairForm from '../Component/RepairForm'
import FAQ from '../Component/FAQ'
import WhatsAppCTA from '../Component/WhatsAppCTA'
import WhyBookWithUs from '../Component/WhyBookWithUs'

const BookRepair = () => {
  return (
    <div>
      <Navbar/>
      <HeroB/>
      <RepairForm/>
      <WhyBookWithUs/>
      <FAQ/>
      <WhatsAppCTA/>
      <Footer/>
    </div>
    
  )
}

export default BookRepair