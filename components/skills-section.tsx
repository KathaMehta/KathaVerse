import { Database, Code, Globe, BarChart, Server, Layers } from "lucide-react"

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages & Databases",
      icon: <Database className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      skills: ["Python", "Java", "SQL", "C++", "JavaScript", "TypeScript", "MySQL", "PostgreSQL"],
    },
    {
      title: "Web Development",
      icon: <Globe className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      skills: ["MERN Stack", "MongoDB", "Express", "React", "Node.js", "Angular", "GraphQL", "Django", "Flask"],
    },
    {
      title: "Data Science & Analytics",
      icon: <BarChart className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      skills: ["Machine Learning", "Data Analysis", "Power BI (DAX)", "Tableau", "XGBoost", "Statistical Analysis"],
    },
    {
      title: "DevOps & Tools",
      icon: <Server className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      skills: ["Docker", "Jenkins", "Git", "GitHub", "AWS", "Selenium", "Cucumber"],
    },
    {
      title: "Frameworks",
      icon: <Layers className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      skills: ["Hadoop", "Kubernetes", "Kafka", "SpringBoot", "ElasticSearch"],
    },
    {
      title: "Programming Concepts",
      icon: <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      skills: ["Data Structures", "Algorithms", "Object-Oriented Programming", "Functional Programming", "API Design"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Technical Skills</h2>
          <div className="mt-2 h-1 w-20 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full mr-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

