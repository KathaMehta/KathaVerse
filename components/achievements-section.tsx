import { Award, Trophy, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Best Use of Gen AI at Pearl Hacks",
      description:
        "Won in the 'Best Use of Gen AI' track at Pearl Hacks, for developing Farm2You with an AI-powered crop advisory system.",
      icon: <Trophy className="h-6 w-6 text-accent dark:text-accent" />,
      year: "2025",
    },
    {
      title: "Silver Medalist",
      description: "Graduated as a Silver Medalist, ranking second in MBATech (dual degree) at NMIMS University.",
      icon: <Award className="h-6 w-6 text-accent dark:text-accent" />,
      year: "2023",
    },
    {
      title: "IEEE Research Publication",
      description:
        "Published and presented a research paper at IEEE's 2022 ICETCI conference (ISBN: 978-1-6654-7941-7).",
      icon: <FileText className="h-6 w-6 text-accent dark:text-accent" />,
      year: "2022",
    },
  ]

  return (
    <section id="achievements" className="py-24 bg-background dark:bg-navy">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy dark:text-white sm:text-4xl mb-2">Achievements</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent via-rosegold to-accent mx-auto mb-4"></div>
          <p className="text-accent/80 italic font-light">Milestones along my journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="glass-card rounded-2xl shadow-xl hover:shadow-rosegold transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-accent via-rosegold to-accent"></div>
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-highlight dark:bg-accent/20 p-4 rounded-full">{achievement.icon}</div>
                  <span className="text-lg font-bold text-accent dark:text-accent">{achievement.year}</span>
                </div>

                <h3 className="text-xl font-bold text-navy dark:text-white mb-4">{achievement.title}</h3>

                <p className="text-text dark:text-gray-300 leading-relaxed">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection