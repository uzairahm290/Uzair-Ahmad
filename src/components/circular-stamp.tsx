"use client";

import { motion } from "framer-motion";

export function CircularStamp({ text = "UZAIR AHMAD • FULL STACK ENGINEER • " }: { text?: string }) {
  return (
    <div className="relative flex items-center justify-center w-32 h-32 opacity-80 mix-blend-difference z-20">
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="w-full h-full text-slate-800 dark:text-white"
        viewBox="0 0 100 100"
      >
        <path
          id="circlePath"
          d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
          fill="none"
        />
        <text className="text-[11px] font-bold tracking-[0.25em] uppercase fill-current">
          <textPath href="#circlePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </motion.svg>
      {/* Center Icon/Dot */}
      <div className="absolute w-2 h-2 bg-orange-500 rounded-full" />
    </div>
  );
}
