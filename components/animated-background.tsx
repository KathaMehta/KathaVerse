"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
}

const AnimatedBackground = ({ variant = "particles" }: { variant?: "particles" | "waves" | "gradient" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)
  const isDarkMode = theme === "dark"

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        const { width, height } = canvas.getBoundingClientRect()
        setDimensions({ width, height })
        canvas.width = width
        canvas.height = height

        // Reinitialize particles when resizing
        if (variant === "particles") {
          initParticles()
        }
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [variant])

  useEffect(() => {
    if (canvasRef.current && dimensions.width > 0 && dimensions.height > 0) {
      if (variant === "particles") {
        initParticles()
        animateParticles()
      } else if (variant === "waves") {
        animateWaves()
      } else if (variant === "gradient") {
        animateGradient()
      }
    }

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [dimensions, variant, theme])

  const initParticles = () => {
    const particles: Particle[] = []
    const particleCount = Math.min(Math.floor(dimensions.width * 0.05), 100)

    const colors = isDarkMode
      ? ["#a62648", "#b76e79", "#e6e6fa", "#fff9d9", "#ffffff"]
      : ["#a62648", "#b76e79", "#e6e6fa", "#fff9d9", "#14213d"]

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    particlesRef.current = particles
  }

  const animateParticles = () => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, dimensions.width, dimensions.height)

    particlesRef.current.forEach((particle) => {
      // Update position
      particle.x += particle.speedX
      particle.y += particle.speedY

      // Bounce off edges
      if (particle.x < 0 || particle.x > dimensions.width) {
        particle.speedX *= -1
      }

      if (particle.y < 0 || particle.y > dimensions.height) {
        particle.speedY *= -1
      }

      // Draw particle
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = particle.color
      ctx.globalAlpha = particle.opacity
      ctx.fill()
    })

    animationRef.current = requestAnimationFrame(animateParticles)
  }

  const animateWaves = () => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let time = 0

    const draw = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      // Draw multiple wave layers
      drawWaveLayer(ctx, time, dimensions.height * 0.8, 0.02, isDarkMode ? "#a62648" : "#a62648", 0.1)
      drawWaveLayer(ctx, time * 0.8, dimensions.height * 0.85, 0.03, isDarkMode ? "#b76e79" : "#b76e79", 0.08)
      drawWaveLayer(ctx, time * 1.2, dimensions.height * 0.9, 0.015, isDarkMode ? "#e6e6fa" : "#fff9d9", 0.05)

      time += 0.005
      animationRef.current = requestAnimationFrame(draw)
    }

    draw()
  }

  const drawWaveLayer = (
    ctx: CanvasRenderingContext2D,
    time: number,
    baseHeight: number,
    frequency: number,
    color: string,
    opacity: number,
  ) => {
    ctx.beginPath()
    ctx.moveTo(0, dimensions.height)

    for (let x = 0; x < dimensions.width; x++) {
      const y = baseHeight + Math.sin(x * frequency + time) * 20
      ctx.lineTo(x, y)
    }

    ctx.lineTo(dimensions.width, dimensions.height)
    ctx.closePath()

    ctx.fillStyle = color
    ctx.globalAlpha = opacity
    ctx.fill()
  }

  const animateGradient = () => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let time = 0

    const draw = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      // Create animated gradient
      const gradient = ctx.createLinearGradient(
        dimensions.width * (0.5 + 0.3 * Math.sin(time * 0.2)),
        dimensions.height * (0.5 + 0.2 * Math.cos(time * 0.3)),
        dimensions.width * (0.5 + 0.3 * Math.cos(time * 0.3)),
        dimensions.height * (0.5 + 0.2 * Math.sin(time * 0.2)),
      )

      if (isDarkMode) {
        gradient.addColorStop(0, "rgba(20, 33, 61, 0.6)")
        gradient.addColorStop(0.3, "rgba(166, 38, 72, 0.3)")
        gradient.addColorStop(0.6, "rgba(183, 110, 121, 0.2)")
        gradient.addColorStop(1, "rgba(20, 33, 61, 0.6)")
      } else {
        gradient.addColorStop(0, "rgba(255, 246, 248, 0.6)")
        gradient.addColorStop(0.3, "rgba(166, 38, 72, 0.1)")
        gradient.addColorStop(0.6, "rgba(230, 230, 250, 0.2)")
        gradient.addColorStop(1, "rgba(255, 249, 217, 0.3)")
      }

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, dimensions.width, dimensions.height)

      time += 0.01
      animationRef.current = requestAnimationFrame(draw)
    }

    draw()
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  )
}

export default AnimatedBackground