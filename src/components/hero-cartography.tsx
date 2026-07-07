"use client";

import { motion } from "framer-motion";

/* A compact 8-point compass rose — the map's signature flourish. */
function CompassRose({ cx, cy, r = 22 }: { cx: number; cy: number; r?: number }) {
  const ticks = Array.from({ length: 8 }, (_, i) => {
    const angle = (Math.PI / 4) * i - Math.PI / 2;
    const isMain = i % 2 === 0;
    const inner = isMain ? r * 0.6 : r * 0.78;
    return {
      x1: cx + Math.cos(angle) * inner,
      y1: cy + Math.sin(angle) * inner,
      x2: cx + Math.cos(angle) * r,
      y2: cy + Math.sin(angle) * r,
    };
  });

  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeWidth={1} opacity={0.6} />
      {ticks.map((t, i) => (
        <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke="currentColor" strokeWidth={i % 2 === 0 ? 1.1 : 0.7} opacity={0.6} />
      ))}
      <path
        d={`M${cx},${cy - r * 1.35} L${cx + 3.5},${cy} L${cx},${cy + r * 1.35} L${cx - 3.5},${cy} Z`}
        fill="currentColor"
        opacity={0.85}
      />
      <text x={cx} y={cy - r - 6} textAnchor="middle" fontSize={8} fontWeight={700} letterSpacing="0.1em" fill="currentColor" opacity={0.7}>
        N
      </text>
    </g>
  );
}

function pinPath(cx: number, cy: number, r = 9) {
  return `M${cx},${cy + r * 1.7} C${cx - r},${cy + r * 0.25} ${cx - r},${cy - r} ${cx},${cy - r} C${cx + r},${cy - r} ${cx + r},${cy + r * 0.25} ${cx},${cy + r * 1.7} Z`;
}

/** Full-bleed ambient background: lat/long graticule, contour lines, compass rose, chart legend. */
export function CartographyField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Graticule — light mode */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage: [
            "linear-gradient(to right, rgba(59,130,246,0.12) 1px, transparent 1px)",
            "linear-gradient(to bottom, rgba(59,130,246,0.12) 1px, transparent 1px)",
            "linear-gradient(to right, rgba(59,130,246,0.05) 1px, transparent 1px)",
            "linear-gradient(to bottom, rgba(59,130,246,0.05) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "168px 168px, 168px 168px, 42px 42px, 42px 42px",
        }}
      />
      {/* Graticule — dark mode */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: [
            "linear-gradient(to right, rgba(96,165,250,0.14) 1px, transparent 1px)",
            "linear-gradient(to bottom, rgba(96,165,250,0.14) 1px, transparent 1px)",
            "linear-gradient(to right, rgba(96,165,250,0.06) 1px, transparent 1px)",
            "linear-gradient(to bottom, rgba(96,165,250,0.06) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "168px 168px, 168px 168px, 42px 42px, 42px 42px",
        }}
      />

      {/* Coordinate ticks along the top edge */}
      <div className="absolute inset-x-0 top-3 hidden justify-between px-8 font-mono text-[9px] tracking-wider text-slate-500/50 sm:flex lg:px-12 dark:text-slate-400/40">
        <span>74.2&deg;E</span>
        <span>74.4&deg;E</span>
        <span>74.6&deg;E</span>
        <span>74.8&deg;E</span>
      </div>
      {/* Coordinate ticks along the left edge */}
      <div className="absolute inset-y-0 left-3 hidden flex-col justify-between py-16 font-mono text-[9px] tracking-wider text-slate-500/50 sm:flex lg:left-5 dark:text-slate-400/40">
        <span>31.6&deg;N</span>
        <span>31.4&deg;N</span>
        <span>31.2&deg;N</span>
      </div>

      {/* Compass rose */}
      <svg viewBox="0 0 100 100" className="absolute right-6 top-20 h-16 w-16 text-slate-400/60 sm:right-10 sm:top-24 lg:right-14 dark:text-slate-500/45">
        <CompassRose cx={50} cy={50} r={30} />
      </svg>

      {/* Chart legend */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="rounded-sm border border-slate-200 bg-white/60 px-4 py-3 font-mono text-[10px] leading-[1.9] tracking-wider text-slate-600 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-900/60 dark:text-slate-400">
          <div className="grid grid-cols-[auto_auto] gap-x-4">
            <span className="text-slate-500 dark:text-slate-500">CHART NO.</span>
            <span className="text-slate-900 dark:text-white">UA&ndash;01</span>
            <span className="text-slate-500 dark:text-slate-500">DATUM</span>
            <span className="text-slate-900 dark:text-white">WGS 84</span>
            <span className="text-slate-500 dark:text-slate-500">PROJECTION</span>
            <span className="text-slate-900 dark:text-white">INFORMAL</span>
            <span className="text-slate-500 dark:text-slate-500">STATUS</span>
            <span className="flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-500" />
              </span>
              AVAILABLE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** The hero's signature graphic: his real career plotted as a route to Lahore. */
export function RouteMap({ className = "" }: { className?: string }) {
  const stops = [
    { id: "edu", x: 40, y: 262, label: "FAST NUCES", sub: "B.S. COMPUTER SCIENCE" },
    { id: "soc", x: 168, y: 150, label: "ITSOLERA", sub: "SOC INTERN · 2024" },
    { id: "usync", x: 300, y: 224, label: "USYNC SOLUTIONS", sub: "FULL STACK · 2025" },
  ];
  const current = { id: "now", x: 442, y: 108, label: "AIFORMAX", sub: "SOFTWARE ENGINEER · NOW" };

  const routeD = "M40,262 C92,224 108,158 168,150 C226,142 258,196 300,224 C356,258 392,150 442,108";

  const lineClass = "text-slate-400 dark:text-slate-600";
  const inkClass = "text-slate-900 dark:text-white";
  const mutedClass = "text-slate-500 dark:text-slate-400";
  const accentClass = "text-blue-500 dark:text-blue-400";

  return (
    <motion.svg
      viewBox="0 0 520 320"
      className={className}
      initial="hidden"
      animate="visible"
      role="img"
      aria-label="Map of his career route from a Computer Science degree at FAST NUCES, through a SOC internship at Itsolera and a full-stack role at Usync Solutions, to his current position as Software Engineer at AIforMax, based in Lahore."
    >
      <motion.g
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
      >
        {/* Contour lines — quiet terrain texture behind the route's origin */}
        <g className={lineClass} opacity={0.5}>
          <path d="M4,300 C48,266 30,224 84,214 C138,204 160,248 128,290 C98,326 -20,332 4,300 Z" fill="none" stroke="currentColor" strokeWidth={1} />
          <path d="M-16,304 C36,262 14,208 82,194 C150,180 178,240 138,292 C102,338 -46,344 -16,304 Z" fill="none" stroke="currentColor" strokeWidth={1} />
        </g>

        {/* Route */}
        <motion.path
          d={routeD}
          className={lineClass}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeDasharray="1 7"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.4, ease: "easeInOut" }}
        />

        {/* Waypoints */}
        {stops.map((s, i) => (
          <motion.g
            key={s.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: `${s.x}px ${s.y}px` }}
          >
            <line x1={s.x} y1={s.y - 8} x2={s.x} y2={s.y - 26} className={lineClass} stroke="currentColor" strokeWidth={1} strokeDasharray="2 2" />
            <circle cx={s.x} cy={s.y} r={8} className={lineClass} fill="none" stroke="currentColor" strokeWidth={1} />
            <circle cx={s.x} cy={s.y} r={3} className={inkClass} fill="currentColor" />
            <text x={s.x} y={s.y - 32} textAnchor="middle" className={`${inkClass} font-mono`} fontSize={10} fontWeight={700} letterSpacing="0.05em" fill="currentColor">
              {s.label}
            </text>
            <text x={s.x} y={s.y - 21} textAnchor="middle" className={`${mutedClass} font-mono`} fontSize={7.5} letterSpacing="0.02em" fill="currentColor">
              {s.sub}
            </text>
          </motion.g>
        ))}

        {/* Current position — Lahore */}
        <motion.g
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <path d={pinPath(current.x, current.y)} className={accentClass} fill="currentColor" />
          <circle cx={current.x} cy={current.y - 3} r={3} className="fill-slate-50 dark:fill-slate-950" />
          <text x={current.x} y={current.y - 38} textAnchor="middle" className={`${inkClass} font-mono`} fontSize={11} fontWeight={700} letterSpacing="0.05em" fill="currentColor">
            {current.label}
          </text>
          <text x={current.x} y={current.y - 26} textAnchor="middle" className={`${mutedClass} font-mono`} fontSize={7.5} letterSpacing="0.02em" fill="currentColor">
            {current.sub}
          </text>
          <text x={current.x} y={current.y + 30} textAnchor="middle" className={`${accentClass} font-mono`} fontSize={8} fontWeight={700} letterSpacing="0.08em" fill="currentColor">
            LAHORE, PK
          </text>
        </motion.g>
      </motion.g>
    </motion.svg>
  );
}
