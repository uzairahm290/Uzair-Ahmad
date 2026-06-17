"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Segment {
  x: number;
  y: number;
}

export function RoamingPython() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();

  // Keep state in refs for fast rendering without React re-renders
  const state = useRef({
    segments: [] as Segment[],
    target: { x: 0, y: 0 },
    speed: 2.0,
    normalSpeed: 2.0,
    fleeSpeed: 5.0,
    angle: 0,
    wavePhase: 0,
    opacity: 1,
    isSleeping: false,
    lastActiveTime: 0,
    showTongue: false,
    tongueTimer: 0,
    startled: false,
    startledTime: 0,
    mousePos: { x: -1000, y: -1000 },
    isHiding: false,
    targetChangeTime: 0,
  });

  useEffect(() => {
    state.current.lastActiveTime = Date.now();
    state.current.targetChangeTime = Date.now();
    // Populate initial segments randomly on screen
    const segments: Segment[] = [];
    const segmentCount = 18;
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    for (let i = 0; i < segmentCount; i++) {
      segments.push({ x: startX, y: startY });
    }
    state.current.segments = segments;
    state.current.target = {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    };
    state.current.angle = Math.random() * Math.PI * 2;

    const handleMouseMove = (e: MouseEvent) => {
      state.current.lastActiveTime = Date.now();
      state.current.mousePos = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => {
      state.current.lastActiveTime = Date.now();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

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

    const updateAndDraw = () => {
      const now = Date.now();
      const s = state.current;
      const isIdle = now - s.lastActiveTime > 4000;

      // If the snake is currently asleep (hidden), check if the mouse has been still for 4 seconds to wake it up
      if (s.isSleeping) {
        if (isIdle) {
          s.isSleeping = false;
          s.opacity = 0; // Reset opacity to fade in smoothly
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (s.segments.length > 0 && !s.isSleeping) {
        // 1. Mouse avoidance & Hiding
        const head = s.segments[0];
        const dxMouse = head.x - s.mousePos.x;
        const dyMouse = head.y - s.mousePos.y;
        const distMouse = Math.hypot(dxMouse, dyMouse);

        if (distMouse < 120) {
          s.isHiding = true;
          s.startled = true;
          s.startledTime = now;
          s.speed = s.fleeSpeed;
          
          // Flee target is opposite from mouse
          const fleeAngle = Math.atan2(dyMouse, dxMouse);
          s.target = {
            x: head.x + Math.cos(fleeAngle) * 300,
            y: head.y + Math.sin(fleeAngle) * 300,
          };
          
          // Keep target on screen
          s.target.x = Math.max(50, Math.min(window.innerWidth - 50, s.target.x));
          s.target.y = Math.max(50, Math.min(window.innerHeight - 50, s.target.y));
        } else {
          // Decays speed back to normal
          if (s.startled && now - s.startledTime > 1500) {
            s.startled = false;
          }
          const targetSpeed = s.startled ? s.fleeSpeed : s.normalSpeed;
          s.speed += (targetSpeed - s.speed) * 0.05;

          // If the mouse has moved far away, stop hiding
          if (distMouse > 220) {
            s.isHiding = false;
          }
        }

        // Apply fading / hiding state
        if (s.isHiding) {
          s.opacity = Math.max(0, s.opacity - 0.07);
          
          // If completely hidden, burrow/teleport to a random offscreen position and go to sleep
          if (s.opacity === 0) {
            s.isSleeping = true;
            s.isHiding = false;

            const spawnSide = Math.floor(Math.random() * 4);
            let sx = 0, sy = 0;
            if (spawnSide === 0) {
              sx = -50; sy = Math.random() * window.innerHeight;
            } else if (spawnSide === 1) {
              sx = window.innerWidth + 50; sy = Math.random() * window.innerHeight;
            } else if (spawnSide === 2) {
              sx = Math.random() * window.innerWidth; sy = -50;
            } else {
              sx = Math.random() * window.innerWidth; sy = window.innerHeight + 50;
            }
            s.segments.forEach((seg) => {
              seg.x = sx;
              seg.y = sy;
            });
            s.target = {
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            };
            s.angle = Math.atan2(s.target.y - sy, s.target.x - sx);
          }
        } else {
          s.opacity = Math.min(1, s.opacity + 0.03);
        }

        // 2. Head movement towards target
        const dxTarget = s.target.x - head.x;
        const dyTarget = s.target.y - head.y;
        const distTarget = Math.hypot(dxTarget, dyTarget);

        // Prevent getting stuck in infinite orbits by checking distance threshold (raised to 40px)
        // or triggering a fallback if the snake has chased the same target for over 6 seconds
        const timeChasing = now - s.targetChangeTime;
        if (distTarget < 40 || timeChasing > 6000) {
          s.target = {
            x: 50 + Math.random() * (window.innerWidth - 100),
            y: 50 + Math.random() * (window.innerHeight - 100),
          };
          s.targetChangeTime = now;
        }

        // Smoothly adjust head angle
        const desiredAngle = Math.atan2(dyTarget, dxTarget);
        // Normalize angle differences
        let diff = desiredAngle - s.angle;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;
        s.angle += diff * 0.12; // Turn speed (increased from 0.08 for tighter turns)

        // Move head
        head.x += Math.cos(s.angle) * s.speed;
        head.y += Math.sin(s.angle) * s.speed;

        // 3. Body segment trail physics (follow the leader)
        const spacing = 8;
        for (let i = 1; i < s.segments.length; i++) {
          const prev = s.segments[i - 1];
          const curr = s.segments[i];
          const dx = prev.x - curr.x;
          const dy = prev.y - curr.y;
          const dist = Math.hypot(dx, dy);

          if (dist > spacing) {
            const angle = Math.atan2(dy, dx);
            curr.x = prev.x - Math.cos(angle) * spacing;
            curr.y = prev.y - Math.sin(angle) * spacing;
          }
        }

        // 4. Tongue animation timer
        s.tongueTimer++;
        if (s.tongueTimer > 180) { // Every 3 seconds
          s.showTongue = true;
          if (s.tongueTimer > 200) { // Flick for 20 frames
            s.showTongue = false;
            s.tongueTimer = 0;
          }
        }

        s.wavePhase += 0.12 * (s.speed / s.normalSpeed);

        // 5. Draw the snake
        const bodyColor = `rgba(30, 144, 255, ${s.opacity})`; // Dodger Blue
        const bellyColor = `rgba(0, 255, 255, ${s.opacity})`; // Cyan
        const eyeColor = `rgba(255, 255, 255, ${s.opacity})`;
        const pupilColor = `rgba(0, 0, 0, ${s.opacity})`;
        const tongueColor = `rgba(239, 68, 68, ${s.opacity})`; // Red

        // Pre-calculate positions with wave offsets to draw the body
        const points = s.segments.map((seg, i) => {
          let segAngle = 0;
          if (i === 0) {
            segAngle = s.angle;
          } else {
            segAngle = Math.atan2(s.segments[i - 1].y - seg.y, s.segments[i - 1].x - seg.x);
          }
          
          // Propagating wave perpendicular to segment direction
          // Head has less wave movement than the body
          const waveAmp = i === 0 ? 0.8 : Math.sin(i * 0.2) * 5.0;
          const waveOffset = Math.sin(s.wavePhase - i * 0.45) * waveAmp;
          
          return {
            x: seg.x + Math.cos(segAngle + Math.PI / 2) * waveOffset,
            y: seg.y + Math.sin(segAngle + Math.PI / 2) * waveOffset,
            angle: segAngle,
          };
        });

        // A. Draw tongue if flicking
        if (s.showTongue) {
          const tongueLen = 14;
          const tx = points[0].x + Math.cos(s.angle) * 8;
          const ty = points[0].y + Math.sin(s.angle) * 8;
          const endX = tx + Math.cos(s.angle) * tongueLen;
          const endY = ty + Math.sin(s.angle) * tongueLen;
          
          // Split ends
          const splitAngle = 0.35;
          const forkX1 = endX + Math.cos(s.angle - splitAngle) * 5;
          const forkY1 = endY + Math.sin(s.angle - splitAngle) * 5;
          const forkX2 = endX + Math.cos(s.angle + splitAngle) * 5;
          const forkY2 = endY + Math.sin(s.angle + splitAngle) * 5;

          ctx.beginPath();
          ctx.moveTo(tx, ty);
          ctx.lineTo(endX, endY);
          ctx.moveTo(endX, endY);
          ctx.lineTo(forkX1, forkY1);
          ctx.moveTo(endX, endY);
          ctx.lineTo(forkX2, forkY2);
          
          ctx.strokeStyle = tongueColor;
          ctx.lineWidth = 1.8;
          ctx.lineCap = "round";
          ctx.stroke();
        }

        // B. Draw body segments (from tail to head for correct layering)
        for (let i = points.length - 1; i >= 0; i--) {
          const pt = points[i];
          const radius = i === 0 ? 7 : Math.max(2, 6.5 - i * 0.28);

          // Draw main blue segment
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2);
          ctx.fillStyle = bodyColor;
          ctx.fill();

          // Draw cyan/light blue belly scale/spot overlay
          if (i > 0 && i % 2 === 0) {
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, radius * 0.45, 0, Math.PI * 2);
            ctx.fillStyle = bellyColor;
            ctx.fill();
          }
        }

        // C. Draw Head Eyes
        const hPt = points[0];
        const eyeOffsetAngle = 0.65; // position angle relative to head center
        const eyeDist = 4.2;
        const eyeRadius = 1.8;

        const leftEyeX = hPt.x + Math.cos(s.angle - eyeOffsetAngle) * eyeDist;
        const leftEyeY = hPt.y + Math.sin(s.angle - eyeOffsetAngle) * eyeDist;
        const rightEyeX = hPt.x + Math.cos(s.angle + eyeOffsetAngle) * eyeDist;
        const rightEyeY = hPt.y + Math.sin(s.angle + eyeOffsetAngle) * eyeDist;

        // Left Eye (white)
        ctx.beginPath();
        ctx.arc(leftEyeX, leftEyeY, eyeRadius, 0, Math.PI * 2);
        ctx.fillStyle = eyeColor;
        ctx.fill();

        // Right Eye (white)
        ctx.beginPath();
        ctx.arc(rightEyeX, rightEyeY, eyeRadius, 0, Math.PI * 2);
        ctx.fillStyle = eyeColor;
        ctx.fill();

        // Pupils looking in direction of target
        const pupilOffsetAngle = s.angle;
        const pupilDist = 0.6;
        const pupilRadius = 0.8;

        ctx.beginPath();
        ctx.arc(leftEyeX + Math.cos(pupilOffsetAngle) * pupilDist, leftEyeY + Math.sin(pupilOffsetAngle) * pupilDist, pupilRadius, 0, Math.PI * 2);
        ctx.fillStyle = pupilColor;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(rightEyeX + Math.cos(pupilOffsetAngle) * pupilDist, rightEyeY + Math.sin(pupilOffsetAngle) * pupilDist, pupilRadius, 0, Math.PI * 2);
        ctx.fillStyle = pupilColor;
        ctx.fill();
      }

      animationId = requestAnimationFrame(updateAndDraw);
    };

    animationId = requestAnimationFrame(updateAndDraw);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [resolvedTheme]);

  if (typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches) {
    return null; // Don't render on mobile screens
  }

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9997] hidden md:block"
    />
  );
}
