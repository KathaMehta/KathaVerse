"use client"

import type React from "react"

import { useEffect } from "react"
import { revealOnScroll } from "@/app/utils"

const ScrollAnimation = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    window.addEventListener("scroll", revealOnScroll)
    revealOnScroll() // Check on initial load

    return () => {
      window.removeEventListener("scroll", revealOnScroll)
    }
  }, [])

  return <>{children}</>
}

export default ScrollAnimation