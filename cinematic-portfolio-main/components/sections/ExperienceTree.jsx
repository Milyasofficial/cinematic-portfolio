'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronRight } from 'lucide-react'

export default function ExperienceTree() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedId, setExpandedId] = useState(null)
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

  const experience = [
    {
      id: 1,
      role: 'Senior Full Stack Developer',
      company: 'Tech Innovations Pakistan',
      period: '2022 - Present',
      details: 'Leading enterprise projects, mentoring junior developers, and architecting scalable solutions with modern tech stack.'
    },
    {
      id: 2,
      role: 'Full Stack Developer',
      company: 'Digital Solutions Hub',
      period: '2020 - 2022',
      details: 'Developed responsive web applications and implemented CI/CD pipelines with Docker and GitHub Actions.'
    },
    {
      id: 3,
      role: 'Junior Developer',
      company: 'StartUp Tech Pakistan',
      period: '2019 - 2020',
      details: 'Built frontend features and contributed to backend development, learned agile methodologies.'
    }
  ]

  return (
    <section ref={ref} className="py-24 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Experience Journey
          </h2>
          <p className="text-gray-400 text-lg">
            5+ years building exceptional digital products
          </p>
        </div>

        {/* Timeline */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="space-y-4">
            {experience.map((item, index) => (
              <div
                key={item.id}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="w-full text-left"
                >
                  <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-gray-700 rounded-xl p-6 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-lg font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{item.role}</h3>
                            <p className="text-amber-500 font-semibold text-sm">{item.company}</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400 text-sm font-mono">{item.period}</p>
                        <ChevronRight
                          size={20}
                          className={`text-amber-500 transition-transform mt-2 ml-auto ${
                            expandedId === item.id ? 'rotate-90' : ''
                          }`}
                        />
                      </div>
                    </div>

                    {/* Expandable content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedId === item.id ? 'max-h-32 opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-gray-300 text-sm leading-relaxed">{item.details}</p>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
