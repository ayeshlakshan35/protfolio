import React, { useState } from "react";
import CertSlider from "../Components/CertSlider";
import AnimatedBackground from "../Components/AnimatedBackground";

const experiences = [
  {
    title: "DevOps Engineer — Project-Based",
    company: "Self Level • Oct 2025 – Nov 2025",
    bullets: [
      "Built CI/CD pipelines with Jenkins for automated build, test, and deployment workflows",
      "Automated Docker image creation and Kubernetes deployment processes",
      "Integrated GitHub, Docker Hub, and SonarQube for reliable DevOps workflows",
      "Technologies: Jenkins, Docker, Kubernetes, SonarQube, Linux"
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Self Level • May 2025 – Present",
    bullets: [
      "Developed web, mobile, and backend applications using modern technologies",
      "Built REST APIs, authentication systems, and database-integrated features",
      "Worked with Docker, Kubernetes, CI/CD, and cloud deployment workflows",
      "Technologies: React, Node.js, Express, MongoDB, React Native"
    ],
  },
  {
    title: "Kubernetes Troubleshooting Specialist",
    company: "Fiverr • build_with_yesh",
    bullets: [
      "Fix Kubernetes pod errors, deployment failures, service issues, and ingress routing problems",
      "Debug CrashLoopBackOff, ImagePullBackOff, ErrImagePull, logs, events, and YAML issues",
      "Resolve Docker image and container-related problems for stable deployments",
      "Technologies: Kubernetes, Docker, kubectl, Minikube, NGINX Ingress"
    ],
  },
  {
    title: "Cloud & Kubernetes Deployment",
    company: "CollabNote / EMS Projects • 2025 – 2026",
    bullets: [
      "Deployed containerized full-stack applications using Docker and Kubernetes",
      "Configured Services, Secrets, NGINX Ingress, and MongoDB Atlas integration",
      "Provisioned Azure infrastructure using Terraform for cloud deployment",
      "Technologies: Azure, Terraform, Docker, Kubernetes, NGINX Ingress"
    ],
  },
];

const education = [
  {
    period: "2023",
    title: "Full Stack Web Development Bootcamp",
    company: "Online Course Platform",
    bullets: ["Intensive project-based curriculum", "Deployed full-stack apps"],
  },
  {
    period: "2022",
    title: "Front-end Track",
    company: "Codecademy",
    bullets: ["HTML/CSS/JS deep dives", "React fundamentals"],
  },
  {
    period: "2020 - 2021",
    title: "Programming Course",
    company: "Online Course",
    bullets: ["Data structures basics", "Algorithm practice"],
  },
  {
    period: "2019",
    title: "Certified Web Developer",
    company: "Tech Institute",
    bullets: ["Certificate program", "Capstone project"],
  },
];

const skills = [
  {
    id: "html", label: "HTML", icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
        <path fill="#E44D26" d="M19 3l8 90 36 10 36-10 8-90z" />
        <path fill="#F16529" d="M64 117l29-8 7-79H64z" />
        <path fill="#EBEBEB" d="M64 66H45l2 22 17 5 17-5 2-22H64z" />
      </svg>
    )
  },
  {
    id: "css", label: "CSS", icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
        <path fill="#264DE4" d="M19 3l8 90 36 10 36-10 8-90z" />
        <path fill="#2965F1" d="M64 117l29-8 7-79H64z" />
        <path fill="#FFF" d="M64 66H45l2 22 17 5 17-5 2-22H64z" />
      </svg>
    )
  },
  {
    id: "js", label: "JS", icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
        <rect width="128" height="128" rx="12" fill="#F7DF1E" />
        <path d="M40 93l8-5c1 5 4 9 10 9 5 0 8-2 8-9V55h15v37c0 16-9 23-24 23-13 0-22-6-27-17z" fill="#000" />
        <path d="M88 92l8-5c2 6 6 10 12 10 5 0 9-2 9-10V55h15v37c0 22-13 32-37 32-20 0-33-9-40-22l15-6c2 7 8 12 17 12 9 0 14-4 16-11z" fill="#000" />
      </svg>
    )
  },
  {
    id: "react", label: "React", icon: (
      <svg viewBox="0 0 256 256" className="w-10 h-10" aria-hidden>
        <g fill="none" stroke="#61DAFB" strokeWidth="8">
          <ellipse cx="128" cy="128" rx="80" ry="28" />
          <ellipse cx="128" cy="128" rx="28" ry="80" transform="rotate(60 128 128)" />
          <ellipse cx="128" cy="128" rx="28" ry="80" transform="rotate(120 128 128)" />
        </g>
        <circle cx="128" cy="128" r="10" fill="#61DAFB" />
      </svg>
    )
  },
  {
    id: "node", label: "Node", icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
        <path fill="#83CD29" d="M64 4l48 27v54L64 124 16 85V31z" />
        <path fill="#fff" d="M44 46h40v36c0 10-8 14-20 14s-20-4-20-14V72h12v10c0 3 2 5 8 5s8-2 8-5V46H44z" />
      </svg>
    )
  },
  {
    id: "tw", label: "Tailwind", icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" aria-hidden>
        <path fill="#06B6D4" d="M12 3c-3 0-5 2-7 5 2-1 4-1 6 0 2 1 3 3 6 3s4-3 4-5c0-2-2-3-9-3z" />
        <path fill="#0891B2" d="M5 12c2-3 4-3 7-2 2 1 3 3 6 3s4-3 4-5c0 2-2 3-9 3-4 0-6 1-8 4z" />
      </svg>
    )
  },
  {
    id: "npm", label: "NodeJS", icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
        <rect width="128" height="128" rx="12" fill="#83CD29" />
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fontSize="28" fontWeight="700" fill="#fff">npm</text>
      </svg>
    )
  },
  {
    id: "figma", label: "Figma", icon: (
      <svg viewBox="0 0 256 256" className="w-10 h-10" aria-hidden>
        <rect x="40" y="32" width="64" height="64" rx="32" fill="#F24E1E" />
        <circle cx="72" cy="96" r="32" fill="#FD6E63" />
        <rect x="40" y="128" width="64" height="64" rx="32" fill="#A259FF" />
        <rect x="104" y="32" width="64" height="64" rx="32" fill="#FF7262" />
        <rect x="104" y="96" width="64" height="64" rx="32" fill="#1ABCFE" />
      </svg>
    )
  },
  {
    id: "docker", label: "Docker", icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
        <rect x="12" y="58" width="18" height="18" rx="2" fill="#0db7ed" />
        <rect x="32" y="42" width="18" height="18" rx="2" fill="#0db7ed" />
        <rect x="32" y="62" width="18" height="18" rx="2" fill="#0db7ed" />
        <rect x="52" y="42" width="18" height="18" rx="2" fill="#0db7ed" />
        <rect x="52" y="62" width="18" height="18" rx="2" fill="#0db7ed" />
        <rect x="72" y="62" width="18" height="18" rx="2" fill="#0db7ed" />
        <path d="M18 86h74c8 0 16-3 20-10-4-4-9-7-16-7-10 0-17 7-22 7H10c0 12 5 24 20 24h54c11 0 18-4 22-11" stroke="#0db7ed" strokeWidth="6" fill="none" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "github-actions", label: "GitHub Actions", icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
        <rect x="18" y="26" width="92" height="76" rx="10" fill="#24292f" />
        <circle cx="44" cy="64" r="14" fill="#2ea043" />
        <path d="M44 50v10l6 6" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="84" cy="52" r="8" fill="#79b8ff" />
        <circle cx="84" cy="76" r="8" fill="#79b8ff" />
        <path d="M84 60v8" stroke="#79b8ff" strokeWidth="4" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "jenkins", label: "Jenkins", icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
        <circle cx="64" cy="64" r="56" fill="#d33833" />
        <ellipse cx="64" cy="66" rx="34" ry="38" fill="#f5f5f5" />
        <path d="M64 44c-10 0-16 8-16 18s6 18 16 18 16-8 16-18-6-18-16-18z" fill="#fbd0b4" />
        <path d="M48 84c4 6 10 10 16 10s12-4 16-10" stroke="#555" strokeWidth="4" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "linux", label: "Linux", icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
        <path d="M64 20c-16 0-28 14-28 34 0 12 4 24 10 34l-8 12c-3 6 2 10 8 8l12-4 6 12c3 6 9 6 12 0l6-12 12 4c6 2 11-2 8-8l-8-12c6-10 10-22 10-34 0-20-12-34-28-34z" fill="#ffce00" stroke="#222" strokeWidth="4" strokeLinejoin="round" />
        <circle cx="54" cy="52" r="6" fill="#222" />
        <circle cx="74" cy="52" r="6" fill="#222" />
        <path d="M54 68c6 6 14 6 20 0" stroke="#222" strokeWidth="4" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "aws", label: "AWS", icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
        <rect width="128" height="128" rx="14" fill="#232f3e" />
        <text x="50%" y="48%" dominantBaseline="middle" textAnchor="middle" fontSize="34" fontWeight="700" fill="#fff">aws</text>
        <path d="M26 88c18 10 36 14 52 14 12 0 22-3 30-8" stroke="#ff9900" strokeWidth="6" strokeLinecap="round" fill="none" />
      </svg>
    )
  },

  {
    id: "kubernetes", label: "Kubernetes", icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
        <polygon points="64,8 113,36 113,92 64,120 15,92 15,36" fill="#326CE5" />
        <circle cx="64" cy="64" r="18" fill="#fff" />
        <g stroke="#fff" strokeWidth="6" strokeLinecap="round">
          <path d="M64 20v20" />
          <path d="M64 88v20" />
          <path d="M26 42l17 10" />
          <path d="M85 76l17 10" />
          <path d="M102 42l-17 10" />
          <path d="M43 76l-17 10" />
        </g>
        <circle cx="64" cy="64" r="8" fill="#326CE5" />
      </svg>
    )
  },
  {
    id: "azure", label: "Azure", icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
        <path fill="#0078D4" d="M48 12L16 104h30l48-92z" />
        <path fill="#50A5F1" d="M58 76l-18 28h72L80 12z" />
      </svg>
    )
  },
  {
    id: "terraform", label: "Terraform", icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
        <path fill="#7B42BC" d="M22 18l32 18v36L22 54z" />
        <path fill="#5C4EE5" d="M58 38l32 18v36L58 74z" />
        <path fill="#4040B2" d="M94 58l32 18v36L94 94z" />
        <path fill="#7B42BC" d="M58 78l32 18v36L58 114z" />
      </svg>
    )
  },
  {
    id: "sonarqube", label: "SonarQube", icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
        <rect width="128" height="128" rx="14" fill="#4E9BCD" />
        <path d="M28 76c18-24 44-34 76-28" stroke="#fff" strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M36 94c14-16 32-22 54-18" stroke="#fff" strokeWidth="7" fill="none" strokeLinecap="round" opacity=".85" />
        <path d="M46 108c10-8 22-11 36-8" stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round" opacity=".7" />
      </svg>
    )
  },
  {
    id: "nginx", label: "NGINX", icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
        <polygon points="64,8 112,36 112,92 64,120 16,92 16,36" fill="#009639" />
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fontSize="26" fontWeight="800" fill="#fff">N</text>
      </svg>
    )
  },
  {
    id: "minikube", label: "Minikube", icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
        <rect x="18" y="28" width="92" height="72" rx="12" fill="#326CE5" />
        <path d="M38 72V52l16 10 16-10v20" stroke="#fff" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="88" cy="64" r="14" fill="#fff" />
        <circle cx="88" cy="64" r="6" fill="#326CE5" />
      </svg>
    )
  },
  {
    id: "mongodb", label: "MongoDB", icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
        <path d="M64 8c20 22 32 42 32 66 0 22-12 38-32 46-20-8-32-24-32-46 0-24 12-44 32-66z" fill="#47A248" />
        <path d="M64 30v82" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "express", label: "Express", icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
        <rect width="128" height="128" rx="14" fill="#111" />
        <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fontSize="26" fontWeight="700" fill="#fff">ex</text>
      </svg>
    )
  },
  {
    id: "react-native", label: "React Native", icon: (
      <svg viewBox="0 0 256 256" className="w-10 h-10" aria-hidden>
        <rect width="256" height="256" rx="32" fill="#20232A" />
        <g fill="none" stroke="#61DAFB" strokeWidth="8">
          <ellipse cx="128" cy="128" rx="78" ry="28" />
          <ellipse cx="128" cy="128" rx="28" ry="78" transform="rotate(60 128 128)" />
          <ellipse cx="128" cy="128" rx="28" ry="78" transform="rotate(120 128 128)" />
        </g>
        <circle cx="128" cy="128" r="10" fill="#61DAFB" />
      </svg>
    )
  },
  {
    id: "git", label: "Git", icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
        <rect x="22" y="22" width="84" height="84" rx="12" fill="#F05032" transform="rotate(45 64 64)" />
        <circle cx="48" cy="48" r="8" fill="#fff" />
        <circle cx="80" cy="80" r="8" fill="#fff" />
        <circle cx="80" cy="48" r="8" fill="#fff" />
        <path d="M56 48h24M48 56l32 24" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "github", label: "GitHub", icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
        <circle cx="64" cy="64" r="56" fill="#181717" />
        <path fill="#fff" d="M64 28c-20 0-36 16-36 36 0 16 10 30 25 34 2 0 3-1 3-2v-9c-10 2-12-4-12-4-2-4-4-5-4-5-3-2 0-2 0-2 4 0 6 4 6 4 3 6 9 4 11 3 0-3 1-4 2-5-8-1-17-4-17-18 0-4 1-7 4-10 0-1-2-5 1-10 0 0 3-1 10 4 3-1 6-1 9-1s6 0 9 1c7-5 10-4 10-4 3 5 1 9 1 10 3 3 4 6 4 10 0 14-9 17-17 18 1 1 3 4 3 8v12c0 1 1 2 3 2 15-4 25-18 25-34 0-20-16-36-36-36z" />
      </svg>
    )
  },
  {
    id: "bash", label: "Bash", icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
        <rect x="14" y="24" width="100" height="80" rx="10" fill="#293137" />
        <path d="M34 50l18 14-18 14" stroke="#4EAA25" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M60 80h28" stroke="#fff" strokeWidth="7" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "python", label: "Python", icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
        <path d="M64 12c-22 0-30 8-30 22v16h36v8H26c-12 0-20 10-20 26s8 26 22 26h14V90c0-13 9-22 22-22h28c12 0 22-9 22-22V34c0-14-8-22-30-22H64z" fill="#3776AB" />
        <path d="M64 116c22 0 30-8 30-22V78H58v-8h44c12 0 20-10 20-26s-8-26-22-26H86v20c0 13-9 22-22 22H36c-12 0-22 9-22 22v12c0 14 8 22 30 22h20z" fill="#FFD43B" />
        <circle cx="52" cy="32" r="5" fill="#fff" />
        <circle cx="76" cy="96" r="5" fill="#fff" />
      </svg>
    )
  },
  {
    id: "firebase", label: "Firebase", icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
        <path fill="#FFA000" d="M24 104L42 16l22 42z" />
        <path fill="#F57C00" d="M64 58L84 28l20 76z" />
        <path fill="#FFCA28" d="M24 104l40-46 40 46z" />
      </svg>
    )
  },
  {
    id: "rest-api", label: "REST API", icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
        <rect width="128" height="128" rx="14" fill="#00D8A7" />
        <path d="M28 44h72M28 64h72M28 84h72" stroke="#062B2B" strokeWidth="8" strokeLinecap="round" />
        <circle cx="42" cy="44" r="5" fill="#062B2B" />
        <circle cx="42" cy="64" r="5" fill="#062B2B" />
        <circle cx="42" cy="84" r="5" fill="#062B2B" />
      </svg>
    )
  },
];

export default function Resume() {
  const [active, setActive] = useState("Experience");

  return (
    <main className="relative text-white min-h-screen py-20 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0a0e1a 0%, #0f1724 50%, #000000 100%)'
    }}>
      <AnimatedBackground />
      <div className="relative z-10">
        <section className="max-w-6xl mx-auto px-6 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left column: vertical menu */}
            <aside className="md:col-span-1">
              <h3 className="text-2xl font-extrabold mb-4">Why hire me?</h3>


              <div className="space-y-3">
                <button
                  onClick={() => setActive("Experience")}
                  className={`w-full text-left py-3 px-4 rounded-md font-medium ${active === "Experience"
                      ? "bg-emerald-400 text-black"
                      : "bg-gray-800 text-gray-300"
                    }`}
                >
                  Experience
                </button>
                <button
                  onClick={() => setActive("Education")}
                  className={`w-full text-left py-3 px-4 rounded-md font-medium ${active === "Education"
                      ? "bg-emerald-400 text-black"
                      : "bg-gray-800 text-gray-300"
                    }`}
                >
                  Certificates
                </button>
                <button
                  onClick={() => setActive("Skills")}
                  className={`w-full text-left py-3 px-4 rounded-md font-medium ${active === "Skills"
                      ? "bg-emerald-400 text-black"
                      : "bg-gray-800 text-gray-300"
                    }`}
                >
                  Skills
                </button>
                <button
                  onClick={() => setActive("About")}
                  className={`w-full text-left py-3 px-4 rounded-md font-medium ${active === "About"
                      ? "bg-emerald-400 text-black"
                      : "bg-gray-800 text-gray-300"
                    }`}
                >
                  About me
                </button>
              </div>
            </aside>

            {/* Right column: Experience content */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-extrabold mb-4">
                {active === "Experience"
                  ? ""
                  : active === "Education"
                    ? ""
                    : ""}
              </h3>


              {active === "About" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group bg-white/5 backdrop-blur-sm p-8 sm:p-10 rounded-lg border border-gray-800/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/20 hover:border-emerald-400/50 min-h-40 sm:min-h-44 md:min-h-48">
                    <h4 className="text-xl sm:text-2xl font-semibold mb-4 transition-colors duration-200 group-hover:text-emerald-400">About me</h4>
                    <p className="text-gray-300 mb-4 text-sm sm:text-base transition-colors duration-200 group-hover:text-gray-100">
                      DevOps-focused ICT undergraduate experienced in Docker, Kubernetes, Linux, CI/CD, and cloud deployments, with a focus on building stable and scalable systems.
                    </p>
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li>
                        <span className="text-gray-400 transition-colors duration-200 group-hover:text-emerald-300">Name</span>: <span className="font-medium transition-colors duration-200 group-hover:text-gray-100">Ayesh Lakshan</span>
                      </li>
                      <li>
                        <span className="text-gray-400 transition-colors duration-200 group-hover:text-emerald-300">Role</span>: <span className="font-medium transition-colors duration-200 group-hover:text-gray-100">DevOps Engineer & Full Stack Developer</span>
                      </li>
                      <li>
                        <span className="text-gray-400 transition-colors duration-200 group-hover:text-emerald-300">Focus</span>: <span className="font-medium transition-colors duration-200 group-hover:text-gray-100">Kubernetes, Docker, CI/CD, Cloud Deployment</span>
                      </li>
                      <li>
                        <span className="text-gray-400 transition-colors duration-200 group-hover:text-emerald-300">Nationality</span>: <span className="font-medium transition-colors duration-200 group-hover:text-gray-100">Sri Lankan</span>
                      </li>
                    </ul>
                  </div>

                  <div className="group bg-white/5 backdrop-blur-sm p-8 sm:p-10 rounded-lg border border-gray-800/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/20 hover:border-emerald-400/50 min-h-40 sm:min-h-44 md:min-h-48">
                    <h4 className="text-xl sm:text-2xl font-semibold mb-4 transition-colors duration-200 group-hover:text-emerald-400">Contact</h4>
                    <ul className="text-sm sm:text-base text-gray-300 space-y-3">
                      <li><span className="text-gray-400 transition-colors duration-200 group-hover:text-emerald-300">Phone</span>: <span className="font-medium transition-colors duration-200 group-hover:text-gray-100">070-5049567</span></li>
                      <li><span className="text-gray-400 transition-colors duration-200 group-hover:text-emerald-300">Email</span>: <span className="font-medium transition-colors duration-200 group-hover:text-gray-100">ayeshalakshan00@gmail.com</span></li>
                      <li><span className="text-gray-400 transition-colors duration-200 group-hover:text-emerald-300">Languages</span>: <span className="font-medium transition-colors duration-200 group-hover:text-gray-100">English, Sinhala</span></li>
                      <li><span className="text-gray-400 transition-colors duration-200 group-hover:text-emerald-300">Location</span>: <span className="font-medium transition-colors duration-200 group-hover:text-gray-100">Sri Lanka</span></li>
                      <li><span className="text-gray-400 transition-colors duration-200 group-hover:text-emerald-300">Fiverr</span>: <span className="font-medium transition-colors duration-200 group-hover:text-gray-100">build_with_yesh</span></li>
                    </ul>
                  </div>
                </div>
              ) : active === "Skills" ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {skills.map((s, i) => (
                    <div
                      key={s.id}
                      className="group bg-white/5 backdrop-blur-sm h-28 rounded-lg flex flex-col items-center justify-center text-xl text-gray-100 border border-gray-800/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/20 hover:border-emerald-400/50 cursor-pointer"
                      aria-label={s.label}
                    >
                      <div className="mb-3 text-gray-100 transform transition-transform duration-300 group-hover:scale-110 group-hover:opacity-95">
                        {s.icon}
                      </div>
                      <span className="font-semibold text-sm sm:text-base transition-colors duration-200 group-hover:text-emerald-400">{s.label}</span>
                    </div>
                  ))}
                </div>
              ) : active === "Experience" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {experiences.map((exp, i) => (
                    <article
                      key={exp.title}
                      className="group relative bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-gray-800/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/20 hover:border-emerald-400/50 cursor-pointer"
                    >
                      <div>
                        <h4 className="text-xl font-bold mb-2 transition-colors duration-200 group-hover:text-emerald-400">{exp.title}</h4>
                        <div className="text-sm text-emerald-400 mb-3 transition-colors duration-200 group-hover:text-emerald-300">{exp.company}</div>
                        <ul className="text-gray-300 text-sm space-y-2">
                          {exp.bullets.map((b, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="mt-1 text-emerald-400 transition-colors duration-200 group-hover:text-emerald-300">•</span>
                              <span className="transition-colors duration-200 group-hover:text-gray-100">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  ))}
                </div>
              ) : active === "Education" ? (
                <div>
                  <CertSlider />
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
