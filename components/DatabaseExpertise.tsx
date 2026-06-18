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
    <section id="database" className="py-24 lg:py-32 relative bg-[#121212] overflow-hidden">

      {/* Cyan-heavy background treatment */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(220,38,38,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#dc2626]/3 rounded-full blur-[200px] pointer-events-none" />

      {/* Decorative top line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#dc2626]/30 to-transparent" />

      {/* Side indicator */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex-col items-center hidden 2xl:flex z-20">
        <span className="text-6xl font-black text-white/5 tracking-tighter">03</span>
        <div className="w-px h-24 bg-white/8 my-6" />
        <span className="text-white/15 text-[10px] font-bold tracking-[0.4em] -rotate-90 origin-center whitespace-nowrap mt-16">
          DATABASE
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
            Specialization
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white tracking-tight flex-shrink-0"
          >
            Database <span className="gradient-text-red">Expertise</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#94a3b8] text-base sm:text-lg max-w-xl pt-1"
          >
            Strong command of relational and non-relational database design — from schema normalization through 
            query optimization and scalable multi-tenant architectures.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {databaseExpertise.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="group relative p-6 rounded-2xl border border-[#dc2626]/12 bg-[#dc2626]/[0.03] hover:border-[#dc2626]/35 hover:bg-[#dc2626]/[0.07] transition-all duration-300 overflow-hidden cursor-default"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#dc2626]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#dc2626]/12 border border-[#dc2626]/20 mb-4 group-hover:bg-[#dc2626]/20 group-hover:border-[#dc2626]/40 transition-all duration-300">
                  <Icon size={18} className="text-[#dc2626]" />
                </div>

                {/* Number */}
                <div className="text-[#dc2626]/20 text-6xl font-black absolute top-4 right-5 select-none leading-none group-hover:text-[#dc2626]/30 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-sm mb-2 leading-snug relative z-10">
                  {item.title}
                </h3>

                {/* Detail */}
                <p className="text-[#94a3b8] text-xs leading-relaxed relative z-10">
                  {item.detail}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#dc2626]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom tag strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap gap-2 mt-10"
        >
          {['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Sequelize', 'Prisma', 'Raw SQL'].map((db) => (
            <span
              key={db}
              className="px-3 py-1.5 rounded-full text-[11px] font-semibold border border-[#dc2626]/25 bg-[#dc2626]/5 text-[#67e8f9] font-mono-custom"
            >
              {db}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
