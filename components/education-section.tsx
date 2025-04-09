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
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Education</h2>
          <div className="mt-2 h-1 w-20 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full mr-4">
                    <GraduationCap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-purple-600 dark:text-purple-400">{edu.concentration}</p>
                  </div>
                </div>

                <div className="ml-16">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{edu.institution}</h4>

                  <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3 text-gray-600 dark:text-gray-400 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>

                  {edu.highlights.length > 0 && (
                    <div className="mt-4">
                      <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Highlights:</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
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

