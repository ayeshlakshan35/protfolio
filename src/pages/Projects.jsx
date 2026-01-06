import React, { useState, useEffect, useRef } from "react";
import yummyVideo from "../assets/yummyfeelz/yummy.mp4";
import loanshieldVideo from "../assets/loanshield/loan_converted.mp4";
import onebloodVideo from "../assets/oneblodd/oneblood.mp4";

// Import OneBlood images
import oneblood1 from "../assets/oneblodd/20cdeef14bf04b05a8f3d6261e163b78.jpg";
import oneblood2 from "../assets/oneblodd/6db27e26722546b39b7ae7d473a6f08f.jpg";
import oneblood3 from "../assets/oneblodd/6e121f9638d44221a49c038b10609a28.jpg";
import oneblood4 from "../assets/oneblodd/6ebbdb4f3b634e209db43c5160521827.jpg";
import oneblood5 from "../assets/oneblodd/7e9de2392f06422d871a882e4802359a.jpg";
import oneblood6 from "../assets/oneblodd/80d5f4d562ba4be0bad797a81c4aa429.jpg";
import oneblood7 from "../assets/oneblodd/c64c54313cc4480489edbecb719f6fc1.jpg";
import oneblood8 from "../assets/oneblodd/d2e17234d946429c8e2f0c7460aceb83.jpg";
import oneblood9 from "../assets/oneblodd/e6b27364c1a54416989066ac89e9c087.jpg";

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
    video: onebloodVideo,
    repoBackend: 'https://github.com/ayeshlakshan35/OneBlood-Backend.git',
    repoFrontend: 'https://github.com/ayeshlakshan35/OneBlood-frontend.git',
  },
  {
    id: 2,
    title: "YummyFeelz",
    subtitle: "",
    description: "Yummy Feels is a restaurant website built with HTML, CSS, JavaScript, and PHP using XAMPP. It allows users to order meals online and book tables, while the admin can manage orders and reservations through a simple backend.",
    // demo video imported from src/assets
    video: yummyVideo,
    repoFrontend: 'https://github.com/ayeshlakshan35/YummyFeelz.git',
  },
  {
    id: 3,
    title: "LoanShield",
    description: "Developed a JavaFX-based application that evaluates loan eligibility and risk by collecting and analyzing user financial and personal data. Implemented object-oriented design principles to create a robust, user-friendly system that provides actionable insights for loan approval decisions.",
    video: loanshieldVideo,
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

  // images from assets/oneblodd
  const onebloodImages = [
    oneblood1,
    oneblood2,
    oneblood3,
    oneblood4,
    oneblood5,
    oneblood6,
    oneblood7,
    oneblood8,
    oneblood9,
  ];

  const slides = projects.map((p) => ({ ...p }));

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

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

  // reset inner slide index when switching projects
  useEffect(() => {
    setProjectSlideIndex(0);
  }, [index]);

  const prevClick = () => {
    if (p.imageList) {
      setProjectSlideIndex(
        (s) => (s - 1 + p.imageList.length) % p.imageList.length
      );
    } else {
      prev();
    }
  };

  const nextClick = () => {
    if (p.imageList) {
      setProjectSlideIndex((s) => (s + 1) % p.imageList.length);
    } else {
      next();
    }
  };

  return (
    <main className="bg-[#0f1724] text-white min-h-screen py-20">
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
    </main>
  );
}
