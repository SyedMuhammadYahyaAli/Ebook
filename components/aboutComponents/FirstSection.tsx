import Image from 'next/image';
import React from 'react';

const FirstSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row 2xl:flex-row pt-12 md:pt-28 gap-10 md:gap-20 items-center justify-center px-4 md:px-8 lg:px-20 mb-11 bg-[#e3ebf515] pb-20">
      {/* Left Content */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 2xl:ml-0 pt-10 md:pt-16">
        <div className="max-w-full">
          {/* Heading */}
          <h1 className="text-[24px] sm:text-[28px] md:text-[60px] font-bold text-[#010405] leading-tight m-0 p-0">
  Learn About Our <span className="text-red-500 block">Expertise</span>
</h1>


          {/* Description */}
          <p className="text-[#0c0304] mt-4 text-[18px] sm:text-[16px] lg:text-[18px] leading-relaxed">
            Get connected with our panel of qualified authors and ghostwriters for hire to draw readers' attention and embark on a prosperous online journey ghostwriters for hire to draw readers' attention and embark on a prosperous online journey.
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4 space-y-4 sm:space-y-0">
            <button className="flex items-center justify-center px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600">
              Contact Consultant
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="flex items-center justify-center px-6 py-3 bg-white text-red-500 font-semibold rounded-md border border-red-500 hover:bg-red-50">
              View Pricing
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center items-center w-full lg:w-1/3 pt-10 md:pt-16">
        <div className="w-full max-w-[1300px] h-[250px] sm:h-[430px]">
          <Image
            src="/about1.png"
            alt="expert"
            width={1000}
            height={600}
            className="h-full w-full "
            title="expert"
          />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
