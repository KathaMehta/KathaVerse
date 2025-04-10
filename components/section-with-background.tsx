"use client"

import type { ReactNode } from "react"
import AnimatedBackground from "./animated-background"

interface SectionWithBackgroundProps {
  children: ReactNode
  id: string
  className?: string
  variant?: "particles" | "waves" | "gradient"
}

const SectionWithBackground = ({ children, id, className = "", variant = "particles" }: SectionWithBackgroundProps) => {
  return (
    <section id={id} className={`relative ${className}`}>
      <AnimatedBackground variant={variant} />
      <div className="relative z-10">{children}</div>
    </section>
  )
}

export default SectionWithBackground