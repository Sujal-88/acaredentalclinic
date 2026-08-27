"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

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
  doctor: "Dr. Poonam V. Hudiya",
  experience: "23+ years",
  servingSince: "2002",
  phones: ["0712-2737987", "3590126", "9372395729"],
};

type Swatch = "sand" | "iris" | "blush" | "mint" | "sky" | "citrus";

interface Treatment {
  id: string;
  name: string;
  tags: string[];
  swatch: Swatch;
  image?: string;
}

const SWATCHES: Record<
  Swatch,
  {
    card: string;
    ring: string;
    pill: string;
  }
> = {
  sand: {
    card: "bg-[#EEF1EF]",
    ring: "ring-[#DCE2DF]",
    pill: "bg-white/80 text-[#2C3936]",
  },

  iris: {
    card: "bg-[#E6E3FB]",
    ring: "ring-[#D6D1F5]",
    pill: "bg-white/80 text-[#332B70]",
  },

  blush: {
    card: "bg-[#FBE7E6]",
    ring: "ring-[#F5D3D1]",
    pill: "bg-white/80 text-[#6E2E2A]",
  },

  mint: {
    card: "bg-[#DFF3EC]",
    ring: "ring-[#CBEADF]",
    pill: "bg-white/80 text-[#0B4A40]",
  },

  sky: {
    card: "bg-[#E2EFFB]",
    ring: "ring-[#CFE3F6]",
    pill: "bg-white/80 text-[#1D4666]",
  },

  citrus: {
    card: "bg-[#FCEFDA]",
    ring: "ring-[#F5E1BC]",
    pill: "bg-white/80 text-[#6B4A1B]",
  },
};

const TREATMENTS: Treatment[] = [
  {
    id: "braces",
    name: "Braces",
    tags: ["Kids", "Teens", "Malocclusion"],
    swatch: "sand",
    image: "/treatment/braces.png",
  },

  {
    id: "dentures",
    name: "Dentures",
    tags: ["Adults", "Seniors", "Tooth Loss"],
    swatch: "blush",
    image: "/treatment/dentures.jpg",
  },

  {
    id: "invisalign",
    name: "Invisalign",
    tags: ["Teens", "Adults", "Popular"],
    swatch: "iris",
    image: "/treatment/invisalign.png",
  },

  {
    id: "implants",
    name: "Dental Implants",
    tags: ["Adults", "Seniors", "Tooth Loss"],
    swatch: "mint",
    image: "/treatment/implants.png",
  },

  {
    id: "root-canal",
    name: "Root Canal Therapy",
    tags: ["Adults", "Tooth Decay"],
    swatch: "sky",
    image: "/treatment/rootcanal.png",
  },

  {
    id: "fillings",
    name: "Dental Fillings",
    tags: ["Kids", "Cavities"],
    swatch: "citrus",
    image: "/treatment/fillings.png",
  },

  {
    id: "scaling",
    name: "Scaling & Cleaning",
    tags: ["All Ages", "Gum Disease"],
    swatch: "sand",
    image: "/treatment/scaling.png",
  },

  {
    id: "mouthguard",
    name: "Custom Mouthguards",
    tags: ["Adults", "Bruxism"],
    swatch: "iris",
    image: "/treatment/mouthguard.png",
  },
];

export default function TreatmentsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0.18);

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

    el.addEventListener("scroll", updateProgress, {
      passive: true,
    });

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

    const step = card ? card.offsetWidth + 20 : 280;

    el.scrollBy({
      left: dir * step,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={`${display.variable} ${body.variable} bg-white py-16 sm:py-20 lg:py-24`}
      aria-labelledby="treatments-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

          <div className="max-w-xl">

            <span
              className="inline-block rounded-full bg-[#3AA8E0]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#3AA8E0]"
              style={{
                fontFamily: "var(--font-body)",
              }}
            >
              Our Treatments
            </span>

            <h2
              id="treatments-heading"
              className="mt-4 text-3xl font-bold leading-tight text-[#16232E] sm:text-4xl"
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              Every treatment your smile needs, under one roof
            </h2>

            <p
              className="mt-3 text-base leading-relaxed text-[#6B7280]"
              style={{
                fontFamily: "var(--font-body)",
              }}
            >
              {CLINIC.doctor} brings {CLINIC.experience} of dentistry to{" "}
              {CLINIC.name}, serving patients of every age since{" "}
              {CLINIC.servingSince}.
            </p>

          </div>

          {/* Arrow buttons */}
          <div className="hidden shrink-0 items-center gap-3 sm:flex">

            <button
              type="button"
              onClick={() => scrollByCards(-1)}
              aria-label="Scroll treatments left"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DCE2DF] text-[#16232E] transition hover:border-[#3AA8E0] hover:text-[#3AA8E0]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => scrollByCards(1)}
              aria-label="Scroll treatments right"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DCE2DF] text-[#16232E] transition hover:border-[#3AA8E0] hover:text-[#3AA8E0]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>

          </div>
        </div>

        {/* Treatment cards */}
        <div
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >

          {TREATMENTS.map((t) => {
            const sw = SWATCHES[t.swatch];

            return (
              <article
                key={t.id}
                data-card
                className={`group relative flex h-[360px] w-[220px] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] ${sw.card} p-5 ring-1 ${sw.ring} transition-transform duration-300 hover:-translate-y-1 sm:h-[400px] sm:w-[248px]`}
              >

                {/* Treatment name */}
                <h3
                  className="text-lg font-bold text-[#16232E]"
                  style={{
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {t.name}
                </h3>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">

                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full ${sw.pill} px-2.5 py-1 text-[11px] font-medium`}
                      style={{
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}

                </div>

                {/* Realistic treatment image */}
                <div className="relative mt-auto h-[220px] w-full overflow-hidden rounded-[20px]">

                  <Image
                    src={t.image || ""}
                    alt={`${t.name} treatment`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="248px"
                  />

                </div>

              </article>
            );
          })}

          {/* Final CTA card */}
          <article className="flex h-[360px] w-[220px] shrink-0 snap-start flex-col justify-between rounded-[28px] bg-[#3AA8E0] p-6 sm:h-[400px] sm:w-[248px]">

            <p
              className="text-lg font-bold leading-snug text-white"
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              Not sure which treatment you need?
            </p>

            <div>

              <p
                className="text-sm text-white/80"
                style={{
                  fontFamily: "var(--font-body)",
                }}
              >
                Call {CLINIC.name} and we'll guide you.
              </p>

              <a
                href={`tel:${CLINIC.phones[0].replace(/[^\d+]/g, "")}`}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#3AA8E0] transition hover:bg-[#E9F6FC]"
                style={{
                  fontFamily: "var(--font-body)",
                }}
              >
                Call {CLINIC.phones[0]}

                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>

              </a>

            </div>

          </article>

        </div>

        {/* Progress bar */}
        <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-[#EEF1EF]">

          <div
            className="h-full rounded-full bg-[#3AA8E0] transition-[width] duration-150 ease-out"
            style={{
              width: `${Math.max(12, progress * 100)}%`,
            }}
          />

        </div>

      </div>
    </section>
  );
}