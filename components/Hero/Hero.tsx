"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Anton } from "next/font/google";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hero-display",
});

const stats = [
  { value: "150+", label: "Expert Dentists" },
  { value: "20+", label: "Dental Clinics across UK" },
  { value: "03+", label: "Countries presence" },
];

const marqueeItems = ["Braces", "Denta Care", "Dentist", "Dentures", "Invisalign", "Teeth Cleaning"];

const heroImages = [
  { src: "/hero/clinic-1.jpg", alt: "Bright, modern dental treatment room" },
  { src: "/hero/clinic-2.jpg", alt: "Dentist consulting with a smiling patient" },
  { src: "/hero/clinic-3.jpg", alt: "Close-up of advanced dental equipment" },
  { src: "/hero/clinic-4.jpg", alt: "Friendly, welcoming clinic reception area" },
  { src: "/hero/clinic-5.jpg", alt: "Friendly, welcoming clinic reception area" },
  { src: "/hero/clinic-6.jpg", alt: "Friendly, welcoming clinic reception area" },
  { src: "/hero/clinic-7.jpg", alt: "Friendly, welcoming clinic reception area" },
];

const SLIDE_DURATION_MS = 4500;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startRotation = () => {
    if (intervalRef.current) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, SLIDE_DURATION_MS);
  };

  const stopRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startRotation();
    return stopRotation;
  }, []);

  return (
    <section 
      id="hero" 
      className="relative isolate w-full h-[100dvh] min-h-[600px] overflow-hidden bg-[#04263f]"
      onMouseEnter={stopRotation}
      onMouseLeave={startRotation}
    >
      {/* ---------- Full-bleed rotating background ---------- */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        {heroImages.map((image, i) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-[1400ms] ease-in-out motion-safe:animate-kenburns ${
              i === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Scrims: Reduced opacity for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04263f]/70 via-[#04263f]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* ---------- Foreground content ---------- */}
      {/* The max-w-7xl keeps the text aligned with your navbar, while the bg goes full screen */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          
          {/* Eyebrow Text: Smaller "Every smile matters" */}
          <p className="mb-3 text-sm font-bold tracking-[0.25em] text-white/90 uppercase drop-shadow-md sm:mb-4 sm:text-base lg:text-lg">
            Every Smile Matters
          </p>

          {/* Main Headline: Larger Clinic Name */}
          <h1
            className={`${display.className} select-none text-[16vw] leading-[0.92] tracking-tight text-white uppercase drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)] sm:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem]`}
          >
            <span className="block">A Care</span>
            <span className="block text-[#7FCDF3]">Dental Clinic</span>
          </h1>

          <div className="mt-8 flex flex-col gap-6 sm:mt-10">
            <p className="max-w-lg rounded-2xl bg-white/95 px-6 py-5 text-base leading-relaxed text-gray-700 shadow-xl ring-1 ring-white/40 backdrop-blur-sm sm:text-lg">
              Best Dental Clinic in Nagpur. From routine check-ups to advanced treatments, we ensure your smile stays healthy and radiant.
            </p>

            <a
              href="#booking-form"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#FF5A00] px-8 py-4 text-base font-bold text-white shadow-[0_8px_20px_-6px_rgba(255,90,0,0.5)] transition-all hover:-translate-y-0.5 hover:bg-[#e04f00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5A00]"
            >
              Book Appointment
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* ---------- Slide indicators ---------- */}
      {/* Positioned at the bottom right of the screen for a modern cinematic feel */}
      <div className="absolute bottom-8 right-8 z-10 flex items-center justify-end gap-2 sm:right-12 lg:right-16">
        {heroImages.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`Show slide ${i + 1}: ${image.alt}`}
            aria-current={i === activeIndex}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}