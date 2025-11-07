import React from 'react'
import reactLogo from '../assets/react.svg'

export default function Home() {
  return (
    <main className="bg-[#0f1724] text-white">
      <section id="home" className="max-w-6xl mx-auto px-6 lg:px-0 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Intro */}
          <div className="lg:w-1/2 w-full">
            <p className="text-sm text-gray-300 mb-4">Software Developer</p>

            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Hello I&apos;m
              <span className="block text-5xl sm:text-6xl text-emerald-400">Ayesha Lakshan</span>
            </h2>

            <p className="mt-6 text-gray-300 max-w-xl">
              I excel at crafting elegant digital experiences and
              I am proficient in various programming languages and
              technologies.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2 border border-emerald-400 rounded-full text-emerald-400 hover:bg-emerald-900/30"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 2v14" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 10l4-4 4 4" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                DOWNLOAD CV
              </a>

              <div className="flex items-center gap-3">
                {/* simple social icons */}
                <a className="w-8 h-8 rounded-full border border-emerald-400 flex items-center justify-center text-emerald-400" href="#" aria-label="github">GH</a>
                <a className="w-8 h-8 rounded-full border border-emerald-400 flex items-center justify-center text-emerald-400" href="#" aria-label="linkedin">in</a>
                <a className="w-8 h-8 rounded-full border border-emerald-400 flex items-center justify-center text-emerald-400" href="#" aria-label="twitter">tw</a>
              </div>
            </div>

            {/* Stats row (desktop) */}
            <div className="mt-12 hidden md:flex items-start gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold">12</div>
                <div className="text-sm text-gray-300">Years of experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">26</div>
                <div className="text-sm text-gray-300">Projects completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">8</div>
                <div className="text-sm text-gray-300">Technologies mastered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">498</div>
                <div className="text-sm text-gray-300">Code commits</div>
              </div>
            </div>
          </div>

          {/* Right: Portrait with dashed ring */}
          <div className="lg:w-1/2 w-full flex justify-end">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72">
              {/* Static portrait (keeps image from rotating) */}
              <div className="absolute inset-0 flex items-center justify-center p-3">
                <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">
                  <img src={reactLogo} alt="portrait" className="w-3/4 h-3/4 object-cover" />
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
  )
}
