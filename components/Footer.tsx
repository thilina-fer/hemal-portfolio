'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { profile } from '@/lib/data'

const socials = [
  { label: 'GitHub', href: profile.github, icon: FaGithub },
  { label: 'LinkedIn', href: profile.linkedin, icon: FaLinkedinIn },
]

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#121212] pt-8 pb-4">
      {/* Container */}
      <div className="mx-3 sm:mx-6 lg:mx-8 rounded-[2.5rem] overflow-hidden relative min-h-[380px] lg:min-h-[460px] flex flex-col justify-end px-6 sm:px-12 lg:px-20 pb-0 shadow-2xl">

        {/* Background + overlays */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-[#121212] z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/90 to-transparent z-0" />
        {/* Cyan tint */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(220,38,38,0.08),transparent)] z-0" />

        {/* Social icons */}
        <div className="relative z-10 w-full flex justify-center mb-8 lg:mb-12">
          <div className="flex flex-col items-center gap-6">
            {/* Tagline */}
            <p className="text-[#94a3b8] text-sm font-medium tracking-wide text-center">
              Associate Software Engineer · Full-Stack · Database Architect
            </p>

            <div className="flex items-center gap-8">
              {socials.map(({ label, href, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white/60 hover:text-[#dc2626] transition-all duration-300"
                  title={label}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>

            <p className="text-[#334155] text-xs tracking-widest font-mono-custom">
              Built with Next.js · &copy; {new Date().getFullYear()} Nipun Theekshana Hemal
            </p>
          </div>
        </div>

        {/* Massive name text */}
        <div className="relative z-10 w-full flex justify-center translate-y-5 sm:translate-y-8 lg:translate-y-14">
          <h2
            className="text-[15vw] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white/70 to-[#121212] tracking-tighter select-none"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.04)' }}
          >
            HEMAL
          </h2>
        </div>
      </div>
    </footer>
  )
}
