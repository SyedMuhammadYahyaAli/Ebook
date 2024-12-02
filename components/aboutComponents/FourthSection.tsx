"use client";
import React, { useState } from "react";

interface TeamMember {
  id: number;
  name: string;
  imageUrl: string;
}

const FourthSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    { id: 1, name: "Glen Phillips", imageUrl: "GP.jpg" },
    { id: 2, name: "Michael Clark", imageUrl: "MC.jpg" },
    { id: 3, name: "Lauren Bell", imageUrl: "LB.jpg" },
    { id: 4, name: "Nasser Hussain", imageUrl: "NH.jpg" },
    { id: 5, name: "Ellyse Perry", imageUrl: "EP.jpg" },
    { id: 6, name: "Kevin Peterson", imageUrl: "KP.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const itemsPerSlide = 3; // Number of items per slide

  const slide = (direction: number) => {
    const totalItems = teamMembers.length;
    const maxIndex = totalItems - itemsPerSlide; // The max possible index
    let newIndex = currentIndex + direction;

    // Loop back to the start or end if out of bounds
    if (newIndex < 0) newIndex = maxIndex; // Loop to the end when going left
    if (newIndex > maxIndex) newIndex = 0; // Loop to the start when going right

    setCurrentIndex(newIndex); // Update the index
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* Center-Aligned Button */}
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px 20px",
          fontSize: "28px", // Increased font size
          fontWeight: "bold", // Made text bold
          borderRadius: "5px",
          border: "none",
          marginBottom: "20px",
          width: "80%",
          maxWidth: "720px",
          height: "auto",
        }}
      >
       The Faces Behind Your Next Bestselling Ebook

      </button>

      {/* Responsive Paragraph */}
      <p
        style={{
          marginTop: "20px",
          fontSize: "18px", // Smaller font for small screens
          lineHeight: "1.6", // Improve readability
          maxWidth: "90%", // Shrink width for small screens
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Meet the legends behind the scenes! Our ebook experts aren’t just writers—they’re creative thinkers who turn ideas into unforgettable stories. From shaping spellbinding plots to nailing that perfect tone, they’ve got the skills to make your ebook a showstopper. Ready to meet the squad that’s about to make your bestseller dreams come true? Let’s go!

      </p>

      {/* Carousel Wrapper */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          overflow: "hidden",
          width: "100%",
          maxWidth: "887px",
          height: "auto",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Left Arrow */}
        <button
          onClick={() => slide(-1)} // Move left
          style={{
            position: "absolute",
            left: "10px",
            fontSize: "24px",
            cursor: "pointer", // Always enabled
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
            transform: `translateX(-${(currentIndex * 100) / itemsPerSlide}%)`, // Show 3 items at a time
            width: "100%",
          }}
        >
          {teamMembers.map((member) => (
            <div
              key={member.id}
              style={{
                flex: "0 0 33.33%", // Show 3 items at a time
                textAlign: "center",
                padding: "10px",
                position: "relative",
              }}
            >
              {/* Image Placeholder */}
              <div
                style={{
                  width: "100%",
                  maxWidth: "253px",
                  aspectRatio: "1",
                  backgroundColor: "gray",
                  margin: "0 auto 10px",
                  backgroundImage: `url(${member.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "all 0.3s ease", // Smooth transition for hover effect
                }}
                className="image-hover"
              ></div>
              {/* Name */}
              <div
                style={{
                  backgroundColor: "red",
                  color: "white",
                  padding: "5px",
                }}
              >
                {member.name}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => slide(1)} // Move right
          style={{
            position: "absolute",
            right: "10px",
            fontSize: "24px",
            cursor: "pointer", // Always enabled
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
          marginTop: "40px",
          marginBottom: '10px',
          width: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src="icon.png"
          alt="Horizontal Strip"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      <style jsx>{`
        /* Hover effect to turn images to black and white */
        .image-hover:hover {
          filter: grayscale(100%);
        }
      `}</style>
    </div>
  );
};

export default FourthSection;
