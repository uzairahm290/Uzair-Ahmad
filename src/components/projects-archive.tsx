"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/portfolio-data";

type Project = (typeof projects)[number];

export function ProjectsArchive() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = useMemo(() => {
    const counts = new Map<string, number>();
    projects.forEach((p) => p.tech.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1)));
    // Only surface tags shared by multiple builds — a one-off tag is a
    // useless filter (it just isolates the single project that has it).
    return Array.from(counts.entries())
      .filter(([, count]) => count > 1)
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag);
  }, []);

  const visible = activeTag
    ? projects.filter((p) => (p.tech as readonly string[]).includes(activeTag))
    : projects;

  return (
    <div>
      {/* Legend key — reads like a chart index, not a filter bar */}
      <div className="flex flex-wrap items-center gap-x-7 gap-y-3 border-b border-slate-200 pb-5 dark:border-slate-800">
        <button
          onClick={() => setActiveTag(null)}
          className={`border-b-2 pb-1.5 font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
            activeTag === null
              ? "border-slate-900 text-slate-900 dark:border-white dark:text-white"
              : "border-transparent text-slate-400 hover:border-slate-300 hover:text-slate-600 dark:text-slate-600 dark:hover:border-slate-700 dark:hover:text-slate-400"
          }`}
        >
          All <span className="ml-1 opacity-60">{projects.length}</span>
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
            className={`border-b-2 pb-1.5 font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
              activeTag === tag
                ? "border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400"
                : "border-transparent text-slate-400 hover:border-slate-300 hover:text-slate-600 dark:text-slate-600 dark:hover:border-slate-700 dark:hover:text-slate-400"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Ledger */}
      <div className="mt-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => {
            const entryNo = projects.indexOf(project) + 1;
            return <LedgerEntry key={project.name} project={project} entryNo={entryNo} />;
          })}
        </AnimatePresence>
      </div>

      {visible.length === 0 && (
        <p className="mt-16 text-center font-mono text-sm text-slate-500 dark:text-slate-400">
          No builds tagged &ldquo;{activeTag}&rdquo; yet.
        </p>
      )}
    </div>
  );
}

function LedgerEntry({ project, entryNo }: { project: Project; entryNo: number }) {
  const padded = String(entryNo).padStart(2, "0");

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group relative border-t border-slate-200 py-10 first:border-t-0 lg:grid lg:grid-cols-[64px_1fr] lg:gap-8 dark:border-slate-800"
    >
      {/* Route column — plate number + waypoint line, echoes the site's voyage motif */}
      <div className="hidden lg:flex lg:flex-col lg:items-center">
        <span className="font-[family-name:var(--font-fraunces)] text-2xl italic text-slate-300 transition-colors duration-300 group-hover:text-slate-900 dark:text-slate-700 dark:group-hover:text-white">
          {padded}
        </span>
        <span className={`mt-4 w-px flex-1 opacity-60 ${project.color.line}`} />
        <span className={`h-1.5 w-1.5 ${project.color.dot}`} />
      </div>

      <div className="grid gap-6 sm:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
        {/* Plate — framed like a field-report photograph, not a hero card image */}
        <div>
          <div className="relative aspect-[4/3] overflow-hidden border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
            <span className="pointer-events-none absolute -top-px -left-px z-10 h-3 w-3 border-l border-t border-slate-400/80 dark:border-slate-500/60" />
            <span className="pointer-events-none absolute -top-px -right-px z-10 h-3 w-3 border-r border-t border-slate-400/80 dark:border-slate-500/60" />
            <span className="pointer-events-none absolute -bottom-px -left-px z-10 h-3 w-3 border-b border-l border-slate-400/80 dark:border-slate-500/60" />
            <span className="pointer-events-none absolute -bottom-px -right-px z-10 h-3 w-3 border-b border-r border-slate-400/80 dark:border-slate-500/60" />
            <Image
              src={project.image}
              alt={`${project.name} preview`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 240px, 280px"
              className="object-cover grayscale-[35%] transition-all duration-500 group-hover:grayscale-0"
            />
          </div>
          <div className="mt-2 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-slate-400 dark:text-slate-600">
            <span>Fig. {padded}</span>
            <span className={project.color.text}>{project.tech[0]}</span>
          </div>
        </div>

        {/* Field notes */}
        <div>
          <div className="mb-3 flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-slate-400 lg:hidden dark:text-slate-600">
            <span>N&deg; {padded}</span>
            <span className={`h-1.5 w-1.5 ${project.color.dot}`} />
          </div>

          <h3 className="font-[family-name:var(--font-fraunces)] text-xl font-semibold leading-snug text-slate-900 sm:text-2xl dark:text-white">
            {project.name}
          </h3>
          <p className="mt-2 text-sm text-slate-600 sm:text-base dark:text-slate-400">{project.summary}</p>

          <div className="mt-5 grid gap-4 border-l border-slate-200 pl-4 sm:grid-cols-2 dark:border-slate-800">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest text-slate-400 dark:text-slate-600">Problem</p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-500">{project.problem}</p>
            </div>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest text-slate-400 dark:text-slate-600">Approach</p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-500">{project.solution}</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
            {project.tech.map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-500 dark:text-slate-400">
                <span className={`h-1.5 w-1.5 ${project.color.dot}`} />
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 border-b border-transparent pb-0.5 transition-colors hover:border-current ${project.color.text}`}
            >
              View Live
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 border-b border-transparent pb-0.5 text-slate-400 transition-colors hover:border-current hover:text-slate-900 dark:text-slate-500 dark:hover:text-white"
            >
              Source
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
