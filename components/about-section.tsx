import { GraduationCap, Briefcase, Award, Code, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import SectionWithBackground from "./section-with-background"

const AboutSection = () => {
  return (
    <SectionWithBackground id="about" variant="gradient" className="py-24 bg-card dark:bg-navy/90 snap-start">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16 reveal reveal-up">
          <h2 className="text-3xl font-bold text-navy dark:text-white sm:text-4xl mb-2">About Me</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent via-rosegold to-accent mx-auto mb-4"></div>
          <p className="text-accent/80 italic font-light">The story behind the code</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal reveal-left">
            <p className="text-lg text-text dark:text-gray-300 mb-6 leading-relaxed">
              I'm a Computer Science graduate student at UNC Charlotte specializing in Data Science, with a strong
              foundation in both technical development and business strategy from my dual BTech-MBA degree.
            </p>
            <p className="text-lg text-text dark:text-gray-300 mb-6 leading-relaxed">
              My technical expertise spans data engineering, full-stack development, and AI/ML applications. I excel at
              building scalable solutions that bridge the gap between complex data systems and practical business needs.
            </p>
            <p className="text-lg text-text dark:text-gray-300 mb-8 leading-relaxed">
              Currently, I'm working as a Graduate Teaching Assistant for Data Structures and Algorithms while
              developing innovative projects that leverage cutting-edge technologies to solve real-world problems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="#journey">
                <Button className="bg-accent hover:bg-accent/90 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Sparkles className="mr-2 h-4 w-4" />
                  My Journey
                </Button>
              </Link>
              <Link href="#projects">
                <Button
                  variant="outline"
                  className="border-accent/30 text-navy hover:bg-accent/10 dark:border-accent/30 dark:text-accent dark:hover:bg-accent/10 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <Code className="mr-2 h-4 w-4" />
                  View Projects
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 reveal reveal-right">
            <div className="glass-card p-8 rounded-2xl shadow-xl hover:shadow-rosegold transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-highlight dark:bg-accent/20 p-3 rounded-full mr-4">
                  <GraduationCap className="h-6 w-6 text-accent dark:text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-navy dark:text-white">Education</h3>
              </div>
              <p className="text-text dark:text-gray-300">
                MS in Computer Science with a focus on Data Science, plus a dual BTech and MBA degree.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl shadow-xl hover:shadow-rosegold transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-highlight dark:bg-accent/20 p-3 rounded-full mr-4">
                  <Briefcase className="h-6 w-6 text-accent dark:text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-navy dark:text-white">Experience</h3>
              </div>
              <p className="text-text dark:text-gray-300">
                Data engineering, teaching, and software development across multiple organizations.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl shadow-xl hover:shadow-rosegold transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-highlight dark:bg-accent/20 p-3 rounded-full mr-4">
                  <Code className="h-6 w-6 text-accent dark:text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-navy dark:text-white">Technical Skills</h3>
              </div>
              <p className="text-text dark:text-gray-300">
                Python, Java, MERN stack, data analysis, machine learning, and cloud technologies.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl shadow-xl hover:shadow-rosegold transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-highlight dark:bg-accent/20 p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-accent dark:text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-navy dark:text-white">Achievements</h3>
              </div>
              <p className="text-text dark:text-gray-300">
                Hackathon winner, silver medalist, and published researcher in IEEE conference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWithBackground>
  )
}

export default AboutSection