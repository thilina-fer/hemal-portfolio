'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { currentlyExploring } from '@/lib/data'
import { Rocket, Cloud, Container } from 'lucide-react'

const icons = [Cloud, Container]

export default function CurrentlyExploring() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="exploring" className="py-16 lg:py-20 relative bg-[#121212] overflow-hidden">

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#dc2626]/20 to-transparent" />

      <div ref={ref} className="max-w-[1300px] mx-auto px-6 lg:px-12 2xl:pl-32 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 shrink-0"
          >
            <Rocket size={16} className="text-[#dc2626]" />
            <span className="text-[#dc2626] text-xs font-bold tracking-widest uppercase font-mono-custom whitespace-nowrap">
              Currently Exploring
            </span>
          </motion.div>

          {/* Dashed badges */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-3"
          >
            {currentlyExploring.map((topic, i) => {
              const Icon = icons[i % icons.length]
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="exploring-badge"
                >
                  <Icon size={13} className="text-[#dc2626] shrink-0" />
                  <span>{topic}</span>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
