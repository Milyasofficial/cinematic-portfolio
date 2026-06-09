'use client'

import { useEffect, useRef, useState } from 'react'
import { Globe, Smartphone, Palette, Server, Database, Zap, Cloud, TrendingUp } from 'lucide-react'

export default function ServicesGrid() {
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

  const services = [
    { icon: Globe, title: 'Web Development', desc: 'Modern, responsive web apps', color: 'from-blue-500 to-cyan-500' },
    { icon: Smartphone, title: 'App Development', desc: 'Native & cross-platform apps', color: 'from-purple-500 to-pink-500' },
    { icon: Palette, title: 'UI/UX Design', desc: 'Beautiful user interfaces', color: 'from-pink-500 to-rose-500' },
    { icon: Server, title: 'Backend Dev', desc: 'Scalable server architecture', color: 'from-green-500 to-emerald-500' },
    { icon: Database, title: 'Database Design', desc: 'SQL & NoSQL expertise', color: 'from-yellow-500 to-orange-500' },
    { icon: Zap, title: 'API Integration', desc: 'Third-party APIs & webhooks', color: 'from-red-500 to-orange-500' },
    { icon: Cloud, title: 'Cloud Services', desc: 'AWS & cloud infrastructure', color: 'from-indigo-500 to-blue-500' },
    { icon: TrendingUp, title: 'Performance', desc: 'SEO & optimization', color: 'from-teal-500 to-cyan-500' }
  ]

  return (
    <section ref={ref} className="py-24 px-4 bg-black relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            All Digital Services
          </h2>
          <p className="text-gray-400 text-lg">
            Complete solutions for your digital needs
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="group h-full bg-gradient-to-br from-slate-900 to-slate-950 border border-gray-700 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer">
                  <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${service.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="inline-block text-amber-500 text-sm font-semibold">Learn more →</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
