"use client";
import React, { useState } from 'react';

interface TeamMember {
  id: number;
  name: string;
  imageUrl: string;
}

const FourthSection: React.FC = () => {
  // Step 1: Define your team members
  const teamMembers: TeamMember[] = [
    { id: 1, name: "Glen Phillips", imageUrl: "GP.jpg" },
    { id: 2, name: "Michael Clark", imageUrl: "MC.jpg" },
    { id: 3, name: "Lauren Bell", imageUrl: "LB.jpg" },
    { id: 4, name: "Nasser Hussain", imageUrl: "NH.jpg" },
    { id: 5, name: "Ellyse Perry", imageUrl: "EP.jpg" },
    { id: 6, name: "Kevin Peterson", imageUrl: "KP.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Function to handle slide movement
  const slide = (direction: number) => {
    const totalItems = teamMembers.length;
    const nextIndex = (currentIndex + direction + totalItems) % totalItems;
    setCurrentIndex(nextIndex);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* Center-Aligned Button */}
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px 20px",
          fontSize: "35px",
          borderRadius: "5px",
          border: "none",
          marginBottom: "20px",
          width:480,
          height:87
        }}
      >
        Meet Our Team
      </button>
      {/* Center-Aligned Paragraph */}
      <p
        className='text-[14px] lg:text-[16px] items-center justify-center text-center'
      >
        Reach out to our team at Britain Bookwriting, and we will ensure to deliver you an excellent, error-free eBook version of your fantastic work. We promise that our low-cost eBooks will excel in quality while staying true to your unique needs.
      </p>

      {/* Carousel Wrapper */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          overflow: "hidden",
          width: "887px", // Set carousel width to 887px
          height: "310px", // Set carousel height to 310px
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Left Arrow */}
        <button
          onClick={() => slide(-1)}
          style={{
            position: "absolute",
            left: "0",
            fontSize: "24px",
            cursor: "pointer",
            color: "red",
            background: "none",
            border: "none",
          }}
        >
          &lt;
        </button>

        {/* Carousel Items */}
        <div
          id="carousel"
          style={{
            display: "flex",
            transition: "transform 0.5s ease",
            transform: `translateX(-${currentIndex * 33.33}%)`, // Slide based on currentIndex
            width: "100%", // Ensures the entire carousel is a single block
          }}
        >
          {teamMembers.map((member) => (
            <div
              key={member.id}
              style={{
                flex: "0 0 33.33%", // Ensure only 3 items are shown at a time
                textAlign: "center",
                padding: "10px",
                height: "100%", // Ensure items stretch to fit the height of the carousel
              }}
            >
              {/* Image Placeholder */}
              <div
                style={{
                  width: "253px",  // Set image width to 253px
                  height: "253px", // Set image height to 253px
                  backgroundColor: "gray",
                  margin: "0 auto 10px",
                  backgroundImage: `url(${member.imageUrl})`, // Set background image
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              {/* Name */}
              <div
                style={{
                  backgroundColor: "red",
                  color: "white",
                  padding: "5px",
                }}
              >
                {member.name} {/* Display member name */}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => slide(1)}
          style={{
            position: "absolute",
            right: "0",
            fontSize: "24px",
            cursor: "pointer",
            color: "red",
            background: "none",
            border: "none",
          }}
        >
          &gt;
        </button>
      </div>

      {/* After the Carousel, Add the Horizontal Image Strip */}
      <div
        style={{
          marginTop: "40px", // Space between carousel and image strip
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* insert below it */}
        <img
          src="icon.png" // Replace with your image URL
          alt="Horizontal Strip"
          style={{
            width: "100%",
            height: "auto", // Maintain aspect ratio
          }}
        />
        {/* insert above it */}
      </div>
    </div>
  );
};

export default FourthSection;
