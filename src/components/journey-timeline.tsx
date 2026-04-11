"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { journey } from "@/lib/portfolio-data";

export function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathHeight = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative mx-auto mt-20 max-w-4xl">
      {/* Background Line */}
      <div className="absolute left-[22px] top-2 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 md:left-[210px] -translate-x-1/2" />
      
      {/* Animated Fill Line */}
      <motion.div 
        className="absolute left-[22px] top-2 bottom-0 w-0.5 bg-blue-500 md:left-[210px] -translate-x-1/2 origin-top rounded-full z-0"
        style={{ scaleY: pathHeight }}
      />

      <div className="space-y-12">
        {journey.map((event, index) => (
          <div 
            key={event.title} 
            className="group relative flex flex-col gap-4 pl-12 md:flex-row md:items-start md:gap-12 md:pl-0"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[22px] top-[8px] -translate-x-1/2 z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-slate-300 bg-white transition-colors duration-500 group-hover:border-blue-500 group-hover:bg-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:group-hover:border-blue-500 dark:group-hover:bg-blue-500 md:left-[210px]" />
            
            {/* Year Tag (Left side on desktop) */}
            <div className="font-semibold md:w-[180px] md:shrink-0 md:text-right">
              <span className="inline-flex items-center whitespace-nowrap rounded-full bg-slate-100 px-4 py-1.5 text-sm tracking-wide text-blue-600 transition-colors group-hover:bg-blue-50 dark:bg-[#0f172a] dark:border dark:border-slate-800 dark:text-blue-400 dark:group-hover:bg-[#1e293b]">
                {event.year}
              </span>
            </div>

            {/* Detail Card Content */}
            <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-400/50 hover:shadow-xl dark:border-slate-800 dark:bg-[#0B1221] dark:hover:border-blue-500/50 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 md:text-2xl">
                {event.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                {event.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}