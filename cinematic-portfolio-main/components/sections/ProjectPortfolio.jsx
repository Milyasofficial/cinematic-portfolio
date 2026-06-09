'use client'

import { useEffect, useRef, useState } from 'react'
import { ExternalLink } from 'lucide-react'

export default function ProjectPortfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    }, { threshold: 0.2 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      desc: 'Full-stack shopping experience with payment integration',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/two-3N2ki24q8ht7xo8Mwpl0y4QRXUAAjB.png',
      status: 'Live'
    },
    {
      id: 2,
      title: 'Task Management App',
      desc: 'Real-time collaborative task management system',
      tech: ['React', 'Firebase', 'Tailwind', 'Real-time DB'],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/two-3N2ki24q8ht7xo8Mwpl0y4QRXUAAjB.png',
      status: 'Live'
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      desc: 'Real-time data visualization and business intelligence',
      tech: ['Next.js', 'PostgreSQL', 'Chart.js', 'Tailwind'],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/two-3N2ki24q8ht7xo8Mwpl0y4QRXUAAjB.png',
      status: 'Live'
    }
  ]

  return (
    <section ref={ref} className="py-24 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Latest work showcasing my expertise
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="group bg-black border border-gray-700 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300">
                {/* Project image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-amber-500/20 to-orange-500/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.desc}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-colors">
                      <ExternalLink size={16} />
                      View
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 font-bold rounded-lg hover:border-amber-500 hover:text-amber-500 transition-colors">
                      <span>{'<>'}</span>
                      Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
