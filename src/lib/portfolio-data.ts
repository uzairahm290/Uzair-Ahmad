import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiPython,
  SiDjango,
  SiNodedotjs,
  SiExpress,
  SiDotnet,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiVercel,
  SiRailway,
  SiRender,
  SiGithubactions,
} from "react-icons/si";

import {
  MdDevices,
  MdApi,
  MdOutlineCloudSync,
  MdSecurity,
  MdStorage,
  MdSync,
  MdAutoAwesome,
} from "react-icons/md";

import { BiNetworkChart } from "react-icons/bi";

export const socialLinks = {
  github: "https://github.com",
  linkedin: "https://www.linkedin.com",
  email: "mailto:uzairahm290@gmail.com",
  resume: "/projects/Uzair-Ahmad.pdf",
  instagram: "https://www.instagram.com/_uzairahm_/",
  twitter: "https://x.com/_uzairahm_",
  upwork: "https://www.upwork.com/freelancers/~01d23c1dd79c3eccb3?mp_source=share",
};

export const projects = [
  {
    name: "EchoHire — AI Hiring Platform",
    summary: "AI-powered end-to-end hiring platform with intelligent interviews, resume analysis, and LinkedIn optimization.",
    problem:
      "Recruiters wasted hours on manual screening while candidates lacked feedback on why they failed — there was no unified, intelligent platform connecting both sides efficiently.",
    solution:
      "Built a full-stack hiring platform with AI-driven mock interviews, real-time resume scoring, LinkedIn profile optimization, and role-based dashboards for Admins, Recruiters, and Candidates — automating the entire hiring funnel.",
    tech: ["Next.js", "Python", "OpenAI API", "PostgreSQL", "Role-Based Auth"],
    demo: "#",
    github: "https://github.com",
    image: "/projects/echohire.png",
    color: {
      accent: "from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500",
      glow: "rgba(59, 130, 246, 0.25)",
      border: "border-blue-200 dark:border-blue-500/20 hover:border-blue-500/40",
      badge: "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-500/20",
      dot: "bg-blue-500",
      line: "bg-blue-500/50",
      text: "text-blue-600 dark:text-blue-400"
    }
  },
  {
    name: "CyberCrux — AI Interview Platform",
    summary: "AI-powered cybersecurity interview preparation platform.",
    problem:
      "Learners needed practical interview prep with real-world security scenarios instead of passive content.",
    solution:
      "Built interactive labs with simulated attack vectors, real-time notifications via WebSockets, streaks, and automated badge assignment for learning milestones.",
    tech: ["React.js", "Node.js", "WebSockets", "MongoDB", "Express.js"],
    demo: "#",
    github: "https://github.com",
    image: "/projects/cybercrux.png",
    color: {
      accent: "from-orange-500 to-amber-500 dark:from-orange-400 dark:to-amber-400",
      glow: "rgba(249, 115, 22, 0.2)",
      border: "border-orange-200 dark:border-orange-500/20 hover:border-orange-500/40",
      badge: "bg-orange-50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-500/20",
      dot: "bg-orange-500",
      line: "bg-orange-500/50",
      text: "text-orange-600 dark:text-orange-400"
    }
  },
  {
    name: "Eventra — Event Management Platform",
    summary: "Full stack event management web application.",
    problem:
      "Event organizers needed a clean system to handle registrations and event operations in one place.",
    solution:
      "Delivered authentication, event creation, registration, and management workflows with clean architecture and API-driven backend integration.",
    tech: ["React.js", "ASP.NET Core", "REST APIs", "SQL Database"],
    demo: "#",
    github: "https://github.com",
    image: "/projects/eventra.png",
    color: {
      accent: "from-purple-500 to-indigo-500 dark:from-purple-400 dark:to-indigo-400",
      glow: "rgba(168, 85, 247, 0.2)",
      border: "border-purple-200 dark:border-purple-500/20 hover:border-purple-500/40",
      badge: "bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-500/20",
      dot: "bg-purple-500",
      line: "bg-purple-500/50",
      text: "text-purple-600 dark:text-purple-400"
    }
  },
  {
    name: "Jarvis — Python Voice Assistant",
    summary: "Voice assistant for productivity and task automation.",
    problem:
      "Users needed hands-free interactions for writing and command execution.",
    solution:
      "Built speech-to-text, typing mode automation, and email command features for practical day-to-day use.",
    tech: ["Python", "Speech Recognition", "Automation", "NLP"],
    demo: "#",
    github: "https://github.com",
    image: "/projects/jarvis.png",
    color: {
      accent: "from-sky-500 to-blue-500 dark:from-sky-400 dark:to-blue-400",
      glow: "rgba(14, 165, 233, 0.25)",
      border: "border-sky-200 dark:border-sky-500/20 hover:border-sky-500/40",
      badge: "bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-500/20",
      dot: "bg-sky-500",
      line: "bg-sky-500/50",
      text: "text-sky-600 dark:text-sky-400"
    }
  },
  {
    name: "Qalbiyah — AI Wellness App",
    summary: "Emotion-aware full stack AI wellness platform.",
    problem:
      "Users needed personalized spiritual and wellness guidance based on emotional context.",
    solution:
      "Integrated NLP-driven sentiment interpretation with a 500+ item content library and tailored recommendations backed by custom scoring logic.",
    tech: ["React", "Node.js", "MongoDB", "REST APIs", "NLP"],
    demo: "#",
    github: "https://github.com",
    image: "/projects/eventra.png",
    color: {
      accent: "from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400",
      glow: "rgba(16, 185, 129, 0.2)",
      border: "border-emerald-200 dark:border-emerald-500/20 hover:border-emerald-500/40",
      badge: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/20",
      dot: "bg-emerald-500",
      line: "bg-emerald-500/50",
      text: "text-emerald-600 dark:text-emerald-400"
    }
  },
  {
    name: "Vision Fitness — Modern Gym Website",
    summary: "Premium, responsive digital presence for a fitness club.",
    problem:
      "A fitness club needed a premium, highly engaging website to display club facilities, showcase trainers, and drive membership subscriptions.",
    solution:
      "Built a dark-themed responsive website featuring interactive trainer cards, dynamic class information, and clear conversion paths.",
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Responsive Design"],
    demo: "#",
    github: "https://github.com",
    image: "/projects/vision.png",
    color: {
      accent: "from-red-500 to-rose-600 dark:from-red-400 dark:to-rose-500",
      glow: "rgba(239, 68, 68, 0.2)",
      border: "border-red-200 dark:border-red-500/20 hover:border-red-500/40",
      badge: "bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-300 border-red-200 dark:border-red-500/20",
      dot: "bg-red-500",
      line: "bg-red-500/50",
      text: "text-red-600 dark:text-red-400"
    }
  },
  {
    name: "Pixel Breaker — Console Arcade Game",
    summary: "Classic Brick Breaker game implemented in C++ for the console.",
    problem:
      "Wanted to build a terminal-based arcade experience to practice core programming structures and console render loops.",
    solution:
      "Developed interactive C++ gameplay with responsive paddle physics, collision detection, and scoreboards, plus pause, save, and load file functions.",
    tech: ["C++", "Console UI", "File Handling", "OOP Concepts"],
    demo: "#",
    github: "https://github.com",
    image: "/projects/pixel.png",
    color: {
      accent: "from-cyan-500 to-teal-500 dark:from-cyan-400 dark:to-teal-400",
      glow: "rgba(6, 182, 212, 0.2)",
      border: "border-cyan-200 dark:border-cyan-500/20 hover:border-cyan-500/40",
      badge: "bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-500/20",
      dot: "bg-cyan-500",
      line: "bg-cyan-500/50",
      text: "text-cyan-600 dark:text-cyan-400"
    }
  },
] as const;

export const skills = {
  frontend: [
    { name: "React", exp: "3+ Years", icon: SiReact },
    { name: "Next.js", exp: "2+ Years", icon: SiNextdotjs },
    { name: "JavaScript (ES6+)", exp: "4+ Years", icon: SiJavascript },
    { name: "HTML5", exp: "5+ Years", icon: SiHtml5 },
    { name: "CSS3", exp: "5+ Years", icon: SiCss },
    { name: "Responsive UI", exp: "4+ Years", icon: MdDevices }
  ],
  backend: [
    { name: "Python", exp: "3+ Years", icon: SiPython },
    { name: "Django", exp: "3+ Years", icon: SiDjango },
    { name: "Node.js", exp: "2+ Years", icon: SiNodedotjs },
    { name: "Express.js", exp: "2+ Years", icon: SiExpress },
    { name: ".NET", exp: "1+ Years", icon: SiDotnet },
    { name: "RESTful APIs", exp: "3+ Years", icon: MdApi }
  ],
  databases: [
    { name: "PostgreSQL", exp: "3+ Years", icon: SiPostgresql },
    { name: "MongoDB", exp: "2+ Years", icon: SiMongodb },
    { name: "SQLite", exp: "3+ Years", icon: SiSqlite },
  ],
  tools: [
    { name: "Git", exp: "4+ Years", icon: SiGit },
    { name: "GitHub", exp: "4+ Years", icon: SiGithub },
    { name: "Docker", exp: "2+ Years", icon: SiDocker },
    { name: "Postman", exp: "3+ Years", icon: SiPostman },
    { name: "Vercel", exp: "2+ Years", icon: SiVercel },
    { name: "Railway", exp: "1+ Years", icon: SiRailway },
    { name: "Render", exp: "1+ Years", icon: SiRender }
  ],
  "CI/CD": [
    { name: "GitHub Actions", exp: "2+ Years", icon: SiGithubactions },
    { name: "Automated Deployments", exp: "2+ Years", icon: MdOutlineCloudSync },
    { name: "Environment Management", exp: "2+ Years", icon: MdSecurity },
  ],
  "core concepts": [
    { name: "WebSockets", exp: "2+ Years", icon: BiNetworkChart },
    { name: "Auth & Authorization", exp: "3+ Years", icon: MdSecurity },
    { name: "State Management", exp: "3+ Years", icon: MdStorage },
    { name: "CRUD Operations", exp: "4+ Years", icon: MdSync },
    { name: "AI Integration & Automation", exp: "1+ Years", icon: MdAutoAwesome }
  ]
};

export const skillsSlider = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Python",
  "Django",
  "Node.js",
  "Express",
  ".NET",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git",
  "Tailwind CSS",
] as const;

export const journey = [
  {
    year: "Oct 2025 — Present",
    title: "Software Engineer — AIforMax",
    detail:
      "Developing AI-driven web applications with Django, Node.js, and .NET with React/Next.js frontend; improved deployment reliability through GitHub Actions CI/CD and optimized API performance by 40%.",
  },
  {
    year: "Sep 2023 — Oct 2024",
    title: "Full Stack Engineer — Usync Solutions",
    detail:
      "Built scalable full stack applications with Django and React, integrated third-party APIs, and delivered reliable deployments through collaborative Git workflows and CI/CD pipelines.",
  },
  {
    year: "Education",
    title: "BS Computer Science — FAST NUCES",
    detail:
      "SOFTEC Society member; strong foundations in Programming Fundamentals, Data Structures, and 8088 Assembly for low-level systems understanding.",
  },
  {
    year: "Awards & Certificates",
    title: "CTF / Blue Teaming / Google CyberSecurity",
    detail:
      "CTF Winner at TechVerse'25 (UMT), 2nd Place Blue Teaming at Cybersecurity Hackathon 2023 (Ignite), and Google CyberSecurity Professional Certificate.",
  },
] as const;

export const services = [
  {
    title: "Full Stack Web Development",
    description: "Building scalable, high-performance web applications from scratch using modern frameworks like React, Next.js, and Tailwind CSS.",
    icon: MdDevices,
  },
  {
    title: "Custom Backend & APIs",
    description: "Designing robust database architectures and secure RESTful APIs using Node.js, Python (Django), or .NET Core.",
    icon: MdApi,
  },
  {
    title: "AI & LLM Integration",
    description: "Integrating intelligent AI features like custom chatbots, RAG systems, and OpenAI into your existing products.",
    icon: MdAutoAwesome,
  },
  {
    title: "Performance & System Architecture",
    description: "Auditing and optimizing slow applications, improving Core Web Vitals, and setting up reliable CI/CD pipelines.",
    icon: MdOutlineCloudSync,
  },
];