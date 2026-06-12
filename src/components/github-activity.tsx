"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function GithubActivity() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-slate-200/60 bg-white/50 p-4 md:p-8 shadow-xl shadow-blue-900/5 backdrop-blur-md dark:border-slate-700/40 dark:bg-slate-800/30 dark:shadow-blue-900/20">
      <div className="w-full overflow-x-auto flex justify-start md:justify-center pb-2">
        <div className="min-w-max px-2">
          <GitHubCalendar 
            username="uzairahm290" 
            colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
            blockSize={14}
            blockMargin={5}
            fontSize={14}
            theme={{
              light: ['#f1f5f9', '#bae6fd', '#7dd3fc', '#38bdf8', '#0284c7'],
              dark: ['#1e293b', '#0ea5e9', '#0284c7', '#0369a1', '#075985']
            }}
          />
        </div>
      </div>
    </div>
  );
}
