import React, { useState } from 'react'

const experiences = [
  { period: '2022 - Present', title: 'Full Stack Developer', company: 'Tech Solutions Inc.', bullets: ['Worked on large-scale web apps', 'Led frontend architecture'] },
  { period: 'Summer 2021', title: 'Front-End Developer Intern', company: 'Web Design Studio', bullets: ['Built marketing landing pages', 'Improved accessibility'] },
  { period: '2020 - 2021', title: 'Freelance Web Developer', company: 'E-commerce Startup', bullets: ['Built storefronts', 'Maintained client sites'] },
  { period: '2019 - 2020', title: 'Teaching Assistant', company: 'Tech Academy', bullets: ['Led workshops', 'Tutored junior developers'] },
]

const education = [
  { period: '2023', title: 'Full Stack Web Development Bootcamp', company: 'Online Course Platform', bullets: ['Intensive project-based curriculum', 'Deployed full-stack apps'] },
  { period: '2022', title: 'Front-end Track', company: 'Codecademy', bullets: ['HTML/CSS/JS deep dives', 'React fundamentals'] },
  { period: '2020 - 2021', title: 'Programming Course', company: 'Online Course', bullets: ['Data structures basics', 'Algorithm practice'] },
  { period: '2019', title: 'Certified Web Developer', company: 'Tech Institute', bullets: ['Certificate program', 'Capstone project'] },
]

const skills = [
  { id: 'html', label: 'HTML' },
  { id: 'css', label: 'CSS' },
  { id: 'js', label: 'JS' },
  { id: 'react', label: 'React' },
  { id: 'node', label: 'Node' },
  { id: 'tw', label: 'Tailwind' },
  { id: 'npm', label: 'NodeJS' },
  { id: 'figma', label: 'Figma' },
]

export default function Resume() {
  const [active, setActive] = useState('Experience')

  const items = active === 'Experience' ? experiences : education

  return (
    <main className="bg-[#0f1724] text-white min-h-screen py-16">
      <section className="max-w-6xl mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column: vertical menu */}
          <aside className="md:col-span-1">
            <h3 className="text-2xl font-extrabold mb-4">Why hire me?</h3>
            <p className="text-gray-300 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="space-y-3">
              <button
                onClick={() => setActive('Experience')}
                className={`w-full text-left py-3 px-4 rounded-md font-medium ${active === 'Experience' ? 'bg-emerald-400 text-black' : 'bg-gray-800 text-gray-300'}`}
              >
                Experience
              </button>
              <button
                onClick={() => setActive('Education')}
                className={`w-full text-left py-3 px-4 rounded-md font-medium ${active === 'Education' ? 'bg-emerald-400 text-black' : 'bg-gray-800 text-gray-300'}`}
              >
                Education
              </button>
              <button
                onClick={() => setActive('Skills')}
                className={`w-full text-left py-3 px-4 rounded-md font-medium ${active === 'Skills' ? 'bg-emerald-400 text-black' : 'bg-gray-800 text-gray-300'}`}
              >
                Skills
              </button>
              <button
                onClick={() => setActive('About')}
                className={`w-full text-left py-3 px-4 rounded-md font-medium ${active === 'About' ? 'bg-emerald-400 text-black' : 'bg-gray-800 text-gray-300'}`}
              >
                About me
              </button>
            </div>
          </aside>

          {/* Right column: Experience content */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-extrabold mb-4">
              {active === 'Experience' ? 'My experience' : active === 'Education' ? 'My education' : 'My skills'}
            </h3>
            <p className="text-gray-300 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.</p>

            {active === 'About' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#0b0f13] p-6 rounded-md border border-gray-800 animate-fade-up">
                  <h4 className="text-lg font-semibold mb-3">About me</h4>
                  <p className="text-gray-300 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.</p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li><span className="text-gray-400">Name</span>: <span className="font-medium">Luke Coleman</span></li>
                    <li><span className="text-gray-400">Experience</span>: <span className="font-medium">12+ Years</span></li>
                    <li><span className="text-gray-400">Nationality</span>: <span className="font-medium">American</span></li>
                    <li><span className="text-gray-400">Freelance</span>: <span className="font-medium">Available</span></li>
                  </ul>
                </div>

                <div className="bg-[#0b0f13] p-6 rounded-md border border-gray-800 animate-fade-up" style={{ animationDelay: '120ms' }}>
                  <h4 className="text-lg font-semibold mb-3">Contact</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li><span className="text-gray-400">Phone</span>: <span className="font-medium">(+44) 321 654 876</span></li>
                    <li><span className="text-gray-400">Skype</span>: <span className="font-medium">luke.01</span></li>
                    <li><span className="text-gray-400">Email</span>: <span className="font-medium">luke.01@gmail.com</span></li>
                    <li><span className="text-gray-400">Languages</span>: <span className="font-medium">English, Spanish</span></li>
                  </ul>
                </div>
              </div>
            ) : active === 'Skills' ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {skills.map((s, i) => (
                  <div
                    key={s.id}
                    className="bg-[#0b0f13] h-24 rounded-md flex items-center justify-center text-xl text-gray-100 shadow-sm border border-gray-800 animate-fade-up"
                    style={{ animationDelay: `${i * 80}ms` }}
                    aria-label={s.label}
                  >
                    <span className="font-semibold">{s.label}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 scrollbar-green max-h-[60vh] overflow-auto pr-3">
                {items.map((exp, i) => (
                  <article
                    key={exp.title}
                    className="bg-[#0b0f13] p-5 rounded-md shadow-sm border border-gray-800 animate-fade-up"
                    style={{ animationDelay: `${i * 120}ms` }}
                  >
                    <div className="text-emerald-400 text-sm font-medium mb-2">{exp.period}</div>
                    <h4 className="text-lg font-semibold mb-1">{exp.title}</h4>
                    <div className="text-sm text-gray-400 mb-3">{exp.company}</div>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {exp.bullets.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1 text-emerald-400">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
