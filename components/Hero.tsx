import Image from 'next/image';
import { IoPaperPlaneOutline } from 'react-icons/io5';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center xl:px-20 px-6 my-16 lg:my-32 space-y-10 lg:space-y-0">
      {/* Text Content */}
      <div className="lg:w-1/2 w-full space-y-10 px-2 sm:px-6 xl:px-8 pt-20 lg:pt-0 lg:mr-10 text-start lg:text-left">
    <h1 className="text-[40px] ">
        Expand Your Knowledge With <span className='text-red-600  font-bold'>E-Books</span>
    </h1>

    <div className="space-y-5">
        <p className="text-[14px] lg:text-[16px] max-w-[90%] sm:max-w-[600px] md:max-w-[800px] xl:max-w-[1000px]">
            Tap expert writers and a partner who gets modern content marketing. In a sea of sameness, stand out in search with E-book writing Service.
        </p>
        <button className="bg-red-600 flex items-center text-lg sm:text-xl md:text-2xl font-bold text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl hover:bg-red-800 group">
            <span className="transform transition-transform mr-2 sm:mr-3 duration-500 group-hover:-translate-x-2">
                LIVE CHAT
            </span>
            <IoPaperPlaneOutline className="transform transition-transform duration-500 group-hover:translate-x-2" />
        </button>
    </div>
</div>


      {/* Image */}
      <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
        <Image
          src="/heroimage.png"
          alt="book"
          height={500}
          width={500}
          className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[800px] h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
