"use client";

import React from "react";

const services = [
  "Cosmetic procedures",
  "Dental implants",
  "Dentures & bridges",
  "Extractions",
  "Fillings and sealants",
  "Laser dentistry",
  "Oral surgery",
  "Root canals",
  "Teeth cleaning",
  "Teeth reshaping",
  "Teeth whitening",
  "Veneers & crowns",
  "X-ray",
  "Orthodontics",
  "Invisible braces",
];

export default function ServicesMarquee() {
  return (
    <div className="relative flex w-full overflow-hidden bg-[#EAF7FE] py-5 border-y border-[#cbe9f9]">
      {/* 
        Inline styles for the marquee keyframes. 
        Translating exactly -50% works because we duplicate the array below.
      */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: marquee 45s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Container holding two identical sets of the items for a seamless loop */}
      <div className="animate-scroll flex items-center">
        {[...services, ...services].map((service, index) => (
          <div key={index} className="flex items-center">
            <span className="whitespace-nowrap text-xl md:text-2xl font-medium text-[#0a2540] capitalize">
              {service}
            </span>
            <span className="mx-6 md:mx-10 text-2xl font-light text-[#0a2540]/40">
              +
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}