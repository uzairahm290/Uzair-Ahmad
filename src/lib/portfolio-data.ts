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
    name: "CyberCrux — AI Interview Platform",
    summary: "AI-powered cybersecurity interview preparation platform.",
    problem:
      "Learners needed practical interview prep with real-world security scenarios instead of passive content.",
    solution:
      "Built interactive labs with simulated attack vectors, real-time notifications via WebSockets, streaks, and automated badge assignment for learning milestones.",
    tech: ["React.js", "Node.js", "WebSockets", "MongoDB", "Express.js"],
    demo: "#",
    github: "https://github.com",
    image: "/projects/pulseboard.svg",
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
    image: "/projects/flowstate.svg",
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
    image: "/projects/shipfast.svg",
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
    image: "/projects/mentormatch.svg",
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
      "CTF Winner at TechVerse’25 (UMT), 2nd Place Blue Teaming at Cybersecurity Hackathon 2023 (Ignite), and Google CyberSecurity Professional Certificate.",
  },
] as const;