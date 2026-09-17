"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Mail, Clock } from "lucide-react";
import { Anton } from "next/font/google";

// Import the same display font used in the Hero section
const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hero-display",
});

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleMobileDropdown = (name) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40); // Adjusted to account for top bar
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // FMS-style Navigation Structure with Submenus
  const navLinks = [
    { name: "Home", href: "#hero" },
    {
      name: "About Us",
      href: "#about",
      subLinks: [
        { name: "Our Doctors", href: "#doctors" },
        { name: "Clinic Tour", href: "#tour" },
        { name: "Awards & Recognition", href: "#awards" },
      ],
    },
    {
      name: "Treatments",
      href: "#services",
      subLinks: [
        { name: "Dental Implants", href: "#implants" },
        { name: "Cosmetic Dentistry", href: "#cosmetic" },
        { name: "Root Canal Treatment", href: "#rct" },
        { name: "Orthodontics (Braces)", href: "#orthodontics" },
        { name: "Pediatric Dentistry", href: "#pediatric" },
      ],
    },
    { name: "Smile Gallery", href: "#gallery" },
    { name: "International Patients", href: "#international" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* 1. TOP BAR (Static - disappears on scroll) */}
      <div className="hidden w-full bg-[#0a2540] px-4 py-2 text-xs text-gray-200 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-[#ff5a00]" />
              <span>+91 888 000 0000 (24/7 Emergency)</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-[#ff5a00]" />
              <span>consult@acaredental.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Clock className="h-3.5 w-3.5 text-[#ff5a00]" />
            <span>Mon - Sat: 9:00 AM - 8:00 PM | Sun: By Appointment</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR (Sticky) */}
      <header
        className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
          isScrolled ? "shadow-md py-2" : "shadow-sm py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Logo Section */}
          <div className="flex shrink-0 items-center">
            <Link href="#hero" className="flex items-center gap-3">
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-[#7FCDF3] text-[#0a2540] text-2xl shadow-md ${display.className}`}>
                A
              </div>
              <div className="flex flex-col">
                <span className={`text-3xl uppercase tracking-wide text-[#0a2540] leading-none ${display.className}`}>
                  A Care Dental
                </span>
                <span className="text-[11px] font-bold tracking-widest text-gray-500 uppercase mt-1">
                  Multispecialty Clinic
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex lg:items-center lg:gap-x-6 xl:gap-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.subLinks ? (
                  // Dropdown Parent - Updated to Anton Font & Larger Size
                  <button className={`flex items-center gap-1 py-2 text-[17px] tracking-wide uppercase text-gray-800 hover:text-[#7FCDF3] transition-colors ${display.className}`}>
                    {link.name}
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  // Standard Link - Updated to Anton Font & Larger Size
                  <Link
                    href={link.href}
                    className={`py-2 text-[17px] tracking-wide uppercase text-gray-800 hover:text-[#7FCDF3] transition-colors ${display.className}`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Desktop Dropdown Menu - Kept Sans-Serif for Readability, but increased size */}
                {link.subLinks && (
                  <div className="absolute left-0 top-full hidden w-64 pt-2 group-hover:block transition-all">
                    <div className="rounded-lg bg-white p-2 shadow-xl ring-1 ring-black/5">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          className="block rounded-md px-4 py-3 text-[15px] font-medium text-gray-600 hover:bg-[#EAF7FE] hover:text-[#0a2540] transition-colors"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex lg:items-center">
            <Link
              href="#booking-form"
              className={`rounded-full bg-[#ff5a00] px-7 py-3 text-[17px] tracking-widest uppercase text-white shadow-md hover:bg-[#e04f00] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5a00] transition-all ${display.className}`}
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-[#7FCDF3] focus:outline-none"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-8 w-8" aria-hidden="true" />
              ) : (
                <Menu className="block h-8 w-8" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* 3. MOBILE MENU PANEL */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl max-h-[85vh] overflow-y-auto">
            <div className="space-y-1 px-4 pb-6 pt-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.subLinks ? (
                    // Mobile Dropdown
                    <>
                      <button
                        className={`flex w-full items-center justify-between rounded-md px-3 py-3 text-lg tracking-wide uppercase text-gray-800 hover:bg-gray-50 ${display.className}`}
                        onClick={() => toggleMobileDropdown(link.name)}
                      >
                        {link.name}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            activeMobileDropdown === link.name ? "rotate-180 text-[#7FCDF3]" : ""
                          }`}
                        />
                      </button>
                      {/* Mobile Sublinks */}
                      {activeMobileDropdown === link.name && (
                        <div className="mt-1 space-y-1 bg-gray-50 px-4 py-3 rounded-md">
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:text-[#0a2540]"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    // Mobile Standard Link
                    <Link
                      href={link.href}
                      className={`block rounded-md px-3 py-3 text-lg tracking-wide uppercase text-gray-800 hover:bg-gray-50 hover:text-[#7FCDF3] ${display.className}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link
                  href="#booking-form"
                  className={`block w-full rounded-full bg-[#ff5a00] px-3 py-4 text-center text-lg tracking-widest uppercase text-white shadow-sm hover:bg-[#e04f00] ${display.className}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Free Consultation
                </Link>
              </div>
              
              {/* Mobile Contact Info */}
              <div className="mt-6 flex flex-col gap-3 text-sm text-gray-500 px-3 pb-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-[#ff5a00]" />
                  <span className="font-medium">+91 888 000 0000</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-[#ff5a00]" />
                  <span className="font-medium">consult@acaredental.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;