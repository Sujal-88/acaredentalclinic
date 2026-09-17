"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

// For the best visual result (matching the image), use PNGs with transparent 
// backgrounds so the blue/gray card colors show behind the doctors.
const TEAM = [
  {
    id: 1,
    name: "Dr. Poonam Hudiya",
    role: "Chief Dentist",
    image: "/team/dr-aaron.png", 
  },
  {
    id: 2,
    name: "Dr. Ayush Bhangariya",
    role: "Orthodontist",
    image: "/team/dr-amely.png",
  },
  {
    id: 3,
    name: "Dr. Howard",
    role: "Oral Surgeon",
    image: "/team/dr-howard.png",
  },
  {
    id: 4,
    name: "Dr. Mike",
    role: "Endodontist",
    image: "/team/dr-mike.png",
  },
  {
    id: 5,
    name: "Dr. Sarah",
    role: "Pediatric Dentist",
    image: "/team/dr-sarah.png",
  },
];

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (activeIndex < TEAM.length - 1) {
      scrollToCard(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToCard(activeIndex - 1);
    }
  };

  const scrollToCard = (index: number) => {
    setActiveIndex(index);
    const slider = sliderRef.current;
    if (slider) {
      const cardWidth = 280; // approximate width + gap
      slider.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="team" className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-light text-gray-500 sm:text-5xl">
              Our
            </h2>
            <p className="mt-1 text-4xl font-extrabold tracking-tight text-[#0a2540] sm:text-5xl">
              Expert Team
            </p>
          </div>
          
          
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-10 pt-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {TEAM.map((member, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={member.id}
                  onClick={() => scrollToCard(index)}
                  className="group flex flex-col shrink-0 snap-start cursor-pointer"
                >
                  {/* Card Image Container */}
                  <div
                    className={`relative w-[260px] h-[320px] overflow-hidden rounded-t-[32px] rounded-b-xl transition-all duration-500 ease-in-out sm:w-[280px] sm:h-[340px] ${
                      isActive
                        ? "bg-[#DDF3FF] scale-105 shadow-xl z-10" // Active: Blue, Zoomed, Shadow
                        : "bg-[#F3F4F6] scale-95 shadow-sm z-0 hover:bg-gray-200" // Inactive: Gray, Scaled down
                    }`}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className={`object-cover object-bottom transition-all duration-500 ${
                        isActive
                          ? "grayscale-0 opacity-100" // Active: Colored
                          : "grayscale opacity-70 group-hover:opacity-90" // Inactive: Grayscale
                      }`}
                      sizes="(max-width: 640px) 260px, 280px"
                    />
                  </div>

                  {/* Text Container */}
                  <div className={`mt-6 text-center transition-all duration-500 ${isActive ? "scale-105" : "scale-95"}`}>
                    <h3
                      className={`text-xl font-bold ${
                        isActive ? "text-[#3AA8E0]" : "text-[#0a2540]"
                      }`}
                    >
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-gray-400">
                      {member.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows (Positioned below the first column as seen in image) */}
          <div className="mt-4 flex items-center gap-6 px-2">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous Team Member"
              className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all ${
                activeIndex === 0
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-gray-600 hover:border-[#3AA8E0] hover:text-[#3AA8E0] hover:bg-[#EAF7FE]"
              }`}
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={activeIndex === TEAM.length - 1}
              aria-label="Next Team Member"
              className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all ${
                activeIndex === TEAM.length - 1
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-gray-600 hover:border-[#3AA8E0] hover:text-[#3AA8E0] hover:bg-[#EAF7FE]"
              }`}
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}