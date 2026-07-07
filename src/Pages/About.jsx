import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import HeroA from '../Component/HeroA'
import OurStory from '../Component/OurStory'
import WhyCustomersTrustUs from '../Component/WhyCustomersTrustUs'
import CertificationSection from '../Component/CertificationSection'
import RepairVideosShowcase from '../Component/RepairVideosShowcase'
import OurValues from '../Component/OurValues'
import FinalCTA from '../Component/FinalCTA'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroA/>
      <OurStory/>
      <WhyCustomersTrustUs/>
      <CertificationSection/>
      <RepairVideosShowcase/>
      <OurValues/>
      <FinalCTA/>
      <Footer/>
    </div>
  )
}

export default About