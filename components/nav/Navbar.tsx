"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Add a subtle shadow when scrolling down the page
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mapped to the specific sections of your single-page layout
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Treatments", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#testimonials" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Logo Section - Links back to Hero */}
        <div className="flex shrink-0 items-center">
          <Link href="#hero" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white font-bold">
              A
            </div>
            <span className="text-xl font-bold uppercase tracking-tight text-blue-500">
              A Care Dental Clinic
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex lg:gap-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button - Targets the hard conversion Booking Form */}
        <div className="hidden lg:flex lg:items-center">
          <Link
            href="#booking-form"
            className="rounded-full bg-[#ff5a00] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#e04f00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5a00] transition-all"
          >
            Book Free Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block rounded-md px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#booking-form"
              className="mt-4 block w-full rounded-full bg-[#ff5a00] px-3 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-[#e04f00]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;