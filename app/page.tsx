import type { FC } from "react";

const stats = [
  {
    value: "150+",
    label: "Dentists",
  },
  {
    value: "20+",
    label: "Clinics",
  },
  {
    value: "03+",
    label: "Countries",
  },
];

const TrustStats: FC = () => {
  return (
    <div
      className="
        absolute
        bottom-50
        right-40
        z-30
        flex
        flex-col
        gap-3
        sm:bottom-70
        sm:right-40
        sm:gap-4
        md:bottom-8
        md:right-9
      "
    >
      {stats.map((stat, index) => (
        <div
          key={stat.value}
          className="relative min-w-[95px] text-left"
        >
          {/* Decorative blue dot */}
          <span
            aria-hidden="true"
            className={`
              absolute
              -left-2
              top-0
              rounded-full
              bg-[#3AA8E0]
              ${
                index === 0
                  ? "h-.1 w-1"
                  : index === 1
                    ? "h-.5 w-1.5"
                    : "h-.2 w-.2"
              }
            `}
          />

          {/* Number */}
          <p className="text-[15px] font-bold leading-none text-[#FF6A39] sm:text-[10px] md:text-[11px]">
            {stat.value}
          </p>

          {/* Label */}
          <p className="mt-1 text-[15px] font-medium leading-[1.2] text-[#6B7280] sm:text-[6px] md:text-[7px]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TrustStats;