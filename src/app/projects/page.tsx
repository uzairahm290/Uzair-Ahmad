import type { Metadata } from "next";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { CartographyField } from "@/components/hero-cartography";
import { ProjectsArchive } from "@/components/projects-archive";
import { projects } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "All Projects | Uzair Ahmad",
  description: `The complete archive of ${projects.length} builds by Uzair Ahmad — full stack, AI-integrated, and security-minded projects.`,
};

export default function ProjectsPage() {
  const techCount = new Set(projects.flatMap((p) => p.tech)).size;

  return (
    <div className="relative min-h-screen overflow-clip">
      {/* Top bar */}
      <header className="section-container flex items-center justify-between py-6">
        <Link
          href="/"
          className="text-lg font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 transition-transform hover:scale-105"
        >
          UZ.
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Portfolio
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Header / chart-styled intro */}
      <section className="relative overflow-hidden">
        <CartographyField />
        <div className="section-container relative z-10 py-16 lg:py-24">
          <div className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
            <span className="h-px w-8 bg-slate-300 dark:bg-slate-600" />
            Complete Archive
          </div>
          <h1 className="font-[family-name:var(--font-fraunces)] text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
            All <span className="text-blue-500">Projects</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-slate-600 md:text-lg dark:text-slate-400">
            Every build, {projects.length} in total — filter by stack to find what you&apos;re looking for.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-slate-200 pt-6 font-mono text-[11px] uppercase tracking-widest text-slate-400 dark:border-slate-800 dark:text-slate-600">
            <span>{projects.length} Builds Logged</span>
            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
            <span>{techCount} Technologies</span>
            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
            <span>Full Stack &middot; AI &middot; Security</span>
          </div>
        </div>
      </section>

      {/* Archive ledger */}
      <main className="section-container relative z-10 pb-16 pt-4">
        <ProjectsArchive />
      </main>

      <div className="section-container relative z-10 flex items-center justify-center gap-4 pb-24 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-300 dark:text-slate-700">
        <span className="h-px w-12 bg-slate-200 dark:bg-slate-800" />
        End of Archive
        <span className="h-px w-12 bg-slate-200 dark:bg-slate-800" />
      </div>
    </div>
  );
}
