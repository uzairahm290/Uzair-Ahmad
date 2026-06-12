"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact-form";
import { socialLinks } from "@/lib/portfolio-data";
import { FiMail } from "react-icons/fi";

export function InteractiveContact() {
  return (
    <div className="w-full">
      {/* Typography Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8 md:mb-12 flex flex-col lg:flex-row lg:items-end justify-between relative"
      >

        <div className="relative z-10">
          <h2 className="text-[12vw] md:text-[9vw] leading-[0.8] font-black text-slate-900 dark:text-white tracking-tighter uppercase ml-[-0.5vw]">
            Let&apos;s
            <br />
            <span className="text-blue-600">Talk.</span>
          </h2>
        </div>
        <div className="mt-6 lg:mt-0 flex flex-col md:flex-row items-start md:items-center gap-6 lg:max-w-md lg:pb-4 relative z-10">
          <p className="text-base md:text-xl font-medium text-slate-600 dark:text-slate-400">
            Have a project in mind? I&apos;m currently available for work.
          </p>
        </div>
      </motion.div>

      {/* Minimal Grid Layout */}
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16 items-start mt-10 md:mt-0">
        
        {/* Left Side: Contact Info & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row lg:flex-col gap-8 md:gap-10 lg:gap-12"
        >
          {/* Contact Vision & Email */}
          <div className="flex-1 flex flex-col gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 md:mb-4">
                Have a vision?
              </h3>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium mb-6">
                Let&apos;s build it together. Reach out via email or find me on social media.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a href={`mailto:${socialLinks.email}`} className="group flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors w-fit">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center bg-white dark:bg-[#0B1221] group-hover:border-blue-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10 transition-colors shadow-sm">
                  <FiMail className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="font-semibold text-sm md:text-base tracking-wide">{socialLinks.email}</span>
              </a>
              <p className="text-lg md:text-xl font-medium text-slate-600 dark:text-slate-400 mt-2">+92 309 6874343</p>
              <p className="text-lg md:text-xl font-medium text-slate-600 dark:text-slate-400">Lahore, Pakistan (UTC+5)</p>
            </div>
          </div>

          {/* Socials */}
          <div className="flex-1">
             <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Socials</h3>
             <div className="flex lg:flex-col gap-4 flex-wrap">
               <a href={socialLinks.github} target="_blank" rel="noreferrer" className="text-base md:text-lg font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors w-fit">
                 GitHub
               </a>
               <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-base md:text-lg font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors w-fit">
                 LinkedIn
               </a>
               <a href={socialLinks.twitter} target="_blank" rel="noreferrer" className="text-base md:text-lg font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors w-fit">
                 X (Twitter)
               </a>
               <a href={socialLinks.upwork} target="_blank" rel="noreferrer" className="text-base md:text-lg font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors w-fit">
                 Upwork
               </a>
             </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-slate-50 dark:bg-[#0d1117] p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-slate-800/60 shadow-xl shadow-slate-200/20 dark:shadow-none">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Send a Message</h3>
            <ContactForm />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
