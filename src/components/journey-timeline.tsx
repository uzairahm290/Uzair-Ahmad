"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { journey } from "@/lib/portfolio-data";

// Extracted component to handle individual scroll intersection tracking
function JourneyScrollItem({ 
  event, 
  idx, 
  activeIndex, 
  setActiveIndex 
}: { 
  event: any, 
  idx: number, 
  activeIndex: number, 
  setActiveIndex: (i: number) => void 
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Trigger when the item crosses the vertical center of the screen
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveIndex(idx);
    }
  }, [isInView, idx, setActiveIndex]);

  const isActive = idx === activeIndex;

  return (
    <div 
      ref={ref} 
      className="flex flex-col justify-center py-16 md:py-24"
    >
      <div 
        className={`relative flex flex-col items-start px-2 text-left transition-all duration-500 w-full ${
          isActive 
            ? "opacity-100 translate-x-2 md:translate-x-4" 
            : "opacity-30 blur-[1px] translate-x-0"
        }`}
      >
        <span className={`text-sm md:text-base font-bold uppercase tracking-widest mb-4 transition-colors ${isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-500"}`}>
          {event.year}
        </span>
        <h3 className={`text-3xl md:text-5xl font-black tracking-tight transition-colors ${isActive ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-500"}`}>
          {event.title.split(' — ')[0]}
        </h3>
        
        {/* Mobile-only details (Accordion style) */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isActive ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="h-px w-12 bg-blue-500 mb-4" />
          <p className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
            {event.title}
          </p>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {event.detail}
          </p>
        </div>
      </div>
    </div>
  );
}

export function JourneyTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="journey" className="relative w-full py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            <span className="text-slate-900 dark:text-white">Professional</span> <span className="text-blue-500">Journey</span>
            <div className="h-[2px] w-24 mx-auto mt-4 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[1px] opacity-70" />
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-20 relative">
          
          {/* Navigation / Scroll Column (Left) */}
          <div className="w-full md:w-5/12 pb-12 md:pb-24">
            {journey.map((event, idx) => (
              <JourneyScrollItem 
                key={event.title} 
                event={event} 
                idx={idx} 
                activeIndex={activeIndex} 
                setActiveIndex={setActiveIndex} 
              />
            ))}
          </div>

          {/* Sticky Story Display Column (Right) */}
          <div className="hidden md:block md:w-7/12 relative">
            <div className="sticky top-32 h-[50vh] min-h-[400px] w-full rounded-[2rem] lg:rounded-[2.5rem] bg-white dark:bg-[#0B1221] border border-slate-200 dark:border-slate-800 p-8 lg:p-16 shadow-2xl shadow-slate-200/40 dark:shadow-none flex items-center overflow-hidden">
              
              {/* Ambient subtle glow inside the card */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative z-10 w-full"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 lg:mb-8">
                    {journey[activeIndex].year}
                  </div>
                  <h3 className="text-2xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 lg:mb-6 leading-tight">
                    {journey[activeIndex].title}
                  </h3>
                  <p className="text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {journey[activeIndex].detail}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}