"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Check if we've already shown the preloader this session
    const hasSeenPreloader = sessionStorage.getItem("hasSeenPreloader");
    if (hasSeenPreloader) {
      setIsLoading(false);
      return;
    }

    // Animate the counter
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Randomly jump progress to make it look like a real network load
      currentProgress += Math.floor(Math.random() * 8) + 1;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        
        // Brief pause at 100% before animating out
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem("hasSeenPreloader", "true");
        }, 400);
      }
      
      setProgress(currentProgress);
    }, 45); // Roughly 1.5 seconds to load

    return () => clearInterval(interval);
  }, []);

  if (!isClient) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050508] text-white overflow-hidden"
        >
          <div className="relative w-full max-w-xs md:max-w-sm px-8 flex flex-col items-center">
            {/* The Percentage */}
            <motion.div 
              className="text-[15vw] md:text-[8vw] font-black tracking-tighter leading-none text-white drop-shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {progress}%
            </motion.div>
            
            {/* Status Text */}
            <motion.div
              className="mt-6 font-mono text-[10px] md:text-xs tracking-[0.3em] text-blue-500 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              [ {progress < 30 ? "INITIALIZING" : progress < 80 ? "LOADING ASSETS" : "READY"} ]
            </motion.div>

            {/* Progress Bar (Visual) */}
            <div className="w-full h-[1px] md:h-[2px] bg-white/10 mt-8 overflow-hidden rounded-full">
              <motion.div 
                className="h-full bg-blue-500"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
