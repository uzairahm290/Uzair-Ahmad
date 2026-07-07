"use client";

import { motion } from "framer-motion";

/* Corner "target" ticks — echoes the corner brackets already used on the
   About Me portrait card, so the new hero motif reads as part of the same
   system rather than a foreign import. */
function cornerTicks(x: number, y: number, w: number, h: number, t = 7) {
  return [
    `M${x},${y + t} L${x},${y} L${x + t},${y}`,
    `M${x + w - t},${y} L${x + w},${y} L${x + w},${y + t}`,
    `M${x + w},${y + h - t} L${x + w},${y + h} L${x + w - t},${y + h}`,
    `M${x + t},${y + h} L${x},${y + h} L${x},${y + h - t}`,
  ].join(" ");
}

function RegistrationMark({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`pointer-events-none absolute h-4 w-4 text-[#0F2A4A]/30 md:h-5 md:w-5 dark:text-[#7DD3FC]/30 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
    >
      <path d="M12 0v9M12 15v9M0 12h9M15 12h9" />
      <circle cx="12" cy="12" r="3.2" />
    </svg>
  );
}

/** Full-bleed ambient background: blueprint grid, registration marks, drawing title block. */
export function HeroBlueprintField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden transition-colors duration-500 dark:bg-[#0A1930]">
      {/* Grid — light mode reads as a "whiteprint" (navy ink on paper) */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage: [
            "linear-gradient(to right, rgba(15,42,74,0.13) 1px, transparent 1px)",
            "linear-gradient(to bottom, rgba(15,42,74,0.13) 1px, transparent 1px)",
            "linear-gradient(to right, rgba(15,42,74,0.055) 1px, transparent 1px)",
            "linear-gradient(to bottom, rgba(15,42,74,0.055) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "200px 200px, 200px 200px, 40px 40px, 40px 40px",
        }}
      />
      {/* Grid — dark mode reads as a true blueprint (cyan ink on ink-navy) */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: [
            "linear-gradient(to right, rgba(125,211,252,0.16) 1px, transparent 1px)",
            "linear-gradient(to bottom, rgba(125,211,252,0.16) 1px, transparent 1px)",
            "linear-gradient(to right, rgba(125,211,252,0.07) 1px, transparent 1px)",
            "linear-gradient(to bottom, rgba(125,211,252,0.07) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "200px 200px, 200px 200px, 40px 40px, 40px 40px",
        }}
      />

      {/* Registration / crop marks — the four corners of the "sheet" */}
      <RegistrationMark className="left-3 top-3 sm:left-5 sm:top-5 lg:left-8 lg:top-8" />
      <RegistrationMark className="right-3 top-3 sm:right-5 sm:top-5 lg:right-8 lg:top-8" />
      <RegistrationMark className="bottom-3 left-3 sm:bottom-5 sm:left-5 lg:bottom-8 lg:left-8" />
      <RegistrationMark className="bottom-3 right-3 sm:bottom-5 sm:right-5 lg:bottom-8 lg:right-8" />

      {/* Bottom fade — lets the ink-navy plate settle back into the site's near-black dark bg */}
      <div
        className="absolute inset-x-0 bottom-0 hidden h-48 dark:block"
        style={{ background: "linear-gradient(to bottom, transparent 0%, #020617 100%)" }}
      />

      {/* Drawing title block */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="rounded-sm border border-[#0F2A4A]/20 bg-white/40 px-4 py-3 font-mono text-[10px] leading-[1.9] tracking-wider text-[#33455C] backdrop-blur-sm dark:border-[#7DD3FC]/20 dark:bg-[#0A1930]/60 dark:text-[#9FB4CC]">
          <div className="grid grid-cols-[auto_auto] gap-x-4">
            <span className="text-[#33455C]/60 dark:text-[#9FB4CC]/50">DRAWN</span>
            <span>U. AHMAD</span>
            <span className="text-[#33455C]/60 dark:text-[#9FB4CC]/50">DWG NO.</span>
            <span>UA&ndash;2026.07</span>
            <span className="text-[#33455C]/60 dark:text-[#9FB4CC]/50">SCALE</span>
            <span>NTS</span>
            <span className="text-[#33455C]/60 dark:text-[#9FB4CC]/50">STATUS</span>
            <span className="flex items-center gap-1.5 font-bold text-[#E1552A] dark:text-[#FF7A52]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E1552A] opacity-75 dark:bg-[#FF7A52]" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#E1552A] dark:bg-[#FF7A52]" />
              </span>
              AVAILABLE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** The hero's signature graphic: a self-drafting system architecture schematic. */
export function SystemSchematic({ className = "" }: { className?: string }) {
  const nodes = [
    { id: "client", label: "CLIENT", sub: "REACT / NEXT.JS", x: 12, y: 168, w: 112, h: 58 },
    { id: "api", label: "API", sub: "PYTHON · NODE", x: 204, y: 168, w: 112, h: 58 },
    { id: "model", label: "MODEL", sub: "LLM / RAG", x: 380, y: 66, w: 100, h: 58, accent: true },
    { id: "data", label: "DATA", sub: "POSTGRESQL", x: 380, y: 250, w: 100, h: 58 },
  ];

  const paths = [
    "M124,197 L204,197",
    "M316,197 L352,197 L352,95 L380,95",
    "M316,197 L352,197 L352,279 L380,279",
  ];

  const lineClass = "text-[#3D5B7A]/70 dark:text-[#7DD3FC]/55";
  const fillClass = "fill-[#F8FAFC] dark:fill-[#0A1930]";
  const inkClass = "text-[#101E33] dark:text-[#E7EEF6]";
  const mutedClass = "text-[#33455C]/60 dark:text-[#9FB4CC]/60";
  const accentClass = "text-[#E1552A] dark:text-[#FF7A52]";

  return (
    <motion.svg
      viewBox="0 0 512 340"
      className={className}
      initial="hidden"
      animate="visible"
      role="img"
      aria-label="Diagram of a client interface connecting through a Python and Node API layer, gated by a security boundary, out to an AI model and a Postgres database."
    >
      {/* Ambient float once everything has drawn in */}
      <motion.g
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
      >
        {/* Security boundary */}
        <motion.rect
          x={188}
          y={50}
          width={308}
          height={274}
          rx={6}
          className={lineClass}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.25}
          strokeDasharray="5 5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.05, ease: "easeInOut" }}
        />
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <line x1={172} y1={44} x2={196} y2={44} className={lineClass} stroke="currentColor" strokeWidth={1} />
          <circle cx={172} cy={44} r={2} className={lineClass} fill="currentColor" />
          <text x={200} y={47} className={`${mutedClass} font-mono`} fontSize={9} letterSpacing="0.12em" fill="currentColor">
            SECURITY BOUNDARY
          </text>
        </motion.g>

        {/* Connectors */}
        {paths.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            className={lineClass}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 + i * 0.18, ease: "easeInOut" }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((n, i) => (
          <motion.g
            key={n.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: `${n.x + n.w / 2}px ${n.y + n.h / 2}px` }}
          >
            <rect x={n.x} y={n.y} width={n.w} height={n.h} rx={3} className={fillClass} />
            <rect
              x={n.x}
              y={n.y}
              width={n.w}
              height={n.h}
              rx={3}
              className={lineClass}
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
            />
            <path d={cornerTicks(n.x, n.y, n.w, n.h)} className={inkClass} fill="none" stroke="currentColor" strokeWidth={1.4} />
            <text
              x={n.x + n.w / 2}
              y={n.y + n.h / 2 - 4}
              textAnchor="middle"
              className={`${inkClass} font-mono`}
              fontSize={13}
              fontWeight={700}
              letterSpacing="0.08em"
              fill="currentColor"
            >
              {n.label}
            </text>
            <text
              x={n.x + n.w / 2}
              y={n.y + n.h / 2 + 14}
              textAnchor="middle"
              className={`${mutedClass} font-mono`}
              fontSize={8.5}
              letterSpacing="0.04em"
              fill="currentColor"
            >
              {n.sub}
            </text>
            <circle
              cx={n.x + n.w - 10}
              cy={n.y + 10}
              r={2.2}
              className={n.accent ? accentClass : lineClass}
              fill="currentColor"
            >
              <animate attributeName="opacity" values="1;0.25;1" dur={`${2.6 + i * 0.4}s`} repeatCount="indefinite" />
            </circle>
          </motion.g>
        ))}
      </motion.g>
    </motion.svg>
  );
}
