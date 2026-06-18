'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { projects } from '@/lib/data'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { GitFork, ExternalLink, ArrowRight, AlertTriangle } from 'lucide-react'
import Image from 'next/image'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeIndex, setActiveIndex] = useState(0)

  const activeProject = projects[activeIndex]

  return (
    <section id="projects" className="py-24 lg:py-32 relative overflow-hidden bg-[#121212]">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_30%,rgba(99,102,241,0.05),transparent)] pointer-events-none" />

      {/* Side indicator */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex-col items-center hidden 2xl:flex z-20">
        <span className="text-6xl font-black text-white/5 tracking-tighter">05</span>
        <div className="w-px h-24 bg-white/8 my-6" />
        <span className="text-white/15 text-[10px] font-bold tracking-[0.4em] -rotate-90 origin-center whitespace-nowrap mt-20">
          PROJECTS
        </span>
      </div>

      <div ref={ref} className="max-w-[1300px] mx-auto px-6 lg:px-12 2xl:pl-32 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-[#dc2626]" />
          <span className="text-[#dc2626] text-xs font-semibold tracking-widest uppercase font-mono-custom">
            Portfolio
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row sm:items-end gap-4 mb-10"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          {/* TODO notice badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/25 bg-amber-500/5 text-amber-400 text-xs font-semibold mb-1">
            <AlertTriangle size={12} />
            Real projects coming soon — replace TODO entries in lib/data.ts
          </div>
        </motion.div>

        {/* Main showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-full flex flex-col lg:flex-row lg:h-[600px] rounded-[2rem] overflow-hidden border border-white/[0.06] bg-[#1e1e1e] shadow-2xl shadow-black/50"
        >
          {/* Background image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id + '-bg'}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 z-0"
            >
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover opacity-40"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/85 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent lg:hidden" />
            </motion.div>
          </AnimatePresence>

          {/* Left: project details */}
          <div className="relative z-10 flex-1 p-6 sm:p-12 pt-32 lg:pt-12 flex flex-col justify-end lg:justify-center min-h-[480px] lg:min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="max-w-xl"
              >
                <div className={`text-sm font-bold tracking-widest uppercase mb-3 ${activeProject.theme} font-mono-custom`}>
                  Project {activeProject.number}
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3 leading-tight">
                  {activeProject.title}
                </h3>

                <p className="text-base text-[#dc2626] font-medium mb-3">
                  {activeProject.tag}
                </p>

                <p className="text-sm text-[#94a3b8] leading-relaxed mb-6 max-w-lg">
                  {activeProject.description}
                </p>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {activeProject.stack.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105 active:scale-95 ${activeProject.btnTheme}`}
                  >
                    <ExternalLink size={15} />
                    Explore Project
                  </a>
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-105 active:scale-95"
                  >
                    <GitFork size={15} />
                    Source Code
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: project list */}
          <div className="relative z-20 w-full lg:w-[380px] bg-[#121212]/85 backdrop-blur-2xl border-t lg:border-t-0 lg:border-l border-white/[0.05] p-6 sm:p-8 flex flex-col h-[320px] lg:h-full">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">All Projects</h4>

            <div className="flex flex-col gap-3 overflow-y-auto custom-scrollbar pr-1">
              {projects.map((project, idx) => {
                const isActive = activeIndex === idx
                return (
                  <button
                    key={project.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`group w-full text-left flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 ${
                      isActive
                        ? 'bg-[#dc2626]/10 border-[#dc2626]/25 shadow-lg'
                        : 'bg-white/[0.03] border-transparent hover:bg-white/[0.05] hover:border-white/8'
                    }`}
                  >
                    {/* Thumbnail */}
                    <div className={`relative w-14 h-14 shrink-0 rounded-xl overflow-hidden transition-all duration-300 ${
                      isActive ? 'ring-2 ring-[#dc2626]/50' : 'opacity-60 group-hover:opacity-100'
                    }`}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h5 className={`font-bold text-sm truncate transition-colors ${isActive ? 'text-white' : 'text-[#94a3b8] group-hover:text-white'}`}>
                        {project.title}
                      </h5>
                      <p className="text-xs text-[#475569] truncate mt-0.5">{project.tag}</p>
                      <div className={`flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider mt-1.5 transition-colors ${
                        isActive ? project.theme : 'text-[#334155] group-hover:text-[#475569]'
                      }`}>
                        Details <ArrowRight size={9} />
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
