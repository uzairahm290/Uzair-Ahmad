"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

type TypewriterTextProps = {
  text: string | string[];
  className?: string;
  speed?: number;
  pauseAfterType?: number;
  pauseAfterDelete?: number;
  loop?: boolean;
};

export function TypewriterText({
  text,
  className = "",
  speed = 50,
  pauseAfterType = 2000,
  pauseAfterDelete = 500,
  loop = true,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const texts = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = texts[textIndex];

    if (!loop && textIndex === texts.length - 1 && displayedText.length === currentText.length && !isDeleting) {
      return;
    }

    if (isDeleting) {
      if (displayedText.length === 0) {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, pauseAfterDelete);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.substring(0, displayedText.length - 1));
        }, speed / 2); // delete faster
      }
    } else {
      if (displayedText.length === currentText.length) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseAfterType);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        }, speed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex, texts, speed, pauseAfterType, pauseAfterDelete, loop]);

  return (
    <div className={className}>
      <span>{displayedText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="inline-block ml-1 w-[3px] h-[1em] bg-blue-500 translate-y-[2px]"
      />
    </div>
  );
}
