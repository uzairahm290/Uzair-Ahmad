"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const stops = [
  { id: "", label: "ORIGIN" },
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
  { id: "journey", label: "JOURNEY" },
  { id: "services", label: "SERVICES" },
  { id: "contact", label: "DESTINATION" },
];

function pinPath(cx: number, cy: number, r: number) {
  return `M${cx},${cy + r * 1.7} C${cx - r},${cy + r * 0.25} ${cx - r},${cy - r} ${cx},${cy - r} C${cx + r},${cy - r} ${cx + r},${cy + r * 0.25} ${cx},${cy + r * 1.7} Z`;
}

/** A route line connecting every section, with a pin that tracks scroll position. */
export function VoyageRoute() {
  const [marks, setMarks] = useState<{ id: string; label: string; y: number }[]>([]);
  const [docHeight, setDocHeight] = useState(0);

  useEffect(() => {
    const measure = () => {
      const found = stops
        .map((s) => {
          if (s.id === "") return { ...s, y: 0 };
          const el = document.getElementById(s.id);
          if (!el) return null;
          return { ...s, y: el.getBoundingClientRect().top + window.scrollY };
        })
        .filter((m): m is { id: string; label: string; y: number } => m !== null);
      setMarks(found);
      setDocHeight(document.documentElement.scrollHeight);
    };

    measure();
    const lateMeasure = setTimeout(measure, 900);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(lateMeasure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollY } = useScroll();
  const markerY = useTransform(scrollY, (v) => v + (typeof window !== "undefined" ? window.innerHeight / 2 : 0));
  const smoothMarkerY = useSpring(markerY, { stiffness: 90, damping: 28, restDelta: 0.5 });
  const fillScale = useTransform(smoothMarkerY, (v) => (docHeight > 0 ? Math.min(1, Math.max(0, v / docHeight)) : 0));

  if (marks.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-y-0 left-6 z-30 hidden w-px lg:block xl:left-10">
      {/* Base route (undiscovered) */}
      <div
        className="absolute inset-y-0 left-0 w-px text-slate-300 dark:text-slate-700"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, currentColor 0, currentColor 2px, transparent 2px, transparent 8px)",
        }}
      />

      {/* Traveled portion */}
      <motion.div
        className="absolute inset-x-0 top-0 h-full w-px origin-top bg-blue-500 dark:bg-blue-400"
        style={{ scaleY: fillScale }}
      />

      {/* Waypoints */}
      {marks.map((m) => (
        <a
          key={m.id || "origin"}
          href={`#${m.id}`}
          className="group pointer-events-auto absolute -left-[5px] block"
          style={{ top: m.y }}
          aria-label={`Jump to ${m.label.toLowerCase()}`}
        >
          <span className="block h-[11px] w-[11px] rounded-full border border-slate-300 bg-slate-50 transition-transform duration-200 group-hover:scale-125 group-hover:border-blue-500 dark:border-slate-600 dark:bg-slate-950 dark:group-hover:border-blue-400" />
          <span className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-white opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100 dark:bg-white dark:text-slate-900">
            {m.label}
          </span>
        </a>
      ))}

      {/* Current position */}
      <motion.div className="pointer-events-none absolute -left-[8px]" style={{ top: smoothMarkerY, marginTop: -8 }}>
        <svg width={16} height={22} viewBox="0 0 16 22" className="drop-shadow-sm text-blue-500 dark:text-blue-400">
          <path d={pinPath(8, 8, 7)} fill="currentColor" />
          <circle cx={8} cy={7} r={2.6} className="fill-slate-50 dark:fill-slate-950" />
        </svg>
        <span className="absolute left-1/2 top-[5px] h-2 w-2 -translate-x-1/2 animate-ping rounded-full bg-blue-500/60 dark:bg-blue-400/60" />
      </motion.div>
    </div>
  );
}
