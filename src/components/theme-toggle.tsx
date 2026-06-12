"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-9" />; // Placeholder to avoid layout shift
  }

  const handleToggle = () => {
    // Play a realistic mechanical click using Web Audio API impulse noise
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContext) {
        const ctx = new AudioContext();
        
        // Create a 10ms buffer
        const buffer = ctx.createBuffer(1, ctx.sampleRate * 0.01, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        
        // Fill buffer with white noise that decays exponentially
        for (let i = 0; i < data.length; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.002));
        }
        
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        
        // Add a slight lowpass filter to make it sound like physical plastic clicking rather than digital static
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.value = 3000;
        
        const gain = ctx.createGain();
        gain.gain.value = 0.6; // Volume
        
        source.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        
        source.start();
      }
    } catch (e) {
      // Ignore if browser blocks AudioContext
    }

    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={handleToggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-100 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-slate-800"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}
