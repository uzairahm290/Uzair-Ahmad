"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CopyableEmail } from "@/components/copyable-email";
import { socialLinks } from "@/lib/portfolio-data";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { SiUpwork } from "react-icons/si"; // Requires react-icons/si

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export function NeuralContact() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const nodes: Node[] = [];
    const numNodes = 70; // Node density

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    window.addEventListener("resize", resize);
    resize();

    // Initialize nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        radius: Math.random() * 2 + 0.5,
      });
    }

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse = { x: -1000, y: -1000 };
    };
    
    // Listen on the parent container to track mouse even over UI elements
    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("mouseleave", handleMouseLeave);
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls gently
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });

      // Draw connections
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        
        // 1. Magnetic connection to mouse
        const distMouse = Math.hypot(n1.x - mouse.x, n1.y - mouse.y);
        if (distMouse < 180) {
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(59, 130, 246, ${0.6 * (1 - distMouse / 180)})`; // Blue glow
          ctx.stroke();
          
          // Subtle magnetic pull
          n1.x += (mouse.x - n1.x) * 0.015;
          n1.y += (mouse.y - n1.y) * 0.015;
        }

        // 2. Network connections to other nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(148, 163, 184, ${0.25 * (1 - dist / 120)})`; // Faint slate line
            ctx.stroke();
          }
        }

        // Draw the node itself
        ctx.beginPath();
        ctx.arc(n1.x, n1.y, n1.radius, 0, Math.PI * 2);
        ctx.fillStyle = distMouse < 180 ? "rgba(59, 130, 246, 0.8)" : "rgba(148, 163, 184, 0.6)";
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationId);
    };
  }, []);

  const socials = [
    { name: "GitHub", url: socialLinks.github, icon: FiGithub, position: "-top-14 -left-6 sm:-top-20 sm:-left-12 lg:-top-24 lg:-left-24" },
    { name: "LinkedIn", url: socialLinks.linkedin, icon: FiLinkedin, position: "-top-14 -right-6 sm:-top-20 sm:-right-12 lg:-top-24 lg:-right-24" },
    { name: "Twitter", url: socialLinks.twitter, icon: FiTwitter, position: "-bottom-8 -left-6 sm:-bottom-12 sm:-left-12 lg:-bottom-16 lg:-left-24" },
    { name: "Upwork", url: socialLinks.upwork, icon: SiUpwork, position: "-bottom-8 -right-6 sm:-bottom-12 sm:-right-12 lg:-bottom-16 lg:-right-24" },
  ];

  return (
    <div className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#020617] dark:bg-[#020617] border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] py-20 sm:py-32 flex flex-col items-center justify-center min-h-[600px]">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full" />
      
      {/* Radial Gradient overlay to make text highly readable in center */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(2,6,23,0.1)_0%,rgba(2,6,23,0.8)_80%)] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl px-4 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold text-blue-400 uppercase tracking-widest">Network Online</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase mb-6 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            Initialize <br className="sm:hidden" />
            <span className="text-blue-500">Connection</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-medium max-w-md mx-auto leading-relaxed">
            My neural network is open for new signals. Intercept the core data below to reach out, or connect through the satellite nodes.
          </p>
        </motion.div>

        {/* Neural Core (Email & Socials) */}
        <div className="relative w-full max-w-lg mt-8 sm:mt-12 flex justify-center">
          
          {/* Central Core: Email */}
          <motion.div 
            className="relative z-20 w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          >
            <div className="relative w-full">
              {/* Outer pulsing energy field */}
              <div className="absolute -inset-8 bg-blue-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
              <div className="absolute -inset-4 bg-indigo-500/10 rounded-full blur-2xl animate-pulse pointer-events-none delay-75" />
              <CopyableEmail />
            </div>
          </motion.div>

          {/* Satellite Nodes (Socials) */}
          {socials.map((social, idx) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className={`absolute ${social.position} z-30 group flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 hover:border-blue-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-110`}
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
    </div>
  );
}
