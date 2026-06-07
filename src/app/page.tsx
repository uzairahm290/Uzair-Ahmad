"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { SkillsSlider } from "@/components/skills-slider";
import { journey, projects, skills, skillsSlider, socialLinks } from "@/lib/portfolio-data";

import { ThemeToggle } from "@/components/theme-toggle";
import { TypewriterText } from "@/components/typewriter-text";
import { ScrollProgress } from "@/components/scroll-progress";
import { JourneyTimeline } from "@/components/journey-timeline";
import { MagneticButton } from "@/components/magnetic-button";
import { HeroParticlesCanvas } from "@/components/hero-particles-canvas";
import { GithubActivity } from "@/components/github-activity";

export default function Home() {
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
    <div className="relative overflow-x-hidden">
      <div className="gradient-orb pointer-events-none fixed -left-24 top-0 h-[420px] w-[420px] blur-2xl" />
      <div className="pointer-events-none fixed -right-24 top-52 h-[340px] w-[340px] rounded-full bg-violet-500/10 dark:bg-violet-500/10 blur-3xl opacity-50 dark:opacity-100" />

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
            {["Projects", "Skills", "Journey", "Contact"].map((item) => (
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
          <div className="flex items-center gap-4 z-10">
            <ThemeToggle />
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
      </header>

      <main className="relative z-10 pt-20 md:pt-24">
        <section className="relative min-h-screen overflow-hidden">
          {/* Dynamic Interactive Node Background Canvas */}
          <HeroParticlesCanvas />

          <div className="section-container relative z-20 min-h-screen flex items-center">
            {/* Left Column: Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left py-32"
            >
                <motion.div
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 dark:bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-500"></span>
                  </span>
                  Available for new opportunities
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-7xl lg:text-8xl"
                >
                  Hi, I&apos;m{" "}
                  <motion.span 
                    className="inline-block bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-blue-500 cursor-default"
                    whileHover={{ scale: 1.05, rotate: -1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 140,
                      damping: 12,
                      delay: 0.35
                    }}
                  >
                    Uzair Ahmad
                  </motion.span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
                >
                  <TypewriterText 
                    className="mt-8 max-w-1xl text-xl leading-relaxed text-slate-600 dark:text-slate-300 md:text-2xl flex justify-center lg:justify-start items-center min-h-[80px] text-center lg:text-left"
                    text={[
                      "A Full Stack Engineer crafting scalable AI-powered products",
                      "Building immersive web experiences with modern technologies",
                      "Transforming ideas into robust digital solutions"
                    ]}
                    speed={50}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: 0.58 }}
                  className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4"
                >
                  <MagneticButton>
                    <a
                      href="#projects"
                      className="group relative inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-3.5 text-base font-semibold text-white transition-transform hover:scale-105 active:scale-95 dark:bg-white dark:text-slate-950"
                    >
                      Explore My Work
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
                      className="inline-flex rounded-full border border-slate-300 bg-white/50 px-8 py-3.5 text-base font-medium text-slate-700 backdrop-blur-sm transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-200 dark:hover:bg-slate-700/50 dark:hover:text-white"
                    >
                      Let's Talk
                    </a>
                  </MagneticButton>
                </motion.div>

                {/* Stats — inline separator style */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.72 }}
                  className="mt-10 flex items-center justify-center lg:justify-start gap-0"
                >
                  {[
                    { value: "3+", label: "Years Exp" },
                    { value: "20+", label: "Projects" },
                    { value: "15+", label: "Technologies" },
                  ].map((stat, i) => (
                    <div key={stat.label} className="flex items-center">
                      <div className="group flex flex-col items-center lg:items-start px-5 first:pl-0 cursor-default">
                        <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-400 group-hover:to-violet-400">
                          {stat.value}
                        </span>
                        <span className="mt-0.5 text-[11px] font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
                          {stat.label}
                        </span>
                      </div>
                      {i < 2 && (
                        <div className="h-8 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent dark:via-slate-600" />
                      )}
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.85 }}
                  className="mt-8 flex items-center justify-center lg:justify-start gap-6"
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
                      className="p-2 text-slate-400 transition-colors hover:text-blue-400"
                      title={social.name}
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                      <span className="sr-only">{social.name}</span>
                    </a>
                  ))}
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className="p-2 text-slate-400 transition-colors hover:text-blue-400"
                    title="Email"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="sr-only">Email</span>
                  </a>
                </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Portrait — absolutely pinned to bottom of hero */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="absolute right-0 top-0 bottom-0 w-[52%] z-10 hidden lg:block"
          >
            {/* Image fills full section height, feet touch the bottom */}
            <div className="relative w-full h-full overflow-visible">
              {/* Radial glow behind face — white in dark mode, blue in light mode */}
              {/* Dark mode: white glow */}
              <div
                className="hidden dark:block"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "45%",
                  transform: "translate(-50%, -50%)",
                  width: "65%",
                  aspectRatio: "1",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.35) 40%, transparent 70%)",
                  filter: "blur(36px)",
                  zIndex: 0,
                  pointerEvents: "none",
                }}
              />
              {/* Light mode: blue glow */}
              <div
                className="block dark:hidden"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "45%",
                  transform: "translate(-50%, -50%)",
                  width: "65%",
                  aspectRatio: "1",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(99,102,241,0.35) 40%, transparent 70%)",
                  filter: "blur(36px)",
                  zIndex: 0,
                  pointerEvents: "none",
                }}
              />
                    <Image
                      src="/projects/transparent.png"
                      alt="Uzair Ahmad"
                      fill
                      className="object-contain object-bottom hover:scale-[1.02] transition-all duration-500 select-none drop-shadow-[0_30px_60px_rgba(59,130,246,0.15)] dark:drop-shadow-[0_30px_60px_rgba(99,102,241,0.2)]"
                      style={{ zIndex: 1 }}
                      sizes="52vw"
                      priority
                    />
            </div>


          </motion.div>

          {/* Background Ambient Glow */}
          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-[40rem] w-[40rem] rounded-full bg-blue-500/10 blur-[100px]" />
          </div>

          {/* Bottom smoke / fade-out glow */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 z-20"
            style={{
              height: "160px",
              background: "linear-gradient(to bottom, transparent 0%, var(--hero-smoke-color) 100%)",
            }}
          />
          {/* Light-mode: white smoke. Dark-mode: dark smoke */}
          <style>{`
            :root { --hero-smoke-color: rgba(248,250,252,1); }
            .dark { --hero-smoke-color: rgba(3,7,18,1); }
          `}</style>

          {/* Horizontal radial glow band at bottom */}
          <div
            className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
            style={{
              width: "80%",
              height: "2px",
              background: "radial-gradient(ellipse 60% 100% at 50% 100%, rgba(99,102,241,0.55) 0%, rgba(59,130,246,0.3) 40%, transparent 70%)",
              filter: "blur(1px)",
            }}
          />
          <div
            className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
            style={{
              width: "60%",
              height: "80px",
              background: "radial-gradient(ellipse 100% 100% at 50% 100%, rgba(99,102,241,0.18) 0%, rgba(59,130,246,0.12) 50%, transparent 100%)",
              filter: "blur(8px)",
            }}
          />
        </section>

        <AnimatedSection className="section-container mt-32 relative">
          <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-[100px] dark:bg-indigo-500/20" />
          
          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-700 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300">
                About Me
              </div>
              <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-5xl leading-tight dark:text-white">
                Building where <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">clean architecture</span> meets practical product impact.
              </h2>
              <div className="mt-8 space-y-6 text-lg text-slate-600 dark:text-slate-300">
                <p className="leading-relaxed">
                  I'm a Full Stack Engineer with strong experience designing and developing scalable,
                  high-performance web applications using Python (Django), Node.js, and .NET.
                </p>
                <p className="leading-relaxed">
                  I enjoy robust backend-frontend integrations, secure APIs, CI/CD-driven delivery,
                  and AI-enhanced applications that solve real user problems.
                </p>
              </div>
            </div>

            <div className="order-1 relative mx-auto w-full max-w-sm lg:order-2 lg:max-w-none">
              <div className="group relative aspect-square w-full overflow-hidden rounded-3xl border border-slate-300 bg-white/50 backdrop-blur-sm transition-all hover:border-blue-500/30 hover:bg-white/80 dark:border-slate-700/50 dark:bg-slate-800/30 dark:hover:bg-slate-800/50">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 transition-colors group-hover:text-blue-500 dark:text-slate-500 dark:group-hover:text-blue-400">
                  <svg className="mb-4 h-12 w-12 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-medium tracking-widest uppercase">Your Image Here</span>
                </div>
                <Image src="/projects/Me.png" alt="Uzair Ahmad" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 384px, 448px" className="object-cover transition-transform duration-500 group-hover:scale-105" priority />
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-3xl border border-blue-500/20 bg-blue-50 dark:bg-blue-500/5" />
            </div>
          </div>
        </AnimatedSection>

        <section id="projects" ref={projectsContainerRef} className="section-container mt-40 relative scroll-mt-24">
          <div className="mb-20 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-700 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300">
                Featured Work
              </div>
              <h2 className="mt-6 text-4xl font-extrabold text-slate-900 md:text-5xl dark:text-white animate-fade-in">
                Latest Works
              </h2>
            </div>
            <span className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20">
              {projects.length} selected builds
            </span>
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
            <div className="space-y-20 lg:space-y-36">
              {projects.map((project, idx) => {
                const isEven = idx % 2 === 1;
                
                return (
                  <div key={project.name} className="relative group/row grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
                    
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

                      {/* Tooltip Popup on Hover */}
                      <div className="absolute top-[16%] left-1/2 -translate-x-1/2 z-30 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:top-[8%] transition-all duration-300 pointer-events-none">
                        <div className="relative bg-blue-600 dark:bg-blue-500 text-white dark:text-slate-950 font-bold px-4.5 py-2 text-sm rounded-xl shadow-lg shadow-blue-500/20 whitespace-nowrap">
                          {project.name.split(" — ")[0]}
                          {/* Caret */}
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 bg-blue-600 dark:bg-blue-500" />
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

                    {/* Text Details Column — always below on mobile, alternates on desktop */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`flex flex-col p-8 md:p-10 rounded-3xl border bg-white/40 dark:bg-slate-900/30 backdrop-blur-md shadow-xl hover:shadow-2xl hover:bg-white/60 dark:hover:bg-slate-900/50 transition-all duration-500 order-2 ${isEven ? "lg:order-1" : "lg:order-2"} ${project.color.border}`}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider border ${project.color.badge}`}>
                          {project.tech[0]}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover/row:text-blue-500 dark:group-hover/row:text-blue-400 transition-colors">
                        {project.name}
                      </h3>
                      
                      <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                        {project.summary}
                      </p>
                      
                      <div className="mt-6 space-y-4 border-l-2 border-slate-200 dark:border-slate-800/80 pl-4 py-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        <div>
                          <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1 flex items-center gap-1.5">
                            <span className={`${project.color.text}`}>●</span> Problem
                          </h4>
                          <p className="text-slate-600 dark:text-slate-400">{project.problem}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1 flex items-center gap-1.5">
                            <span className={`${project.color.text}`}>●</span> Solution
                          </h4>
                          <p className="text-slate-600 dark:text-slate-400">{project.solution}</p>
                        </div>
                      </div>

                      <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((t) => (
                            <span 
                              key={t} 
                              className="rounded-lg bg-slate-100/80 dark:bg-slate-800/60 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300 border border-slate-200/40 dark:border-slate-700/40 transition-all hover:scale-105 hover:bg-slate-200 dark:hover:bg-slate-700"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-6 text-sm font-bold">
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className={`inline-flex items-center gap-2 transition-colors ${project.color.text} hover:opacity-80 group/link`}
                          >
                            Live Demo 
                            <svg className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors group/link"
                          >
                            GitHub 
                            <svg className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                               <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </motion.div>

                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <AnimatedSection id="skills" className="section-container mt-40">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-700 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300">
              Toolkit
            </div>
            <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">Skills & Tech Stack</h2>
          </div>
          
          <div className="mt-16 w-screen relative left-1/2 -translate-x-1/2">
            <SkillsSlider skills={skillsSlider} />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="group rounded-2xl border border-slate-200/60 p-6 transition-colors hover:border-blue-500/30 dark:border-slate-700/40">
                <h3 className="text-lg font-bold capitalize text-slate-900 group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-400">{category}</h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {items.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="group/tooltip relative"
                      >
                        <span
                          className="inline-flex cursor-help items-center gap-1.5 rounded-full border border-slate-200/80 px-3.5 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:border-blue-500/50 hover:text-blue-700 dark:border-slate-700/50 dark:text-slate-300 dark:hover:border-blue-400/50 dark:hover:text-blue-300"
                        >
                          <span aria-hidden="true" className="text-blue-600 dark:text-blue-400">
                            <Icon size={16} />
                          </span>
                          {skill.name}
                        </span>
                        {/* Tooltip */}
                        <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg shadow-blue-500/10 transition-all duration-200 group-hover/tooltip:-top-12 group-hover/tooltip:opacity-100 dark:bg-blue-500 dark:text-slate-950 z-10">
                          {skill.exp}
                          <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-slate-900 dark:bg-blue-500" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="section-container mt-32">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-slate-900 md:text-3xl dark:text-white mb-10">Days I Code</h3>
          </div>
          <GithubActivity />
        </AnimatedSection>

        <AnimatedSection id="journey" className="section-container mt-40">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-700 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300">
              Experience
            </div>
            <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">My Journey</h2>
          </div>

          <JourneyTimeline />
        </AnimatedSection>

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

        <AnimatedSection id="contact" className="section-container mt-40 pb-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
             <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-700 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300">
                Let's Connect
              </div>
              <h2 className="mt-6 border-b border-slate-200 pb-8 text-4xl font-bold text-slate-900 md:text-5xl dark:border-slate-700/50 dark:text-white">
                Ready to bring your ideas to life?
              </h2>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            <aside className="group flex flex-col justify-center space-y-8 rounded-3xl border border-slate-200 bg-white/50 p-8 backdrop-blur-md transition-colors hover:border-blue-500/30 hover:bg-white/80 dark:border-slate-700/50 dark:bg-slate-800/20 dark:hover:bg-slate-800/40">
              <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">Contact Info</h3>
              <div className="space-y-6 text-slate-600 dark:text-slate-300">
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-slate-500">Email</p>
                  <a className="mt-1 inline-block text-lg font-medium text-blue-600 transition hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300" href={`mailto:${socialLinks.email}`}>
                    {socialLinks.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-slate-500">Phone</p>
                  <p className="mt-1 text-lg font-medium text-slate-900 dark:text-white">+92 309 6874343</p>
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-slate-500">Location</p>
                  <p className="mt-1 text-lg font-medium text-slate-900 dark:text-white">Johar Town, Lahore</p>
                </div>
                <div className="pt-4">
                  <p className="text-sm font-medium uppercase tracking-wider text-slate-500 mb-4">Socials</p>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-slate-300 bg-white p-3 text-slate-600 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                      title="GitHub"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.34 1.544 2.906 1.186.092-.923.35-1.545.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.024A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.293 2.747-1.024 2.747-1.024.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.918.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </a>
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-slate-300 bg-white p-3 text-slate-600 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                      title="LinkedIn"
                    >
                       <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                      </svg>
                    </a>
                    <a
                      href={socialLinks.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-slate-300 bg-white p-3 text-slate-600 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                      title="X (Twitter)"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href={socialLinks.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-slate-300 bg-white p-3 text-slate-600 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                      title="Instagram"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                    <a
                      href={socialLinks.upwork}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-slate-300 bg-white p-3 text-slate-600 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                      title="Upwork"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.062-1.226l-.505-.411-.849 3.011c-1.076 3.738-4.495 6.353-8.349 6.353C2.565 20.885 0 18.322 0 15.105V5h2.89v10.105c0 1.621 1.341 2.947 2.906 2.947 1.637 0 3.031-1.332 3.19-2.924L10.37 5h2.906v4.619c0 1.67-.074 2.981-.221 4.148.775.845 1.666 1.405 2.651 1.57l1.092 3.842h2.909l-.865-3.045c1.476-.411 2.531-1.744 2.531-3.309 0-1.89-1.579-3.41-3.524-3.41-1.523 0-2.825 1.01-3.292 2.374-.183-.345-.37-.732-.55-1.169h-2.945c1.393 3.652 2.106 5.86 2.106 5.86l.668.536c.945.745 1.956 1.144 2.915 1.144 1.142 0 2.05-.733 2.05-1.634 0-.829-.769-1.527-1.844-1.527v-2.839c2.613.001 4.733 1.961 4.733 4.366s-2.12 4.353-4.733 4.353z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
}
