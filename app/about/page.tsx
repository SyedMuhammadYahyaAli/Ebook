import AboutFeatures from '@/components/aboutComponents/AboutFeatures'
import FifthSection from '@/components/aboutComponents/FifthSection'
import FirstSection from '@/components/aboutComponents/FirstSection'
import FourthSection from '@/components/aboutComponents/FourthSection'
// import SixthSection from '@/components/aboutComponents/SixthSection'
import ThirdSection from '@/components/aboutComponents/ThirdSection'
import Contact from '@/components/Contact'
import React from 'react'

const About = () => {
  return (
    <div>
      <FirstSection/>
      <AboutFeatures/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      {/* <SixthSection/> */}
      <Contact/>
    </div>
  )
}

export default About
