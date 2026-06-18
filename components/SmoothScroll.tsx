'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css' // Important for basic styling to prevent layout shift

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // Adjust smoothness (lower = smoother/slower, higher = snappier)
      wheelMultiplier: 1, // Adjust scroll speed
      autoRaf: true, // Lenis handles requestAnimationFrame internally in newer versions
    })

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
