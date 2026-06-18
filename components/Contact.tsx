'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { profile } from '@/lib/data'
import { Mail, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const contactInfo = [
  {
    id: 'contact-email',
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    id: 'contact-phone',
    icon: Phone,
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
  },
  {
    id: 'contact-github',
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/NipunHemal',
    href: profile.github,
  },
  {
    id: 'contact-linkedin',
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    value: 'linkedin.com/in/nipun-theekshana-hemal',
    href: profile.linkedin,
  },
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [formState, setFormState] = useState<FormState>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) return

    setFormState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (res.ok) {
        setFormState('success')
        setName(''); setEmail(''); setMessage('')
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
    setTimeout(() => setFormState('idle'), 5000)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden bg-[#121212]">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(220,38,38,0.08),transparent_60%)] pointer-events-none" />

      {/* Side indicator */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex-col items-center hidden 2xl:flex z-20">
        <span className="text-6xl font-black text-white/5 tracking-tighter">07</span>
        <div className="w-px h-24 bg-white/8 my-6" />
        <span className="text-white/15 text-[10px] font-bold tracking-[0.4em] -rotate-90 origin-center whitespace-nowrap mt-16">
          CONTACT
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
            Get In Touch
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-3"
        >
          Let&apos;s <span className="gradient-text">Connect</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#94a3b8] text-base sm:text-lg mb-12 max-w-xl"
        >
          Open to full-time roles, freelance projects, and collaborations. Let&apos;s build something great together.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {contactInfo.map(({ id, icon: Icon, label, value, href }) => (
              <a
                key={id}
                id={id}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#dc2626]/30 hover:bg-[#dc2626]/[0.04] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-[#dc2626]/20 bg-[#dc2626]/5 group-hover:bg-[#dc2626]/15 group-hover:border-[#dc2626]/40 transition-all duration-300 shrink-0">
                  <Icon size={18} className="text-[#dc2626]" />
                </div>
                <div className="min-w-0">
                  <div className="text-[#475569] text-[10px] font-bold uppercase tracking-wider mb-0.5">{label}</div>
                  <div className="text-white text-sm font-medium truncate group-hover:text-[#dc2626] transition-colors font-mono-custom">
                    {value}
                  </div>
                </div>
              </a>
            ))}

            {/* Direct mailto fallback */}
            <p className="text-[#475569] text-xs pt-2 pl-1">
              Prefer email?{' '}
              <a
                href={`mailto:${profile.email}`}
                className="text-[#dc2626] hover:underline"
              >
                {profile.email}
              </a>
            </p>
          </motion.div>

          {/* Right: Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-[#94a3b8] text-xs font-semibold mb-2 uppercase tracking-wider">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/[0.08] text-white placeholder-[#334155] text-sm focus:outline-none focus:border-[#dc2626]/40 focus:bg-[#dc2626]/[0.04] transition-all"
                />
              </div>
              <div>
                <label htmlFor="contact-email-input" className="block text-[#94a3b8] text-xs font-semibold mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  id="contact-email-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/[0.08] text-white placeholder-[#334155] text-sm focus:outline-none focus:border-[#dc2626]/40 focus:bg-[#dc2626]/[0.04] transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-[#94a3b8] text-xs font-semibold mb-2 uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project or opportunity..."
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/[0.08] text-white placeholder-[#334155] text-sm focus:outline-none focus:border-[#dc2626]/40 focus:bg-[#dc2626]/[0.04] transition-all resize-none"
              />
            </div>

            {/* Status messages */}
            {formState === 'success' && (
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                <CheckCircle2 size={16} />
                Message sent! I&apos;ll get back to you soon.
              </div>
            )}
            {formState === 'error' && (
              <div className="flex items-center gap-2 text-red-400 text-sm font-medium">
                <AlertCircle size={16} />
                Something went wrong. Please try{' '}
                <a href={`mailto:${profile.email}`} className="underline">emailing directly</a>.
              </div>
            )}

            <button
              id="contact-submit"
              type="submit"
              disabled={formState === 'loading' || formState === 'success'}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.25)] hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={15} />
              {formState === 'loading' ? 'Sending…' : formState === 'success' ? 'Sent!' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
