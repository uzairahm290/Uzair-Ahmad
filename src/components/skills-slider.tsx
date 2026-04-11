"use client";

import { motion } from "framer-motion";
import { skillIcons } from "@/lib/skill-icons";

type SkillsSliderProps = {
  skills: readonly string[];
};

export function SkillsSlider({ skills }: SkillsSliderProps) {
  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-950" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-950" />

      <motion.div
        className="flex gap-8 py-8"
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedSkills.map((skillName, index) => {
          const IconComponent = skillIcons[skillName];
          return (
            <div
              key={`${skillName}-${index}`}
              className="flex flex-shrink-0 flex-col items-center gap-3"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white/50 text-3xl text-blue-600 transition hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700/50 dark:bg-slate-800/30 dark:text-blue-400 dark:hover:border-blue-500/30 dark:hover:bg-slate-800/60 shadow-sm">
                {IconComponent ? <IconComponent size={32} /> : null}
              </div>
              <p className="whitespace-nowrap text-center text-sm font-medium text-slate-600 dark:text-slate-300">
                {skillName}
              </p>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
