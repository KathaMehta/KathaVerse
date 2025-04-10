import { ChevronDown, Sparkles } from "lucide-react"
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
import JourneySection from "@/components/journey-section"
import VibesSection from "@/components/vibes-section"
import BlogSection from "@/components/blog-section"
import SectionDivider from "@/components/section-divider"
import ScrollProgress from "@/components/scroll-progress"
import ScrollAnimation from "@/components/scroll-animation"
import CursorEffect from "@/components/cursor-effect"
import GeometricBackground from "@/components/geometric-background"

export default function Home() {
  return (
    <ScrollAnimation>
      <div className="min-h-screen bg-background dark:bg-navy">
        <NavBar />
        <ScrollProgress />
        <CursorEffect />
        <GeometricBackground />

        {/* Hero Section */}
        <section
          id="home"
          className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 snap-start"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-lavender/40 via-background to-highlight/30 dark:from-accent/20 dark:via-navy/80 dark:to-navy/90" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="mb-8 relative inline-block float">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white dark:border-navy shadow-rosegold">
                <Image
                  src="/face_1.jpeg?height=400&width=400"
                  alt="Katha Mehta"
                  width={400}
                  height={400}
                  className="object-cover"
                  style={{ transform: 'scale(2)' }} // try 1.8 or 2
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-rosegold rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xs font-bold">MS CS</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-navy dark:text-white mb-2 tracking-tight">
              Katha Mehta
            </h1>

            <div className="w-32 h-1 bg-gradient-to-r from-accent via-rosegold to-accent mx-auto mb-4"></div>

            <h2 className="text-xl sm:text-2xl md:text-3xl text-accent dark:text-accent font-medium mb-6 italic">
              Full Stack Developer & Data Scientist
            </h2>

            <p className="text-lg text-text dark:text-gray-300 max-w-2xl mx-auto mb-8 font-light">
              Turning curiosity into code, and ideas into impact. I specialize in data engineering, full-stack
              development, and AI solutions that solve real-world problems.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#contact"
                className="px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Let's Connect
              </Link>
              <Link
                href="#projects"
                className="px-6 py-3 bg-white/80 dark:bg-navy/80 text-navy dark:text-white hover:bg-white dark:hover:bg-navy/70 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border border-accent/20"
              >
                See My Work
              </Link>
            </div>

            <div className="mt-8 flex justify-center">
              <Sparkles className="h-6 w-6 text-gold animate-pulse easter-egg" title="Click for a fun fact!" />
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Link href="#about" className="text-text dark:text-gray-400 hover:text-accent dark:hover:text-accent">
              <ChevronDown size={32} />
            </Link>
          </div>
        </section>

        <SectionDivider color="#fff6f8" nextColor="#fffafd" type="wave" />

        <AboutSection />
        <SectionDivider color="#fffafd" nextColor="#fff6f8" type="curve" />

        <JourneySection />
        <SectionDivider color="#fff6f8" nextColor="#fffafd" type="angle" />

        <SkillsSection />
        <SectionDivider color="#fffafd" nextColor="#fff6f8" type="wave" />

        <ProjectsSection />
        <SectionDivider color="#fff6f8" nextColor="#fffafd" type="curve" />

        <BlogSection />
        <SectionDivider color="#fffafd" nextColor="#fff6f8" type="angle" />

        <VibesSection />
        <SectionDivider color="#fff6f8" nextColor="#fffafd" type="wave" />

        <ExperienceSection />
        <SectionDivider color="#fffafd" nextColor="#fff6f8" type="curve" />

        <EducationSection />
        <SectionDivider color="#fff6f8" nextColor="#fffafd" type="angle" />

        <AchievementsSection />
        <SectionDivider color="#fffafd" nextColor="#14213d" type="wave" />

        <ContactSection />

        {/* Footer */}
        <footer className="bg-navy text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-cinzel text-lg">© {new Date().getFullYear()} Katha Mehta. All rights reserved.</p>
            <p className="mt-2 text-sm text-gray-300 font-light">Made with Next.js, Tailwind CSS, and shadcn/ui</p>
          </div>
        </footer>
      </div>
    </ScrollAnimation>
  )
}