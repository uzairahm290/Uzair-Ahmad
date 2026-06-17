"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCopy, FiCheck, FiMail } from "react-icons/fi";
import { socialLinks } from "@/lib/portfolio-data";

export function CopyableEmail() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Extract actual email if it starts with mailto:
    const emailToCopy = socialLinks.email.startsWith("mailto:") 
      ? socialLinks.email.replace("mailto:", "") 
      : socialLinks.email;
      
    navigator.clipboard.writeText(emailToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const emailDisplay = socialLinks.email.startsWith("mailto:") 
    ? socialLinks.email.replace("mailto:", "") 
    : socialLinks.email;

  return (
    <div className="relative group cursor-pointer w-full" onClick={handleCopy}>
      {/* Subtle hover glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Inner Container */}
      <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 bg-slate-950/40 border border-white/5 p-4 sm:p-6 rounded-2xl md:rounded-3xl transition-all duration-500 group-hover:border-blue-500/30">
        
        {/* Email Info */}
        <div className="flex items-center gap-3 sm:gap-5 w-full overflow-hidden">
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 flex items-center justify-center border border-blue-200/50 dark:border-blue-700/30 transition-transform duration-500 group-hover:rotate-6">
            <FiMail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-0.5 sm:mb-1">
              Direct Email
            </span>
            <span className="text-sm sm:text-base md:text-xl lg:text-2xl font-black text-slate-900 dark:text-white truncate">
              {emailDisplay}
            </span>
          </div>
        </div>

        {/* Copy Action Button */}
        <div className="flex-shrink-0 w-full sm:w-auto mt-2 sm:mt-0">
          <motion.div 
            className={`w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg md:rounded-xl font-bold transition-all duration-300 ${
              copied 
                ? "bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]" 
                : "bg-white text-slate-700 border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            }`}
            animate={copied ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div
                  key="check"
                  initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="flex items-center gap-1.5 sm:gap-2"
                >
                  <FiCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  <span className="text-xs sm:text-sm md:text-base">Copied!</span>
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="flex items-center gap-1.5 sm:gap-2"
                >
                  <FiCopy className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  <span className="text-xs sm:text-sm md:text-base">Copy</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
        
      </div>
    </div>
  );
}
