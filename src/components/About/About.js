import { useTheme } from "../../hooks/useTheme"
import TechStack from "../TechStack/TechStack"
import "./About.scss"

export default function About() {
  const { darkness } = useTheme()

  return (
    <div className={`container-about ${darkness}`} id="scroll-about">
      <h1 className="section-title">About</h1>
        <div className="about-me">
        <p className="about-me-paragraph">I was born and raised in Montreal, Canada and currently live here.</p><p className="about-me-paragraph">I graduated from McGill University with a Bachelor's degree in Finance.<br></br>Soon after, I decided to pursue the perfect combination between creativity and logic: web development.</p><p className="about-me-paragraph">I'm heavily inspired by my city's culture, particularily that found in our local electronic music scene.<br></br>I am a huge fan of minimalism, which is often reflected in my development work.</p><p className="about-me-paragraph">My other hobbies include DJing, music production, exercise and mindfulness.</p>
      </div>
      <TechStack />
    </div>
  )
}
