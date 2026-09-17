import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ImageIcon } from "lucide-react";

export default function GallerySection() {
  // Preview images for the homepage section (add these 4 to public/gallery/)
  const previewImages = [
    "/gallery/preview-1.jpg",
    "/gallery/preview-2.jpg",
    "/gallery/preview-3.jpg",
    "/gallery/preview-4.jpg",
  ];

  return (
    <section id="gallery" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="max-w-2xl text-center md:text-left">
            <span className="inline-block rounded-full bg-[#ff5a00]/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-[#ff5a00] mb-4">
              Smile Gallery
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#0a2540] sm:text-5xl">
              Transforming <span className="text-[#3AA8E0]">Smiles</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See the life-changing results our expert dental team delivers every day.
            </p>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 rounded-full bg-[#0a2540] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-md transition-all hover:bg-[#113a63] hover:shadow-lg"
            >
              View Full Gallery
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Preview Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {previewImages.map((src, idx) => (
            <div 
              key={idx} 
              className="group relative aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-gray-100 shadow-sm"
            >
              <div className="absolute inset-0 flex items-center justify-center text-gray-300 z-0">
                <ImageIcon className="h-10 w-10" />
              </div>
              <Image
                src={src}
                alt={`Smile Transformation ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 z-10"
              />
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link
            href="/gallery"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0a2540] px-6 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-md transition-all hover:bg-[#113a63]"
          >
            View Full Gallery
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}