"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="#home" className="text-xl font-bold text-purple-600 dark:text-purple-400">
              KM
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center ml-4 space-x-2">
              <Link href="https://github.com/mkatha14" target="_blank" rel="noopener noreferrer">
                <Button asChild variant="ghost" size="icon" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/mkatha14" target="_blank" rel="noopener noreferrer">
                <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:mkatha14@gmail.com">
                <Button asChild variant="ghost" size="icon" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
              <Button asChild
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center">
            <Button asChild
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="mr-2"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button asChild variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex space-x-2 px-3 py-2">
              <Link href="https://github.com/mkatha14" target="_blank" rel="noopener noreferrer">
                <Button asChild variant="ghost" size="icon" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/mkatha14" target="_blank" rel="noopener noreferrer">
                <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:mkatha14@gmail.com">
                <Button asChild variant="ghost" size="icon" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar

