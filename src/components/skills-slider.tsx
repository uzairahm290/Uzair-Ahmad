"use client";

import { skillIcons } from "@/lib/skill-icons";

type SkillsSliderProps = {
  skills: readonly string[];
};

export function SkillsSlider({ skills }: SkillsSliderProps) {
  // 4 copies — animate -50% so first half === second half at reset point (seamless)
  const items = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="py-8 overflow-hidden select-none">
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-40 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-40 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent" />

        {/* Track */}
        <div
          className="flex w-max"
          style={{
            animation: "marquee 55s linear infinite",
            willChange: "transform",
          }}
        >
          {items.map((name, i) => {
            const Icon = skillIcons[name];
            return (
              <div
                key={`${name}-${i}`}
                className="flex flex-shrink-0 flex-col items-center gap-3 px-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/60 bg-white/40 text-blue-500 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-50/60 hover:scale-110 dark:border-slate-700/40 dark:bg-slate-800/30 dark:text-blue-400 dark:hover:border-blue-500/40 dark:hover:bg-slate-800/60">
                  {Icon ? <Icon size={26} /> : null}
                </div>
                <p className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  {name}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
