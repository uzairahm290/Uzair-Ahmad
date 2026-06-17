"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  maxSize: number;
  color: string;
  alpha: number;
  decay: number;
}

export function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const { resolvedTheme } = useTheme();
  const resolvedThemeRef = useRef(resolvedTheme);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<Particle[]>([]);
  const lastMousePos = useRef({ x: 0, y: 0, hasMoved: false });

  // Update theme reference when resolvedTheme changes
  useEffect(() => {
    resolvedThemeRef.current = resolvedTheme;
  }, [resolvedTheme]);

  // Smooth springs for the outer ring
  const springX = useSpring(mouseX, { stiffness: 500, damping: 28, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28, mass: 0.5 });

  const createParticle = (x: number, y: number) => {
    const isDark = resolvedThemeRef.current === "dark";
    
    // Curated premium light/glow colors
    const colors = isDark 
      ? [
          "rgba(147, 197, 253, ", // Light Blue (blue-300)
          "rgba(103, 232, 249, ", // Cyan (cyan-300)
          "rgba(196, 181, 253, ", // Lavender/violet (violet-300)
          "rgba(255, 255, 255, ", // Soft white
        ]
      : [
          "rgba(96, 165, 250, ",  // Soft blue (blue-400)
          "rgba(34, 211, 238, ",  // Teal/cyan (cyan-400)
          "rgba(167, 139, 250, ",  // Soft violet (violet-400)
          "rgba(255, 255, 255, ",  // Soft white
        ];
    
    const baseColor = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 2.2 + 1.2; // Small delicate particles (1.2px - 3.4px)

    particles.current.push({
      x,
      y,
      vx: (Math.random() - 0.5) * 1.0,
      vy: (Math.random() - 0.5) * 1.0 - 0.25, // Slight upward float
      size,
      maxSize: size,
      color: baseColor,
      alpha: 0.85,
      decay: Math.random() * 0.015 + 0.012, // Random decay rate
    });

    if (particles.current.length > 120) {
      particles.current.shift();
    }
  };

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const currentX = e.clientX;
      const currentY = e.clientY;
      mouseX.set(currentX);
      mouseY.set(currentY);
      if (!isVisible) setIsVisible(true);

      // Interpolate to create a smooth, continuous stream of particles
      if (lastMousePos.current.hasMoved) {
        const dx = currentX - lastMousePos.current.x;
        const dy = currentY - lastMousePos.current.y;
        const distance = Math.hypot(dx, dy);
        
        // Spawn a particle every 7px of movement (max 8 per mouse move to protect performance)
        const steps = Math.min(Math.floor(distance / 7), 8);
        for (let i = 0; i <= steps; i++) {
          const t = steps === 0 ? 1 : i / steps;
          const x = lastMousePos.current.x + dx * t;
          const y = lastMousePos.current.y + dy * t;
          createParticle(x, y);
        }
      } else {
        createParticle(currentX, currentY);
        lastMousePos.current.hasMoved = true;
      }

      lastMousePos.current.x = currentX;
      lastMousePos.current.y = currentY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  // Canvas animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        
        p.alpha -= p.decay;
        p.size = Math.max(0, p.maxSize * (p.alpha / 0.85));

        if (p.alpha > 0 && p.size > 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha})`;
          ctx.fill();
        }
      });

      particles.current = particles.current.filter((p) => p.alpha > 0 && p.size > 0);

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches) {
    return null; // Don't render on mobile
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9998] hidden md:block"
      />
      {/* Inner Dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 md:block dark:bg-blue-400"
        style={{ x: mouseX, y: mouseY }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{
          scale: { type: "tween", ease: "backOut", duration: 0.1 },
          opacity: { duration: 0.2 }
        }}
      />
      {/* Outer Glow/Ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-500/40 bg-blue-500/10 backdrop-blur-[1px] md:block dark:border-blue-400/40 dark:bg-blue-400/10"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 20 },
          opacity: { duration: 0.2 },
        }}
      />
    </>
  );
}
