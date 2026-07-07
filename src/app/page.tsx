"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { projects, skillsSlider, socialLinks } from "@/lib/portfolio-data";

import { ThemeToggle } from "@/components/theme-toggle";
import { TypewriterText } from "@/components/typewriter-text";
import { ScrollProgress } from "@/components/scroll-progress";
import { MagneticButton } from "@/components/magnetic-button";
import { CartographyField, RouteMap } from "@/components/hero-cartography";
import { VoyageRoute } from "@/components/voyage-route";

// Below-the-fold sections — code-split so they don't bloat the initial bundle.
const SkillsConstellation = dynamic(() => import("@/components/skills-constellation").then((m) => m.SkillsConstellation));
const SkillsSlider = dynamic(() => import("@/components/skills-slider").then((m) => m.SkillsSlider));
const GithubActivity = dynamic(() => import("@/components/github-activity").then((m) => m.GithubActivity));
const JourneyTimeline = dynamic(() => import("@/components/journey-timeline").then((m) => m.JourneyTimeline));
const ServicesScroll = dynamic(() => import("@/components/services-scroll").then((m) => m.ServicesScroll));
const MarqueeContact = dynamic(() => import("@/components/marquee-contact").then((m) => m.MarqueeContact));

const navItems = ["Projects", "Skills", "Journey", "Services", "Contact"];
const featuredProjects = projects.slice(0, 4);

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: projectsContainerRef,
    offset: ["start center", "end center"]
  });
  const timelineScaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <div className="relative overflow-clip">
      <div className="gradient-orb pointer-events-none fixed -left-24 top-0 h-[420px] w-[420px] blur-2xl" />
      <div className="pointer-events-none fixed -right-24 top-52 h-[340px] w-[340px] rounded-full bg-violet-500/10 dark:bg-violet-500/10 blur-3xl opacity-50 dark:opacity-100" />

      <VoyageRoute />

      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-6">
        <motion.nav 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex w-full max-w-5xl items-center justify-between rounded-full border border-slate-200 bg-white/80 px-6 h-16 shadow-2xl shadow-blue-900/5 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/60 dark:shadow-blue-900/20 md:px-8"
        >
          <ScrollProgress />
          <a href="#" className="text-lg font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 transition-transform hover:scale-105 z-10">
            UZ.
          </a>
          <ul className="hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex z-10">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 z-10 md:gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-100 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <motion.span
                animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 0 : -4 }}
                transition={{ duration: 0.2 }}
                className="absolute h-[1.5px] w-4 rounded-full bg-current"
              />
              <motion.span
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.15 }}
                className="absolute h-[1.5px] w-4 rounded-full bg-current"
              />
              <motion.span
                animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? 0 : 4 }}
                transition={{ duration: 0.2 }}
                className="absolute h-[1.5px] w-4 rounded-full bg-current"
              />
            </button>
            <MagneticButton>
              <a
                href={socialLinks.resume}
                className="inline-flex rounded-full border border-blue-500/30 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-500 hover:text-white dark:bg-blue-500/10 dark:text-blue-300 dark:hover:bg-blue-500 dark:hover:text-slate-950"
              >
                Resume
              </a>
            </MagneticButton>
          </div>
        </motion.nav>

        {/* Mobile nav drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.button
                aria-label="Close menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute inset-x-4 top-full z-50 mt-3 overflow-hidden rounded-3xl border border-slate-200 bg-white/95 p-2 shadow-2xl backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/95 md:hidden"
              >
                <ul className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800/80">
                  {navItems.map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800/60 dark:hover:text-blue-400"
                      >
                        {item}
                        <span className="text-slate-300 dark:text-slate-600">&rarr;</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      <main className="relative z-10 pt-20 md:pt-24">
        <section className="relative min-h-screen overflow-hidden">
          <CartographyField />

          <div className="section-container relative z-20 flex min-h-screen flex-col items-center justify-center gap-14 py-28 lg:flex-row lg:justify-between lg:gap-10 lg:py-20">

            {/* Identity block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex w-full max-w-xl flex-col items-center text-center lg:w-[54%] lg:items-start lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400"
              >
                <span className="h-px w-8 bg-slate-300 dark:bg-slate-600" />
                Full Stack Engineer &middot; 31.52&deg;N 74.36&deg;E
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="font-[family-name:var(--font-fraunces)] text-[16vw] font-semibold leading-[0.9] tracking-tight text-slate-900 sm:text-7xl md:text-[6rem] lg:text-[5.25rem] xl:text-[6rem] dark:text-white"
              >
                Uzair
                <br />
                <span className="italic text-blue-600 dark:text-blue-400">Ahmad</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                <TypewriterText
                  className="mt-6 flex min-h-[56px] max-w-md items-center justify-center text-base leading-relaxed text-slate-600 md:text-lg lg:justify-start dark:text-slate-300"
                  text={[
                    "A Full Stack Engineer crafting scalable AI-powered products",
                    "Building immersive web experiences with modern technologies",
                    "Transforming ideas into robust digital solutions",
                  ]}
                  speed={50}
                />
              </motion.div>

              {/* Spec sheet */}
              <motion.dl
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.55 }}
                className="mx-auto mt-9 grid w-full max-w-sm gap-y-2.5 font-mono text-[12.5px] lg:mx-0"
              >
                {[
                  { k: "EXPERIENCE", v: "03 YRS" },
                  { k: "SHIPPED", v: "20+ BUILDS" },
                  { k: "STACK", v: "15 TOOLS" },
                ].map((row) => (
                  <div key={row.k} className="flex items-baseline gap-2">
                    <dt className="shrink-0 tracking-[0.15em] text-slate-500 dark:text-slate-400">{row.k}</dt>
                    <span className="h-0 flex-1 border-b border-dotted border-slate-300 dark:border-slate-600" />
                    <dd className="shrink-0 font-semibold tracking-wide text-slate-900 dark:text-white">{row.v}</dd>
                  </div>
                ))}
              </motion.dl>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.68 }}
                className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
              >
                <MagneticButton>
                  <a
                    href="#projects"
                    className="group relative inline-flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-slate-800 sm:w-auto dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                  >
                    See the Work
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-slate-300 bg-transparent px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-slate-700 transition-colors hover:border-blue-500 hover:text-blue-600 sm:w-auto dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400"
                  >
                    Let&apos;s Talk
                  </a>
                </MagneticButton>
              </motion.div>

              {/* Social ports */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.82 }}
                className="mt-10 flex items-center gap-0.5 rounded-lg border border-slate-200 p-1 dark:border-slate-700/50"
              >
                {[
                  { name: "GitHub", href: socialLinks.github, icon: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.34 1.544 2.906 1.186.092-.923.35-1.545.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.024A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.293 2.747-1.024 2.747-1.024.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.918.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10z" },
                  { name: "LinkedIn", href: socialLinks.linkedin, icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" },
                  { name: "X (Twitter)", href: socialLinks.twitter, icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                  { name: "Instagram", href: socialLinks.instagram, icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                  { name: "Upwork", href: socialLinks.upwork, icon: "M18.561 13.158c-1.102 0-2.135-.467-3.062-1.226l-.505-.411-.849 3.011c-1.076 3.738-4.495 6.353-8.349 6.353C2.565 20.885 0 18.322 0 15.105V5h2.89v10.105c0 1.621 1.341 2.947 2.906 2.947 1.637 0 3.031-1.332 3.19-2.924L10.37 5h2.906v4.619c0 1.67-.074 2.981-.221 4.148.775.845 1.666 1.405 2.651 1.57l1.092 3.842h2.909l-.865-3.045c1.476-.411 2.531-1.744 2.531-3.309 0-1.89-1.579-3.41-3.524-3.41-1.523 0-2.825 1.01-3.292 2.374-.183-.345-.37-.732-.55-1.169h-2.945c1.393 3.652 2.106 5.86 2.106 5.86l.668.536c.945.745 1.956 1.144 2.915 1.144 1.142 0 2.05-.733 2.05-1.634 0-.829-.769-1.527-1.844-1.527v-2.839c2.613.001 4.733 1.961 4.733 4.366s-2.12 4.353-4.733 4.353z" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    title={social.name}
                    className="group flex h-10 w-10 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                  >
                    <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                    <span className="sr-only">{social.name}</span>
                  </a>
                ))}
                <span className="mx-1 h-5 w-px bg-slate-200 dark:bg-slate-700/50" />
                <a
                  href={socialLinks.email}
                  title="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                >
                  <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="sr-only">Email</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Route map — the hero's signature graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="w-full max-w-md lg:w-[42%] lg:max-w-none"
            >
              <RouteMap className="h-auto w-full" />
            </motion.div>
          </div>
        </section>

        <AnimatedSection id="about" className="section-container mt-32 relative scroll-mt-24">
          {/* Header Area */}
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              <span className="text-slate-900 dark:text-white">About</span> <span className="text-blue-500">Me</span>
              {/* Subtle glowing underline effect */}
              <div className="h-[2px] w-24 mx-auto mt-4 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[1px] opacity-70" />
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              This website was built in just 2 days. Imagine what&apos;s possible with more time...
            </p>
          </div>

          <div className="relative grid gap-8 lg:gap-8 lg:grid-cols-[0.8fr_1.2fr] items-stretch">
            {/* Left Column: Portrait Card */}
            <div className="relative group/portrait w-full aspect-[4/5] lg:aspect-auto min-h-[400px] lg:min-h-[500px] rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/50 backdrop-blur-md shadow-2xl dark:shadow-none">
              {/* Corner brackets */}
              <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-slate-300 dark:border-slate-600/50 z-20" />
              <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-slate-300 dark:border-slate-600/50 z-20" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-slate-300 dark:border-slate-600/50 z-20" />
              <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-slate-300 dark:border-slate-600/50 z-20" />
              
              {/* Systems Online Tag */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-2 z-20 flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-lg text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                Systems<br/>Online
              </div>

              {/* Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 mix-blend-overlay z-10" />

              <Image 
                src="/projects/Me.png" 
                alt="Uzair Ahmad" 
                fill 
                sizes="(max-width: 1024px) 100vw, 40vw" 
                className="object-cover object-bottom z-0 filter contrast-[1.1] saturate-75" 
                priority 
              />

              {/* Continuous Scanner Blur Effect - Fixed for performance using y (translateY) */}
              <motion.div 
                animate={{ y: ["-100%", "200%", "-100%"] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 right-0 h-[60%] backdrop-blur-md z-10 pointer-events-none flex flex-col justify-end"
                style={{
                  maskImage: 'linear-gradient(to bottom, transparent, black 80%, transparent)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 80%, transparent)'
                }}
              >
                {/* The bright scanner line attached to the bottom of the blur block */}
                <div className="w-full h-[2px] bg-emerald-400/40 shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
              </motion.div>

              {/* Bottom Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 pt-24 z-20 bg-gradient-to-t from-white via-white/80 dark:from-[#09090b] dark:via-[#09090b]/80 to-transparent">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-3 backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-500 uppercase tracking-wider">Available for hire</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Uzair Ahmad</h3>
                <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 text-xs">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Global Remote
                </div>
              </div>
            </div>

            {/* Right Column: Bio Card */}
            <div className="relative w-full rounded-[2rem] border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/50 backdrop-blur-md p-8 md:p-10 flex flex-col justify-between shadow-2xl dark:shadow-none">
              <div>
                {/* Top Row removed as per request */}

                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
                  Architecting the <br />
                  <span className="text-blue-500">Intelligent Web</span>
                </h2>

                <div className="space-y-6 text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                  <p>
                    I am a <strong className="text-slate-900 dark:text-slate-200 font-semibold">Full Stack Engineer</strong> and <strong className="text-slate-900 dark:text-slate-200 font-semibold">Cybersecurity Enthusiast</strong> dedicated to building secure, scalable, and high-performance digital products. My expertise bridges the gap between elegant frontend interfaces using <span className="text-blue-500 dark:text-blue-400 font-medium">React/Next.js</span> and robust backend architectures powered by <span className="text-emerald-500 dark:text-emerald-400 font-medium">Python</span>, Node.js, and .NET.
                  </p>
                  <p>
                    Beyond standard web development, my background in <span className="text-red-500 dark:text-red-400 font-medium">Blue Teaming</span> and competitive CTFs (Capture The Flag) allows me to engineer systems with security-first design principles. Whether integrating complex AI capabilities or optimizing API response times, I build applications that are as fortified as they are beautiful.
                  </p>
                </div>
              </div>

              {/* Bottom Row: Languages */}
              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800/50 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 text-[11px] font-medium text-slate-700 dark:text-slate-300">
                  <span>🇬🇧</span> English <span className="text-slate-500">(Fluent)</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 text-[11px] font-medium text-slate-700 dark:text-slate-300">
                  <span>🇵🇰</span> Urdu <span className="text-slate-500">(Native)</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <section id="projects" ref={projectsContainerRef} className="section-container mt-40 relative scroll-mt-24">
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              <span className="text-slate-900 dark:text-white">Latest</span> <span className="text-blue-500">Works</span>
              {/* Subtle glowing underline effect */}
              <div className="h-[2px] w-24 mx-auto mt-4 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[1px] opacity-70" />
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              {featuredProjects.length} selected builds from a {projects.length}-project archive spanning full stack development, AI integration, and creative design.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative mt-12 lg:pl-0">
            {/* Background Timeline track line — desktop only */}
            <div className="absolute hidden lg:block left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-slate-200 dark:bg-slate-800" />

            {/* Active/Scrolling Timeline track line — desktop only */}
            <motion.div
              style={{ scaleY: timelineScaleY, transformOrigin: "top" }}
              className="absolute hidden lg:block left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-orange-500 via-purple-500 via-sky-500 via-emerald-500 via-red-500 to-cyan-500"
            />

            {/* Project rows */}
            <div className="space-y-10 lg:space-y-36">
              {featuredProjects.map((project, idx) => {
                const isEven = idx % 2 === 1;
                
                return (
                  <div key={project.name} className="relative group/row grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start">
                    
                    {/* Horizontal Connector Line (desktop only) */}
                    {!isEven && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className={`absolute top-1/2 -translate-y-1/2 right-1/2 w-[18%] xl:w-[22%] h-[1.5px] origin-right hidden lg:block ${project.color.line}`}
                      />
                    )}
                    {isEven && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className={`absolute top-1/2 -translate-y-1/2 left-1/2 w-[18%] xl:w-[22%] h-[1.5px] origin-left hidden lg:block ${project.color.line}`}
                      />
                    )}

                    {/* Timeline dot — desktop only */}
                    <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                        className={`w-6 h-6 rounded-full border-4 border-white dark:border-slate-900 shadow-md ${project.color.dot} transition-transform duration-300 group-hover/row:scale-125 cursor-pointer relative`}
                      >
                        {/* Ping radar effect on hover */}
                        <span className="absolute -inset-2 rounded-full border-2 border-inherit opacity-0 group-hover/row:opacity-100 group-hover/row:animate-ping transition-opacity duration-300" />
                      </motion.div>
                    </div>

                    {/* Mockup Column — always on top on mobile, alternates on desktop */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`w-full relative flex items-center justify-center py-4 group order-1 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                    >
                      {/* Ambient backdrop glow */}
                      <div 
                        className="absolute inset-10 rounded-full blur-[60px] opacity-35 group-hover:opacity-55 transition-opacity duration-500 pointer-events-none"
                        style={{ backgroundColor: project.color.glow }}
                      />

                      {/* Futuristic Tooltip Popup on Hover */}
                      <div className="absolute top-[16%] left-1/2 -translate-x-1/2 z-30 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:top-[5%] transition-all duration-500 pointer-events-none">
                        <div className={`relative flex items-center gap-2.5 px-4 py-2 rounded-sm border bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-md shadow-2xl uppercase tracking-[0.2em] text-[10px] font-black ${project.color.border}`}>
                          {/* Inner border for glass effect */}
                          <div className="absolute inset-0 border border-white/40 dark:border-white/10 rounded-sm pointer-events-none" />
                          
                          {/* Blinking status dot */}
                          <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${project.color.dot}`} />
                          
                          <span className={`text-slate-800 dark:text-slate-200`}>
                            {project.name.split(" — ")[0]}
                          </span>
                          
                          {/* Cyber corners */}
                          <div className="absolute -top-[5px] -left-[5px] w-2 h-2 border-t border-l border-slate-400/60 dark:border-slate-500/60" />
                          <div className="absolute -bottom-[5px] -right-[5px] w-2 h-2 border-b border-r border-slate-400/60 dark:border-slate-500/60" />
                          
                          {/* Ambient backdrop glow */}
                          <div 
                            className="absolute inset-0 -z-10 rounded-sm blur-xl opacity-60"
                            style={{ backgroundColor: project.color.glow }}
                          />
                        </div>
                      </div>

                      <Image
                        src={project.image}
                        alt={`${project.name} preview`}
                        width={600}
                        height={380}
                        className="w-full h-auto object-contain select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-105"
                        priority
                      />
                    </motion.div>

                    {/* Text Details Column — Interactive Text (No Card) */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`flex flex-col justify-center order-2 ${isEven ? "lg:order-1 lg:pr-12" : "lg:order-2 lg:pl-12"}`}
                    >
                      <div className="flex items-center gap-3 mb-4 opacity-50 group-hover/row:opacity-100 transition-opacity duration-500">
                        <span className={`text-xs font-bold uppercase tracking-widest ${project.color.text}`}>
                          {project.tech[0]} / {project.tech[1] || "Project"}
                        </span>
                      </div>
                      
                      {/* Interactive Title */}
                      <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-black text-slate-300 dark:text-slate-800 tracking-tighter leading-none transition-colors duration-700 group-hover/row:text-slate-900 dark:group-hover/row:text-white cursor-default flex flex-wrap">
                        {project.name.split(" ").map((word, wi) => (
                          <span key={wi} className="inline-flex whitespace-nowrap mr-[0.22em]">
                            {word.split("").map((char, ci) => (
                              <span
                                key={ci}
                                className={`inline-block transition-transform duration-200 hover:-translate-y-2 ${project.color.hoverText}`}
                              >
                                {char}
                              </span>
                            ))}
                          </span>
                        ))}
                      </h3>
                      
                      <p className="mt-8 text-lg md:text-xl leading-relaxed text-slate-500 dark:text-slate-500 font-medium max-w-xl transition-colors duration-700 group-hover/row:text-slate-700 dark:group-hover/row:text-slate-300">
                        {project.summary}
                      </p>
                      
                      <div className="mt-8 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-slate-100 dark:bg-slate-800/80 px-3 py-1 text-xs font-bold text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 transition-colors hover:text-slate-900 dark:hover:text-white"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className={`inline-flex items-center gap-2 transition-colors ${project.color.text} hover:opacity-80 group/link`}
                        >
                          Live Demo
                          <svg className="h-4 w-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white transition-colors group/link"
                        >
                          GitHub
                          <svg className="h-4 w-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                             <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </motion.div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* View All CTA */}
          <div className="mt-20 flex flex-col items-center justify-center gap-2 text-center lg:mt-28">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              {projects.length - featuredProjects.length} more builds in the archive
            </p>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-lg font-bold text-slate-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
            >
              View All Projects
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>
        <AnimatedSection id="skills" className="section-container mt-40">
          <div className="flex flex-col items-center justify-center text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              <span className="text-slate-900 dark:text-white">Skills &</span> <span className="text-blue-500">Tech Stack</span>
              <div className="h-[2px] w-24 mx-auto mt-4 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[1px] opacity-70" />
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              My toolkit for building high-performance, scalable web applications.
            </p>
          </div>
          
          <div className="mt-12">
            <SkillsConstellation />
          </div>

          <div className="mt-16 w-screen relative left-1/2 -translate-x-1/2">
            <SkillsSlider skills={skillsSlider} />
          </div>
        </AnimatedSection>
        <AnimatedSection className="section-container mt-32">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-slate-900 md:text-3xl dark:text-white mb-10">Days I Code</h3>
          </div>
          <GithubActivity />
        </AnimatedSection>

        <JourneyTimeline />

        <AnimatedSection className="section-container mt-32">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/50 p-8 md:p-12 text-center backdrop-blur-sm transition-colors hover:border-blue-500/30 dark:border-slate-700 dark:bg-slate-800/50">
            <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-indigo-500/10 blur-[80px] dark:bg-indigo-500/20" />
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
              Currently Focusing On
            </div>
            <h2 className="mt-6 text-2xl font-semibold leading-relaxed text-slate-800 md:text-3xl max-w-3xl mx-auto dark:text-slate-200">
              Sharpening advanced backend engineering, AI integration patterns,
              and deployment automation to build resilient production-grade systems.
            </h2>
          </div>
        </AnimatedSection>

        <ServicesScroll />

        <AnimatedSection id="contact" className="section-container mt-24 lg:mt-40 mb-20 lg:mb-32">
          <MarqueeContact />
        </AnimatedSection>
      </main>
    </div>
  );
}
