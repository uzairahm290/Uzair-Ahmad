"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

interface MacbookMockupProps {
  src: string;
  alt: string;
  glowColor?: string;
}

export function MacbookMockup({ src, alt, glowColor = "rgba(59, 130, 246, 0.2)" }: MacbookMockupProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Create motion values for cursor position relative to the container
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  
  // Spring configurations for smooth tilting
  const springConfig = { stiffness: 120, damping: 20 };
  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), springConfig);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) / width;
    const mouseY = (e.clientY - rect.top) / height;
    x.set(mouseX);
    y.set(mouseY);
  };
  
  const handleMouseLeave = () => {
    // Return to center when mouse leaves
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[540px] mx-auto select-none overflow-visible group"
      style={{ perspective: 1200 }}
    >
      {/* Background Glow */}
      <div 
        className="absolute inset-x-10 top-8 bottom-8 rounded-full blur-[50px] opacity-40 transition-all duration-500 group-hover:opacity-75 group-hover:scale-105 pointer-events-none"
        style={{ 
          backgroundColor: glowColor,
          transform: "translateZ(-20px)"
        }}
      />
      
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative w-full transition-all duration-300 ease-out"
      >
        {/* Macbook Screen Lid */}
        <div 
          className="relative mx-auto rounded-t-2xl border-[3px] border-slate-800 bg-slate-950 p-[1.5%] shadow-2xl shadow-slate-950/20"
          style={{ width: "88%", aspectRatio: "16/10", transformStyle: "preserve-3d" }}
        >
          {/* Inner Bezel Screen Area */}
          <div className="relative w-full h-full overflow-hidden rounded-[3px] bg-slate-900 border border-slate-900">
            {/* Camera */}
            <div className="absolute top-[2%] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-950 flex items-center justify-center z-20">
              <div className="w-0.5 h-0.5 rounded-full bg-blue-500/50" />
            </div>
            
            {/* Project Image */}
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-top select-none transition-transform duration-500 group-hover:scale-[1.015]"
                priority
              />
              {/* Glossy Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-10 mix-blend-overlay" />
            </div>
          </div>
        </div>

        {/* Hinge */}
        <div className="relative mx-auto bg-slate-800 dark:bg-slate-900 shadow-inner h-2 z-10" style={{ width: "74%" }} />

        {/* Chassis Body */}
        <div 
          className="relative mx-auto bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 rounded-b-xl border-t border-slate-100 dark:border-slate-600 shadow-2xl shadow-slate-950/30"
          style={{ 
            width: "100%", 
            height: "12px",
            clipPath: "polygon(1% 0%, 99% 0%, 100% 100%, 0% 100%)"
          }}
        >
          {/* Keyboard Recess shadow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[88%] h-0.5 bg-slate-950/20 dark:bg-slate-950/40 rounded-b" />
          
          {/* Front Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[14%] h-1 bg-slate-300 dark:bg-slate-800 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.15)] rounded-b-md" />
        </div>

        {/* Realistic Base Shadow */}
        <div 
          className="mx-auto bg-slate-950/25 dark:bg-slate-950/50 blur-[5px] rounded-full mt-1 transition-all duration-300 group-hover:scale-95 group-hover:blur-[7px]"
          style={{ width: "95%", height: "6px" }}
        />
      </motion.div>
    </div>
  );
}
