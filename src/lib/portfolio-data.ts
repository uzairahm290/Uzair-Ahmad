export const socialLinks = {
  github: "https://github.com",
  linkedin: "https://www.linkedin.com",
  email: "mailto:uzairahm290@gmail.com",
  resume: "#",
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
  frontend: ["React", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive UI"],
  backend: ["Python", "Django", "Node.js", "Express.js", ".NET", "RESTful APIs"],
  databases: ["PostgreSQL", "MongoDB", "SQLite"],
  tools: ["Git", "GitHub", "Docker", "Postman", "Vercel", "Railway", "Render"],
  "ci/cd": ["GitHub Actions", "Automated Deployments", "Environment Management"],
  "core concepts": [
    "WebSockets",
    "Authentication & Authorization",
    "State Management",
    "CRUD Operations",
    "AI Integration & Automation",
  ],
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