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
        {/* Track */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {items.map((name, i) => {
            const Icon = skillIcons[name];
            return (
              <div
                key={`${name}-${i}`}
                className="flex flex-shrink-0 flex-col items-center gap-3 px-7"
              >
                <div className="flex h-14 w-14 items-center justify-center text-blue-500 transition-all duration-300 hover:scale-110 dark:text-blue-400">
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
        .animate-marquee {
          animation: marquee 55s linear infinite;
          will-change: transform;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
