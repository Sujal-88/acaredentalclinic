import type { FC } from "react";

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
 * card, matching the reference image. Purely presentational.
 */
const DotCluster: FC<{ variant: Stat["dots"] }> = ({ variant }) => {
  if (variant === "single") {
    return (
      <span
        aria-hidden="true"
        className="absolute -left-2 top-1 h-3 w-3 rounded-full bg-[#1C6DE3] sm:-left-3"
      />
    );
  }

  if (variant === "cluster-small") {
    return (
      <span aria-hidden="true" className="pointer-events-none absolute -left-3 top-0 h-8 w-8 sm:-left-4">
        <span className="absolute left-0 top-2 h-4 w-4 rounded-full bg-[#1C6DE3]" />
        <span className="absolute left-4 top-0 h-2 w-2 rounded-full bg-[#1C6DE3]" />
        <span className="absolute left-3 top-6 h-1.5 w-1.5 rounded-full bg-[#1C6DE3]" />
      </span>
    );
  }

  return (
    <span aria-hidden="true" className="pointer-events-none absolute -left-3 top-0 h-9 w-9 sm:-left-4">
      <span className="absolute left-0 top-3 h-5 w-5 rounded-full bg-[#1C6DE3]" />
      <span className="absolute left-5 top-0 h-2 w-2 rounded-full bg-[#1C6DE3]" />
      <span className="absolute left-6 top-7 h-1.5 w-1.5 rounded-full bg-[#1C6DE3]" />
    </span>
  );
};

/**
 * Trust / Stats Strip
 * Showcases A Care Dental Clinic's key achievements to build patient trust.
 * Stacks vertically on mobile, lays out as a horizontal row from md up.
 */
const TrustStats: FC = () => {
  return (
    <section
      aria-labelledby="trust-stats-heading"
      className="w-full bg-white px-6 py-14 sm:px-10 md:py-20 lg:px-16"
    >
      <h2 id="trust-stats-heading" className="sr-only">
        A Care Dental Clinic in numbers
      </h2>

      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="relative pl-6 sm:pl-7 md:flex-1">
            <DotCluster variant={stat.dots} />
            <p className="text-3xl font-extrabold leading-none text-[#FF5A1F] sm:text-4xl md:text-[2.5rem]">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-medium text-gray-600 sm:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustStats;
