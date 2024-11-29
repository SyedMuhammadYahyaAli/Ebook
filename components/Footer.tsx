import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsPinterest, BsTwitterX } from 'react-icons/bs'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-red-900 flex flex-col lg:flex-row px-8 lg:px-10 2xl:px-32 py-10 lg:py-20'>
      {/* Right Section */}
      <div className='space-y-5 lg:w-1/2'>
        <Image
          src='/footer.png'
          alt=''
          height={300}
          width={300}
          // className='mx-auto lg:mx-0 w-48 h-48 lg:w-72 lg:h-72'
        />
        <p className='text-[14px] lg:text-[16px] text-white text-center lg:text-left'>
          PEBW empowers authors to share their narratives, create impact, and foster connections.
        </p>
        <p className='text-[14px] lg:text-[16px] text-white text-center lg:text-left pt-5 lg:pt-10'>
          <span className='font-bold'>Address:</span> 2093 Philadephia Pike #1911, Claymont, DE, 19703
        </p>
        <div className='flex justify-center lg:justify-start text-white bg-transparent text-3xl lg:text-4xl pt-5 lg:pt-10 gap-4'>
          <Link href='/'><FaFacebook /></Link>
          <Link href='/'><FaInstagram /></Link>
          <Link href='/'><FaLinkedin /></Link>
          <Link href='/'><BsTwitterX /></Link>
          <Link href='/'><BsPinterest /></Link>
        </div>
      </div>
       
      {/* Left Section */}
      <div className='lg:w-1/2 mt-10 lg:mt-0'>
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-20 text-white text-lg lg:text-2xl'>
          {/* Column 1 */}
          <div>
            <h3 className='font-bold text-[22px] lg:[24px] pb-5 lg:pb-10'>Lorem, ipsum</h3>
            {[...Array(9)].map((_, i) => (
              <p key={i} className='border-b-2 text-[14px] lg:text-[16px] border-white hover:text-yellow-500 hover:border-yellow-500'>
                Lorem, ipsum dolor.
              </p>
            ))}
          </div>
          {/* Column 2 */}
          <div>
            <h3 className='font-bold text-[22px] lg:[24px] pb-5 lg:pb-10'>Lorem, ipsum</h3>
            {[...Array(9)].map((_, i) => (
              <p key={i} className='border-b-2 text-[14px] lg:text-[16px] border-white hover:text-yellow-500 hover:border-yellow-500'>
                Lorem, ipsum dolor.
              </p>
            ))}
          </div>
          {/* Column 3 */}
          <div>
            <h3 className='font-bold text-[22px] lg:[24px] pb-5 lg:pb-10'>Lorem, ipsum</h3>
            {[...Array(9)].map((_, i) => (
              <p key={i} className='border-b-2 text-[14px] lg:text-[16px] border-white hover:text-yellow-500 hover:border-yellow-500'>
                Lorem, ipsum dolor.
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
