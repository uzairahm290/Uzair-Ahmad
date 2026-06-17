"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { motion } from "framer-motion";
import { CopyableEmail } from "@/components/copyable-email";
import { socialLinks } from "@/lib/portfolio-data";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";

export function GlobeContact() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const fadeMask = "radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 100%)";

  useEffect(() => {
    let phi = 0;
    
    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: 1200, // Fixed high resolution
      height: 1200,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1], // Full white to guarantee visibility
      markerColor: [0.1, 0.8, 1], // Neon blue markers
      glowColor: [1, 1, 1], // White ambient glow
      markers: [
        // Lahore, Pakistan
        { location: [31.5204, 74.3587], size: 0.1 },
        // Random worldwide tech hubs for visual flair
        { location: [37.7749, -122.4194], size: 0.05 }, // SF
        { location: [51.5074, -0.1278], size: 0.05 }, // London
        { location: [35.6762, 139.6503], size: 0.05 }, // Tokyo
      ],
      onRender: (state) => {
        // Called on every animation frame.
        if (!pointerInteracting.current) {
          phi += 0.005;
        }
        state.phi = phi + pointerInteractionMovement.current;
      }
    });

    return () => {
      globe.destroy();
    };
  }, []);

  const socials = [
    { name: "GitHub", url: socialLinks.github, icon: FiGithub, position: "top-[25%] left-4 sm:top-[25%] sm:left-12 lg:left-24" },
    { name: "LinkedIn", url: socialLinks.linkedin, icon: FiLinkedin, position: "top-[25%] right-4 sm:top-[25%] sm:right-12 lg:right-24" },
    { name: "Twitter", url: socialLinks.twitter, icon: FiTwitter, position: "bottom-[35%] left-4 sm:bottom-[35%] sm:left-12 lg:left-24" },
    { name: "Upwork", url: socialLinks.upwork, icon: SiUpwork, position: "bottom-[35%] right-4 sm:bottom-[35%] sm:right-12 lg:right-24" },
  ];

  return (
    <div className="relative w-full rounded-[2.5rem] overflow-hidden bg-slate-950 border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] py-20 sm:py-24 flex flex-col items-center justify-center min-h-[700px] lg:min-h-[800px]">
      
      {/* Background radial gradient to blend globe edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.9)_100%)] z-10 pointer-events-none" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-12 lg:top-16 z-30 text-center w-full px-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 backdrop-blur-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-bold text-blue-400 uppercase tracking-widest">Global Reach</span>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase drop-shadow-xl">
          Let&apos;s Build <br className="sm:hidden"/> 
          <span className="text-blue-500">Together</span>
        </h2>
      </motion.div>

      {/* The Globe Container */}
      <div className="absolute inset-0 flex items-center justify-center mt-16 sm:mt-10">
        <div 
          className="relative w-full max-w-[600px] lg:max-w-[800px] aspect-square"
          style={{ WebkitMaskImage: fadeMask, maskImage: fadeMask }}
        >
          <canvas
            ref={canvasRef}
            onPointerDown={(e) => {
              pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
              if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing';
            }}
            onPointerUp={() => {
              pointerInteracting.current = null;
              if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
            }}
            onPointerOut={() => {
              pointerInteracting.current = null;
              if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
            }}
            onMouseMove={(e) => {
              if (pointerInteracting.current !== null) {
                const delta = e.clientX - pointerInteracting.current;
                pointerInteractionMovement.current = delta * 0.005;
              }
            }}
            onTouchMove={(e) => {
              if (pointerInteracting.current !== null && e.touches[0]) {
                const delta = e.touches[0].clientX - pointerInteracting.current;
                pointerInteractionMovement.current = delta * 0.005;
              }
            }}
            style={{
              width: "100%",
              height: "100%",
              cursor: "grab",
              contain: "layout paint size",
              opacity: 1
            }}
          />
        </div>
      </div>

      {/* Social Links floating around the globe */}
      <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center">
        <div className="relative w-full max-w-5xl h-full">
          {socials.map((social, idx) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className={`absolute ${social.position} pointer-events-auto group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 hover:border-blue-500 shadow-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-110`}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 + idx * 0.1 }}
                title={social.name}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-blue-400 transition-colors" />
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Copyable Email at the bottom */}
      <motion.div 
        className="absolute bottom-8 lg:bottom-12 z-40 w-full max-w-lg px-4"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-blue-500/10 rounded-3xl blur-2xl animate-pulse pointer-events-none" />
          <CopyableEmail />
        </div>
      </motion.div>

    </div>
  );
}
