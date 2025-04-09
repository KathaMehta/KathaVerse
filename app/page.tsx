"use client"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import EducationSection from "@/components/education-section"
import ProjectsSection from "@/components/projects-section"
import AchievementsSection from "@/components/achievements-section"
import ContactSection from "@/components/contact-section"
import NavBar from "@/components/nav-bar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <NavBar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-900/20 dark:to-blue-900/20" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-8 relative inline-block">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Katha Mehta"
                width={400}
                height={400}
                className="object-cover"
                priority
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">Katha Mehta</h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl text-purple-600 dark:text-purple-400 font-medium mb-6">
            Full Stack Developer & Data Scientist
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            MS in Computer Science student with expertise in data engineering, web development, and a passion for
            creating innovative solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#contact"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Contact Me
            </Link>
            <Link
              href="#projects"
              className="px-6 py-3 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
            >
              View Projects
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link
            href="#about"
            className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
          >
            <ChevronDown size={32} />
          </Link>
        </div>
      </section>

      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Katha Mehta. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">Made with Next.js, Tailwind CSS, and shadcn/ui</p>
        </div>
      </footer>
    </div>
  )
}

