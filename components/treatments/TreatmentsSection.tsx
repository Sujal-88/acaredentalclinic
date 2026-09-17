"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { ArrowRight, PhoneCall } from "lucide-react";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const CLINIC = {
  name: "A Care Dental Clinic",
  doctor: "Our Expert Team",
  experience: "decades",
  servingSince: "2002",
  phones: ["+91 888 000 0000", "0712-2737987"],
};

type Swatch = "sand" | "iris" | "blush" | "mint" | "sky" | "citrus";

interface Treatment {
  id: string;
  name: string;
  tags: string[];
  swatch: Swatch;
  image: string;
}

const SWATCHES: Record<
  Swatch,
  {
    card: string;
    ring: string;
    pill: string;
    shadow: string;
  }
> = {
  sand: {
    card: "bg-[#EEF1EF]",
    ring: "ring-[#DCE2DF]",
    pill: "bg-white/80 text-[#2C3936]",
    shadow: "hover:shadow-[#DCE2DF]/50",
  },
  iris: {
    card: "bg-[#E6E3FB]",
    ring: "ring-[#D6D1F5]",
    pill: "bg-white/80 text-[#332B70]",
    shadow: "hover:shadow-[#D6D1F5]/50",
  },
  blush: {
    card: "bg-[#FBE7E6]",
    ring: "ring-[#F5D3D1]",
    pill: "bg-white/80 text-[#6E2E2A]",
    shadow: "hover:shadow-[#F5D3D1]/50",
  },
  mint: {
    card: "bg-[#DFF3EC]",
    ring: "ring-[#CBEADF]",
    pill: "bg-white/80 text-[#0B4A40]",
    shadow: "hover:shadow-[#CBEADF]/50",
  },
  sky: {
    card: "bg-[#E2EFFB]",
    ring: "ring-[#CFE3F6]",
    pill: "bg-white/80 text-[#1D4666]",
    shadow: "hover:shadow-[#CFE3F6]/50",
  },
  citrus: {
    card: "bg-[#FCEFDA]",
    ring: "ring-[#F5E1BC]",
    pill: "bg-white/80 text-[#6B4A1B]",
    shadow: "hover:shadow-[#F5E1BC]/50",
  },
};

const TREATMENTS: Treatment[] = [
  { id: "cosmetic", name: "Cosmetic Procedures", tags: ["Esthetics", "Smile Makeover"], swatch: "blush", image: "/treatment/cosmetic.png" },
  { id: "implants", name: "Dental Implants", tags: ["Restorative", "Tooth Loss"], swatch: "mint", image: "/treatment/implants.png" },
  { id: "dentures", name: "Dentures & Bridges", tags: ["Seniors", "Restoration"], swatch: "sand", image: "/treatment/dentures.png" },
  { id: "extractions", name: "Extractions", tags: ["Surgery", "Pain Relief"], swatch: "iris", image: "/treatment/extractions.png" },
  { id: "fillings", name: "Fillings & Sealants", tags: ["Cavity Care", "Kids & Adults"], swatch: "citrus", image: "/treatment/fillings.png" },
  { id: "laser", name: "Laser Dentistry", tags: ["Advanced", "Painless"], swatch: "sky", image: "/treatment/laser.png" },
  { id: "surgery", name: "Oral Surgery", tags: ["Specialized", "Wisdom Teeth"], swatch: "blush", image: "/treatment/surgery.png" },
  { id: "root-canal", name: "Root Canals", tags: ["Endodontics", "Save Your Tooth"], swatch: "mint", image: "/treatment/rootcanal.png" },
  { id: "cleaning", name: "Teeth Cleaning", tags: ["Hygiene", "Routine"], swatch: "sky", image: "/treatment/cleaning.png" },
  { id: "reshaping", name: "Teeth Reshaping", tags: ["Cosmetic", "Contouring"], swatch: "sand", image: "/treatment/reshaping.png" },
  { id: "whitening", name: "Teeth Whitening", tags: ["Cosmetic", "Bright Smile"], swatch: "citrus", image: "/treatment/whitening.png" },
  { id: "veneers", name: "Veneers & Crowns", tags: ["Restorative", "Esthetics"], swatch: "iris", image: "/treatment/veneers.png" },
  { id: "xray", name: "Digital X-Ray", tags: ["Diagnostics", "Safety"], swatch: "mint", image: "/treatment/xray.png" },
  { id: "ortho", name: "Orthodontics", tags: ["Alignment", "Braces"], swatch: "sky", image: "/treatment/ortho.png" },
  { id: "invisible", name: "Invisible Braces", tags: ["Clear Aligners", "Discreet"], swatch: "blush", image: "/treatment/invisible.png" },
];

export default function TreatmentsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0.05);

  const updateProgress = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max <= 0 ? 1 : el.scrollLeft / max);
  }, []);

  useEffect(() => {
    updateProgress();
    const el = trackRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      el.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [updateProgress]);

  const scrollByCards = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : 300;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className={`${display.variable} ${body.variable} bg-white py-20 sm:py-24 lg:py-28`}
      aria-labelledby="treatments-heading"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        
        {/* Header Area */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span
              className="inline-block rounded-full bg-[#ff5a00]/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-[#ff5a00]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Available Treatments
            </span>
            <h2
              id="treatments-heading"
              className="mt-5 text-4xl font-extrabold leading-tight text-[#0a2540] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Comprehensive care for a perfect smile.
            </h2>
            <p
              className="mt-4 text-lg leading-relaxed text-gray-600"
              style={{ fontFamily: "var(--font-body)" }}
            >
              From routine cleanings to advanced surgical procedures, we offer a complete 
              range of dental services tailored to your unique needs using state-of-the-art technology.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden shrink-0 items-center gap-4 md:flex">
            <button
              type="button"
              onClick={() => scrollByCards(-1)}
              aria-label="Scroll treatments left"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-50 border border-gray-200 text-gray-600 transition-all hover:bg-[#ff5a00] hover:border-[#ff5a00] hover:text-white hover:scale-105 hover:shadow-md"
            >
              <ArrowRight className="h-6 w-6 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCards(1)}
              aria-label="Scroll treatments right"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-50 border border-gray-200 text-gray-600 transition-all hover:bg-[#ff5a00] hover:border-[#ff5a00] hover:text-white hover:scale-105 hover:shadow-md"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Treatment Cards Slider */}
        <div
          ref={trackRef}
          className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-8 pt-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {TREATMENTS.map((t) => {
            const sw = SWATCHES[t.swatch];

            return (
              <article
                key={t.id}
                data-card
                className={`group cursor-pointer relative flex h-[420px] w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-[32px] ${sw.card} p-6 ring-1 ${sw.ring} transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${sw.shadow} sm:h-[460px] sm:w-[320px]`}
              >
                {/* Header & Animated Arrow */}
                <div className="flex items-start justify-between z-10">
                  <h3
                    className="text-2xl font-bold text-[#0a2540] pr-4 leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t.name}
                  </h3>
                  <div className="flex h-10 w-10 shrink-0 transform items-center justify-center rounded-full bg-white text-[#0a2540] opacity-0 shadow-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-4">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2 z-10">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full ${sw.pill} px-3 py-1.5 text-xs font-semibold shadow-sm backdrop-blur-sm`}
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Image Area */}
                <div className="relative mt-auto h-[240px] w-full overflow-hidden rounded-[24px] shadow-inner sm:h-[260px]">
                  {/* Subtle gradient to blend image with card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 rounded-[24px]" />
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 text-sm z-0">Image</div>
                  <Image
                    src={t.image}
                    alt={`${t.name} treatment`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 z-0"
                    sizes="(max-width: 640px) 280px, 320px"
                  />
                </div>
              </article>
            );
          })}

          {/* Final CTA Card */}
          <article className="group relative flex h-[420px] w-[280px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[32px] bg-[#0a2540] p-8 sm:h-[460px] sm:w-[320px]">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#ff5a00] blur-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-40" />
            
            <div className="z-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 mb-6">
                <PhoneCall className="h-6 w-6 text-[#ff5a00]" />
              </span>
              <p
                className="text-3xl font-extrabold leading-tight text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Need help deciding?
              </p>
              <p
                className="mt-4 text-base text-gray-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Our specialists are ready to guide you to the perfect treatment.
              </p>
            </div>

            <a
              href="#contact"
              className="z-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff5a00] px-6 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-[#e04f00] hover:shadow-xl hover:-translate-y-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Book Consultation
              <ArrowRight className="h-5 w-5" />
            </a>
          </article>
        </div>

        {/* Progress Bar Indicator */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="h-1.5 w-full max-w-md overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-[#ff5a00] transition-[width] duration-300 ease-out"
              style={{ width: `${Math.max(5, progress * 100)}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}