"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Palette, Camera, Music, Book, Coffee, Sparkles, Bike, Brush } from "lucide-react"
import { Button } from "@/components/ui/button"

const hobbies = [
  {
    title: "Photography",
    description: "Capturing moments and perspectives through my lens",
    image: "/lake.jpeg?height=600&width=800",
    icon: <Camera className="h-5 w-5 text-accent" />,
  },
  {
    title: "Painting",
    description: "Expressing creativity through colors and brushstrokes",
    image: "/paint_2.jpeg?height=600&width=800",
    icon: <Brush className="h-5 w-5 text-accent" />,
  },
  {
    title: "Fashion & Style",
    description: "Exploring personal expression through fashion",
    image: "/fashion.png?height=600&width=800",
    icon: <Palette className="h-5 w-5 text-accent" />,
  },
  {
    title: "Reading",
    description: "Expanding my horizons through books and literature",
    image: "/Happy_Place_2.jpg?height=600&width=800",
    icon: <Book className="h-5 w-5 text-accent" />,
  },
  {
    title: "Coffee Exploration",
    description: "Discovering new flavors and brewing techniques",
    image: "/coffee.jpeg?height=600&width=800",
    icon: <Coffee className="h-5 w-5 text-accent" />,
  },
  {
    title: "Music & Playlists",
    description: "Curating soundtracks for different moods and moments",
    image: "/music.png?height=600&width=800",
    icon: <Music className="h-5 w-5 text-accent" />,
  },
  {
    title: "Cycling",
    description: "Exploring new paths and enjoying the outdoors",
    image: "/cycle1.jpg?height=600&width=800",
    icon: <Bike className="h-5 w-5 text-accent" />,
  },
  {
    title: "Travel",
    description: "Experiencing new cultures and creating memories",
    image: "/travel_2.jpeg?height=600&width=800",
    icon: <Sparkles className="h-5 w-5 text-accent" />,
  },
]

const HobbySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const goToSlide = (index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const nextSlide = () => {
    if (isAnimating) return
    const newIndex = currentIndex === hobbies.length - 1 ? 0 : currentIndex + 1
    goToSlide(newIndex)
  }

  const prevSlide = () => {
    if (isAnimating) return
    const newIndex = currentIndex === 0 ? hobbies.length - 1 : currentIndex - 1
    goToSlide(newIndex)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide()
    } else if (touchStartX.current - touchEndX.current < -50) {
      prevSlide()
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide()
      } else if (e.key === "ArrowRight") {
        nextSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentIndex, isAnimating])

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-xl">
      <div
        ref={sliderRef}
        className="relative h-[500px] md:h-[600px] w-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? "opacity-100 translate-x-0"
                : index < currentIndex
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={hobby.image || "/placeholder.svg"}
                alt={hobby.title}
                fill
                className="object-cover"
                priority={index === currentIndex}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center mb-3">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full mr-4">{hobby.icon}</div>
                  <h3 className="text-2xl font-bold font-cinzel">{hobby.title}</h3>
                </div>
                <p className="text-lg max-w-lg">{hobby.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full h-12 w-12"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full h-12 w-12"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {hobbies.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HobbySlider