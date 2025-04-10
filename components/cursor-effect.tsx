"use client"

import { useEffect, useState } from "react"

interface CursorPosition {
  x: number
  y: number
}

interface SparkleProps {
  position: CursorPosition
  id: number
}

const Sparkle = ({ position, id }: SparkleProps) => {
  return (
    <div
      className="absolute pointer-events-none z-50"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
        animation: `sparkle 1s ease-in-out forwards`,
      }}
    >
      <div
        className="absolute"
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "#a62648",
          boxShadow: "0 0 10px 2px rgba(166, 38, 72, 0.5)",
          opacity: 0.8,
          transform: `rotate(${id * 45}deg)`,
        }}
      />
    </div>
  )
}

const CursorEffect = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [sparkles, setSparkles] = useState<{ position: CursorPosition; id: number }[]>([])
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      // Only add sparkles occasionally to avoid overwhelming the DOM
      if (Math.random() > 0.8 && isActive) {
        const newSparkle = {
          position: { x: e.clientX, y: e.clientY },
          id: Date.now(),
        }

        setSparkles((prev) => [...prev, newSparkle])

        // Remove sparkle after animation completes
        setTimeout(() => {
          setSparkles((prev) => prev.filter((sparkle) => sparkle.id !== newSparkle.id))
        }, 1000)
      }
    }

    const handleMouseDown = () => setIsActive(true)
    const handleMouseUp = () => setIsActive(false)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isActive])

  return (
    <>
      {sparkles.map((sparkle) => (
        <Sparkle key={sparkle.id} position={sparkle.position} id={sparkle.id} />
      ))}
      <div
        className="fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          backgroundColor: isActive ? "#fff" : "transparent",
          border: isActive ? "none" : "2px solid #a62648",
          transition: "width 0.2s, height 0.2s, background-color 0.2s, border 0.2s",
          width: isActive ? "24px" : "30px",
          height: isActive ? "24px" : "30px",
        }}
      />
    </>
  )
}

export default CursorEffect