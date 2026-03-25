"use client";

import { motion } from "framer-motion";

type TypewriterTextProps = {
  text: string;
  className?: string;
  speed?: number;
};

export function TypewriterText({
  text,
  className = "",
  speed = 0.05,
}: TypewriterTextProps) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: speed,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.h1
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={wordVariants} className="inline-block mr-3">
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
