"use client"

import { useState } from "react"
import { Sparkles } from "lucide-react"

interface EasterEggProps {
  message: string
}

const EasterEgg = ({ message }: EasterEggProps) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
    alert(message)

    // Reset after animation
    setTimeout(() => {
      setClicked(false)
    }, 2000)
  }

  return (
    <div
      className={`cursor-pointer transition-all duration-300 ${clicked ? "animate-bounce" : "hover:scale-110"}`}
      onClick={handleClick}
      title="Click for a fun fact!"
    >
      <Sparkles className="h-6 w-6 text-gold" />
    </div>
  )
}

export default EasterEgg