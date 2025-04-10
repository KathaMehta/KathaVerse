"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Shape {
  x: number
  y: number
  size: number
  rotation: number
  rotationSpeed: number
  type: "circle" | "square" | "triangle" | "diamond"
  color: string
  opacity: number
}

const GeometricBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const shapesRef = useRef<Shape[]>([])
  const animationRef = useRef<number>(0)
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const handleResize = () => {
      const { innerWidth, innerHeight } = window
      canvas.width = innerWidth
      canvas.height = innerHeight
      initShapes()
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  useEffect(() => {
    initShapes()
    animate()

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [theme])

  const initShapes = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const { width, height } = canvas
    const shapes: Shape[] = []
    const shapeCount = Math.min(Math.floor((width * height) / 40000), 20)

    const colors = isDarkMode
      ? ["#a62648", "#b76e79", "#e6e6fa", "#fff9d9"]
      : ["#a62648", "#b76e79", "#e6e6fa", "#fff9d9"]

    const types: ("circle" | "square" | "triangle" | "diamond")[] = ["circle", "square", "triangle", "diamond"]

    for (let i = 0; i < shapeCount; i++) {
      shapes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 30 + 20,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        type: types[Math.floor(Math.random() * types.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.15 + 0.05,
      })
    }

    shapesRef.current = shapes
  }

  const drawShape = (ctx: CanvasRenderingContext2D, shape: Shape) => {
    const { x, y, size, rotation, type, color, opacity } = shape

    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(rotation)
    ctx.globalAlpha = opacity
    ctx.fillStyle = color
    ctx.strokeStyle = color
    ctx.lineWidth = 1

    switch (type) {
      case "circle":
        ctx.beginPath()
        ctx.arc(0, 0, size, 0, Math.PI * 2)
        ctx.fill()
        break
      case "square":
        ctx.fillRect(-size / 2, -size / 2, size, size)
        break
      case "triangle":
        ctx.beginPath()
        ctx.moveTo(0, -size / 2)
        ctx.lineTo(size / 2, size / 2)
        ctx.lineTo(-size / 2, size / 2)
        ctx.closePath()
        ctx.fill()
        break
      case "diamond":
        ctx.beginPath()
        ctx.moveTo(0, -size / 2)
        ctx.lineTo(size / 2, 0)
        ctx.lineTo(0, size / 2)
        ctx.lineTo(-size / 2, 0)
        ctx.closePath()
        ctx.fill()
        break
    }

    ctx.restore()
  }

  const animate = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    shapesRef.current.forEach((shape) => {
      // Update rotation
      shape.rotation += shape.rotationSpeed

      // Draw shape
      drawShape(ctx, shape)
    })

    animationRef.current = requestAnimationFrame(animate)
  }

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" />
}

export default GeometricBackground