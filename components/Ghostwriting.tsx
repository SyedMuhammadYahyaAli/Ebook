import Image from 'next/image'
import React from 'react'


type Slide = {
  id: number;
  title: string;
  subtitle: string;
  src: string; // URL to the image
};

const slides: Slide[] = [
  { id: 1, title: 'The Clarity Compass', subtitle: 'James Radcliffe', src: '/side-book1.png' },
  { id: 2, title: 'The Clarity Compass', subtitle: 'James Radcliffe', src: '/side-book2.png' },
  { id: 3, title: 'Title 3', subtitle: 'Subtitle 3', src: '/side-book3.png' },
  { id: 4, title: 'Title 3', subtitle: 'Subtitle 3', src: '/side-book4.png' },
  { id: 5, title: 'Title 3', subtitle: 'Subtitle 3', src: '/side-book5.png' },
  { id: 6, title: 'Title 3', subtitle: 'Subtitle 3', src: '/side-book6.png' },
  { id: 7, title: 'Title 3', subtitle: 'Subtitle 3', src: '/side-book7.png' },
  { id: 8, title: 'Title 3', subtitle: 'Subtitle 3', src: '/side-book8.png' },
  { id: 9, title: 'Title 3', subtitle: 'Subtitle 3', src: '/side-book9.png' },
  { id: 10, title: 'Title 3', subtitle: 'Subtitle 3', src: '/side-book10.png' },
  { id: 11, title: 'Title 3', subtitle: 'Subtitle 3', src: '/side-book11.png' },
  { id: 12, title: 'Title 3', subtitle: 'Subtitle 3', src: '/side-book12.png' },
];



const Ghostwriting = () => {
  return (
    <div className='mx-4 sm:mx-8 2xl:mx-32 pt-20 flex'>
      {/* left */}
      <div className='w-[1200px] space-y-8'>

        <h2 className='text-[26px] lg:text-[28px] font-bold'>
        Hire an <span className='text-red-500'>Affordable Ghostwriting</span> Company to Vanish Your Publishing Problems!
        </h2>
        <p className='text-[14px] lg:text-[16px]'>If you are looking around for the cheapest eBook writers for hiring purposes, put the seal on your search! EBookwritings.com is the cheapest eBook ghostwriting agency offering its high-quality eBook writing services at the lowest prices. Our cheap eBook writing service helps the audience to work with the first-class eBook ghostwriting company, without breaking the bank.</p>
        <p className='text-[14px] lg:text-[16px]'>To further make the experience memorable for the audience, several lucrative packages are offered by us. These packages empower clients to get their bulk orders completed without spending too much. However, quality is our foremost significant priority, and that is never traded off for low-rate services. When you choose us over other eBook writing firms, you can have full confidence that an excellent value would be delivered to you.</p>
        
        <h2 className='text-[26px] lg:text-[28px] font-bold'>
        Leading <span className='text-red-500'>E-book Writing Service</span> in USA That Takes Your Ideas to Next Level
        </h2>
        <p className='text-[14px] lg:text-[16px]'>Our team of pro ghostwriters is sweeping USA by providing efficient eBook writing service across USA, counting Huston, New Jersey, Texas, California, and in all other states of it. Experienced book writing professionals of our agency compose and design winning content while keeping the story and its writer in complete consideration.</p>
        <p className='text-[14px] lg:text-[16px]'>We pay equal attention to all your details. Be it a selected theme, special additions, or the type of tone you need. Professional ghostwriters of our company can harmonize and pen down each thing accordingly. Apart from this, our team of grammatologists keenly works on cleaning all writing bugs from your book along with accurate formatting.</p>
        
        <h2 className='text-[26px] lg:text-[28px] font-bold'>
        Hire an <span className='text-red-500'>Affordable Ghostwriting</span> Company to Vanish Your Publishing Problems!
        </h2>
        <p className='text-[14px] lg:text-[16px]'>If you are looking around for the cheapest eBook writers for hiring purposes, put the seal on your search! EBookwritings.com is the cheapest eBook ghostwriting agency offering its high-quality eBook writing services at the lowest prices. Our cheap eBook writing service helps the audience to work with the first-class eBook ghostwriting company, without breaking the bank.</p>
        <p className='text-[14px] lg:text-[16px]'>To further make the experience memorable for the audience, several lucrative packages are offered by us. These packages empower clients to get their bulk orders completed without spending too much. However, quality is our foremost significant priority, and that is never traded off for low-rate services. When you choose us over other eBook writing firms, you can have full confidence that an excellent value would be delivered to you.</p>

        <h2 className='text-[26px] lg:text-[28px] font-bold'>
        Leading <span className='text-red-500'>E-book Writing Service</span> in USA That Takes Your Ideas to Next Level
        </h2>
        <p className='text-[14px] lg:text-[16px]'>Our team of pro ghostwriters is sweeping USA by providing efficient eBook writing service across USA, counting Huston, New Jersey, Texas, California, and in all other states of it. Experienced book writing professionals of our agency compose and design winning content while keeping the story and its writer in complete consideration.</p>
        <p className='text-[14px] lg:text-[16px]'>We pay equal attention to all your details. Be it a selected theme, special additions, or the type of tone you need. Professional ghostwriters of our company can harmonize and pen down each thing accordingly. Apart from this, our team of grammatologists keenly works on cleaning all writing bugs from your book along with accurate formatting.</p>

      </div>
      {/* right */}
<div className='hidden lg:block h-[1800px] xl:h-[1500px] w-[800px] bg-gray-900 rounded-lg ml-10 relative overflow-hidden'>
  <div className="flex flex-col animate-scroll-vertical h-[200%] space-y-[500px]">
    {slides.map((slide) => (
      <div
        key={slide.id}
        className="h-64 flex-shrink-0 p-4 text-center"
      >
        <Image
          src={slide.src}
          alt={slide.title}
          width={600}
          height={200}
          className="rounded-lg mx-auto"
        />
        <h3 className="text-[24px] font-bold mt-2 text-white">{slide.title}</h3>
        <p className="text-white text-[16px]">{slide.subtitle}</p>
      </div>
    ))}
    {/* Duplicate the slides for continuous scrolling */}
    {slides.map((slide) => (
      <div
        key={`${slide.id}-copy`}
        className="h-64 flex-shrink-0 p-4 text-center"
      >
        <Image
          src={slide.src}
          alt={slide.title}
          width={300}
          height={200}
          className="rounded-lg mx-auto"
        />
        <h2 className="text-lg font-semibold mt-2">{slide.title}</h2>
        <p className="text-gray-500">{slide.subtitle}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  )
}

export default Ghostwriting
