"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CopyableEmail } from "@/components/copyable-email";
import { socialLinks } from "@/lib/portfolio-data";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";

export function MarqueeContact() {
  const [isActive, setIsActive] = useState(false);

  const socials = [
    { name: "GitHub", url: socialLinks.github, icon: FiGithub },
    { name: "LinkedIn", url: socialLinks.linkedin, icon: FiLinkedin },
    { name: "Twitter", url: socialLinks.twitter, icon: FiTwitter },
    { name: "Upwork", url: socialLinks.upwork, icon: SiUpwork },
  ];

  const marqueeText = "LET'S BUILD SOMETHING EXTRAORDINARY • ";

  return (
    <div 
      className="relative w-[100vw] left-1/2 -translate-x-1/2 h-[400px] md:h-[600px] overflow-hidden flex items-center justify-center cursor-pointer group"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={() => setIsActive(!isActive)}
    >
      {/* Seamless Marquee CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-contact-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-contact {
          animation: marquee-contact-scroll 30s linear infinite;
        }
      `}} />

      {/* Marquee Background Layer */}
      <div 
        className={`absolute inset-0 flex items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isActive ? 'blur-2xl opacity-20 scale-110' : 'blur-[2px] opacity-100 scale-100'
        }`}
      >
        <div 
          className="flex animate-marquee-contact"
          style={{ animationPlayState: isActive ? 'paused' : 'running' }}
        >
          {/* First Block */}
          <div className="flex whitespace-nowrap">
            {[1, 2, 3, 4].map((i) => (
              <span key={i} className="text-[80px] sm:text-[100px] md:text-[180px] lg:text-[220px] font-black text-slate-200 dark:text-slate-800/80 uppercase tracking-tighter px-4 select-none">
                {marqueeText}
              </span>
            ))}
          </div>
          {/* Second Duplicate Block for Seamless Loop */}
          <div className="flex whitespace-nowrap">
            {[1, 2, 3, 4].map((i) => (
              <span key={i} className="text-[80px] sm:text-[100px] md:text-[180px] lg:text-[220px] font-black text-slate-200 dark:text-slate-800/80 uppercase tracking-tighter px-4 select-none">
                {marqueeText}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Call to Action (Disappears when active) */}
      <div 
        className={`absolute bottom-10 transition-all duration-500 ease-out pointer-events-none ${
          isActive ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium tracking-wide flex items-center gap-3 shadow-xl">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Hover or tap to initiate contact
        </div>
      </div>

      {/* Glassmorphic Contact Card */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, y: 20, filter: "blur(5px)" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="relative z-20 w-[92%] sm:w-full max-w-xl mx-auto cursor-default"
            onClick={(e) => e.stopPropagation()} // Prevent clicking the card from closing it
          >
            {/* Deep glow behind the card */}
            <div className="absolute -inset-6 sm:-inset-10 bg-blue-600/20 rounded-[3rem] blur-2xl sm:blur-3xl animate-pulse pointer-events-none" />
            
            {/* The Card */}
            <div className="relative p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] bg-white/90 dark:bg-slate-900/80 backdrop-blur-3xl border border-slate-200 dark:border-slate-700/50 shadow-2xl dark:shadow-[0_0_40px_rgba(0,0,0,0.8)] flex flex-col items-center text-center">
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2 sm:mb-3 tracking-tight">Let&apos;s Connect</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-8 sm:mb-10 font-medium max-w-sm">
                Ready to architect the next intelligent system? Reach out below.
              </p>
              
              <div className="w-full mb-8 sm:mb-10">
                <CopyableEmail />
              </div>

              {/* Social Icons row */}
              <div className="flex items-center gap-3 sm:gap-6">
                {socials.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700/50 hover:border-blue-500 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + idx * 0.05, type: "spring" }}
                      title={social.name}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-500 dark:text-slate-400 group-hover:text-blue-500 transition-colors" />
                    </motion.a>
                  );
                })}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
