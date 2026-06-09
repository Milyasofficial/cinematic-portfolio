'use client'

import { useState } from 'react'
import Navbar from '@/components/ui/Navbar'
import WorkspaceHero from '@/components/sections/WorkspaceHero'
import TerminalSkills from '@/components/sections/TerminalSkills'
import WorkflowCycle from '@/components/sections/WorkflowCycle'
import ServicesGrid from '@/components/sections/ServicesGrid'
import ProjectPortfolio from '@/components/sections/ProjectPortfolio'
import ExperienceTree from '@/components/sections/ExperienceTree'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <WorkspaceHero />
        <TerminalSkills />
        <WorkflowCycle />
        <ServicesGrid />
        <ProjectPortfolio />
        <ExperienceTree />
        <Footer />
      </main>
    </div>
  )
}
