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
  github: "https://github.com/uzairahm290",
  linkedin: "https://www.linkedin.com/in/uzairahm290/",
  email: "mailto:uzairahm290@gmail.com",
  resume: "/projects/Uzair-Ahmad.pdf",
  instagram: "https://www.instagram.com/_uzairahm_/",
  twitter: "https://x.com/_uzairahm_",
  upwork: "https://www.upwork.com/freelancers/~01d23c1dd79c3eccb3?mp_source=share",
};

export const projects = [
  {
    name: "EchoHire — AI Career Prep Platform",
    summary: "AI-powered career prep platform combining resume ATS analysis, LinkedIn optimization, and live mock interview sessions.",
    problem:
      "Job seekers had no unified platform to diagnose resume weaknesses, optimize their LinkedIn profile, and practice interviews — each problem required a separate tool.",
    solution:
      "Built an ATS analysis engine in Node.js to score resumes against job descriptions, added LinkedIn optimization features for profile visibility, and implemented real-time mock interview sessions with React and WebSockets for instant feedback.",
    tech: ["React.js", "Node.js", "WebSockets", "ATS Engine", "REST APIs"],
    demo: "#",
    github: "https://github.com/uzairahm290",
    image: "/projects/echohire.png",
    color: {
      accent: "from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500",
      glow: "rgba(59, 130, 246, 0.25)",
      border: "border-blue-200 dark:border-blue-500/20 hover:border-blue-500/40",
      badge: "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-500/20",
      dot: "bg-blue-500",
      line: "bg-blue-500/50",
      text: "text-blue-600 dark:text-blue-400",
      hoverText: "hover:text-blue-600 dark:hover:text-blue-400"
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
    github: "https://github.com/uzairahm290",
    image: "/projects/cybercrux.png",
    color: {
      accent: "from-orange-500 to-amber-500 dark:from-orange-400 dark:to-amber-400",
      glow: "rgba(249, 115, 22, 0.2)",
      border: "border-orange-200 dark:border-orange-500/20 hover:border-orange-500/40",
      badge: "bg-orange-50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-500/20",
      dot: "bg-orange-500",
      line: "bg-orange-500/50",
      text: "text-orange-600 dark:text-orange-400",
      hoverText: "hover:text-orange-600 dark:hover:text-orange-400"
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
    github: "https://github.com/uzairahm290",
    image: "/projects/eventra.png",
    color: {
      accent: "from-purple-500 to-indigo-500 dark:from-purple-400 dark:to-indigo-400",
      glow: "rgba(168, 85, 247, 0.2)",
      border: "border-purple-200 dark:border-purple-500/20 hover:border-purple-500/40",
      badge: "bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-500/20",
      dot: "bg-purple-500",
      line: "bg-purple-500/50",
      text: "text-purple-600 dark:text-purple-400",
      hoverText: "hover:text-purple-600 dark:hover:text-purple-400"
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
    github: "https://github.com/uzairahm290",
    image: "/projects/jarvis.png",
    color: {
      accent: "from-sky-500 to-blue-500 dark:from-sky-400 dark:to-blue-400",
      glow: "rgba(14, 165, 233, 0.25)",
      border: "border-sky-200 dark:border-sky-500/20 hover:border-sky-500/40",
      badge: "bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-500/20",
      dot: "bg-sky-500",
      line: "bg-sky-500/50",
      text: "text-sky-600 dark:text-sky-400",
      hoverText: "hover:text-sky-600 dark:hover:text-sky-400"
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
    github: "https://github.com/uzairahm290",
    image: "/projects/eventra.png",
    color: {
      accent: "from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400",
      glow: "rgba(16, 185, 129, 0.2)",
      border: "border-emerald-200 dark:border-emerald-500/20 hover:border-emerald-500/40",
      badge: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/20",
      dot: "bg-emerald-500",
      line: "bg-emerald-500/50",
      text: "text-emerald-600 dark:text-emerald-400",
      hoverText: "hover:text-emerald-600 dark:hover:text-emerald-400"
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
    github: "https://github.com/uzairahm290",
    image: "/projects/vision.png",
    color: {
      accent: "from-red-500 to-rose-600 dark:from-red-400 dark:to-rose-500",
      glow: "rgba(239, 68, 68, 0.2)",
      border: "border-red-200 dark:border-red-500/20 hover:border-red-500/40",
      badge: "bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-300 border-red-200 dark:border-red-500/20",
      dot: "bg-red-500",
      line: "bg-red-500/50",
      text: "text-red-600 dark:text-red-400",
      hoverText: "hover:text-red-600 dark:hover:text-red-400"
    }
  },
  {
    name: "GamePalace — Gaming Asset Marketplace",
    summary: "Full stack e-commerce marketplace for digital gaming assets with secure JWT auth and role-based access control.",
    problem:
      "Gamers lacked a dedicated, secure marketplace to buy and sell digital gaming assets with reliable payment processing and proper access management.",
    solution:
      "Built with Node.js across the entire backend and a responsive Next.js/TypeScript frontend. Designed scalable PostgreSQL schemas with Prisma ORM, implemented JWT auth via passport-jwt with RBAC, and integrated secure payment processing through a high-performance Express API with Redux cart management.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma ORM", "Redux"],
    demo: "#",
    github: "https://github.com/uzairahm290",
    image: "/projects/cybercrux.png",
    color: {
      accent: "from-violet-500 to-purple-600 dark:from-violet-400 dark:to-purple-500",
      glow: "rgba(139, 92, 246, 0.25)",
      border: "border-violet-200 dark:border-violet-500/20 hover:border-violet-500/40",
      badge: "bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-500/20",
      dot: "bg-violet-500",
      line: "bg-violet-500/50",
      text: "text-violet-600 dark:text-violet-400",
      hoverText: "hover:text-violet-600 dark:hover:text-violet-400"
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
    github: "https://github.com/uzairahm290",
    image: "/projects/pixel.png",
    color: {
      accent: "from-cyan-500 to-teal-500 dark:from-cyan-400 dark:to-teal-400",
      glow: "rgba(6, 182, 212, 0.2)",
      border: "border-cyan-200 dark:border-cyan-500/20 hover:border-cyan-500/40",
      badge: "bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-500/20",
      dot: "bg-cyan-500",
      line: "bg-cyan-500/50",
      text: "text-cyan-600 dark:text-cyan-400",
      hoverText: "hover:text-cyan-600 dark:hover:text-cyan-400"
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
  { name: "React", exp: "3+ Years" },
  { name: "Next.js", exp: "2+ Years" },
  { name: "JavaScript", exp: "4+ Years" },
  { name: "TypeScript", exp: "2+ Years" },
  { name: "Python", exp: "3+ Years" },
  { name: "Django", exp: "3+ Years" },
  { name: "Node.js", exp: "2+ Years" },
  { name: "Express", exp: "2+ Years" },
  { name: ".NET", exp: "1+ Years" },
  { name: "PostgreSQL", exp: "3+ Years" },
  { name: "MongoDB", exp: "2+ Years" },
  { name: "Docker", exp: "2+ Years" },
  { name: "Git", exp: "4+ Years" },
  { name: "Tailwind CSS", exp: "4+ Years" },
] as const;

export const journey = [
  {
    year: "Mar 2026 — Present",
    title: "Software Engineer — AIforMax",
    detail:
      "Cut API response times by 40% by integrating AI components directly into core workflows, boosting user automation efficiency by 15%. Built and maintained AI-driven web applications using Python (Django), Node.js, and .NET on the backend with React and Next.js on the frontend. Designed real-time features and async background tasks with WebSockets and Celery.",
  },
  {
    year: "Jan 2026 — Mar 2026",
    title: "Associate Software Engineer — AIforMax",
    detail:
      "Slashed deployment failures by 99% after rolling out a robust CI/CD pipeline with GitHub Actions. Built and integrated RESTful APIs to power AI workflows and data-driven features. Tuned database queries across PostgreSQL and MongoDB, speeding up data retrieval for frontend dashboards.",
  },
  {
    year: "Jun 2025 — Aug 2025",
    title: "Software Engineer Intern — AIforMax",
    detail:
      "Helped build and maintain AI-driven web applications using Python and React. Worked alongside senior engineers to troubleshoot issues and fine-tune frontend components. Participated in code reviews, team meetings, and feature planning. Gained hands-on experience integrating backend APIs and managing database interactions.",
  },
  {
    year: "Feb 2025 — Jun 2025",
    title: "Full Stack Engineer — Usync Solutions",
    detail:
      "Designed and deployed multi-step automation workflows in n8n, streamlining internal business processes. Connected GoHighLevel with third-party platforms via RESTful APIs, improving CRM operations and lead management. Built intelligent data pipelines by embedding AI automations into n8n workflows using Python for custom logic.",
  },
  {
    year: "Jun 2024 — Aug 2024",
    title: "SOC Intern — ITSOLERA PVT LTD",
    detail:
      "Monitored network traffic and security alerts using SIEM tools to identify potential threats. Helped senior analysts triage and investigate security incidents. Performed log analysis and vulnerability assessments to support the security operations team.",
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
      "CTF Winner at TechVerse'25 (UMT), 2nd Place Blue Teaming at Cybersecurity Hackathon 2024 (Ignite), and Google CyberSecurity Professional Certificate.",
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