import Image from 'next/image';
import React from 'react';

const FirstSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row 2xl:flex-row pt-12 md:pt-28 gap-10 md:gap-20 items-center justify-center px-8 lg:px-20 mb-11 bg-[#12458015] pb-20">
      
      <div className="flex flex-col justify-center w-full lg:w-1/2 2xl:ml-28 pt-16">
        <div className="max-w-full">
          <h1 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#010405] leading-tight">
            Learn About Our <span className="text-red-500">Expertise</span>
          </h1>
          <p className="text-[#0c0304] mt-4 text-[14px] lg:text-[16px] leading-relaxed">
            Get connected with our panel of qualified authors and ghostwriters for hire to draw readers' attention and embark on a prosperous online journey.
          </p>

          <div className="flex space-x-4">
            <button className="flex items-center px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600">
              Contact Consultant
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <button className="flex items-center px-6 py-3 bg-white text-red-500 font-semibold rounded-md border border-red-500 hover:bg-red-50">
              View Pricing
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center items-center w-full lg:w-1/3 pt-16">
        <div className="w-[600px] h-[300px] 2xl:h-[300px]">
          <Image
            src="/about1.png"
            alt="expert"
            width={600}
            height={300}  // Corrected height to match image aspect ratio
            className="h-full w-auto object-cover"
            title="expert"
          />
        </div>
      </div>

    </section>
  );
};

export default FirstSection;
