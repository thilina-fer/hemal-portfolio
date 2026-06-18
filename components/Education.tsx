'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { education } from '@/lib/data'
import { GraduationCap, BookOpen, Monitor } from 'lucide-react'

const educationIcons = [GraduationCap, BookOpen, Monitor]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="py-24 lg:py-32 relative bg-[#121212] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_50%,rgba(99,102,241,0.05),transparent)] pointer-events-none" />

      {/* Side indicator */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex-col items-center hidden 2xl:flex z-20">
        <span className="text-6xl font-black text-white/5 tracking-tighter">06</span>
        <div className="w-px h-24 bg-white/8 my-6" />
        <span className="text-white/15 text-[10px] font-bold tracking-[0.4em] -rotate-90 origin-center whitespace-nowrap mt-16">
          EDUCATION
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
            Background
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-14"
        >
          Education &amp; <span className="gradient-text">Learning</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-indigo-500/20 to-transparent hidden sm:block" />

          <div className="space-y-8 sm:space-y-10">
            {education.map((item, i) => {
              const Icon = educationIcons[i % educationIcons.length]
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                  className="relative flex flex-col sm:flex-row gap-6 sm:gap-10"
                >
                  {/* Dot */}
                  <div className="hidden sm:flex flex-col items-center shrink-0 w-10">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 z-10 ${
                      item.current
                        ? 'border-indigo-500 bg-indigo-500/15 shadow-[0_0_20px_rgba(99,102,241,0.3)]'
                        : 'border-indigo-500/30 bg-indigo-500/5'
                    }`}>
                      <Icon size={16} className={item.current ? 'text-indigo-400' : 'text-indigo-400/50'} />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-indigo-500/20 hover:bg-indigo-500/[0.02] transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h3 className="text-white font-bold text-base leading-tight mb-1">
                          {item.title}
                        </h3>
                        {item.org && (
                          <span className="text-[#dc2626] text-sm font-medium">{item.org}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {item.current && (
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                            In Progress
                          </span>
                        )}
                        <span className="text-[#475569] text-xs font-semibold border border-white/8 rounded-full px-3 py-1 font-mono-custom">
                          {item.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
