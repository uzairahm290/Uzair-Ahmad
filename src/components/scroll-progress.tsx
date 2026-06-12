"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    
    // Initial measurement
    updateDimensions();
    
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="pointer-events-none absolute -inset-[1px] z-[-1] rounded-full"
    >
      <svg className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <linearGradient id="nav-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
        {dimensions.width > 0 && (
          <motion.rect
            x="1"
            y="1"
            width={dimensions.width - 2}
            height={dimensions.height - 2}
            rx={(dimensions.height - 2) / 2}
            fill="none"
            stroke="url(#nav-gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ pathLength }}
          />
        )}
      </svg>
    </div>
  );
}