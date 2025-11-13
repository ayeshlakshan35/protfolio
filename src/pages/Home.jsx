import React from "react";
import profile from "../assets/profile.jpg";

export default function Home() {
  return (
    <main className="bg-[#0f1724] text-white min-h-screen">
      <section id="home" className="max-w-6xl mx-auto px-6 lg:px-0 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Intro */}
          <div className="lg:w-1/2 w-full">
            <p className="text-sm text-gray-300 mb-4">DevOps Engineer</p>

            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Hello I&apos;m
              <span className="block text-5xl sm:text-6xl text-emerald-400">
                Ayesha Lakshan
              </span>
            </h2>

            <p className="mt-6 text-gray-300 max-w-xl">
              BICT undergraduate passionate about DevOps, cloud computing, and
              building secure, automated systems. Experienced in Java,
              JavaScript, and databases, and exploring Linux, Docker, and Azure.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2 border border-emerald-400 rounded-full text-emerald-400 hover:bg-emerald-900/30"
              >
                {/* Small portrait used as an icon inside the button. Put your photo at src/assets/portrait.jpg */}
                <img
                  src={profile}
                  alt="portrait icon"
                  className="w-4 h-4 rounded-full object-cover"
                />
                DOWNLOAD CV
              </a>

              <div className="flex items-center gap-3">
                  {/* simple social icons (SVG logos) */}
                  <a
                    className="w-8 h-8 rounded-full border border-emerald-400 flex items-center justify-center text-emerald-400"
                    href="https://github.com/ayeshlakshan35"
                    aria-label="github"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden>
                      <path d="M12 .5C5.73.5.75 5.48.75 11.77c0 4.94 3.2 9.12 7.64 10.59.56.1.76-.24.76-.53 0-.26-.01-1.12-.02-2.03-3.1.67-3.75-1.49-3.75-1.49-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.55 1.18 3.17.9.1-.71.38-1.18.69-1.45-2.47-.28-5.07-1.24-5.07-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.12 1.15a10.8 10.8 0 012.84-.38c.96 0 1.94.13 2.84.38 2.17-1.45 3.12-1.15 3.12-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.29-2.6 5.24-5.08 5.51.39.34.73 1.02.73 2.06 0 1.49-.01 2.69-.01 3.06 0 .29.2.64.77.53 4.44-1.47 7.64-5.65 7.64-10.59C23.25 5.48 18.27.5 12 .5z" />
                    </svg>
                  </a>

                  <a
                    className="w-8 h-8 rounded-full border border-emerald-400 flex items-center justify-center text-emerald-400"
                    href="https://www.linkedin.com/in/ayesh-lakshan-217408333/"
                    aria-label="linkedin"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden>
                      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.25h5v15H0v-15zM8 8.25h4.8v2.05h.07c.67-1.27 2.3-2.6 4.73-2.6C23.2 7.7 24 11 24 14.9V23.25h-5v-7.8c0-1.86-.03-4.25-2.59-4.25-2.6 0-3 2.05-3 4.14V23.25H8V8.25z" />
                    </svg>
                  </a>

                  <a
                    className="w-8 h-8 rounded-full border border-emerald-400 flex items-center justify-center text-emerald-400"
                    href="mailto:ayeshalakshan00@gmail.com"
                    aria-label="Email"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" aria-hidden>
                      <path
                        d="M3 5.5c0-.83.67-1.5 1.5-1.5h15c.83 0 1.5.67 1.5 1.5V18.5a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 18.5V5.5zm1.8.5l7.2 4.8 7.2-4.8H4.8zm15.4 1.4l-5.93 3.96a2 2 0 01-2.14 0L6.2 7.4v10.1h14V7.4z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
              </div>
            </div>

          </div>

          {/* Right: Portrait with dashed ring */}
          <div className="lg:w-1/2 w-full flex justify-end">
            <div className="relative w-100 h-100 sm:w-100 sm:h-100portrait-container">
              {/* Static portrait (keeps image from rotating) */}
              <div className="absolute inset-0 flex items-center justify-center p-3">
                <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">
                  {/* Main hero portrait - fill the circular container and crop to circle */}
                  <img
                    src={profile}
                    alt="portrait"
                    className="w-full h-full object-cover block"
                  />
                </div>
              </div>

              {/* Rotating dashed ring (separate element so only ring rotates) */}
              <div className="absolute inset-0 rounded-full pointer-events-none">
                <div className="w-full h-full rounded-full border-4 border-dashed border-emerald-400 ring-rotate" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
