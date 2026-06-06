'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { MotionConfig } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Respect reduced-motion: no smooth-scroll hijack for those users.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true })

    // One clock drives both systems so ScrollTrigger reads the lerped
    // position — this is what kills the parallax stutter.
    lenis.on('scroll', ScrollTrigger.update)
    const onTick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(onTick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(onTick)
      lenis.destroy()
    }
  }, [])

  // reducedMotion="user" makes every Framer transform animation fall back to
  // opacity for people who ask for less motion, site-wide.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
