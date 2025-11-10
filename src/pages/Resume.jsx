import React, { useState } from "react";
import CertSlider from "../Components/CertSlider";

const experiences = [
  {
    period: "2022 - Present",
    title: "Full Stack Developer",
    company: "Tech Solutions Inc.",
    bullets: ["Worked on large-scale web apps", "Led frontend architecture"],
  },
  {
    period: "Summer 2021",
    title: "Front-End Developer Intern",
    company: "Web Design Studio",
    bullets: ["Built marketing landing pages", "Improved accessibility"],
  },
  {
    period: "2020 - 2021",
    title: "Freelance Web Developer",
    company: "E-commerce Startup",
    bullets: ["Built storefronts", "Maintained client sites"],
  },
  {
    period: "2019 - 2020",
    title: "Teaching Assistant",
    company: "Tech Academy",
    bullets: ["Led workshops", "Tutored junior developers"],
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
  { id: "html", label: "HTML", icon: (
    <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
      <path fill="#E44D26" d="M19 3l8 90 36 10 36-10 8-90z" />
      <path fill="#F16529" d="M64 117l29-8 7-79H64z" />
      <path fill="#EBEBEB" d="M64 66H45l2 22 17 5 17-5 2-22H64z" />
    </svg>
  ) },
  { id: "css", label: "CSS", icon: (
    <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
      <path fill="#264DE4" d="M19 3l8 90 36 10 36-10 8-90z" />
      <path fill="#2965F1" d="M64 117l29-8 7-79H64z" />
      <path fill="#FFF" d="M64 66H45l2 22 17 5 17-5 2-22H64z" />
    </svg>
  ) },
  { id: "js", label: "JS", icon: (
    <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
      <rect width="128" height="128" rx="12" fill="#F7DF1E"/>
      <path d="M40 93l8-5c1 5 4 9 10 9 5 0 8-2 8-9V55h15v37c0 16-9 23-24 23-13 0-22-6-27-17z" fill="#000"/>
      <path d="M88 92l8-5c2 6 6 10 12 10 5 0 9-2 9-10V55h15v37c0 22-13 32-37 32-20 0-33-9-40-22l15-6c2 7 8 12 17 12 9 0 14-4 16-11z" fill="#000"/>
    </svg>
  ) },
  { id: "react", label: "React", icon: (
    <svg viewBox="0 0 256 256" className="w-10 h-10" aria-hidden>
      <g fill="none" stroke="#61DAFB" strokeWidth="8">
        <ellipse cx="128" cy="128" rx="80" ry="28"/>
        <ellipse cx="128" cy="128" rx="28" ry="80" transform="rotate(60 128 128)"/>
        <ellipse cx="128" cy="128" rx="28" ry="80" transform="rotate(120 128 128)"/>
      </g>
      <circle cx="128" cy="128" r="10" fill="#61DAFB" />
    </svg>
  ) },
  { id: "node", label: "Node", icon: (
    <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
      <path fill="#83CD29" d="M64 4l48 27v54L64 124 16 85V31z"/>
      <path fill="#fff" d="M44 46h40v36c0 10-8 14-20 14s-20-4-20-14V72h12v10c0 3 2 5 8 5s8-2 8-5V46H44z"/>
    </svg>
  ) },
  { id: "tw", label: "Tailwind", icon: (
    <svg viewBox="0 0 24 24" className="w-10 h-10" aria-hidden>
      <path fill="#06B6D4" d="M12 3c-3 0-5 2-7 5 2-1 4-1 6 0 2 1 3 3 6 3s4-3 4-5c0-2-2-3-9-3z"/>
      <path fill="#0891B2" d="M5 12c2-3 4-3 7-2 2 1 3 3 6 3s4-3 4-5c0 2-2 3-9 3-4 0-6 1-8 4z"/>
    </svg>
  ) },
  { id: "npm", label: "NodeJS", icon: (
    <svg viewBox="0 0 128 128" className="w-10 h-10" aria-hidden>
      <rect width="128" height="128" rx="12" fill="#83CD29"/>
      <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fontSize="28" fontWeight="700" fill="#fff">npm</text>
    </svg>
  ) },
  { id: "figma", label: "Figma", icon: (
    <svg viewBox="0 0 256 256" className="w-10 h-10" aria-hidden>
      <rect x="40" y="32" width="64" height="64" rx="32" fill="#F24E1E"/>
      <circle cx="72" cy="96" r="32" fill="#FD6E63"/>
      <rect x="40" y="128" width="64" height="64" rx="32" fill="#A259FF"/>
      <rect x="104" y="32" width="64" height="64" rx="32" fill="#FF7262"/>
      <rect x="104" y="96" width="64" height="64" rx="32" fill="#1ABCFE"/>
    </svg>
  ) },
]

export default function Resume() {
  const [active, setActive] = useState("Experience");

  const items = active === "Experience" ? experiences : education;

  return (
    <main className="bg-[#0f1724] text-white min-h-screen py-16">
      <section className="max-w-6xl mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column: vertical menu */}
          <aside className="md:col-span-1">
            <h3 className="text-2xl font-extrabold mb-4">Why hire me?</h3>
            

            <div className="space-y-3">
              <button
                onClick={() => setActive("Experience")}
                className={`w-full text-left py-3 px-4 rounded-md font-medium ${
                  active === "Experience"
                    ? "bg-emerald-400 text-black"
                    : "bg-gray-800 text-gray-300"
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActive("Education")}
                className={`w-full text-left py-3 px-4 rounded-md font-medium ${
                  active === "Education"
                    ? "bg-emerald-400 text-black"
                    : "bg-gray-800 text-gray-300"
                }`}
              >
                Certificates
              </button>
              <button
                onClick={() => setActive("Skills")}
                className={`w-full text-left py-3 px-4 rounded-md font-medium ${
                  active === "Skills"
                    ? "bg-emerald-400 text-black"
                    : "bg-gray-800 text-gray-300"
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => setActive("About")}
                className={`w-full text-left py-3 px-4 rounded-md font-medium ${
                  active === "About"
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
                <div className="group bg-[#0b0f13] p-8 sm:p-10 rounded-md border border-gray-800 animate-fade-up transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:border-emerald-400 min-h-40 sm:min-h-44 md:min-h-48">
                  <h4 className="text-xl sm:text-2xl font-semibold mb-4 transition-colors duration-200 group-hover:text-emerald-400">About me</h4>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base transition-colors duration-200 group-hover:text-gray-100">BICT undergraduate passionate about DevOps, cloud computing, and building secure, automated systems.</p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>
                      <span className="text-gray-400 transition-colors duration-200 group-hover:text-emerald-300">Name</span>: <span className="font-medium transition-colors duration-200 group-hover:text-gray-100">Ayesha Lakshan</span>
                    </li>
                    <li>
                      <span className="text-gray-400 transition-colors duration-200 group-hover:text-emerald-300">Experience</span>: <span className="font-medium transition-colors duration-200 group-hover:text-gray-100">23 Years old</span>
                    </li>
                    <li>
                      <span className="text-gray-400 transition-colors duration-200 group-hover:text-emerald-300">Nationality</span>: <span className="font-medium transition-colors duration-200 group-hover:text-gray-100">Sri Lankan</span>
                    </li>
                  </ul>
                </div>

                <div className="group bg-[#0b0f13] p-8 sm:p-10 rounded-md border border-gray-800 animate-fade-up transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:border-emerald-400 min-h-40 sm:min-h-44 md:min-h-48" style={{ animationDelay: "120ms" }}>
                  <h4 className="text-xl sm:text-2xl font-semibold mb-4 transition-colors duration-200 group-hover:text-emerald-400">Contact</h4>
                  <ul className="text-sm sm:text-base text-gray-300 space-y-3">
                    <li><span className="text-gray-400 transition-colors duration-200 group-hover:text-emerald-300">Phone</span>: <span className="font-medium transition-colors duration-200 group-hover:text-gray-100">070-5049567</span></li>
                    <li><span className="text-gray-400 transition-colors duration-200 group-hover:text-emerald-300">Email</span>: <span className="font-medium transition-colors duration-200 group-hover:text-gray-100">ayeshalakshan00@gmail.com</span></li>
                    <li><span className="text-gray-400 transition-colors duration-200 group-hover:text-emerald-300">Languages</span>: <span className="font-medium transition-colors duration-200 group-hover:text-gray-100">English, Sinhala</span></li>
                  </ul>
                </div>
              </div>
            ) : active === "Skills" ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {skills.map((s, i) => (
                    <div
                      key={s.id}
                      className="group bg-[#0b0f13] h-28 rounded-md flex flex-col items-center justify-center text-xl text-gray-100 shadow-sm border border-gray-800 animate-fade-up transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:border-emerald-400"
                      style={{ animationDelay: `${i * 80}ms` }}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 scrollbar-green max-h-[60vh] overflow-auto pr-3">
                {experiences.map((exp, i) => (
                  <article
                    key={exp.title}
                    className="group bg-[#0b0f13] p-5 rounded-md shadow-sm border border-gray-800 animate-fade-up transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:border-emerald-400"
                    style={{ animationDelay: `${i * 120}ms` }}
                  >
                    <div className="text-emerald-400 text-sm font-medium mb-2 transition-colors duration-200 group-hover:text-emerald-300">{exp.period}</div>
                    <h4 className="text-lg font-semibold mb-1 transition-colors duration-200 group-hover:text-emerald-400">{exp.title}</h4>
                    <div className="text-sm text-gray-400 mb-3 transition-colors duration-200 group-hover:text-gray-300">{exp.company}</div>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {exp.bullets.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1 text-emerald-400 transition-colors duration-200 group-hover:text-emerald-300">•</span>
                          <span className="transition-colors duration-200 group-hover:text-gray-100">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            ) : active === "Education" ? (
              <div>
                <CertSlider
                  images={[
                    "/src/assets/fronend.jpg",
                    "/src/assets/lindin.jpg",
                    "/src/assets/python.jpg",
                    "/src/assets/webDesign.jpg",
                  ]}
                />
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
