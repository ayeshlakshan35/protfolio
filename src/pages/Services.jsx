import React from 'react'
import { Link } from 'react-router-dom'
import AnimatedBackground from '../Components/AnimatedBackground'

const services = [
  {
    id: 1,
    title: 'Web Development',
    desc: 'I design and build responsive, high-performance websites using modern technologies to deliver smooth, engaging user experiences.',
    meta: 'Technologies: HTML5, CSS3, JavaScript, React',
  },
  {
    id: 2,
    title: 'UI/UX Design',
    desc: 'I craft intuitive and visually appealing interfaces that focus on usability and aesthetic balance, ensuring great user engagement.',
    meta: 'Tools: Figma',
  },
  {
    id: 3,
    title: 'Logo Design',
    desc: 'I create memorable and impactful logos that represent your brand identity with simplicity and creativity.',
    meta: 'Tools: Photoshop',
  },
  {
    id: 4,
    title: 'Mobile App Development',
    desc: 'I develop cross-platform mobile applications with smooth performance and modern interfaces to deliver seamless user experiences.',
    meta: 'Technologies: Flutter, React Native',
  },
  {
    id: 5,
    title: 'Backend Development',
    desc: 'I build secure and scalable backend systems that power modern web and mobile applications.',
    meta: 'Technologies: Node.js, Express, MongoDB, MySQL',
  },
  {
    id: 6,
    title: 'Cloud & DevOps',
    desc: 'I help automate deployment, improve scalability, and manage applications in the cloud efficiently.',
    meta: 'Technologies: Docker, GitHub Actions, Azure',
  },
]

export default function Services() {
  return (
    <main className="relative text-white min-h-screen py-20 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0a0e1a 0%, #0f1724 50%, #000000 100%)'
    }}>
      <AnimatedBackground />
      <div className="relative z-10">
      <section className="max-w-6xl mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((s) => (
            <article key={s.id} className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-800/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/20 hover:border-emerald-400/50 cursor-pointer">
              <div className="shrink-0 w-12">
                <div className="text-3xl md:text-4xl font-mono text-emerald-400 transition-transform duration-300 hover:scale-110">{String(s.id).padStart(2, '0')}</div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-extrabold mb-2">{s.title}</h3>
                <p className="text-gray-300 mb-4 max-w-xl">{s.desc}</p>
                <div className="text-sm text-emerald-400">{s.meta}</div>
              </div>

              <div className="mt-2 md:mt-0">
                <Link
                  to="/Contact"
                  className="w-12 h-12 rounded-full bg-white/8 flex items-center justify-center border border-gray-700 hover:bg-emerald-400 hover:text-black transition-all duration-300 hover:scale-110 hover:rotate-45"
                  aria-label="Hire me"
                >
                  <span className="text-xl">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      </div>
    </main>
  )
}
