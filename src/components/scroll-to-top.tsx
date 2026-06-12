"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
          transition={{ duration: 0.4, type: "spring", bounce: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-[6rem] z-40 group flex h-14 w-14 items-center justify-center rounded-full bg-white/10 dark:bg-slate-900/50 text-slate-800 dark:text-white shadow-lg backdrop-blur-xl transition-all hover:bg-white/30 dark:hover:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 overflow-hidden"
          aria-label="Scroll to top"
        >
          {/* Circular Progress Ring */}
          <svg className="absolute inset-0 h-full w-full -rotate-90 pointer-events-none p-1">
            <circle
              cx="50%"
              cy="50%"
              r="46%"
              className="fill-none stroke-slate-200 dark:stroke-slate-800"
              strokeWidth="2"
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="46%"
              className="fill-none stroke-blue-500"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ pathLength }}
            />
          </svg>

          {/* Upward Arrow with hover animation */}
          <motion.div
            whileHover={{ y: -4 }}
            className="relative flex items-center justify-center"
          >
            <svg
              className="h-5 w-5 transition-transform group-hover:scale-110 group-hover:text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
