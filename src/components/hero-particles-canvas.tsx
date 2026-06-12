"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

class Shockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  speed: number;
  active: boolean;

  constructor(x: number, y: number, maxRadius = 220) {
    this.x = x;
    this.y = y;
    this.radius = 0;
    this.maxRadius = maxRadius;
    this.speed = 8;
    this.active = true;
  }

  update() {
    this.radius += this.speed;
    if (this.radius >= this.maxRadius) {
      this.active = false;
    }
  }
}

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseSpeedX: number;
  baseSpeedY: number;

  constructor(w: number, h: number) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.size = Math.random() * 1.5 + 1.5;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.baseSpeedX = this.vx;
    this.baseSpeedY = this.vy;
  }

  update(w: number, h: number, mouseX: number, mouseY: number, isMouseActive: boolean, shockwaves: Shockwave[]) {
    // Apply normal velocity
    this.x += this.vx;
    this.y += this.vy;

    // Bounce on boundaries
    if (this.x < 0 || this.x > w) this.vx *= -1;
    if (this.y < 0 || this.y > h) this.vy *= -1;

    // Ensure particles stay within canvas boundaries after bouncing
    if (this.x < 0) this.x = 0;
    if (this.x > w) this.x = w;
    if (this.y < 0) this.y = 0;
    if (this.y > h) this.y = h;

    // Mouse attraction/gravitation
    if (isMouseActive) {
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 150;

      if (distance < maxDistance) {
        // Apply gentle pull towards the cursor
        const force = (maxDistance - distance) / maxDistance;
        this.vx += (dx / distance) * force * 0.05;
        this.vy += (dy / distance) * force * 0.05;

        // Cap maximum speed under mouse influence
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > 1.2) {
          this.vx = (this.vx / speed) * 1.2;
          this.vy = (this.vy / speed) * 1.2;
        }
      } else {
        // Return to base speed gradually
        this.vx += (this.baseSpeedX - this.vx) * 0.02;
        this.vy += (this.baseSpeedY - this.vy) * 0.02;
      }
    } else {
      // Return to base speed gradually
      this.vx += (this.baseSpeedX - this.vx) * 0.02;
      this.vy += (this.baseSpeedY - this.vy) * 0.02;
    }

    // Apply shockwaves
    for (const shockwave of shockwaves) {
      const dx = this.x - shockwave.x;
      const dy = this.y - shockwave.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // If the particle is hit by the expanding shockwave front
      const waveRadius = shockwave.radius;
      const thickness = 40; // thickness of shockwave ring
      
      if (distance > waveRadius - thickness && distance < waveRadius) {
        const force = (1 - (waveRadius / shockwave.maxRadius)) * 8; // strength decays as it expands
        const angle = Math.atan2(dy, dx);
        this.x += Math.cos(angle) * force;
        this.y += Math.sin(angle) * force;
        this.vx += Math.cos(angle) * force * 0.2;
        this.vy += Math.sin(angle) * force * 0.2;
      }
    }
  }

  draw(context: CanvasRenderingContext2D, color: string) {
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
  }
}

export function HeroParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 60;
    const connectionDistance = 120;
    const mouse = { x: -1000, y: -1000, active: false };
    let shockwaves: Shockwave[] = [];

    // Set canvas dimensions
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      // Re-initialize particles
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Track mouse coordinates relative to canvas bounding box
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    const handleMouseClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      shockwaves.push(new Shockwave(clickX, clickY));
      // Cap maximum active shockwaves to keep rendering efficient
      if (shockwaves.length > 3) {
        shockwaves.shift();
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("click", handleMouseClick);

    // Colors matching themes
    const getThemeColors = () => {
      const isDark = resolvedTheme === "dark";
      return {
        particleColor: isDark ? "rgba(34, 211, 238, 0.45)" : "rgba(59, 130, 246, 0.45)",
        lineColor: isDark ? "rgba(99, 102, 241, 0.12)" : "rgba(59, 130, 246, 0.12)",
        mouseLineColor: isDark ? "rgba(34, 211, 238, 0.25)" : "rgba(59, 130, 246, 0.25)",
      };
    };

    // Main animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const colors = getThemeColors();

      // Update shockwaves
      shockwaves = shockwaves.filter(sw => sw.active);
      shockwaves.forEach(sw => sw.update());

      // Update and draw particles
      particles.forEach((p) => {
        p.update(canvas.width, canvas.height, mouse.x, mouse.y, mouse.active, shockwaves);
        p.draw(ctx, colors.particleColor);
      });

      // Draw connection lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            // Fade lines out as they get further apart
            const alpha = (1 - dist / connectionDistance) * 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            // Construct alpha adjusted line color
            const isDark = resolvedTheme === "dark";
            ctx.strokeStyle = isDark 
              ? `rgba(99, 102, 241, ${alpha * 0.15})`
              : `rgba(59, 130, 246, ${alpha * 0.15})`;
            
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw lines between mouse and nearby particles
      if (mouse.active) {
        particles.forEach((p) => {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = colors.mouseLineColor.replace("0.25", (alpha * 0.25).toString());
            ctx.lineWidth = 1.0;
            ctx.stroke();
          }
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("click", handleMouseClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 h-full w-full opacity-60 dark:opacity-85 pointer-events-auto"
    />
  );
}
