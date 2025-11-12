import React from 'react'

const services = [
  { id: 1, title: 'Web Development', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.' },
  { id: 2, title: 'UI/UX Design', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.' },
  { id: 3, title: 'Logo Design', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.' },
  { id: 4, title: 'SEO', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.' },
]

export default function Services() {
  return (
    <main className="bg-[#0f1724] text-white min-h-screen py-20">
      <section className="max-w-6xl mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((s) => (
            <article key={s.id} className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 border-b border-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/20 hover:border-emerald-400/50 rounded-md cursor-pointer">
              <div className="shrink-0 w-12">
                <div className="text-3xl md:text-4xl font-mono text-emerald-400 transition-transform duration-300 hover:scale-110">{String(s.id).padStart(2, '0')}</div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-extrabold mb-2">{s.title}</h3>
                <p className="text-gray-300 mb-4 max-w-xl">{s.desc}</p>
                <div className="text-sm text-emerald-400">Html 5, Css 3, Javascript</div>
              </div>

              <div className="mt-2 md:mt-0">
                <button className="w-12 h-12 rounded-full bg-white/8 flex items-center justify-center border border-gray-700 hover:bg-emerald-400 hover:text-black transition-all duration-300 hover:scale-110 hover:rotate-45">
                  <span className="text-xl">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
