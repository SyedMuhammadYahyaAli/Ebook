import { SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const ThirdSection = () => {
  return (
    <section className="flex flex-col lg:flex-row mt-12 md:mt-28 gap-10 md:gap-20 items-center justify-center px-4 md:px-0 bg-[#02070a] h-auto py-12">
      {/* Text Content */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 md:p-10">
        <div className="max-w-full lg:max-w-5xl">
          <h2 className="xl:text-[28px] text-[32px] md:text-[36px] font-bold text-white leading-tight lg:text-[24px] mt-7">
            Bring Your Book to The Front of The Shelf
          </h2>
          <p className="text-white mt-4 py-4 text-[14px] lg:text-[16px]">
            Our experiments translate ideas into hot-selling books. Book an appointment today.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="flex items-center px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600">
              Contact Consultant
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <button className="flex items-center px-6 py-3 bg-black text-red-500 font-semibold rounded-md border border-red-500 hover:bg-red-50">
              View Pricing
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/3 flex justify-center items-center mb-8 md:mb-0">
        <div className="h-auto w-full max-w-[400px]">
          <Image
            src="/about2.png"
            alt="writing"
            layout="responsive"
            width={700}
            height={100}
            className="object-cover w-full h-full"
            title="writing"
          />
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
