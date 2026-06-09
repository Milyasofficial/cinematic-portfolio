'use client'

import { useEffect, useRef, useState } from 'react'

export default function TerminalSkills() {
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

  const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'HTML5/CSS3'],
    backend: ['Node.js', 'Express.js', 'Python', 'MongoDB', 'PostgreSQL', 'Firebase'],
    tools: ['Docker', 'AWS', 'GitHub', 'Figma', 'Linux', 'Webpack']
  }

  return (
    <section ref={ref} className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(90deg transparent 24%,rgba(168,85,247,.05) 25%,rgba(168,85,247,.05) 26%,transparent 27%,transparent 74%,rgba(168,85,247,.05) 75%,rgba(168,85,247,.05) 76%,transparent 77%,transparent),linear-gradient(0deg transparent 24%,rgba(168,85,247,.05) 25%,rgba(168,85,247,.05) 26%,transparent 27%,transparent 74%,rgba(168,85,247,.05) 75%,rgba(168,85,247,.05) 76%,transparent 77%,transparent)', backgroundSize: '50px 50px'}}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Technical Stack
          </h2>
          <p className="text-gray-400 text-lg">
            Languages, frameworks, and tools I master
          </p>
        </div>

        {/* Terminal-style skills */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-slate-950 border border-amber-500/20 rounded-xl overflow-hidden shadow-2xl">
            {/* Terminal header */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-4 border-b border-amber-500/20 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm font-mono">developer@milyas:~$</span>
            </div>

            {/* Terminal content */}
            <div className="p-8 font-mono text-sm">
              <div className="space-y-8">
                {/* Frontend */}
                <div className="space-y-3">
                  <div className="text-amber-500">
                    <span className="text-green-400">$</span> <span className="text-white">cat</span> <span className="text-blue-400">frontend-skills.js</span>
                  </div>
                  <div className="text-gray-300 leading-relaxed ml-4">
                    <div className="text-purple-400"><span>const</span> <span className="text-white">frontend</span> <span className="text-amber-500">=</span> <span className="text-yellow-600">[</span></div>
                    {skills.frontend.map((skill, i) => (
                      <div key={i} className="ml-8">
                        <span className="text-orange-400">{`'${skill}'`}</span><span className="text-amber-500">,</span>
                      </div>
                    ))}
                    <div className="text-yellow-600"><span>]</span></div>
                  </div>
                </div>

                {/* Backend */}
                <div className="space-y-3">
                  <div className="text-amber-500">
                    <span className="text-green-400">$</span> <span className="text-white">cat</span> <span className="text-blue-400">backend-skills.js</span>
                  </div>
                  <div className="text-gray-300 leading-relaxed ml-4">
                    <div className="text-purple-400"><span>const</span> <span className="text-white">backend</span> <span className="text-amber-500">=</span> <span className="text-yellow-600">[</span></div>
                    {skills.backend.map((skill, i) => (
                      <div key={i} className="ml-8">
                        <span className="text-orange-400">{`'${skill}'`}</span><span className="text-amber-500">,</span>
                      </div>
                    ))}
                    <div className="text-yellow-600"><span>]</span></div>
                  </div>
                </div>

                {/* Tools */}
                <div className="space-y-3">
                  <div className="text-amber-500">
                    <span className="text-green-400">$</span> <span className="text-white">cat</span> <span className="text-blue-400">tools-expertise.js</span>
                  </div>
                  <div className="text-gray-300 leading-relaxed ml-4">
                    <div className="text-purple-400"><span>const</span> <span className="text-white">tools</span> <span className="text-amber-500">=</span> <span className="text-yellow-600">[</span></div>
                    {skills.tools.map((skill, i) => (
                      <div key={i} className="ml-8">
                        <span className="text-orange-400">{`'${skill}'`}</span><span className="text-amber-500">,</span>
                      </div>
                    ))}
                    <div className="text-yellow-600"><span>]</span></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-gray-600 text-xs">
                // Last updated: June 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
