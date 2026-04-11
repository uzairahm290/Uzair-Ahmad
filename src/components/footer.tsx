"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiGithub, SiInstagram, SiX, SiUpwork } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Footer() {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com", icon: SiGithub },
    { name: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedin },
    { name: "X", href: "https://x.com", icon: SiX },
    { name: "Instagram", href: "https://instagram.com", icon: SiInstagram },
    { name: "Upwork", href: "https://upwork.com", icon: SiUpwork },
    { name: "Email", href: "mailto:your@email.com", icon: MdEmail },
  ];

  return (
    <footer className="w-full mt-auto border-t border-slate-200 bg-white/50 backdrop-blur-sm py-6 dark:border-slate-800/50 dark:bg-slate-950/50 z-10 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          
          <div className="flex flex-col items-center gap-1 md:items-start">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
              © {new Date().getFullYear()} Uzair Ahmad.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Built with Love
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
