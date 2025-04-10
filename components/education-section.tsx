import { GraduationCap, Calendar, Award, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      concentration: "Concentration: Data Science",
      institution: "University of North Carolina at Charlotte",
      location: "Charlotte, NC",
      period: "August 2023 - May 2025",
      gpa: "3.88/4.0",
      highlights: [],
    },
    {
      degree: "BTech in Electronics and Telecommunication | MBA in Technology Management",
      concentration: "Dual Degree",
      institution: "NMIMS University",
      location: "Mumbai, India",
      period: "July 2018 - May 2023",
      gpa: "3.74/4.0",
      highlights: ["Merit List Student", "Silver Medalist, ranking second in MBATech dual degree"],
    },
  ]

  return (
    <section id="education" className="py-24 bg-background dark:bg-navy">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy dark:text-white sm:text-4xl mb-2">Education</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent via-rosegold to-accent mx-auto mb-4"></div>
          <p className="text-accent/80 italic font-light">My academic background</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="glass-card rounded-2xl shadow-xl hover:shadow-rosegold transition-all duration-300 hover:-translate-y-1 border-0"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-highlight dark:bg-accent/20 p-4 rounded-full mr-4">
                    <GraduationCap className="h-6 w-6 text-accent dark:text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy dark:text-white">{edu.degree}</h3>
                    <p className="text-accent dark:text-accent italic">{edu.concentration}</p>
                  </div>
                </div>

                <div className="ml-16">
                  <h4 className="text-xl font-medium text-navy dark:text-gray-200 mb-4">{edu.institution}</h4>

                  <div className="flex flex-wrap gap-x-6 gap-y-3 mb-5 text-text dark:text-gray-400 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-2" />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>

                  {edu.highlights.length > 0 && (
                    <div className="mt-6 p-4 bg-highlight/50 dark:bg-accent/10 rounded-xl">
                      <h5 className="font-medium text-navy dark:text-gray-200 mb-3">Highlights:</h5>
                      <ul className="list-disc list-inside space-y-2 text-text dark:text-gray-300">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection