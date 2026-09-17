"use client";

import React from "react";
import Link from "next/link";
import { Globe, Send, Camera, MapPin, Phone, Mail } from "lucide-react";
import { Anton } from "next/font/google";

// Reusing the display font for the massive background text
const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const TREATMENTS = [
  { name: "Cosmetic Procedures", href: "#services" },
  { name: "Dental Implants", href: "#services" },
  { name: "Dentures & Bridges", href: "#services" },
  { name: "Root Canals", href: "#services" },
  { name: "Teeth Whitening", href: "#services" },
  { name: "Orthodontics", href: "#services" },
];

const OTHER_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Book Appointment", href: "#booking-form" },
  { name: "Our Expert Team", href: "#team" },
  { name: "Contact Us", href: "#contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-white to-[#EAF7FE] pt-10 overflow-hidden">
      
      {/* 1. Giant Faded Background Text */}
      <div className="w-full overflow-hidden select-none mb-8 sm:mb-12 pointer-events-none">
        <h2 
          className={`${display.className} text-[11vw] leading-[0.8] tracking-tighter text-[#3AA8E0]/20 uppercase whitespace-nowrap px-4 sm:px-8`}
        >
          A Care Dental Clinic
        </h2>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 pb-8">
        
        {/* 2. Main Footer Content (3 Columns) */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8 lg:gap-12">
          
          {/* Column 1: Clinic Info (Takes up 5 cols on desktop) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <Link href="#hero" className="flex flex-col">
              <span className={`text-3xl uppercase tracking-wide text-[#3AA8E0] leading-none ${display.className}`}>
                A Care Dental
              </span>
            </Link>
            
            <div className="flex flex-col gap-4 text-sm font-medium text-[#0a2540]">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-[#ff5a00] mt-0.5" />
                <p className="leading-relaxed">
                  A Care Dental Multispecialty Clinic<br />
                  123 Smile Avenue, Medical Hub District<br />
                  Nagpur, Maharashtra 440001
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-[#ff5a00]" />
                <a href="tel:+918880000000" className="hover:text-[#ff5a00] transition-colors">
                  +91 888 000 0000 / 0712-2737987
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-[#ff5a00]" />
                <a href="mailto:consult@acaredental.com" className="hover:text-[#ff5a00] transition-colors">
                  consult@acaredental.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Available Treatments (Takes up 4 cols on desktop) */}
          <div className="md:col-span-4">
            <h3 className="mb-6 text-sm font-extrabold uppercase tracking-widest text-[#0a2540]">
              Available Treatments
            </h3>
            <ul className="flex flex-col gap-3 text-sm font-medium text-gray-600">
              {TREATMENTS.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="hover:text-[#ff5a00] hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Other Links (Takes up 3 cols on desktop) */}
          <div className="md:col-span-3">
            <h3 className="mb-6 text-sm font-extrabold uppercase tracking-widest text-[#0a2540]">
              Other
            </h3>
            <ul className="flex flex-col gap-3 text-sm font-medium text-gray-600">
              {OTHER_LINKS.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="hover:text-[#ff5a00] hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 3. Bottom Bar: Copyright & Socials */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-[#3AA8E0]/20 pt-8 sm:flex-row">
          
          <p className="text-xs font-medium text-gray-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} A Care Dental Clinic. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" aria-label="Website" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff5a00]/10 text-[#ff5a00] transition-colors hover:bg-[#ff5a00] hover:text-white">
              <Globe className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Send message" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff5a00]/10 text-[#ff5a00] transition-colors hover:bg-[#ff5a00] hover:text-white">
              <Send className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff5a00]/10 text-[#ff5a00] transition-colors hover:bg-[#ff5a00] hover:text-white">
              <Camera className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff5a00]/10 text-[#ff5a00] transition-colors hover:bg-[#ff5a00] hover:text-white">
              <span className="text-sm font-bold">in</span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}