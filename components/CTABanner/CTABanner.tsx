"use client";

/**
 * CTABanner — "Book Free Consultation" section
 * Clinic: A Care Dental Clinic (Dr. Poonam V. Hudiya)
 *
 * Content sourced from the clinic's own deck:
 *  - Clinic name: "A Care Dental Clinic"
 *  - Tagline: "Where Healthy & Beautiful Smile begins…"
 *  - Contact numbers: 0712-2737987 / 3590126, 9372395729
 *
 * No other copy was supplied for this section, so the sub-line and button
 * micro-copy below are clearly-marked placeholders — swap them for real
 * copy whenever you have it.
 *
 * Drop this file in e.g. app/components/CTABanner.tsx and render it:
 *   import { CTABanner } from "@/components/CTABanner";
 *   <CTABanner />
 *
 * Fonts: uses next/font/google (Baloo 2 for display, Inter for body).
 * If your app already loads these elsewhere, remove the font block below
 * and just apply the exported class names / CSS variables the same way.
 */

import { Baloo_2, Inter } from "next/font/google";

const display = Baloo_2({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

type CTABannerProps = {
  clinicName?: string;
  ctaHref?: string;
  phoneNumbers?: string[];
};

export function CTABanner({
  clinicName = "A Care Dental Clinic",
  ctaHref = "tel:07122737987",
  phoneNumbers = ["0712-2737987", "3590126", "9372395729"],
}: CTABannerProps) {
  return (
    <section
      className={`${display.variable} ${body.variable} font-body relative w-full px-4 py-10 sm:px-6 sm:py-14 lg:px-8`}
      aria-label={`Book a free consultation at ${clinicName}`}
    >
      <div
        className="
          relative mx-auto flex w-full max-w-6xl flex-col-reverse
          overflow-hidden rounded-[28px]
          bg-gradient-to-br from-[#E9F7FC] via-[#EEF9FD] to-white
          shadow-[0_10px_40px_-12px_rgba(15,60,90,0.18)]
          ring-1 ring-black/5
          sm:flex-row sm:items-center
        "
      >
        {/* ---------- Left: copy + CTA ---------- */}
        <div className="relative z-10 flex w-full flex-col items-start gap-5 px-6 py-10 sm:w-3/5 sm:px-10 sm:py-14 lg:px-14">
          <h2
            className={`${display.className} text-[1.85rem] leading-tight text-[#0B2545] sm:text-4xl lg:text-[2.75rem]`}
          >
            Book{" "}
            <span className="bg-gradient-to-r from-[#13A6E0] to-[#0E7FC9] bg-clip-text text-transparent">
              Free Consultation
            </span>
          </h2>

          {/* Placeholder sub-line — no supporting copy was provided in the source deck */}
          <p className="max-w-md text-sm text-[#3E5972] sm:text-base">
            {clinicName} — Where Healthy &amp; Beautiful Smile begins.
            {/* placeholder: */} Talk to Dr. Poonam V. Hudiya's team about your
            dental concerns, at no cost.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href={ctaHref}
              className="
                group inline-flex items-center gap-2 rounded-full
                bg-[#FF6B35] px-6 py-3 text-sm font-semibold text-white
                shadow-[0_8px_20px_-6px_rgba(255,107,53,0.6)]
                transition-transform duration-200 ease-out
                hover:-translate-y-0.5 hover:bg-[#F1592A]
                focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-2 focus-visible:outline-[#FF6B35]
                active:translate-y-0 sm:text-base
              "
            >
              Book Now
              <svg
                className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7 17L17 7M17 7H9M17 7V15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <span className="text-xs text-[#4C6478] sm:text-sm">
              Or call{" "}
              <a
                href={ctaHref}
                className="font-semibold text-[#0E7FC9] underline-offset-2 hover:underline"
              >
                {phoneNumbers[0]}
              </a>
            </span>
          </div>
        </div>

        {/* ---------- Right: mascot illustration ---------- */}
        <div className="relative flex w-full items-center justify-center overflow-hidden py-6 sm:w-2/5 sm:py-0">
          <div
            className="
              pointer-events-none absolute right-[-10%] top-1/2 h-[220px] w-[220px]
              -translate-y-1/2 rounded-full bg-[#CDEDFA] blur-2xl
              sm:h-[320px] sm:w-[320px]
            "
            aria-hidden="true"
          />
          <ToothMascot className="relative z-10 h-40 w-40 motion-safe:animate-[float_4s_ease-in-out_infinite] sm:h-56 sm:w-56 lg:h-64 lg:w-64" />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
      `}</style>
    </section>
  );
}

/** Original, simple friendly-tooth-with-sunglasses illustration (SVG, no external assets). */
function ToothMascot({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      role="img"
      aria-label="Smiling cartoon tooth wearing sunglasses"
    >
      <defs>
        <linearGradient id="toothBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EAF4FA" />
        </linearGradient>
        <linearGradient id="lens" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3AA8DB" />
          <stop offset="100%" stopColor="#155E8A" />
        </linearGradient>
      </defs>

      {/* soft ground shadow */}
      <ellipse cx="100" cy="205" rx="46" ry="8" fill="#BFE0EF" opacity="0.6" />

      {/* tooth body */}
      <path
        d="M100 8
           C 148 8 168 44 164 82
           C 161 112 150 122 146 152
           C 143 176 134 198 118 198
           C 106 198 104 168 100 168
           C 96 168 94 198 82 198
           C 66 198 57 176 54 152
           C 50 122 39 112 36 82
           C 32 44 52 8 100 8 Z"
        fill="url(#toothBody)"
        stroke="#D9E9F2"
        strokeWidth="2"
      />

      {/* sunglasses */}
      <g>
        <rect x="52" y="78" width="38" height="26" rx="13" fill="url(#lens)" />
        <rect x="110" y="78" width="38" height="26" rx="13" fill="url(#lens)" />
        <path
          d="M90 90 H110"
          stroke="#0B2545"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M52 88 C 40 84 34 88 30 96"
          stroke="#0B2545"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M148 88 C 160 84 166 88 170 96"
          stroke="#0B2545"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* smile */}
      <path
        d="M78 122 C 88 134 112 134 122 122"
        stroke="#0B2545"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="70" cy="112" r="4" fill="#FF9B7A" opacity="0.7" />
      <circle cx="130" cy="112" r="4" fill="#FF9B7A" opacity="0.7" />
    </svg>
  );
}
