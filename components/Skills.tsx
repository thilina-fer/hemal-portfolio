'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

// Tech stack with Devicon CDN URLs
const row1 = [
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
  { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
  { name: 'Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg' },
]

const row2 = [
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
  { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg' },
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
  { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg' },
  { name: 'Traefik', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/traefik/traefik-original.svg' },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-24 lg:py-32 relative bg-[#121212] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.04),transparent_60%)] pointer-events-none" />

      {/* Side indicator */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex-col items-center hidden 2xl:flex z-20">
        <span className="text-6xl font-black text-white/5 tracking-tighter">02</span>
        <div className="w-px h-24 bg-white/8 my-6" />
        <span className="text-white/15 text-[10px] font-bold tracking-[0.4em] -rotate-90 origin-center whitespace-nowrap mt-16">
          SKILLS
        </span>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12 2xl:pl-32 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-[#dc2626]" />
          <span className="text-[#dc2626] text-xs font-semibold tracking-widest uppercase font-mono-custom">
            Tech Stack
          </span>
          <div className="w-8 h-[2px] bg-[#dc2626]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4 text-center"
        >
          Skills &amp; <span className="gradient-text-red">Technologies</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#94a3b8] text-base sm:text-lg mb-20 max-w-2xl mx-auto text-center"
        >
          A full-spectrum view of the languages, frameworks, databases, and tools I work with to build production-grade systems.
        </motion.p>
      </div>

      {/* Infinite Marquee Rows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-full relative flex flex-col gap-6"
      >
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none" />
        
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none" />

        {/* Row 1 (Scrolling Left) */}
        <div className="flex overflow-hidden group">
          <div className="flex w-[200%] animate-marquee">
            {[...row1, ...row1].map((tech, idx) => (
              <div
                key={`row1-${idx}`}
                className="flex flex-col items-center justify-center gap-3 min-w-[120px] sm:min-w-[150px] p-4 group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-300 cursor-default"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/[0.02] border border-white/[0.05] rounded-2xl flex items-center justify-center hover:scale-110 hover:border-[#dc2626]/30 hover:bg-[#dc2626]/5 hover:shadow-[0_0_20px_rgba(220,38,38,0.15)] transition-all duration-300">
                  <Image src={tech.icon} alt={tech.name} width={40} height={40} className="object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                </div>
                <span className="text-xs font-semibold text-[#64748b] tracking-wider uppercase">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (Scrolling Right) */}
        <div className="flex overflow-hidden group">
          <div className="flex w-[200%] animate-marquee-reverse">
            {[...row2, ...row2].map((tech, idx) => (
              <div
                key={`row2-${idx}`}
                className="flex flex-col items-center justify-center gap-3 min-w-[120px] sm:min-w-[150px] p-4 group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-300 cursor-default"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/[0.02] border border-white/[0.05] rounded-2xl flex items-center justify-center hover:scale-110 hover:border-[#dc2626]/30 hover:bg-[#dc2626]/5 hover:shadow-[0_0_20px_rgba(220,38,38,0.15)] transition-all duration-300">
                  <Image src={tech.icon} alt={tech.name} width={40} height={40} className="object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                </div>
                <span className="text-xs font-semibold text-[#64748b] tracking-wider uppercase">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
