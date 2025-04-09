import { ExternalLink, Github, Calendar, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const ProjectsSection = () => {
  const projects = [
    {
      title: "Farm2You",
      period: "Feb 2025",
      image: "/placeholder.svg?height=300&width=600",
      description:
        "A marketplace app connecting farmers directly to consumers for fresher produce and less food waste.",
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
      image: "/placeholder.svg?height=300&width=600",
      description:
        "A tool that enables real-time diagram creation from audio and text input, streamlining the flowcharting process.",
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
      image: "/placeholder.svg?height=300&width=600",
      description: "A prediction system using XGBoost to forecast road accidents based on weather and road conditions.",
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
    <section id="projects" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Projects</h2>
          <div className="mt-2 h-1 w-20 bg-purple-600 mx-auto"></div>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative h-64 lg:h-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>

                <div className="p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{project.period}</span>
                    </div>
                  </div>

                  {project.achievements.length > 0 && (
                    <div className="mb-4">
                      {project.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center text-purple-600 dark:text-purple-400 font-medium">
                          <Award className="h-4 w-4 mr-2" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                      {project.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {project.links.github && (
                      <Button variant="outline" asChild>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}

                    {project.links.demo && (
                      <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}

                    {project.links.paper && (
                      <Button variant="outline" asChild>
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
      </div>
    </section>
  )
}

export default ProjectsSection

