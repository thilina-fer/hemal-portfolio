'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { experience } from '@/lib/data'
import { Briefcase, CheckCircle2 } from 'lucide-react'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-24 lg:py-32 relative bg-[#121212] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_50%,rgba(220,38,38,0.04),transparent)] pointer-events-none" />

      {/* Side indicator */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex-col items-center hidden 2xl:flex z-20">
        <span className="text-6xl font-black text-white/5 tracking-tighter">04</span>
        <div className="w-px h-24 bg-white/8 my-6" />
        <span className="text-white/15 text-[10px] font-bold tracking-[0.4em] -rotate-90 origin-center whitespace-nowrap mt-16">
          EXPERIENCE
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
            Career
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-14"
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#dc2626]/40 via-[#dc2626]/20 to-transparent hidden sm:block" />

          <div className="space-y-10 sm:space-y-12">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="relative flex flex-col sm:flex-row gap-6 sm:gap-10"
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center shrink-0 w-10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 z-10 ${
                    job.current
                      ? 'border-[#dc2626] bg-[#dc2626]/15 shadow-[0_0_20px_rgba(220,38,38,0.3)]'
                      : 'border-[#dc2626]/30 bg-[#dc2626]/5'
                  }`}>
                    <Briefcase size={16} className={job.current ? 'text-[#dc2626]' : 'text-[#dc2626]/60'} />
                  </div>
                  {job.current && (
                    <motion.div
                      animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute w-10 h-10 rounded-full border border-[#dc2626]/30"
                    />
                  )}
                </div>

                {/* Content card */}
                <div className="flex-1 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#dc2626]/20 hover:bg-[#dc2626]/[0.02] transition-all duration-300 group">

                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight mb-1">
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-[#dc2626] font-semibold text-sm">{job.org}</span>
                        {job.current && (
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                            Active
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-[#475569] text-xs font-semibold tracking-wide border border-white/8 rounded-full px-3 py-1 w-fit font-mono-custom shrink-0">
                      {job.period}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5">
                    {job.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 size={14} className="text-[#dc2626]/60 mt-0.5 shrink-0 group-hover:text-[#dc2626] transition-colors" />
                        <span className="text-[#94a3b8] text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
