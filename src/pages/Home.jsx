import React, { useEffect } from "react";
import profile from "../assets/profile.jpg";
import cvPdf from "../assets/ayesh.pdf";
import AnimatedBackground from "../Components/AnimatedBackground";

export default function Home() {
  const handleDownloadCV = () => {
    const a = document.createElement("a");
    a.href = cvPdf;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.click();
  };

  // Step-by-step looping letter animation controller
  useEffect(() => {
    const animateSequence = () => {
      // Get all letter elements
      const line1Letters = document.querySelectorAll(".letter-line1");
      const line2Letters = document.querySelectorAll(".letter-line2");

      // Step 1: Reset both lines to base colors
      line1Letters.forEach((letter) => {
        letter.style.color = "#e5e7eb"; // gray-200 base
      });
      line2Letters.forEach((letter) => {
        letter.style.color = "#00e6a8"; // green base
      });

      let delay = 0;

      // Step 2: Animate "Hello I'm" letters to green one by one
      line1Letters.forEach((letter, index) => {
        setTimeout(() => {
          letter.style.transition = "color 0.3s ease-in-out";
          letter.style.color = "#00e6a8"; // green
        }, delay);
        delay += 100; // 100ms between each letter
      });

      // Step 3: After line1 completes, animate "Ayesha Lakshan" to white
      const line1Duration = line1Letters.length * 100;
      line2Letters.forEach((letter, index) => {
        setTimeout(() => {
          letter.style.transition = "color 0.3s ease-in-out";
          letter.style.color = "#ffffff"; // white
        }, line1Duration + index * 100);
      });

      // Step 4: Calculate total duration, wait, then restart
      const totalDuration = line1Duration + line2Letters.length * 100 + 300; // +300ms for last letter animation
      const pauseDuration = 1800; // 1.8s pause before restart

      setTimeout(() => {
        animateSequence(); // Loop: restart the entire sequence
      }, totalDuration + pauseDuration);
    };

    // Start the animation loop
    animateSequence();
  }, []);

  return (
    <main
      className="relative text-white min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a0e1a 0%, #0f1724 50%, #000000 100%)",
      }}
    >
      {/* Animated particle background */}
      <AnimatedBackground />

      {/* Content wrapper with relative positioning to appear above background */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <section id="home" className="max-w-6xl mx-auto px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Left: Intro */}
            <div className="lg:w-1/2 w-full">
              <p className="text-lg sm:text-xl font-semibold text-emerald-300 tracking-wide mb-5">
                DevOps Engineer
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                {/* Line 1: "Hello I'm" - animates to green first */}
                <span className="inline">
                  <span className="letter-line1 inline-block">H</span>
                  <span className="letter-line1 inline-block">e</span>
                  <span className="letter-line1 inline-block">l</span>
                  <span className="letter-line1 inline-block">l</span>
                  <span className="letter-line1 inline-block">o</span>
                  <span className="letter-line1 inline-block">&nbsp;</span>
                  <span className="letter-line1 inline-block">I</span>
                  <span className="letter-line1 inline-block">'</span>
                  <span className="letter-line1 inline-block">m</span>
                </span>
                {/* Line 2: "Ayesha Lakshan" - animates to white after line 1 */}
                <span className="block text-4xl sm:text-5xl font-semibold">
                  <span className="letter-line2 inline-block">A</span>
                  <span className="letter-line2 inline-block">y</span>
                  <span className="letter-line2 inline-block">e</span>
                  <span className="letter-line2 inline-block">s</span>
                  <span className="letter-line2 inline-block">h</span>
                  <span className="letter-line2 inline-block">a</span>
                  <span className="letter-line2 inline-block">&nbsp;</span>
                  <span className="letter-line2 inline-block">L</span>
                  <span className="letter-line2 inline-block">a</span>
                  <span className="letter-line2 inline-block">k</span>
                  <span className="letter-line2 inline-block">s</span>
                  <span className="letter-line2 inline-block">h</span>
                  <span className="letter-line2 inline-block">a</span>
                  <span className="letter-line2 inline-block">n</span>
                </span>
              </h2>

              <p className="mt-6 text-gray-300 max-w-xl">
                BICT undergraduate passionate about DevOps, cloud computing, and
                building secure, automated systems. Experienced in Java,
                JavaScript, and databases, and exploring Linux, Docker, and
                Azure.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <button
                  onClick={handleDownloadCV}
                  className="inline-flex items-center gap-2 px-5 py-2 border border-emerald-400 rounded-full text-emerald-400 hover:bg-emerald-900/30 cursor-pointer"
                >
                  <img
                    src={profile}
                    alt="portrait icon"
                    className="w-4 h-4 rounded-full object-cover"
                  />
                  DOWNLOAD CV
                </button>

                <div className="flex items-center gap-3">
                  {/* GitHub */}
                  <a
                    className="w-8 h-8 rounded-full border border-emerald-400 flex items-center justify-center text-emerald-400"
                    href="https://github.com/ayeshlakshan35"
                    aria-label="github"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 fill-current"
                      aria-hidden
                    >
                      <path d="M12 .5C5.73.5.75 5.48.75 11.77c0 4.94 3.2 9.12 7.64 10.59.56.1.76-.24.76-.53 0-.26-.01-1.12-.02-2.03-3.1.67-3.75-1.49-3.75-1.49-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.55 1.18 3.17.9.1-.71.38-1.18.69-1.45-2.47-.28-5.07-1.24-5.07-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.12 1.15a10.8 10.8 0 012.84-.38c.96 0 1.94.13 2.84.38 2.17-1.45 3.12-1.15 3.12-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.29-2.6 5.24-5.08 5.51.39.34.73 1.02.73 2.06 0 1.49-.01 2.69-.01 3.06 0 .29.2.64.77.53 4.44-1.47 7.64-5.65 7.64-10.59C23.25 5.48 18.27.5 12 .5z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    className="w-8 h-8 rounded-full border border-emerald-400 flex items-center justify-center text-emerald-400"
                    href="https://www.linkedin.com/in/ayesh-lakshan-217408333/"
                    aria-label="linkedin"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 fill-current"
                      aria-hidden
                    >
                      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.25h5v15H0v-15zM8 8.25h4.8v2.05h.07c.67-1.27 2.3-2.6 4.73-2.6C23.2 7.7 24 11 24 14.9V23.25h-5v-7.8c0-1.86-.03-4.25-2.59-4.25-2.6 0-3 2.05-3 4.14V23.25H8V8.25z" />
                    </svg>
                  </a>

                  {/* Medium (NEW) */}
                  <a
                    className="w-8 h-8 rounded-full border border-emerald-400 flex items-center justify-center text-emerald-400"
                    href="https://medium.com/@ayeshalakshan00"
                    aria-label="medium"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1043.63 592.71"
                      className="w-4 h-4 fill-current"
                      aria-hidden
                    >
                      <path d="M588.67 296.36c0 163.75-131.92 296.35-294.33 296.35C131.92 592.71 0 460.11 0 296.36 0 132.61 131.92 0 294.34 0c162.41 0 294.33 132.61 294.33 296.36zM915.3 296.36c0 154.09-65.96 279.05-147.16 279.05-81.19 0-147.15-124.96-147.15-279.05S686.95 17.3 768.14 17.3c81.2 0 147.16 124.96 147.16 279.06zM1043.63 296.36c0 138.03-23.48 249.92-52.45 249.92-28.97 0-52.45-111.89-52.45-249.92S962.21 46.44 991.18 46.44c28.97 0 52.45 111.89 52.45 249.92z" />
                    </svg>
                  </a>

                  {/* Email */}
                  <a
                    className="w-8 h-8 rounded-full border border-emerald-400 flex items-center justify-center text-emerald-400"
                    href="mailto:ayeshalakshan00@gmail.com"
                    aria-label="Email"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                      aria-hidden
                    >
                      <path
                        d="M3 5.5c0-.83.67-1.5 1.5-1.5h15c.83 0 1.5.67 1.5 1.5V18.5a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 18.5V5.5zm1.8.5l7.2 4.8 7.2-4.8H4.8zm15.4 1.4l-5.93 3.96a2 2 0 01-2.14 0L6.2 7.4v10.1h14V7.4z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Portrait */}
            <div className="lg:w-1/2 w-full flex justify-end">
              <div className="relative w-100 h-100 sm:w-100 sm:h-100portrait-container">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">
                    <img
                      src={profile}
                      alt="portrait"
                      className="w-full h-full object-cover block scale-125"
                    />
                  </div>
                </div>

                <div className="absolute inset-0 rounded-full pointer-events-none">
                  <div className="w-full h-full rounded-full border-4 border-dashed border-emerald-400 ring-rotate" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
