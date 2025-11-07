import React, { useState } from 'react'
import reactLogo from '../assets/react.svg'

const projects = [
  {
    id: 1,
    title: 'Frontend Project',
    subtitle: 'Creative Home Simplify Your Furniture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.',
    tech: ['Html 5', 'Css 3', 'Javascript'],
    image: reactLogo,
  },
  {
    id: 2,
    title: 'Dashboard Project',
    subtitle: 'Admin Dashboard UI kit',
    description:
      'A dashboard project with responsive widgets and charts.',
    tech: ['React', 'Tailwind', 'ChartJS'],
    image: reactLogo,
  },
]

export default function Projects() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length)
  const next = () => setIndex((i) => (i + 1) % projects.length)

  const p = projects[index]

  return (
    <main className="bg-[#0f1724] text-white min-h-screen py-20">
      <section className="max-w-6xl mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: project text */}
          <div className="animate-fade-up">
            <div className="text-6xl font-extrabold text-transparent stroke-white/20 leading-none mb-6">{String(p.id).padStart(2, '0')}</div>

            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{p.title}</h2>
            <p className="text-gray-300 mb-4 max-w-lg">{p.description}</p>

            <div className="flex items-center gap-3 text-sm text-emerald-400 font-medium mb-6">
              {p.tech.map((t) => (
                <span key={t} className="inline-block mr-2">{t}</span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#0b0f13] border border-gray-800 flex items-center justify-center text-gray-200 hover:bg-emerald-900/20"
                aria-label="live-preview"
              >
                ↗
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#0b0f13] border border-gray-800 flex items-center justify-center text-gray-200 hover:bg-emerald-900/20"
                aria-label="github"
              >
                ⎇
              </a>
            </div>
          </div>

          {/* Right: image preview with arrows */}
          <div className="relative flex items-center justify-center">
            <div className="bg-[#0b0f13] p-6 rounded-md border border-gray-800 shadow-sm w-full max-w-md">
              <img src={p.image} alt={p.title} className="w-full h-56 object-cover rounded-md" />
            </div>

            <div className="absolute right-4 bottom-4 flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 bg-emerald-400 text-black rounded flex items-center justify-center font-bold"
                aria-label="previous"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="w-10 h-10 bg-emerald-400 text-black rounded flex items-center justify-center font-bold"
                aria-label="next"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
