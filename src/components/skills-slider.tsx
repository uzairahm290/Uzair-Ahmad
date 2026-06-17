"use client";

import { skillIcons } from "@/lib/skill-icons";

type SkillsSliderProps = {
  skills: readonly { name: string; exp: string }[];
};

export function SkillsSlider({ skills }: SkillsSliderProps) {
  // 4 copies — animate -50% so first half === second half at reset point (seamless)
  const items = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="pt-16 pb-8 overflow-hidden select-none">
      <div className="relative">
        {/* Track */}
        <div className="flex w-max animate-marquee">
          {items.map((skill, i) => {
            const Icon = skillIcons[skill.name];
            return (
              <div
                key={`${skill.name}-${i}`}
                className="group relative flex flex-shrink-0 flex-col items-center gap-3 px-7 cursor-default"
              >
                <div className="flex h-14 w-14 items-center justify-center text-slate-400 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-500 dark:text-slate-500 dark:group-hover:text-blue-400">
                  {Icon ? <Icon size={32} /> : null}
                </div>
                <p className="whitespace-nowrap text-[11px] font-bold uppercase tracking-widest text-slate-400 transition-colors group-hover:text-blue-600 dark:text-slate-500 dark:group-hover:text-blue-400">
                  {skill.name}
                </p>

                {/* Hover Tooltip for Experience */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-0 scale-95 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:-top-12 z-20">
                  <div className="relative bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap">
                    {skill.exp}
                    {/* Downward Arrow */}
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-white" />
                  </div>
                </div>
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
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
