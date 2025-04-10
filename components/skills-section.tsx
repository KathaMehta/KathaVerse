import { Database, Code, Globe, BarChart, Server, Layers } from "lucide-react"

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages & Databases",
      icon: <Database className="h-6 w-6 text-accent dark:text-accent" />,
      skills: ["Python", "Java", "SQL", "C++", "JavaScript", "TypeScript", "MySQL", "PostgreSQL"],
    },
    {
      title: "Web Development",
      icon: <Globe className="h-6 w-6 text-accent dark:text-accent" />,
      skills: ["MERN Stack", "MongoDB", "Express", "React", "Node.js", "Angular", "GraphQL", "Django", "Flask"],
    },
    {
      title: "Data Science & Analytics",
      icon: <BarChart className="h-6 w-6 text-accent dark:text-accent" />,
      skills: ["Machine Learning", "Data Analysis", "Power BI (DAX)", "Tableau", "XGBoost", "Statistical Analysis"],
    },
    {
      title: "DevOps & Tools",
      icon: <Server className="h-6 w-6 text-accent dark:text-accent" />,
      skills: ["Docker", "Jenkins", "Git", "GitHub", "AWS", "Selenium", "Cucumber"],
    },
    {
      title: "Frameworks",
      icon: <Layers className="h-6 w-6 text-accent dark:text-accent" />,
      skills: ["Hadoop", "Kubernetes", "Kafka", "SpringBoot", "ElasticSearch"],
    },
    {
      title: "Programming Concepts",
      icon: <Code className="h-6 w-6 text-accent dark:text-accent" />,
      skills: ["Data Structures", "Algorithms", "Object-Oriented Programming", "Functional Programming", "API Design"],
    },
  ]

  return (
    <section id="skills" className="py-24 bg-background dark:bg-navy">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy dark:text-white sm:text-4xl mb-2">Technical Skills</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent via-rosegold to-accent mx-auto mb-4"></div>
          <p className="text-accent/80 italic font-light">My technical toolkit</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-rosegold hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-highlight dark:bg-accent/20 p-4 rounded-full mr-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-navy dark:text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-highlight dark:bg-accent/20 text-navy dark:text-accent/90 rounded-full text-sm transition-all duration-300 hover:shadow-sm hover:bg-highlight/70"
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