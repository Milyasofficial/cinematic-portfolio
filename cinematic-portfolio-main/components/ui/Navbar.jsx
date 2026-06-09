'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-orange-900/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white hover:text-orange-500 transition-colors">
          M ilyas
        </Link>
        
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#skills" className="text-gray-300 hover:text-orange-500 transition-colors text-sm font-medium">Skills</a>
          <a href="#services" className="text-gray-300 hover:text-orange-500 transition-colors text-sm font-medium">Services</a>
          <a href="#projects" className="text-gray-300 hover:text-orange-500 transition-colors text-sm font-medium">Projects</a>
          <a href="#experience" className="text-gray-300 hover:text-orange-500 transition-colors text-sm font-medium">Experience</a>
        </nav>

        {/* Contact button */}
        <a href="mailto:ilyasahmad5524@gmail.com" className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-colors text-sm">
          Contact
        </a>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden text-orange-500 text-2xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-orange-900/20 py-4 px-6 flex flex-col gap-4">
          <a href="#skills" className="text-gray-300 hover:text-orange-500 transition-colors" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#services" className="text-gray-300 hover:text-orange-500 transition-colors" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#projects" className="text-gray-300 hover:text-orange-500 transition-colors" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#experience" className="text-gray-300 hover:text-orange-500 transition-colors" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="mailto:ilyasahmad5524@gmail.com" className="text-orange-500 font-bold">Contact</a>
        </div>
      )}
    </header>
  )
}
