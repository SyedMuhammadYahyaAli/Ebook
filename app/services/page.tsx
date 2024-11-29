import Hero from '@/components/serviceComponents/firstSection'
import Order from  '@/components/serviceComponents/secondSection'
import Ghost from  '@/components/serviceComponents/thirdSection'
import AboutFeatures from  '@/components/serviceComponents/fourthsection'
import Testimonial from  '@/components/serviceComponents/fifthSection'
import FAQ from '@/components/serviceComponents/sixthsection'
//import FourthSection from '@/components/aboutComponents/FourthSection'
// import SixthSection from '@/components/aboutComponents/SixthSection'
import Contact from '@/components/serviceComponents/seventhSection'
import React from 'react'


const About = () => {
  return (
    <div>
      
      <Hero/>
      <Order/>
      <Ghost/>
      <AboutFeatures/>
      <Testimonial/>
      <FAQ/>
      <Contact/>
    </div>
  )
}

export default About
