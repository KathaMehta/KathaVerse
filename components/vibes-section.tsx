import HobbySlider from "./hobby-slider"
import SectionWithBackground from "./section-with-background"

const VibesSection = () => {
  return (
    <SectionWithBackground id="hobbies" variant="waves" className="py-24 bg-card dark:bg-navy/90 snap-start">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16 reveal reveal-up">
          <h2 className="text-3xl font-bold text-navy dark:text-white sm:text-4xl mb-2">Beyond Code</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent via-rosegold to-accent mx-auto mb-4"></div>
          <p className="text-accent/80 italic font-light">Exploring creativity through my hobbies and interests</p>
        </div>

        <div className="reveal reveal-up">
          <HobbySlider />
        </div>

        <div className="mt-12 text-center reveal reveal-up">
          <p className="text-text dark:text-gray-300 italic">
            "Balancing technical precision with creative exploration."
          </p>
        </div>
      </div>
    </SectionWithBackground>
  )
}

export default VibesSection