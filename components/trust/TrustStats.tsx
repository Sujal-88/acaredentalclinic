"use client";

import type { FC } from "react";
import { ArrowUpRight } from "lucide-react";

interface Stat {
  value: string;
  label: string;
  /** decorative dot cluster variant, mirrors the reference layout */
  dots: "single" | "cluster-small" | "cluster-large";
}

const stats: Stat[] = [
  { value: "150K+", label: "Patients Served", dots: "single" },
  { value: "40+", label: "Years of Experience", dots: "cluster-small" },
  { value: "03+", label: "Countries Presence", dots: "cluster-large" },
];

/**
 * Small decorative dot cluster that bleeds off the left edge of the
 * card. Updated to match the clinic's #3AA8E0 blue accent color.
 */
const DotCluster: FC<{ variant: Stat["dots"] }> = ({ variant }) => {
  if (variant === "single") {
    return (
      <span
        aria-hidden="true"
        className="absolute -left-2 top-1 h-3 w-3 rounded-full bg-[#3AA8E0] sm:-left-3"
      />
    );
  }

  if (variant === "cluster-small") {
    return (
      <span aria-hidden="true" className="pointer-events-none absolute -left-3 top-0 h-8 w-8 sm:-left-4">
        <span className="absolute left-0 top-2 h-4 w-4 rounded-full bg-[#3AA8E0]" />
        <span className="absolute left-4 top-0 h-2 w-2 rounded-full bg-[#3AA8E0]" />
        <span className="absolute left-3 top-6 h-1.5 w-1.5 rounded-full bg-[#3AA8E0]" />
      </span>
    );
  }

  return (
    <span aria-hidden="true" className="pointer-events-none absolute -left-3 top-0 h-9 w-9 sm:-left-4">
      <span className="absolute left-0 top-3 h-5 w-5 rounded-full bg-[#3AA8E0]" />
      <span className="absolute left-5 top-0 h-2 w-2 rounded-full bg-[#3AA8E0]" />
      <span className="absolute left-6 top-7 h-1.5 w-1.5 rounded-full bg-[#3AA8E0]" />
    </span>
  );
};

/**
 * Trust / Stats Strip
 * Showcases A Care Dental Clinic's key achievements alongside a direct CTA.
 */
const TrustStats: FC = () => {
  return (
    <section
      aria-labelledby="trust-stats-heading"
      className="w-full bg-white py-16 sm:py-20 lg:py-24 border-y border-gray-100"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        <div className="flex flex-col gap-14 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Left Side: Stats Grid */}
          <div className="flex-1">
            <h2 id="trust-stats-heading" className="mb-10 text-3xl font-extrabold text-[#0a2540] sm:text-4xl">
              A legacy of perfect smiles.
            </h2>
            
            <div className="flex flex-col gap-10 sm:flex-row sm:flex-wrap sm:gap-12 md:gap-16">
              {stats.map((stat) => (
                <div key={stat.label} className="relative pl-6 sm:pl-7">
                  <DotCluster variant={stat.dots} />
                  <p className="text-4xl font-extrabold leading-none text-[#ff5a00] sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: CTA Block */}
          <div className="w-full lg:w-[380px] shrink-0 rounded-[32px] bg-[#EAF7FE] p-8 sm:p-10 text-center lg:text-left shadow-sm">
            <h3 className="text-2xl font-bold text-[#0a2540]">
              Be our next success story.
            </h3>
            <p className="mt-3 text-base text-gray-600">
              Join thousands of happy patients and experience world-class, painless dentistry today.
            </p>
            
            <a
              href="#booking-form"
              className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff5a00] px-6 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#e04f00] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#ff5a00] focus:ring-offset-2 lg:w-auto"
            >
              Book Your Visit
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TrustStats;