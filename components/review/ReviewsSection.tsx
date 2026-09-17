"use client";

import React from "react";
import Script from "next/script";

export default function ReviewsSection() {
  return (
    <section id="testimonials" className="bg-[#F9FAFB] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-[#0a2540] sm:text-5xl">
            Real Patients, <span className="text-[#3AA8E0]">Real Smiles</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See what our patients have to say about their experience with us.
          </p>
        </div>

        {/* Elfsight Google Reviews Widget */}
        <div className="w-full relative min-h-[400px]">
          {/* 
            We pass "true" to the data attribute to satisfy React's strict JSX rules 
            while keeping the lazy loading functionality intact.
          */}
          <div 
            className="elfsight-app-97ecedea-21e8-4ceb-8fa0-3ef9e75b7b43" 
            data-elfsight-app-lazy="true"
          ></div>
        </div>

        {/* Next.js Optimized Script Loader */}
        <Script 
          src="https://elfsightcdn.com/platform.js" 
          strategy="lazyOnload" 
        />
        
      </div>
    </section>
  );
}