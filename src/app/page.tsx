"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { SkillsSlider } from "@/components/skills-slider";
import { journey, projects, skills, skillsSlider, socialLinks } from "@/lib/portfolio-data";

import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="gradient-orb pointer-events-none fixed -left-24 top-0 h-[420px] w-[420px] blur-2xl" />
      <div className="pointer-events-none fixed -right-24 top-52 h-[340px] w-[340px] rounded-full bg-violet-500/10 dark:bg-violet-500/10 blur-3xl opacity-50 dark:opacity-100" />

      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-6">
        <motion.nav 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex w-full max-w-3xl items-center justify-between rounded-full border border-slate-200 bg-white/80 px-6 py-3.5 shadow-2xl shadow-emerald-900/5 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/60 dark:shadow-emerald-900/20 md:px-8"
        >
          <a href="#" className="text-lg font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400 transition-transform hover:scale-105">
            UZ.
          </a>
          <ul className="hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
            {["Projects", "Skills", "Journey", "Contact"].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href={socialLinks.resume}
              className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-500 hover:text-white dark:bg-emerald-500/10 dark:text-emerald-300 dark:hover:bg-emerald-500 dark:hover:text-slate-950"
            >
              Resume
            </a>
          </div>
        </motion.nav>
      </header>

      <main className="relative z-10 pt-20 md:pt-24">
        <section className="flex min-h-screen flex-col items-center justify-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex max-w-3xl flex-col items-center text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 dark:bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-500"></span>
              </span>
              Available for new opportunities
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-7xl lg:text-8xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent dark:from-emerald-400 dark:via-cyan-400 dark:to-blue-500">
                Uzair Ahmad
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-600 dark:text-slate-300 md:text-2xl">
              A Full Stack Engineer crafting scalable AI-powered products and immersive web experiences.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
              <a
                href="#contact"
                className="inline-flex rounded-full border border-slate-300 bg-white/50 px-8 py-3.5 text-base font-medium text-slate-700 backdrop-blur-sm transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-200 dark:hover:bg-slate-700/50 dark:hover:text-white"
              >
                Let's Talk
              </a>
            </div>

            <div className="mt-16 flex items-center gap-6">
              {[
                { name: "GitHub", href: socialLinks.github, icon: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.34 1.544 2.906 1.186.092-.923.35-1.545.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.024A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.293 2.747-1.024 2.747-1.024.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.918.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10z" },
                { name: "LinkedIn", href: socialLinks.linkedin, icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-slate-400 transition-colors hover:text-emerald-400"
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
                className="p-2 text-slate-400 transition-colors hover:text-emerald-400"
                title="Email"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="sr-only">Email</span>
              </a>
            </div>
          </motion.div>

          {/* Background Ambient Glow */}
          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-[40rem] w-[40rem] rounded-full bg-emerald-500/10 blur-[100px]" />
          </div>
        </section>

        <AnimatedSection className="section-container mt-32 relative">
          <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px] dark:bg-cyan-500/20" />
          
          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-700 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300">
                About Me
              </div>
              <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-5xl leading-tight dark:text-white">
                Building where <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-cyan-400">clean architecture</span> meets practical product impact.
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
              <div className="group relative aspect-square w-full overflow-hidden rounded-3xl border border-slate-300 bg-white/50 backdrop-blur-sm transition-all hover:border-emerald-500/30 hover:bg-white/80 dark:border-slate-700/50 dark:bg-slate-800/30 dark:hover:bg-slate-800/50">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 transition-colors group-hover:text-emerald-500 dark:text-slate-500 dark:group-hover:text-emerald-400">
                  <svg className="mb-4 h-12 w-12 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-medium tracking-widest uppercase">Your Image Here</span>
                </div>
                <Image src="/projects/Me.png" alt="Uzair Ahmad" fill className="object-cover transition-transform duration-500 group-hover:scale-105" priority />
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-3xl border border-emerald-500/20 bg-emerald-50 dark:bg-emerald-500/5" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="projects" className="section-container mt-40">
          <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-700 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300">
                Featured Work
              </div>
              <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">Projects</h2>
            </div>
            <span className="rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              4 selected builds
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-white/80 hover:shadow-2xl hover:shadow-emerald-500/10 dark:border-slate-700 dark:bg-slate-800/30 dark:hover:bg-slate-800/50"
              >
                <div className="overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.name} project preview`}
                    width={800}
                    height={420}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-80 dark:from-slate-900 dark:via-slate-900/20" />
                </div>
                
                <div className="relative flex flex-1 flex-col p-8 z-10">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.name}</h3>
                  <p className="mt-3 text-base text-slate-600 dark:text-slate-300">{project.summary}</p>
                  
                  <div className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    <p>
                      <strong className="font-semibold text-emerald-600 dark:text-emerald-400">Problem:</strong> {project.problem}
                    </p>
                    <p>
                      <strong className="font-semibold text-cyan-600 dark:text-cyan-400">Solution:</strong> {project.solution}
                    </p>
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700/50 dark:text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-6 text-sm font-semibold">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-emerald-600 transition-colors hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300"
                      >
                        Live Demo 
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                      >
                        GitHub 
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="skills" className="section-container mt-40">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-700 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300">
              Toolkit
            </div>
            <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">Skills & Tech Stack</h2>
          </div>
          
          <div className="mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-white/30 p-8 backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-800/20">
            <SkillsSlider skills={skillsSlider} />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="group rounded-2xl border border-slate-200 bg-white/50 p-6 transition-colors hover:border-emerald-500/30 hover:bg-white/80 dark:border-slate-700/50 dark:bg-slate-800/30 dark:hover:bg-slate-800/50">
                <h3 className="text-lg font-bold capitalize text-slate-900 group-hover:text-emerald-600 transition-colors dark:text-white dark:group-hover:text-emerald-400">{category}</h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-300 bg-slate-100/50 px-3.5 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:border-emerald-500/50 hover:bg-emerald-50 hover:text-emerald-700 dark:border-slate-600 dark:bg-slate-700/30 dark:text-slate-300 dark:hover:border-emerald-400/50 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="journey" className="section-container mt-40">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-700 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300">
              Experience
            </div>
            <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">My Journey</h2>
          </div>

          <div className="relative mx-auto mt-20 max-w-4xl">
            {/* Continuous Vertical Timeline Line */}
            <div className="absolute left-[21px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald-500/50 via-slate-300 to-transparent dark:via-slate-800 md:left-[210px]" />

            <div className="space-y-12">
              {journey.map((event, index) => (
                <div 
                  key={event.title} 
                  className="group relative flex flex-col gap-6 pl-12 md:flex-row md:items-start md:gap-12 md:pl-0"
                >
                  {/* Timeline Glowing Dot */}
                  <div className="absolute left-[22px] top-7 -translate-x-1/2 z-10 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-emerald-500 bg-white transition-all duration-500 group-hover:scale-150 group-hover:border-emerald-400 group-hover:bg-emerald-400 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.6)] dark:bg-slate-950 dark:group-hover:bg-emerald-400 md:left-[210.5px]" />
                  
                  {/* Year Tag (Left side on desktop) */}
                  <div className="pt-6 font-semibold md:w-[160px] md:shrink-0 md:text-right">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1.5 text-sm tracking-wide text-emerald-600 transition-colors group-hover:bg-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:group-hover:bg-emerald-500/20">
                      {event.year}
                    </span>
                  </div>

                  {/* Detail Card Content */}
                  <div className="flex-1 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 dark:border-slate-700/50 dark:bg-slate-800/40 dark:hover:border-emerald-500/30 dark:hover:bg-slate-800/60 sm:p-8">
                    <h3 className="text-2xl font-bold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                      {event.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                      {event.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="section-container mt-32">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/50 p-8 md:p-12 text-center backdrop-blur-sm transition-colors hover:border-emerald-500/30 dark:border-slate-700 dark:bg-slate-800/50">
            <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px] dark:bg-cyan-500/20" />
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
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

            <aside className="group flex flex-col justify-center space-y-8 rounded-3xl border border-slate-200 bg-white/50 p-8 backdrop-blur-md transition-colors hover:border-emerald-500/30 hover:bg-white/80 dark:border-slate-700/50 dark:bg-slate-800/20 dark:hover:bg-slate-800/40">
              <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">Contact Info</h3>
              <div className="space-y-6 text-slate-600 dark:text-slate-300">
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-slate-500">Email</p>
                  <a className="mt-1 inline-block text-lg font-medium text-emerald-600 transition hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300" href={`mailto:${socialLinks.email}`}>
                    {socialLinks.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-slate-500">Phone</p>
                  <p className="mt-1 text-lg font-medium text-slate-900 dark:text-white">+92 313 6874323</p>
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-slate-500">Location</p>
                  <p className="mt-1 text-lg font-medium text-slate-900 dark:text-white">Johar Town, Lahore</p>
                </div>
                <div className="pt-4">
                  <p className="text-sm font-medium uppercase tracking-wider text-slate-500 mb-4">Socials</p>
                  <div className="flex gap-4">
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-slate-300 bg-white p-3 text-slate-600 transition hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600 mt-2 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"
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
                      className="rounded-full border border-slate-300 bg-white p-3 text-slate-600 transition hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600 mt-2 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"
                      title="LinkedIn"
                    >
                       <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
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
