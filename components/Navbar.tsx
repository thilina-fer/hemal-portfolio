'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, FileText } from 'lucide-react'
import { navLinks, sectionIds } from '@/lib/constants'
import { profile } from '@/lib/data'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 80) {
      setIsScrolled(true)
      const previous = scrollY.getPrevious() ?? 0
      if (latest > previous) setIsOpen(false)
    } else {
      setIsScrolled(false)
    }
  })

  const handleScroll = useCallback(() => {
    const scrollPos = window.scrollY + 120
    for (const id of [...sectionIds].reverse()) {
      const el = document.getElementById(id)
      if (el && el.offsetTop <= scrollPos) {
        setActiveSection(id)
        break
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <motion.div
      id="navbar-container"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[97%] max-w-5xl min-w-[300px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <nav
        className={`relative overflow-hidden backdrop-blur-2xl border border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 ${isOpen ? 'rounded-3xl' : 'rounded-full'}`}
        style={{
          backgroundColor: 'rgba(18, 18, 18, 0.92)',
          opacity: (isScrolled && !isHovered && !isOpen) ? 0.5 : 1,
        }}
      >
        <div className="px-4 md:px-6">
          <div className="flex items-center justify-between h-14">

            {/* Logo — removed as requested */}

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`relative px-3 lg:px-4 py-4 text-[10px] lg:text-xs font-bold tracking-[0.12em] uppercase transition-all duration-300 ${
                      isActive ? 'text-white' : 'text-[#475569] hover:text-[#94a3b8]'
                    }`}
                  >
                    {isActive && (
                      <>
                        <motion.div
                          layoutId="navTopLine"
                          className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-[#dc2626] rounded-b-md shadow-[0_0_10px_#dc2626,0_0_20px_#dc2626]"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                        <motion.div
                          layoutId="navGlow"
                          className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-10 bg-[#dc2626]/10 blur-[10px] rounded-full pointer-events-none"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      </>
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Resume button + mobile toggle */}
            <div className="flex items-center gap-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#dc2626]/10 border border-[#dc2626]/30 text-[#dc2626] text-xs font-bold tracking-wide hover:bg-[#dc2626]/20 hover:border-[#dc2626]/60 transition-all duration-300"
              >
                <FileText size={12} />
                Resume
              </a>

              <button
                id="mobile-menu-btn"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg text-[#94a3b8] hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden border-t border-white/[0.06]"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => scrollToSection(link.href)}
                    className={`block w-full text-center px-4 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-colors ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-[#dc2626] bg-[#dc2626]/10 border border-[#dc2626]/20'
                        : 'text-[#64748b] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-xs font-bold tracking-wider text-[#dc2626] bg-[#dc2626]/10 border border-[#dc2626]/20 mt-2"
                >
                  <FileText size={14} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  )
}
