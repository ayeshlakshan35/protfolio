import React from 'react'

export default function Skills() {
  const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind']
  return (
    <section id="skills" className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <li key={s} className="px-3 py-1 bg-white shadow-sm rounded">{s}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
