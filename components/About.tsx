'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { profile } from '@/lib/data'

function CountUp({ target, suffix, trigger }: { target: number; suffix: string; trigger: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return
    let start = 0
    const duration = 1800
    const totalSteps = Math.ceil(duration / 16)
    const increment = target / totalSteps
    let frame = 0
    const timer = setInterval(() => {
      frame++
      start += increment
      if (frame >= totalSteps || start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [trigger, target])

  return <>{count}{suffix}</>
}

const stats = [
  { value: 3, suffix: '+', label: 'Years Freelancing' },
  { value: 1, suffix: '', label: 'Internship' },
  { value: 8, suffix: '+', label: 'Tech Stacks' },
]

export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={sectionRef} className="relative py-28 sm:py-36 bg-[#121212] overflow-hidden">

      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#dc2626]/4 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/4 blur-[120px] rounded-full pointer-events-none" />

      {/* Side number indicator */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex-col items-center hidden 2xl:flex z-20">
        <span className="text-6xl font-black text-white/5 tracking-tighter">01</span>
        <div className="w-px h-24 bg-white/8 my-6" />
        <span className="text-white/15 text-[10px] font-bold tracking-[0.4em] -rotate-90 origin-center whitespace-nowrap mt-16">
          ABOUT
        </span>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 2xl:pl-32 relative z-10 w-full">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-[#dc2626]" />
          <span className="text-[#dc2626] text-xs font-semibold tracking-widest uppercase font-mono-custom">
            Introduce
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">

          {/* Left: text */}
          <div className="flex-1 max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#94a3b8] text-base sm:text-lg leading-relaxed mb-6"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 mt-2"
            >
              <div className="w-5 h-[2px] bg-[#dc2626]/50" />
              <a
                href={`mailto:${profile.email}`}
                className="text-[#94a3b8] text-sm font-medium tracking-wide hover:text-[#dc2626] transition-colors font-mono-custom"
              >
                {profile.email}
              </a>
            </motion.div>
          </div>

          {/* Right: stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-row lg:flex-col gap-8 lg:gap-12 shrink-0"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="relative"
              >
                <div className="w-4 h-px bg-[#dc2626]/50 mb-3" />
                <div className="text-5xl font-light text-white mb-1 flex items-baseline tabular-nums">
                  <CountUp target={s.value} suffix="" trigger={isInView} />
                  <span className="text-[#dc2626] text-3xl font-bold ml-1">{s.suffix}</span>
                </div>
                <div className="text-[#475569] text-[10px] font-bold tracking-[0.2em] uppercase">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
