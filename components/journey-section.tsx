import { MapPin, Sparkles, GraduationCap, Award, Code } from "lucide-react"
import SectionWithBackground from "./section-with-background"

const JourneySection = () => {
  const journeyEvents = [
    {
      year: "2018",
      title: "Started BTech & MBA Dual Degree",
      location: "NMIMS University, Mumbai",
      description: "Embarked on a unique educational journey combining technical expertise with business acumen.",
      icon: <GraduationCap className="h-6 w-6 text-accent dark:text-accent" />,
    },
    {
      year: "2021",
      title: "First Tech Internship",
      location: "Oni Cares, Mumbai",
      description:
        "Created my first production AWS search engine, discovering my passion for solving real-world problems with code.",
      icon: <Code className="h-6 w-6 text-accent dark:text-accent" />,
    },
    {
      year: "2022",
      title: "IEEE Research Publication",
      location: "ICETCI Conference",
      description:
        "Published my first research paper on road accident prediction using XGBoost, presenting to over 100 attendees.",
      icon: <Award className="h-6 w-6 text-accent dark:text-accent" />,
    },
    {
      year: "2023",
      title: "Silver Medalist & MS Journey Begins",
      location: "UNC Charlotte, NC",
      description:
        "Graduated as silver medalist and moved to Charlotte to pursue MS in Computer Science with Data Science focus.",
      icon: <GraduationCap className="h-6 w-6 text-accent dark:text-accent" />,
    },
    {
      year: "2024",
      title: "Teaching & Mentoring",
      location: "UNC Charlotte, NC",
      description:
        "Became a Graduate Teaching Assistant for Data Structures and Algorithms, helping shape future tech leaders.",
      icon: <Sparkles className="h-6 w-6 text-accent dark:text-accent" />,
    },
    {
      year: "2025",
      title: "Hackathon Victory",
      location: "Pearl Hacks",
      description:
        "Won 'Best Use of Gen AI' track with Farm2You, creating technology that connects farmers to consumers.",
      icon: <Award className="h-6 w-6 text-accent dark:text-accent" />,
    },
  ]

  return (
    <SectionWithBackground id="journey" variant="particles" className="py-24 bg-background dark:bg-navy snap-start">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16 reveal reveal-up">
          <h2 className="text-3xl font-bold text-navy dark:text-white sm:text-4xl mb-2">My Journey</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent via-rosegold to-accent mx-auto mb-4"></div>
          <p className="text-accent/80 italic font-light">From Mumbai to Charlotte, a story of growth and discovery</p>
        </div>

        <div className="timeline-container reveal reveal-up">
          {journeyEvents.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className={`timeline-content ${index % 2 === 0 ? "ml-auto" : ""}`}>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="bg-highlight dark:bg-accent/20 p-3 rounded-full mr-4">{event.icon}</div>
                    <h3 className="text-xl font-bold text-navy dark:text-white">{event.title}</h3>
                  </div>
                  <span className="text-lg font-bold text-accent dark:text-accent">{event.year}</span>
                </div>

                <div className="flex items-center mb-3 text-text dark:text-gray-400 text-sm">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{event.location}</span>
                </div>

                <p className="text-text dark:text-gray-300 leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWithBackground>
  )
}

export default JourneySection