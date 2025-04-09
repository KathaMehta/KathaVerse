import { GraduationCap, Briefcase, Award, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm Katha Mehta, a Master's student in Computer Science with a concentration in Data Science at the
              University of North Carolina at Charlotte. With a strong foundation in both technical and management
              skills from my dual BTech and MBA degree, I bring a unique perspective to solving complex problems.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              My expertise spans data engineering, full-stack development, and AI/ML applications. I'm passionate about
              creating innovative solutions that leverage cutting-edge technologies to solve real-world problems.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Currently, I'm working as a Graduate Teaching Assistant for Data Structures and Algorithms, where I help
              students master fundamental computer science concepts.
            </p>

            <div className="flex flex-wrap gap-4">
            <Link href="#experience" legacyBehavior>
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <a>
                  <Briefcase className="mr-2 h-4 w-4" />
                  My Experience
                </a>
              </Button>
            </Link>
              <Link href="#projects" legacyBehavior>
                
                <Button asChild  variant="outline">
                  <a>
                  <Code className="mr-2 h-4 w-4" />
                  View Projects
                  </a>
                </Button>
              </Link>
              
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full mr-4">
                  <GraduationCap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                MS in Computer Science with a focus on Data Science, plus a dual BTech and MBA degree.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full mr-4">
                  <Briefcase className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Experience</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Data engineering, teaching, and software development across multiple organizations.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full mr-4">
                  <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Skills</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Python, Java, MERN stack, data analysis, machine learning, and cloud technologies.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Achievements</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Hackathon winner, silver medalist, and published researcher in IEEE conference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

