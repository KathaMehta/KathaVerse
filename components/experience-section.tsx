import { Calendar, MapPin, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Graduate Teaching Assistant",
      company: "University of North Carolina at Charlotte",
      location: "Charlotte, NC",
      period: "Jan 2024 - Dec 2024",
      description: [
        "Boosted student performance by 15% through focused mentorship and hosting help sessions beyond class hours.",
        "Created course materials and an interactive website, enhancing learning outcomes for a class of over 80 students.",
      ],
      skills: ["Teaching", "Mentoring", "Data Structures", "Algorithms", "Web Development"],
    },
    {
      title: "Data Engineer Intern",
      company: "Nomura Services India Pvt Ltd",
      location: "Mumbai, India",
      period: "May 2022 - Sep 2022",
      description: [
        "Consolidated 9 different pipelines into a single unified pipeline using SpringBoot, resulting in a 10x speed improvement in organization-wide data management.",
        "Automated manual testing using Selenium and Cucumber, tripling process efficiency and reducing testing time.",
        "Engineered a Power BI dashboard to visualize global securities data, reducing report generation time by 40%.",
        "Spearheaded an interview scheduling bot with RASA and Flask, streamlining communication across 6+ departments.",
      ],
      skills: ["SpringBoot", "Selenium", "Cucumber", "Power BI", "RASA", "Flask", "Data Engineering"],
    },
    {
      title: "Software Development Intern",
      company: "Oni Cares",
      location: "Mumbai, India",
      period: "May 2021 - Jun 2021",
      description: [
        "Created AWS search engine under an Amazon Solutions Architect, reducing search time by 25% for 'ONI: MOM' app.",
        "Implemented fuzzy search with ElasticSearch and geolocation data using DynamoDB, improving search accuracy for over 10,000 queries.",
        "Applied Amplify for test app creation and Lambda for serverless execution, cutting development time by 30%.",
      ],
      skills: ["AWS", "ElasticSearch", "DynamoDB", "Amplify", "Lambda", "Geolocation"],
    },
  ]

  return (
    <section id="experience" className="py-24 bg-card dark:bg-navy/90">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy dark:text-white sm:text-4xl mb-2">Work Experience</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent via-rosegold to-accent mx-auto mb-4"></div>
          <p className="text-accent/80 italic font-light">My professional journey</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent/20 dark:bg-accent/30"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-accent border-4 border-card dark:border-navy/90 shadow-rosegold"></div>

                <div className={`md:flex items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Date and location for desktop */}
                  <div
                    className={`hidden md:block w-1/2 ${index % 2 === 0 ? "md:pr-16 text-right" : "md:pl-16 text-left"}`}
                  >
                    <div className="flex items-center mb-2 text-text dark:text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center text-text dark:text-gray-400 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Card */}
                  <Card
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pl-16" : "md:pr-16"
                    } glass-card rounded-2xl shadow-xl hover:shadow-rosegold transition-all duration-300 hover:-translate-y-1 border-0`}
                  >
                    <CardContent className="p-8">
                      {/* Date and location for mobile */}
                      <div className="md:hidden flex justify-between mb-4 text-text dark:text-gray-400 text-sm">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-navy dark:text-white mb-1">{exp.title}</h3>
                      <h4 className="text-lg font-medium text-accent dark:text-accent mb-6 italic">{exp.company}</h4>

                      <ul className="space-y-3 mb-6">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex">
                            <ChevronRight className="h-5 w-5 text-accent dark:text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-text dark:text-gray-300 ml-2">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-highlight dark:bg-accent/20 text-navy dark:text-accent/90 rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection