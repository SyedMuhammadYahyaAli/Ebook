import React from 'react';

const FifthSection = () => {
  
    return (
        
      <section className="flex flex-col lg:flex-row mt-12 md:mt-28 gap-10 md:gap-20 items-center justify-center px-4 md:px-0 bg-[#f8f8f7] ml-[400px]">



 
  <div className="flex flex-col justify-center items-center w-full lg:w-1/2 md:p-10 text-center"> 
    <div className="max-w-full lg:max-w-5xl">
    <h1 className="text-[40px] sm:text-[40px] md:text-[40px] font-bold text-[#000000] leading-tight">

        Take <span className="text-red-500">Your Projects</span> <span className="text-black-500">to the next level with our experts</span>
      </h1>
      
      <div className="flex justify-center space-x-4 mt-6">
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

 
  <div className="w-full lg:w-1/3 flex justify-center items-center mb-8 md:mb-0">
    
  </div>

</section>

    
    );
};

export default FifthSection;
