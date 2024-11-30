
import React from 'react';

const SixthSection = () => {
  return (
    <section className="flex flex-col lg:flex-row mt-12 md:mt-28 gap-10 md:gap-20 items-center justify-center px-4 md:px-0 bg-[#02070a]">
      {/* Text Section */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 md:p-10 text-center lg:text-left pt-12">
        <div className="max-w-full lg:max-w-5xl">
        <span className="xl:text-[28px] text-[28px] md:text-[36px] font-bold text-white leading-tight lg:text-[24px] mt-7 pt-4">
            Love to Hear From You Get In Touch 👋
        </span>

          <p className="text-white mt-4 text-[14px] lg:text-[16px]">
            Tap expert writers and a partner who gets modern content marketing. In a sea of sameness, stand out in search with E-book writing Service.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-start items-start mb-8 md:mb-0">
        <div className="h-auto w-full max-w-[400px] min-h-[400px] p-4">
          {/* Name and Phone Number Fields */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4 pt-6">
            {/* Name Field */}
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full sm:w-[245px] p-2 rounded-lg border border-gray-300 bg-black text-white placeholder-gray-500"
            />

            {/* Phone Number Field */}
            <input
              type="text"
              placeholder="Phone number"
              className="w-full sm:w-[245px] p-2 rounded-lg border border-gray-300 bg-black text-white placeholder-gray-500"
            />
          </div>

          {/* Textarea Field */}
          <textarea
            placeholder="Type text here"
            className="w-full p-2 mb-4 rounded-lg border border-gray-300 bg-black text-white placeholder-gray-500"
            rows={4}
          />

          {/* Button */}
          <button className="w-full sm:w-[150px] p-2 bg-black-600 text-white rounded-lg font-bold border border-white">
            Request a Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default SixthSection;
