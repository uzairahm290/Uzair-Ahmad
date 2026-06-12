"use client";

import { motion } from "framer-motion";
import { FaFigma } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";

const constellations = [
  {
    id: "frontend",
    title: "FRONTEND SYSTEMS",
    color: "text-blue-400",
    position: "md:top-[15%] md:left-[5%] lg:left-[10%]",
    alignment: "items-end text-right",
    justify: "justify-end",
    tags: [
      { name: "React / Next.js", main: true },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Three.js" },
      { name: "Chrome Extensions" },
      { name: "Web3" },
    ]
  },
  {
    id: "backend",
    title: "BACKEND LOGIC",
    color: "text-red-400 dark:text-red-400 text-red-600",
    position: "md:top-[15%] md:right-[5%] lg:right-[10%]",
    alignment: "items-start text-left",
    justify: "justify-start",
    tags: [
      { name: "Python / FastAPI", main: true },
      { name: "Django" },
      { name: "Node.js" },
      { name: "PostgreSQL" },
      { name: "Supabase" },
      { name: "REST API" },
      { name: "Docker" },
    ]
  },
  {
    id: "ml",
    title: "MACHINE LEARNING & AUTOMATION",
    color: "text-blue-400",
    position: "md:bottom-[15%] md:left-[5%] lg:left-[10%]",
    alignment: "items-end text-right",
    justify: "justify-end",
    tags: [
      { name: "LLMs / GPT", main: true, icon: BsStars },
      { name: "LangChain" },
      { name: "RAG" },
      { name: "Vector DB" },
      { name: "AI Agents" },
    ]
  },
  {
    id: "design",
    title: "DESIGN",
    color: "text-red-400 dark:text-red-400 text-red-600",
    position: "md:bottom-[15%] md:right-[5%] lg:right-[10%]",
    alignment: "items-start text-left",
    justify: "justify-start",
    tags: [
      { name: "Figma", main: true, icon: FaFigma },
      { name: "3D Design" },
      { name: "Mobile-First" },
      { name: "UI/UX" },
    ]
  }
];

export function SkillsConstellation() {
  return (
    <div className="relative w-full py-16 md:py-24 overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background Rings */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200 dark:border-slate-800/30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-100 dark:border-slate-800/20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[1400px] h-[1400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-50 dark:border-slate-800/10 pointer-events-none" />

      {/* Main Layout */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24">
        
        {/* Left Column: Frontend & Tools */}
        <div className="flex flex-col gap-12 md:gap-16 w-full md:w-[320px] lg:w-[350px] shrink-0">
          {[constellations[0], constellations[2]].map((cluster, i) => (
            <motion.div 
              key={cluster.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`flex flex-col items-center lg:items-end lg:text-right w-full`}
            >
              <h3 className={`text-xs md:text-sm font-bold tracking-widest uppercase mb-4 ${cluster.color}`}>
                {cluster.title}
              </h3>
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-wrap justify-center lg:justify-end gap-2 md:gap-3"
              >
                {cluster.tags.map((tag) => (
                  <div 
                    key={tag.name}
                    className={`flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border transition-all duration-300 cursor-default hover:scale-105 ${
                      tag.main 
                        ? "border-blue-200 bg-blue-50 text-blue-900 shadow-md hover:border-blue-300 dark:border-slate-600 dark:bg-slate-800/50 dark:text-white dark:shadow-lg backdrop-blur-sm dark:hover:border-slate-500 font-semibold" 
                        : "border-slate-200 bg-white/50 text-slate-600 hover:border-slate-300 hover:text-slate-800 dark:border-slate-800 dark:bg-[#0B1221]/50 dark:text-slate-400 text-[11px] md:text-sm backdrop-blur-sm dark:hover:border-slate-600 dark:hover:text-slate-200"
                    }`}
                  >
                    {tag.icon && <tag.icon className={tag.main ? "w-3 h-3 md:w-4 md:h-4 text-blue-500 dark:text-blue-400" : "w-3 h-3"} />}
                    {tag.name}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Center Orb */}
        <div className="relative z-20 flex flex-col items-center justify-center w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full border border-slate-200 dark:border-slate-700/50 bg-white/80 dark:bg-[#0B1221]/80 backdrop-blur-md shadow-[0_0_40px_rgba(59,130,246,0.1)] dark:shadow-[0_0_80px_rgba(59,130,246,0.15)] shrink-0 my-8 md:my-10 lg:my-0">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-blue-500/10 dark:border-slate-600/30">
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)] dark:shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          </motion.div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-50/50 dark:from-blue-500/10 to-transparent pointer-events-none" />
          <GiBrain className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-blue-500 dark:text-slate-300 mb-2 md:mb-4" />
          <h2 className="text-lg md:text-xl lg:text-3xl font-extrabold text-slate-900 dark:text-white tracking-widest text-center">EXPERIENCE</h2>
          <p className="text-[9px] md:text-[10px] lg:text-xs tracking-[0.3em] text-slate-500 dark:text-slate-400 mt-1 md:mt-2 uppercase">Database</p>
        </div>

        {/* Right Column: Backend & Design */}
        <div className="flex flex-col gap-12 md:gap-16 w-full md:w-[320px] lg:w-[350px] shrink-0">
          {[constellations[1], constellations[3]].map((cluster, i) => (
            <motion.div 
              key={cluster.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`flex flex-col items-center lg:items-start lg:text-left w-full`}
            >
              <h3 className={`text-xs md:text-sm font-bold tracking-widest uppercase mb-4 ${cluster.color}`}>
                {cluster.title}
              </h3>
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3"
              >
                {cluster.tags.map((tag) => (
                  <div 
                    key={tag.name}
                    className={`flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border transition-all duration-300 cursor-default hover:scale-105 ${
                      tag.main 
                        ? "border-blue-200 bg-blue-50 text-blue-900 shadow-md hover:border-blue-300 dark:border-slate-600 dark:bg-slate-800/50 dark:text-white dark:shadow-lg backdrop-blur-sm dark:hover:border-slate-500 font-semibold" 
                        : "border-slate-200 bg-white/50 text-slate-600 hover:border-slate-300 hover:text-slate-800 dark:border-slate-800 dark:bg-[#0B1221]/50 dark:text-slate-400 text-[11px] md:text-sm backdrop-blur-sm dark:hover:border-slate-600 dark:hover:text-slate-200"
                    }`}
                  >
                    {tag.icon && <tag.icon className={tag.main ? "w-3 h-3 md:w-4 md:h-4 text-blue-500 dark:text-blue-400" : "w-3 h-3"} />}
                    {tag.name}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
        
      </div>

    </div>
  );
}
