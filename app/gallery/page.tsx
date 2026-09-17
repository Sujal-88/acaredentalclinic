import React from "react";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { ArrowLeft, ImageIcon } from "lucide-react";

// This is a Next.js Server Component. It runs securely on the server/build-time.
export default function GalleryPage() {
  
  let images: string[] = [];

  try {
    // 1. Point to the public/gallery directory
    const galleryDir = path.join(process.cwd(), "public", "gallery");
    
    // 2. Read all files in the directory
    const files = fs.readdirSync(galleryDir);
    
    // 3. Filter only image formats (jpg, jpeg, png, webp)
    images = files.filter((file) => 
      /\.(jpg|jpeg|png|webp|avif)$/i.test(file)
    );
  } catch (error) {
    console.error("Error reading gallery directory. Make sure public/gallery exists.", error);
    // If folder doesn't exist yet, it returns an empty array to prevent crashing
  }

  return (
    <main className="min-h-screen bg-[#F9FAFB] py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Navigation & Header */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="group mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#3AA8E0] hover:text-[#0a2540] transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl font-extrabold tracking-tight text-[#0a2540] sm:text-5xl lg:text-6xl">
            Our Smile <span className="text-[#3AA8E0]">Gallery</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Browse through our collection of real patient transformations. A beautiful, healthy smile is just an appointment away.
          </p>
        </div>

        {/* Dynamic Image Grid */}
        {images.length > 0 ? (
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4 space-y-6">
            {images.map((filename, index) => (
              <div 
                key={index} 
                className="group relative w-full break-inside-avoid overflow-hidden rounded-[24px] bg-gray-200 shadow-sm"
              >
                {/* 
                  Using standard <img> here instead of Next.js <Image> because standard img 
                  allows for a pure CSS Masonry layout (columns) where images keep their natural heights. 
                */}
                <img
                  src={`/gallery/${filename}`}
                  alt={`Clinic Gallery Image ${index + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        ) : (
          /* Empty State fallback */
          <div className="flex flex-col items-center justify-center rounded-[32px] border-2 border-dashed border-gray-300 py-32 text-center">
            <ImageIcon className="h-12 w-12 text-gray-300 mb-4" />
            <h3 className="text-xl font-bold text-gray-500">No images found</h3>
            <p className="text-gray-400 mt-2">
              Create a <code>public/gallery/</code> folder and drop some images inside.
            </p>
          </div>
        )}

      </div>
    </main>
  );
}