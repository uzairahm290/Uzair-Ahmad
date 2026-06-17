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
    <div className="relative group cursor-pointer w-full mt-4" onClick={handleCopy}>
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
      
      {/* Glass Container */}
      <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 p-6 md:p-8 rounded-3xl shadow-lg transition-all duration-500 group-hover:scale-[1.02] group-hover:border-blue-500/50 dark:group-hover:border-blue-500/50">
        
        {/* Email Info */}
        <div className="flex items-center gap-5 w-full overflow-hidden">
          <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 flex items-center justify-center border border-blue-200/50 dark:border-blue-700/30 transition-transform duration-500 group-hover:rotate-6">
            <FiMail className="w-5 h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">
              Direct Email
            </span>
            <span className="text-base sm:text-lg md:text-2xl font-black text-slate-900 dark:text-white truncate">
              {emailDisplay}
            </span>
          </div>
        </div>

        {/* Copy Action Button */}
        <div className="flex-shrink-0 w-full sm:w-auto">
          <motion.div 
            className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
              copied 
                ? "bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]" 
                : "bg-white text-slate-700 border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            }`}
            animate={copied ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div
                  key="check"
                  initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <FiCheck className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base">Copied!</span>
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <FiCopy className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base">Copy</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
        
      </div>
    </div>
  );
}
