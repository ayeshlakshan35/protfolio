import React from 'react'
import AnimatedBackground from '../Components/AnimatedBackground'

const services = [
  {
    id: 1,
    title: 'Kubernetes Troubleshooting',
    desc: 'I troubleshoot Kubernetes pod errors, deployment failures, service issues, ingress routing problems, and YAML configuration errors to keep applications running smoothly.',
    meta: 'Technologies: Kubernetes, kubectl, Minikube, NGINX Ingress Controller',
  },
  {
    id: 2,
    title: 'Docker & Containerization',
    desc: 'I containerize web applications, fix Docker image and container issues, and create reliable Docker-based development and deployment workflows.',
    meta: 'Tools: Docker, Kubernetes, Docker Hub, Linux, YAML',
  },
  {
    id: 3,
    title: 'CI/CD Pipeline Automation',
    desc: 'I build automated CI/CD pipelines for code integration, Docker image builds, testing, quality checks, and Kubernetes deployments.',
    meta: 'Tools: GitHub Actions, Jenkins, GitLab CI, Docker, Kubernetes,SonarQube',
  },
  {
    id: 4,
    title: 'Cloud & DevOps',
    desc: 'I help deploy and manage scalable cloud-based application environments using DevOps practices, automation, and infrastructure tools.',
    meta: 'Technologies: AWS, Azure, GCP, Terraform, Ansible',
  },
  {
    id: 5,
    title: 'Backend Development',
    desc: 'I build secure and scalable backend systems that power modern web and mobile applications.',
    meta: 'Technologies: Node.js, Express, MongoDB, MySQL, REST APIs, GraphQL',
  },
  {
    id: 6,
    title: 'Web & Mobile Development',
    desc: 'I develop responsive web and cross-platform mobile applications with modern user interfaces and smooth user experiences.',
    meta: 'Technologies: React, React Native, TypeScript, Tailwind CSS, firebase',
  },
]

export default function Services() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

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
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="w-12 h-12 rounded-full bg-white/8 flex items-center justify-center border border-gray-700 hover:bg-emerald-400 hover:text-black transition-all duration-300 hover:scale-110 hover:rotate-45"
                  aria-label="Go to contact"
                >
                  <span className="text-xl">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
      </div>
    </main>
  )
}
