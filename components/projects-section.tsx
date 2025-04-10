import { ExternalLink, Github, Calendar, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const ProjectsSection = () => {
  const projects = [
    {
      title: "Farm2You",
      period: "Feb 2025",
      image: "/farm.jpeg?height=300&width=600",
      description:
        "A marketplace connecting farmers directly to consumers, reducing food waste and supporting local agriculture.",
      problem:
        "Small farmers struggle to reach consumers directly, while consumers lack access to fresh, local produce.",
      solution:
        "Created a mobile marketplace with AI-powered crop advisory to connect farmers and consumers seamlessly.",
      achievements: ["Won 'Best Use of Gen AI' track at Pearl Hacks"],
      details: [
        "Outpaced 45+ teams at Pearl Hacks by crafting a marketplace app with React Native and Firebase, using TypeScript to connect farmers to consumers for fresher produce and less food waste.",
        "Engineered an AI crop advisory system with GPT-4o Mini and OpenWeatherMap API, delivering 24/7 location-based insights to boost farmers' decisions and resilience.",
        "Built a USDA-verified knowledge database for 63 crops, ensuring accurate recommendations and reducing false alerts.",
      ],
      technologies: ["React Native", "Firebase", "TypeScript", "GPT-4o Mini", "OpenWeatherMap API"],
      links: {
        github: "https://github.com/mkatha14/farm2you",
        demo: "https://farm2you-demo.vercel.app",
      },
    },
    {
      title: "FlowGenie",
      period: "Nov 2024",
      image: "/genie.png?height=300&width=600",
      description:
        "An innovative tool that transforms spoken words and text into beautiful, organized flowcharts in real-time.",
      problem: "Creating flowcharts is time-consuming and requires specialized knowledge of diagramming tools.",
      solution:
        "Developed an AI-powered application that automatically generates and arranges flowcharts from natural language.",
      achievements: ["Developed at HackNC against 125 teams"],
      details: [
        "Engineered FlowGenie at HackNC against 125 teams, using Next.js and Excalidraw, enabling real-time diagram creation from audio and text input, significantly streamlining the flowcharting process.",
        "Crafted an intelligent placement algorithm with auto-coordinates, optimizing layout coherence & handling complex updates.",
        "Engineered a ChatGPT-4o mini-powered chatbot with JSON Mermaid code for complex flowchart updates, expanding support to 80+ languages for global accessibility.",
      ],
      technologies: ["Next.js", "Excalidraw", "ChatGPT-4o mini", "Mermaid", "JSON"],
      links: {
        github: "https://github.com/mkatha14/flowgenie",
        demo: "https://flowgenie-demo.vercel.app",
      },
    },
    {
      title: "Road Accident Prediction using XGBoost",
      period: "Jan 2022 - April 2022",
      image: "/car.png?height=300&width=600",
      description: "A prediction system using XGBoost to forecast road accidents based on weather and road conditions.",
      problem:
        "Road accidents cause significant loss of life, but many are predictable based on environmental factors.",
      solution:
        "Created a machine learning model that analyzes weather and road conditions to predict accident likelihood.",
      achievements: ["Published and presented at IEEE's 2022 ICETCI conference (ISBN: 978-1-6654-7941-7)"],
      details: [
        "Led a 3-person team to develop a prediction system using XGBoost, post evaluating 4 models, achieving 80% accuracy.",
        "Published and presented at IEEE's 2022 ICETCI conference (ISBN: 978-1-6654-7941-7) to over 100 attendees.",
        "Built a web app for real-time accident predictions based on weather and road conditions, improving public safety insights.",
      ],
      technologies: ["Python", "XGBoost", "Machine Learning", "Data Analysis", "Web Development"],
      links: {
        github: "https://github.com/mkatha14/road-accident-prediction",
        paper: "https://ieeexplore.ieee.org/document/9654-7941-7",
      },
    },
  ]

  return (
    <section id="projects" className="py-24 bg-card dark:bg-navy/90">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy dark:text-white sm:text-4xl mb-2">Projects</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent via-rosegold to-accent mx-auto mb-4"></div>
          <p className="text-accent/80 italic font-light">Where ideas come to life</p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden shadow-xl hover:shadow-rosegold transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full overflow-hidden">
                  <div className="absolute inset-0 bg-lavender dark:bg-navy/50 mix-blend-multiply"></div>
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent"></div>
                </div>

                <div className="p-8 lg:p-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-navy dark:text-white">{project.title}</h3>
                    <div className="flex items-center text-text dark:text-gray-400 text-sm bg-highlight/50 dark:bg-accent/10 px-3 py-1 rounded-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{project.period}</span>
                    </div>
                  </div>

                  {project.achievements.length > 0 && (
                    <div className="mb-6">
                      {project.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center text-accent dark:text-accent font-medium mb-2">
                          <Award className="h-5 w-5 mr-2" />
                          <span className="italic">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="text-text dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  <div className="mb-6 space-y-4">
                    <div>
                      <h4 className="font-semibold text-navy dark:text-white mb-2">The Problem:</h4>
                      <p className="text-text dark:text-gray-300">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy dark:text-white mb-2">My Solution:</h4>
                      <p className="text-text dark:text-gray-300">{project.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-highlight dark:bg-accent/20 text-navy dark:text-accent/90 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {project.links.github && (
                      <Button
                        variant="outline"
                        className="border-accent/30 text-navy hover:bg-accent/10 dark:border-accent/30 dark:text-accent dark:hover:bg-accent/10 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        asChild
                      >
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}

                    {project.links.demo && (
                      <Button
                        className="bg-accent hover:bg-accent/90 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        asChild
                      >
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}

                    {project.links.paper && (
                      <Button
                        variant="outline"
                        className="border-accent/30 text-navy hover:bg-accent/10 dark:border-accent/30 dark:text-accent dark:hover:bg-accent/10 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        asChild
                      >
                        <a href={project.links.paper} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Research Paper
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="https://github.com/mkatha14" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-accent/30 text-navy hover:bg-accent/10 dark:border-accent/30 dark:text-accent dark:hover:bg-accent/10 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <Github className="mr-2 h-5 w-5" />
              See More Projects on GitHub
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection