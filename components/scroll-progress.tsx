"use client"

import { useEffect, useState } from "react"

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("home")
  const sections = [
    "home",
    "about",
    "journey",
    "skills",
    "projects",
    "blog",
    "hobbies",
    "experience",
    "education",
    "contact",
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Update progress bar
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollPosition = window.scrollY
      const progress = (scrollPosition / totalScroll) * 100
      setScrollProgress(progress)

      // Update active section
      const viewportHeight = window.innerHeight
      const viewportMiddle = scrollPosition + viewportHeight / 2

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          const elementTop = top + scrollPosition
          const elementBottom = bottom + scrollPosition

          if (viewportMiddle >= elementTop && viewportMiddle <= elementBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }}></div>
      <div className="section-indicator hidden lg:flex">
        {sections.map((section) => (
          <div
            key={section}
            className={`section-indicator-dot ${activeSection === section ? "active" : ""}`}
            onClick={() => scrollToSection(section)}
            title={section.charAt(0).toUpperCase() + section.slice(1)}
          ></div>
        ))}
      </div>
    </>
  )
}

export default ScrollProgress