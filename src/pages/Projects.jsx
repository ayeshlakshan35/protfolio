import React, { useState, useEffect, useRef } from "react";
import AnimatedBackground from "../Components/AnimatedBackground";

// Use videos from public folder for proper deployment
const BASE_URL = import.meta.env.BASE_URL;



// NOTE: do NOT statically import a video that might be absent at build time.
// Put the demo video in `public/assets/dashboard-demo.mp4` and reference it as
// '/assets/dashboard-demo.mp4' below so the dev server serves it statically.

const projects = [
  {
    id: 1,
    title: "OneBlood",
    subtitle: "",
    description:
      "A web-based blood donation and management system designed to connect blood donors, recipients, and hospitals seamlessly. The platform enables users to register as donors, search for available blood types in nearby hospitals, and manage donation records efficiently. Built using HTML5, CSS3, and JavaScript, OneBlood focuses on accessibility, responsiveness, and ease of use to support life-saving connections in real time.",
    tech: [],
    video: `${BASE_URL}assets/videos/oneblood.mp4`,
    repoBackend: 'https://github.com/ayeshlakshan35/OneBlood-Backend.git',
    repoFrontend: 'https://github.com/ayeshlakshan35/OneBlood-frontend.git',
  },
  {
    id: 2,
    title: "YummyFeelz",
    subtitle: "",
    description: "Yummy Feels is a restaurant website built with HTML, CSS, JavaScript, and PHP using XAMPP. It allows users to order meals online and book tables, while the admin can manage orders and reservations through a simple backend.",
    video: `${BASE_URL}assets/videos/yummy.mp4`,
    repoFrontend: 'https://github.com/ayeshlakshan35/YummyFeelz.git',
  },
  {
    id: 3,
    title: "LoanShield",
    description: "Developed a JavaFX-based application that evaluates loan eligibility and risk by collecting and analyzing user financial and personal data. Implemented object-oriented design principles to create a robust, user-friendly system that provides actionable insights for loan approval decisions.",
    video: `${BASE_URL}assets/videos/loanshield.mp4`,
    repoFrontend: 'https://github.com/kushanumayangana/LoanShield.git',
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const timerRef = useRef(null);
  const videoRef = useRef(null);



  const slides = projects.map((p) => ({ ...p }));



  const p = slides[index];
  const [projectSlideIndex, setProjectSlideIndex] = useState(0);

  // advance the inner project image (for projects that have imageList)
  const advanceProjectImage = () => {
    if (!p.imageList) return;
    setProjectSlideIndex((s) => (s + 1) % p.imageList.length);
  };

  useEffect(() => {
    // autoplay only for project images (right panel) when showing first project
    if (p.imageList && !isPaused) {
      timerRef.current = setInterval(advanceProjectImage, 3000);
      return () => clearInterval(timerRef.current);
    }
    // reset any previous video load error when switching projects
    setVideoError(false);
    // If the selected project has a video, control playback based on isPaused
    if (p.video && videoRef.current) {
      try {
        videoRef.current.currentTime = 0;
        if (!isPaused) {
          // play if not paused (autoplay may be blocked unless muted)
          const playProm = videoRef.current.play();
          if (playProm && playProm.catch) playProm.catch(() => {});
        } else {
          videoRef.current.pause();
        }
      } catch (e) {
        // ignore errors (autoplay policies may block play())
      }
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [p, isPaused]);



  return (
    <main className="relative text-white min-h-screen py-20 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0a0e1a 0%, #0f1724 50%, #000000 100%)'
    }}>
      <AnimatedBackground />
      <div className="relative z-10">
      <section className="max-w-6xl mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: project selector and details */}
          <aside className="animate-fade-up">
            <h3 className="text-2xl font-extrabold mb-4">Projects</h3>

            <div className="space-y-3 mb-6">
              {projects.map((proj, idx) => (
                <div key={proj.id}>
                  <button
                    onClick={() => {
                      // set the gallery index to this project and toggle the expanded panel
                      setIndex(idx);
                      setExpanded((e) => (e === idx ? null : idx));
                    }}
                    aria-expanded={expanded === idx}
                    className={`w-full text-left py-3 px-4 rounded-md font-medium transition-colors duration-200 ${
                      index === idx
                        ? "bg-emerald-400 text-black"
                        : "bg-gray-800 text-gray-300"
                    }`}
                  >
                    <div className="font-semibold">{proj.title}</div>
                    <div className="text-sm text-gray-400">{proj.subtitle}</div>
                  </button>

                  {/* Details panel shown inline directly below the clicked project */}
                  {expanded === idx && (
                    <div className="mt-3 bg-[#0b0f13] p-6 rounded-md border border-gray-800 animate-accordion-open">
                      <h4 className="text-xl font-semibold mb-2">
                        {proj.title}
                      </h4>
                      <p className="text-gray-300 mb-3 text-sm">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {(proj.tech || []).map((t) => (
                          <span
                            key={t}
                            className="text-sm text-emerald-400 bg-gray-900/30 px-3 py-1 rounded"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      {/* GitHub links (Backend / Frontend) */}
                      {(proj.repoBackend || proj.repoFrontend) && (
                        <div className="mt-4 flex flex-wrap gap-3">
                          {proj.repoBackend && (
                            <a
                              href={proj.repoBackend}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-gray-900/30 text-emerald-400 px-3 py-1 rounded text-sm hover:bg-emerald-400 hover:text-black transition repo-link-focus"
                            >
                              Backend
                            </a>
                          )}

                          {proj.repoFrontend && (
                            <a
                              href={proj.repoFrontend}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-gray-900/30 text-emerald-400 px-3 py-1 rounded text-sm hover:bg-emerald-400 hover:text-black transition repo-link-focus"
                            >
                              Frontend
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </aside>

          {/* Right: image preview with arrows */}
          <div className="relative flex items-center justify-center">
            {/* image container: no extra frame/padding so image fills the card */}
            <div
              className="w-full md:max-w-none mx-auto"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {p.imageList ? (
                // larger container with a higher cap so the image is much larger on desktop
                <div className="w-full overflow-hidden rounded-md flex items-center justify-center animate-fade-swap">
                  <img
                    src={p.imageList[projectSlideIndex]}
                    alt={`${p.title} ${projectSlideIndex + 1}`}
                    className="w-full h-auto max-w-[95vw] max-h-[calc(100vh-200px)] object-contain"
                  />
                </div>
              ) : p.video && !videoError ? (
                <div className="w-full overflow-hidden rounded-md animate-fade-swap">
                  <video
                    key={p.id}
                    ref={videoRef}
                    playsInline
                    muted
                    loop
                    autoPlay
                    controls
                    preload="auto"
                    onError={() => setVideoError(true)}
                    onLoadedData={() => setVideoError(false)}
                    className="w-full h-auto max-w-[95vw] max-h-[calc(100vh-200px)] object-contain bg-black"
                  >
                    <source src={p.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="w-full overflow-hidden rounded-md animate-fade-swap">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-auto max-w-[95vw] max-h-[calc(100vh-200px)] object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
}
