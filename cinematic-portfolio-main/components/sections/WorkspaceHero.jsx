'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function WorkspaceHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Hero text */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-amber-500 font-semibold text-sm tracking-widest uppercase">
                  Pakistani Developer
                </p>
                <h1 className="text-6xl lg:text-7xl font-black text-white leading-tight">
                  M ilyas
                </h1>
                <p className="text-xl text-gray-300 font-light">
                  Crafting High-Performance Web & Mobile Applications
                </p>
              </div>

              <div className="prose prose-invert max-w-lg">
                <p className="text-gray-400 text-base leading-relaxed">
                  Full-stack developer specializing in modern web technologies. I build scalable, beautiful applications that solve real problems.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-3 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-amber-500/50 hover:shadow-2xl">
                  View My Work
                </button>
                <button className="px-8 py-3 border-2 border-amber-500 text-amber-500 font-bold rounded-lg hover:bg-amber-500 hover:text-black transition-all duration-300">
                  Get In Touch
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
                <div>
                  <div className="text-2xl font-bold text-amber-500">50+</div>
                  <div className="text-sm text-gray-400">Projects Done</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-500">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-500">100%</div>
                  <div className="text-sm text-gray-400">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Workspace image */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl opacity-20 blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One-r7C7GgXz8oL0dzvjpKiJAee6SWCcyq.png"
                  alt="M ilyas at workspace"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce">
          <p className="text-sm font-medium">Scroll to explore</p>
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  )
}
