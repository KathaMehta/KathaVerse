import { Award, Trophy, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Best Use of Gen AI at Pearl Hacks",
      description:
        "Won in the 'Best Use of Gen AI' track at Pearl Hacks, for developing Farm2You with an AI-powered crop advisory system.",
      icon: <Trophy className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      year: "2025",
    },
    {
      title: "Silver Medalist",
      description: "Graduated as a Silver Medalist, ranking second in MBATech (dual degree) at NMIMS University.",
      icon: <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      year: "2023",
    },
    {
      title: "IEEE Research Publication",
      description:
        "Published and presented a research paper at IEEE's 2022 ICETCI conference (ISBN: 978-1-6654-7941-7).",
      icon: <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      year: "2022",
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Achievements</h2>
          <div className="mt-2 h-1 w-20 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-600"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">{achievement.icon}</div>
                  <span className="text-lg font-bold text-purple-600 dark:text-purple-400">{achievement.year}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{achievement.title}</h3>

                <p className="text-gray-700 dark:text-gray-300">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection

