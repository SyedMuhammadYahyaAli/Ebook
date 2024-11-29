import React from 'react';
import Image from 'next/image';

const Features = () => {
    const features = [
        {
            icon: '/card1.jpeg',
            title: 'Book Writing',
            description: 'Our expert writing crew is available to meet your every demand.'
        },
        {
            icon: '/card2.jpeg',
            title: 'At Your Service, Anytime',
            description: 'Working past sunset? No problem, we’re here for that. We offer 24/7 support so you can reach us whenever inspiration—or panic—strikes. Your success never sleeps, and neither do we!'
        },
        {
            icon: '/card3.jpeg',
            title: 'Budget-Friendly Brilliance',
            description: 'We get it—budgets are tight. That’s why we’ve kept our pricing super reasonable. Exceptional business proposal writing service providers deliver top-quality without leaving your wallet crying in the corner.'
        },
        {
            icon: '/card4.jpeg',
            title: 'Made Just for ‘You!’',
            description: 'No two businesses are the same, so why should your plan be? With our expert help writing a business proposal, every plan is custom-crafted to meet your specific needs. Consider us the tailors of the business world—perfect fit, every time.'
        },
        {
            icon: '/card5.jpeg',
            title: 'Perfection in Every Word',
            description: 'We don’t just stop at writing; we fine-tune, polish, and perfect every word. With our comprehensive business proposal writing services, we go the extra mile with detailed editing and proofreading.'
        },
        {
            icon: '/card4.jpeg',
            title: 'Market Research Magic',
            description: 'Want to create a killer business plan? We dig deep into your market, uncovering juicy insights on competitors, trends, and customer behaviors, ensuring your plan isn’t just solid—it’s bulletproof.'
        }
    ];

    return (
        <>
            <section className='px-8 md:px-8 lg:px-10 xl:px-32 py-10 space-y-10'>
                

                <div>
                    <h2 className='text-[26px] lg:text-[28px] font-bold mb-5'>OUR <span className='text-red-500'>SERVICES</span></h2>
                    <p className='w-auto lg:w-1/2 text-[14px] lg:text-[16px]'>Tap expert writers and a partner who gets modern content marketing. In a sea of sameness, stand out in search with E-book writing Service</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mx-auto max-w-[1600px]'>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className='flex flex-col items-start shadow-lg rounded-lg bg-black hover:bg-red-950 text-white overflow-hidden'
                        >
                            <Image
                                src={feature.icon}
                                alt={`${feature.title} icon`}
                                layout="responsive"
                                width={500} 
                                height={250} 
                                className='w-full'
                            />
                            <div className='p-6'>
                                <span className='font-bold text-xl mb-2 text-start block'>
                                    {feature.title}
                                </span>
                                <p className='text-start'>
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Features;
