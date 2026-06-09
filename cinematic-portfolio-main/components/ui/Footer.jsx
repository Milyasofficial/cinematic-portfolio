'use client'

import { Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  const socials = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:ilyasahmad5524@gmail.com', label: 'Email' }
  ]

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black text-white mb-2">M ilyas</h3>
            <p className="text-gray-400 text-sm">Building exceptional digital experiences from Pakistan</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition">Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition">App Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition">Consulting</a></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-bold text-white mb-4">Let's Build</h4>
            <p className="text-gray-400 text-sm mb-4">Ready to start your next project?</p>
            <button className="w-full px-4 py-2 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social links */}
            <div className="flex gap-4">
              {socials.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-slate-900 hover:bg-amber-500 text-gray-400 hover:text-black rounded-lg transition"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center md:text-right">
              © 2024 M ilyas. All rights reserved. Built with passion from Pakistan.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
