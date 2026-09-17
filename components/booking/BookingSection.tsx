"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";

const SERVICES = [
  "Cosmetic Procedures",
  "Dental Implants",
  "Dentures & Bridges",
  "Extractions",
  "Fillings & Sealants",
  "Laser Dentistry",
  "Oral Surgery",
  "Root Canals",
  "Teeth Cleaning",
  "Teeth Reshaping",
  "Teeth Whitening",
  "Veneers & Crowns",
  "Orthodontics",
  "Invisible Braces",
];

export default function BookingSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNo: "",
    email: "",
    age: "",
    service: "",
    clinic: "",
    date: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Appointment Request:", formData);
    alert("Appointment request submitted successfully!");
  };

  return (
    <section id="booking-form" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container */}
        <div className="relative flex flex-col md:flex-row overflow-hidden rounded-[40px] bg-[#F4F6F8] shadow-sm">
          
          {/* Left Column: Form Area */}
          <div className="relative z-10 w-full p-8 md:w-3/5 lg:w-1/2 lg:p-14">
            
            {/* Heading */}
            <h2 className="mb-10 text-4xl sm:text-5xl tracking-tight text-[#0a2540]">
              <span className="font-light text-gray-400">Book</span>{" "}
              <span className="font-extrabold">Appointment</span>
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              {/* Row 1: Name & Contact */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="fullName"
                  placeholder="FULL NAME"
                  required
                  className="w-full rounded-full bg-white px-6 py-4 text-sm font-medium text-gray-800 placeholder-gray-400 outline-none transition-shadow focus:ring-2 focus:ring-[#3AA8E0]"
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="contactNo"
                  placeholder="CONTACT NO."
                  required
                  className="w-full rounded-full bg-white px-6 py-4 text-sm font-medium text-gray-800 placeholder-gray-400 outline-none transition-shadow focus:ring-2 focus:ring-[#3AA8E0]"
                  onChange={handleChange}
                />
              </div>

              {/* Row 2: Email & Age */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL ID"
                  className="w-full rounded-full bg-white px-6 py-4 text-sm font-medium text-gray-800 placeholder-gray-400 outline-none transition-shadow focus:ring-2 focus:ring-[#3AA8E0]"
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="age"
                  placeholder="YOUR AGE"
                  className="w-full rounded-full bg-white px-6 py-4 text-sm font-medium text-gray-800 placeholder-gray-400 outline-none transition-shadow focus:ring-2 focus:ring-[#3AA8E0]"
                  onChange={handleChange}
                />
              </div>

              {/* Row 3: Service */}
              <select
                name="service"
                required
                className="w-full appearance-none rounded-full bg-white px-6 py-4 text-sm font-medium text-gray-500 outline-none transition-shadow focus:ring-2 focus:ring-[#3AA8E0]"
                onChange={handleChange}
                defaultValue=""
              >
                <option value="" disabled>SELECT SERVICE</option>
                {SERVICES.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>

              {/* Row 4: Clinic */}
              <select
                name="clinic"
                required
                className="w-full appearance-none rounded-full bg-white px-6 py-4 text-sm font-medium text-gray-500 outline-none transition-shadow focus:ring-2 focus:ring-[#3AA8E0]"
                onChange={handleChange}
                defaultValue=""
              >
                <option value="" disabled>SELECT CLINIC</option>
                <option value="nagpur-main">A Care Dental - Main Branch (Nagpur)</option>
                <option value="nagpur-south">A Care Dental - South Clinic</option>
              </select>

              {/* Row 5: Date & Time */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                    <CalendarDays className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full rounded-full bg-white pl-14 pr-6 py-4 text-sm font-medium text-gray-600 outline-none transition-shadow focus:ring-2 focus:ring-[#3AA8E0]"
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="time"
                    name="time"
                    required
                    className="w-full rounded-full bg-white pl-14 pr-6 py-4 text-sm font-medium text-gray-600 outline-none transition-shadow focus:ring-2 focus:ring-[#3AA8E0]"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-4">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#ff5a00] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#e04f00] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#ff5a00] focus:ring-offset-2"
                >
                  Book Appointment
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

            </form>
          </div>

          {/* Right Column: Image */}
          {/* Hidden on mobile, shown on md and larger screens */}
          <div className="absolute bottom-0 right-0 hidden h-full w-2/5 md:block lg:w-1/2 pointer-events-none">
            <Image
              src="/booking/dental-tools-hand.png" 
              alt="Hand holding dental tools"
              fill
              className="object-contain object-bottom"
              sizes="(max-width: 1024px) 40vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}