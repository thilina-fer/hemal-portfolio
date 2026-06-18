'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Mail, FileText } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { profile } from '@/lib/data'

const roles = [
  'Associate Software Engineer',
  'Full-Stack Developer',
  'Backend Engineer',
  'Database Architect',
]

function Typewriter() {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typingSpeed = isDeleting ? 25 : 65

    const timer = setTimeout(() => {
      setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)))

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, roleIndex])

  return (
    <span className="text-sm sm:text-base md:text-lg text-[#dc2626] font-medium tracking-[0.12em] uppercase drop-shadow-md inline-block min-h-[28px] font-mono-custom">
      {text}
      <span className="animate-pulse border-r-2 border-[#dc2626] ml-0.5" />
    </span>
  )
}

// Terminal decoration snippet removed as requested

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#121212]">

      {/* ── Layered background with Image ── */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-[#121212]/80" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(220,38,38,0.12),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(99,102,241,0.07),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#121212] to-transparent" />

      {/* ── Ambient orbs ── */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#dc2626]/5 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none animate-float-delayed" />

      {/* ── Terminal decoration removed ── */}

      {/* ── Hero Content ── */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 sm:px-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center max-w-3xl text-center mt-20 xl:mt-0">

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#dc2626]/20 bg-[#dc2626]/5 backdrop-blur-md text-[#dc2626] text-xs font-medium mb-6 tracking-wide"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            Available for new opportunities
          </motion.div>

          {/* Name */}
          <div className="overflow-hidden mb-2 w-full">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-none"
            >
              Nipun Hemal
            </motion.h1>
          </div>

          {/* Typewriter role */}
          <div className="overflow-hidden mb-6 w-full">
            <motion.div
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <Typewriter />
            </motion.div>
          </div>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-[#94a3b8] text-sm sm:text-base leading-relaxed mb-8 max-w-lg"
          >
            {profile.summary}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <motion.button
              id="cta-contact"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold rounded-full text-sm tracking-wide transition-colors shadow-[0_0_30px_rgba(220,38,38,0.35)] border border-[#dc2626]/50"
            >
              <Mail size={14} />
              Contact Me
            </motion.button>

            <motion.a
              id="cta-resume"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-6 py-2.5 border border-[#dc2626]/30 bg-[#dc2626]/5 hover:bg-[#dc2626]/12 backdrop-blur-md text-white font-semibold rounded-full text-sm tracking-wide transition-all"
            >
              <FileText size={14} />
              View Resume
            </motion.a>

            <motion.a
              id="cta-github"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-6 py-2.5 border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-semibold rounded-full text-sm tracking-wide transition-all"
            >
              <FaGithub size={14} />
              GitHub
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/25 text-[10px] tracking-[0.3em] uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-white/25" />
        </motion.div>
      </motion.div>
    </section>
  )
}
