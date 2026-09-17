"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Text & CTA Section */}
        <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left: Headers */}
          <div>
            <h2 className="text-3xl font-light text-gray-500 sm:text-4xl lg:text-5xl">
              About
            </h2>
            <p className="mt-1 text-4xl font-extrabold tracking-tight text-[#0a2540] sm:text-5xl lg:text-6xl">
              A Care Dental
            </p>
          </div>

          {/* Right: Info & CTA */}
          <div className="flex flex-col justify-center space-y-5">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#ff5a00]">
              Our Vision
            </h3>
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
              At A Care Dental, our vision is to provide world-class, personalized 
              dental care in a comfortable and friendly environment. By blending 
              advanced clinical technology with compassionate service, we ensure 
              every treatment is pain-free, precise, and tailored to protect your 
              healthiest smile.
            </p>
            
            {/* Added CTA as requested */}
            <div className="pt-2">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 font-semibold text-[#ff5a00] transition-colors hover:text-[#e04f00]"
              >
                Learn more about our team
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Image Gallery (Staggered Grid) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Image 1: Wide */}
            <div className="relative h-64 w-full overflow-hidden rounded-[32px] bg-gray-100 sm:h-72 lg:h-80 shadow-sm">
              <Image
                src="/about/clinic-equipment.jpg" // Add your image to public/about/
                alt="Advanced Dental Equipment"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 backdrop-blur-md shadow-sm">
                Advanced Tech
              </div>
            </div>

            {/* Image 2: Square-ish (offset to the right) */}
            <div className="relative h-80 w-11/12 self-end overflow-hidden rounded-[32px] bg-gray-100 shadow-sm lg:h-96">
              <Image
                src="/about/senior-patient.jpg" // Add your image to public/about/
                alt="Happy Senior Patient"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Image 3: Square-ish (offset to the left) */}
            <div className="relative h-80 w-11/12 overflow-hidden rounded-[32px] bg-gray-100 shadow-sm lg:h-96">
              <Image
                src="/about/young-patient.jpg" // Add your image to public/about/
                alt="Smiling Young Patient"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-6 right-6 rounded-full bg-[#EAF7FE]/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0a2540] backdrop-blur-md shadow-sm">
                Patient Priority
              </div>
            </div>

            {/* Image 4: Wide */}
            <div className="relative h-64 w-full overflow-hidden rounded-[32px] bg-gray-100 sm:h-72 lg:h-80 shadow-sm">
              <Image
                src="/about/clinic-room.jpg" // Add your image to public/about/
                alt="Clean Dental Treatment Room"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}