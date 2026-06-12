"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/portfolio-data";

export function ServicesScroll() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const wheelTimeout = useRef<NodeJS.Timeout | null>(null);

  // Check screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (wheelTimeout.current) return;
    
    // Only capture horizontal scrolling/sliding
    if (Math.abs(e.deltaX) > 10) {
      if (e.deltaX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      
      // Prevent rapid-fire scrolling while animation plays
      wheelTimeout.current = setTimeout(() => {
        wheelTimeout.current = null;
      }, 500);
    }
  };

  return (
    <section id="services" className="relative w-full py-16 md:py-32 max-w-7xl mx-auto px-4 overflow-hidden">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-24">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          <span className="text-slate-900 dark:text-white">Freelance &</span> <span className="text-blue-500">Consulting</span>
          <div className="h-[2px] w-24 mx-auto mt-4 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[1px] opacity-70" />
        </h2>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto mt-4 md:mt-6 px-4">
          Whether you need a full-stack web application from scratch or want to integrate modern AI capabilities into your existing product, I can help you build it.
        </p>
      </div>

      {/* Coverflow Container with Swipe Support */}
      {/* Added transform-style: preserve-3d to ensure true 3D space rendering */}
      <motion.div 
        onPanEnd={(e, info) => {
          // Swipe threshold of 50px
          if (info.offset.x > 50) {
            handlePrev();
          } else if (info.offset.x < -50) {
            handleNext();
          }
        }}
        onWheel={handleWheel}
        className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center [perspective:1000px] [transform-style:preserve-3d] cursor-grab active:cursor-grabbing touch-pan-y"
      >
        <AnimatePresence initial={false}>
          {services.map((service, i) => {
            // Calculate shortest path logic for circular array
            let relativeIndex = i - currentIndex;
            if (relativeIndex < -Math.floor(services.length / 2)) relativeIndex += services.length;
            if (relativeIndex > Math.floor(services.length / 2)) relativeIndex -= services.length;

            // Only show adjacent cards (Left, Center, Right)
            const isVisible = Math.abs(relativeIndex) <= 1;
            if (!isVisible) return null;

            // 3D Math for True Depth
            const isCenter = relativeIndex === 0;
            const isLeft = relativeIndex === -1;
            const isRight = relativeIndex === 1;

            // Push side cards further out and BACKWARDS in Z-space
            const x = relativeIndex * (isMobile ? 85 : 75); // On mobile push them further off-screen
            const z = isCenter ? 0 : (isMobile ? -150 : -300); // Less depth push on mobile to avoid shrinking too much
            const rotateY = relativeIndex * (isMobile ? -35 : -50); // Less tilt on mobile
            const scale = isCenter ? 1 : (isMobile ? 0.9 : 0.85);
            const zIndex = isCenter ? 50 : 40;
            // Removed pointer-events: none so all cards pass through the pan events to the container

            // Dynamic Lighting overlay to give physical 3D depth to the tilted faces
            const lightingGradient = isCenter 
              ? "transparent" 
              : isLeft 
                ? "linear-gradient(to right, transparent, rgba(0,0,0,0.4))"
                : "linear-gradient(to left, transparent, rgba(0,0,0,0.4))";

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: `${x > 0 ? 100 : -100}%`, z: -500 }}
                animate={{
                  x: `${x}%`,
                  z,
                  rotateY,
                  scale,
                  zIndex,
                  opacity: 1,
                }}
                exit={{ opacity: 0, z: -500 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`absolute w-[85vw] md:w-[600px] flex flex-col justify-between rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 bg-white dark:border-slate-800 dark:bg-[#0B1221] p-6 md:p-12 shadow-2xl transform origin-center overflow-hidden min-h-[350px] md:min-h-[400px] transition-shadow duration-500 ${isCenter ? 'shadow-[0_20px_50px_rgba(59,130,246,0.15)] dark:shadow-[0_20px_50px_rgba(59,130,246,0.05)]' : 'shadow-none'}`}
              >
                {/* Dynamic 3D Shading Overlay */}
                <div 
                  className="absolute inset-0 z-50 pointer-events-none transition-opacity duration-500" 
                  style={{ background: lightingGradient }} 
                />
              {/* Giant Watermark Number */}
              <div className="absolute -top-6 -right-6 text-[120px] md:text-[180px] font-black text-slate-50 dark:text-slate-800/40 leading-none select-none pointer-events-none tracking-tighter z-0">
                0{i + 1}
              </div>

              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

              {/* Top section: Icon and Tags */}
              <div className="relative z-10 flex items-start justify-between w-full mb-10 select-none pointer-events-none">
                <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-xl shadow-blue-500/30 ring-4 ring-white dark:ring-[#0B1221]">
                  <service.icon className="h-8 w-8 md:h-10 md:w-10" />
                </div>
              </div>

              {/* Bottom section: Text */}
              <div className="relative z-10 flex flex-col gap-4 select-none pointer-events-none">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                  {service.title}
                </h3>
                <div className="w-16 h-1 bg-blue-500 rounded-full mb-1" />
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
