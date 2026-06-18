'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { databaseExpertise } from '@/lib/data'
import {
  Table2, Gauge, ShieldCheck, Building2, Layers, Code2, GitBranch
} from 'lucide-react'

const icons = [Table2, Gauge, ShieldCheck, Building2, Layers, Code2, GitBranch]

export default function DatabaseExpertise() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="database" className="py-20 lg:py-24 relative bg-[#121212] overflow-hidden border-t border-white/[0.04]">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#dc2626]/3 rounded-full blur-[150px] pointer-events-none" />

      {/* Side indicator */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex-col items-center hidden 2xl:flex z-20">
        <span className="text-6xl font-black text-white/5 tracking-tighter">03</span>
        <div className="w-px h-24 bg-white/8 my-6" />
        <span className="text-white/15 text-[10px] font-bold tracking-[0.4em] -rotate-90 origin-center whitespace-nowrap mt-16">
          DATABASE
        </span>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12 2xl:pl-32 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Headers & Tags */}
          <div className="lg:w-1/3 shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-6 h-[2px] bg-[#dc2626]" />
              <span className="text-[#dc2626] text-[10px] font-bold tracking-widest uppercase font-mono-custom">
                Specialization
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-5"
            >
              Database <span className="gradient-text-red">Expertise</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#94a3b8] text-sm leading-relaxed mb-8"
            >
              Strong command of relational and non-relational database design — from schema normalization through query optimization and scalable multi-tenant architectures.
            </motion.p>

            {/* Tag strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Raw SQL'].map((db) => (
                <span
                  key={db}
                  className="px-3 py-1.5 rounded-md text-[10px] font-bold border border-[#dc2626]/20 bg-[#dc2626]/5 text-red-400 font-mono-custom"
                >
                  {db}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Compact List */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 pt-2">
            {databaseExpertise.map((item, i) => {
              const Icon = icons[i % icons.length]
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="flex gap-4 group"
                >
                  <div className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center bg-white/[0.03] border border-white/[0.08] group-hover:bg-[#dc2626]/10 group-hover:border-[#dc2626]/30 transition-all duration-300">
                    <Icon size={16} className="text-[#94a3b8] group-hover:text-[#dc2626] transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1.5 group-hover:text-[#dc2626] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#64748b] text-xs leading-relaxed">
                      {item.detail}
                    </p>
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
