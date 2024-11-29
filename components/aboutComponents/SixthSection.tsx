import { SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const SixthSection = () => {
  return (
    <section className="flex flex-col lg:flex-row mt-12 md:mt-28 gap-10 md:gap-20 items-center justify-center px-4 md:px-0 bg-[#02070a]">
      
      {/* Text Section */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 md:p-10">
        <div className="max-w-full lg:max-w-5xl">
        <span className="xl:text-[28px] text-[32px] md:text-[36px] font-bold text-white leading-tight lg:text-[24px] mt-7 ml-[50px]">
                    Love to Hear From You Get In Touch 👋
                   </span>

          
          
               < p className="text-white mt-4 text-[14px] lg:text-[16px] ml-12">
                Tap expert writers and a partner who gets modern content marketing. In a sea of sameness, stand out in search with E-book writing Service.
                  </p>
        </div>
      </div>

      {/* Image Section */}

      <div className="w-full lg:w-1/3 flex justify-start items-start mb-8 md:mb-0"> 
  <div className="h-auto w-full max-w-[400px] min-h-[400px] p-4">
    {/* Name and Phone Number Fields */}
    <div className="flex gap-4 mb-4" style={{ paddingTop: '60px' }}>
      {/* Name Field */}
      <div className="flex flex-col items-start">
        <input
          type="text"
          placeholder="Enter your name"
          className="w-[245px] p-2 rounded-lg border border-gray-300 bg-black text-white placeholder-gray-500 text-left"
        />
      </div>

      {/* Phone Number Field */}
      <div className="flex flex-col items-center">
      <input
  type="text"
  placeholder="Phone number"
  className="w-[245px] p-2 rounded-lg border border-gray-300 bg-black text-white placeholder-gray-500 text-left"
/>

      </div>
    </div>

    {/* Textarea Field */}
    <textarea
      placeholder="Type text here"
      className="w-[500px] p-2 mb-4 rounded-lg border border-gray-300 bg-black text-white placeholder-gray-500 text-left"
      rows={4}
    />

    {/* Button */}
    <button className="w-[150px] p-2 bg-black-600 text-white rounded-lg font-bold border border-white text-left">
      Request a Call
    </button>
  </div>
</div>




    </section>
  )
}
export default SixthSection
