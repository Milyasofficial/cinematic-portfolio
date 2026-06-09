'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function WorkflowCycle() {
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

  const steps = [
    { label: 'Build', description: 'Design & Develop', icon: '🏗️' },
    { label: 'Develop', description: 'Code & Test', icon: '💻' },
    { label: 'Deploy', description: 'Launch to Production', icon: '🚀' },
    { label: 'Repeat', description: 'Iterate & Improve', icon: '🔄' }
  ]

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            My Development Cycle
          </h2>
          <p className="text-gray-400 text-lg">
            A proven process for building exceptional products
          </p>
        </div>

        {/* Circular workflow */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <div className="relative w-full max-w-2xl mx-auto aspect-square">
            {/* Animated circle background */}
            <svg className="w-full h-full absolute inset-0" viewBox="0 0 400 400">
              <circle cx="200" cy="200" r="180" fill="none" stroke="url(#gradient)" strokeWidth="2" opacity="0.2" />
              <circle cx="200" cy="200" r="140" fill="none" stroke="url(#gradient)" strokeWidth="1" opacity="0.1" />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d97706" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
              </defs>
            </svg>

            {/* Steps */}
            {steps.map((step, index) => {
              const angle = (index * 360) / steps.length
              const radius = 140
              const x = 200 + radius * Math.cos((angle - 90) * Math.PI / 180)
              const y = 200 + radius * Math.sin((angle - 90) * Math.PI / 180)

              return (
                <div
                  key={index}
                  className="absolute w-20 h-20 transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    animation: `pulse 3s ease-in-out infinite`,
                    animationDelay: `${index * 0.75}s`
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group">
                    <div className="text-2xl">{step.icon}</div>
                    <div className="text-xs font-bold text-black text-center mt-1 group-hover:scale-110 transition-transform">
                      {step.label}
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Center circle */}
            <div className="absolute top-1/2 left-1/2 w-24 h-24 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full border-2 border-amber-500 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-black text-amber-500">BUILD</div>
                <div className="text-xs text-gray-400 mt-1">Repeat</div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="grid md:grid-cols-4 gap-6 mt-20">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-3">{step.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{step.label}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </section>
  )
}
