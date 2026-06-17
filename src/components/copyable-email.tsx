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
      <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 bg-slate-100/50 dark:bg-slate-950/40 border border-slate-200/50 dark:border-white/5 p-4 sm:p-6 rounded-2xl md:rounded-3xl transition-all duration-500 group-hover:border-blue-500/30 dark:group-hover:border-blue-500/30">
        
        {/* Email Info */}
        <div className="flex items-center gap-3 sm:gap-5 w-full overflow-hidden">
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
            <FiMail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 dark:text-blue-400" />
          </div>
          <div className="flex flex-col items-start min-w-0">
            <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
              Direct Email
            </span>
            <span className="text-[15px] sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white truncate max-w-full">
              {emailDisplay}
            </span>
          </div>
        </div>

        {/* Copy Action Button */}
        <div className="flex-shrink-0 w-full sm:w-auto">
          <motion.div 
            className="relative w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors duration-300 shadow-sm cursor-pointer"
            animate={copied ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 0.3 }}
            onClick={handleCopy}
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
                  <FiCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                  <span className="font-semibold text-sm sm:text-base text-slate-700 dark:text-white">Copied!</span>
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="flex items-center gap-1.5 sm:gap-2"
                >
                  <FiCopy className="w-4 h-4 text-slate-500 dark:text-slate-300" />
                  <span className="font-semibold text-sm sm:text-base text-slate-700 dark:text-white">Copy</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
        
      </div>
    </div>
  );
}
