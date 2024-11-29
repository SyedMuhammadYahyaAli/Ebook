import Image from 'next/image'
import React from 'react'
import { FaBookReader } from 'react-icons/fa'

const Process = () => {
  return (
    <div className='px-4 md:px-10 xl:px20 py-20 space-y-10'>
      <div className="w-full md:w-1/2 mx-auto text-center">
  <h2 className="text-[26px] lg:text-[28px] font-bold pb-5">
    Our <span className="text-red-500">Unbeatable</span> Process
  </h2>
  <p className="text-[14px] lg:text-[16px]">
    At The Nation Publishers, we&apos;re known for delivering top-notch content writing services. Now, you can dive into the perks of our ghostwriting service too! There are plenty of areas where you can tap into our expertise to get high-quality content. Let&apos;s get started!
  </p>
</div>


      {/* Grid layout for cards and image */}
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 px-0 md:px-3 xl:px-10'>
        
        {/* Left Column Cards */}
        <div className='space-y-10'>
          {/* Card 1 */}
          <div className='bg-black text-white px-4 py-8 w-full h-[400px] flex items-center justify-center'>
            <div className='flex gap-4 items-center'>
              <h3 className='font-bold text-[22px] lg:text-[24px]'><FaBookReader /></h3>
              <div className='flex flex-col'>
                <h3 className='font-bold text-[22px] lg:text-[24px]'><span className='text-red-500'>Creative</span> Writing</h3>
                <p className='text-[14px] lg:text-[16px]'>Engage in the art of expression through creative writing. Unleash your thoughts and emotions, creating a world of words that reflects your unique perspective and imagination.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className='bg-black text-white px-4 py-8 w-full h-[400px] flex items-center justify-center'>
            <div className='flex gap-4 items-center'>
              <h3 className='font-bold text-[22px] lg:text-[24px]'><FaBookReader /></h3>
              <div className='flex flex-col'>
                <h3 className='font-bold text-[22px] lg:text-[24px]'><span className='text-red-500'>Focusing,</span> Focusing</h3>
                <p className='text-[14px] lg:text-[16px]'>Cultivate mindfulness through focusing techniques, meditation, and breathwork. Elevate your awareness, reduce stress, and foster a sense of inner calm to enhance overall well-being.</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className='bg-black text-white px-4 py-8 w-full h-[400px] flex items-center justify-center'>
            <div className='flex gap-4 items-center'>
              <h3 className='font-bold text-[22px] lg:text-[24px]'><FaBookReader /></h3>
              <div className='flex flex-col'>
                <h3 className='font-bold text-[22px] lg:text-[24px]'><span className='text-red-500'>Spirituality,</span> Psychology, Effective Communication</h3>
                <p className='text-[14px] lg:text-[16px]'>Explore the connection between spirituality and psychology. Enhance your understanding of self and others.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Center Image (Visible only on large screens) */}
        <div className='hidden xl:flex items-center justify-center'>
          <Image src="/center-image.png" alt='Center Image' height={1000} width={1000} 
          className='absolute h-1/2 w-auto 2xl:h-2/3 2xl:w-auto'/>
        </div>

        {/* Right Column Cards */}
        <div className='space-y-10'>
          {/* Card 4 */}
          <div className='bg-black text-white px-4 py-8 w-full h-[400px] flex items-center justify-center'>
            <div className='flex gap-4 items-center'>
              <h3 className='font-bold text-[22px] lg:text-[24px]'><FaBookReader /></h3>
              <div className='flex flex-col'>
                <h3 className='font-bold text-[22px] lg:text-[24px]'><span className='text-red-500'>ADHD</span>/ Executive Functions</h3>
                <p className='text-[14px] lg:text-[16px]'>Navigate the challenges of ADHD and enhance executive functions. Discover effective strategies to manage time, stay organized, and optimize cognitive abilities for improved daily functioning.</p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className='bg-black text-white px-4 py-8 w-full h-[400px] flex items-center justify-center'>
            <div className='flex gap-4 items-center'>
              <h3 className='font-bold text-[22px] lg:text-[24px]'><FaBookReader /></h3>
              <div className='flex flex-col'>
                <h3 className='font-bold text-[22px] lg:text-[24px]'><span className='text-red-500'>Creativity</span> and Meaningful Work</h3>
                <p className='text-[14px] lg:text-[16px]'>Integrate creativity into your professional life for meaningful work experiences. Uncover innovative solutions.</p>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className='bg-black text-white px-4 py-8 w-full h-[400px] flex items-center justify-center'>
            <div className='flex gap-4 items-center'>
              <h3 className='font-bold text-[22px] lg:text-[24px]'><FaBookReader /></h3>
              <div className='flex flex-col'>
                <h3 className='font-bold text-[22px] lg:text-[24px]'><span className='text-red-500'>ADHD,</span>/ Executive Functions Effective Communication</h3>
                <p className='text-[14px] lg:text-[16px]'>Navigate the challenges of ADHD and enhance executive functions. Discover effective strategies to manage time, stay organized, and optimize cognitive abilities for improved daily functioning.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process
