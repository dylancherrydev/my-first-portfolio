import TechStack from "../TechStack/TechStack"
import "./About.scss"

export default function About() {
  return (
    <div className="container-about" id="scroll-about">
      <h1 className="section-title">About</h1>
        <div className="about-me">
        <p>I was born and raised in Montreal, Canada and currently live here.</p><p>I graduated from McGill University with a Bachelor's degree in Finance. Soon after, I decided to pursue the perfect marriage between creativity and mental stimulation: web development.</p><p>I'm heavily inspired by my city's culture, particularily that found in our local electronic music scene. I am a huge fan of minimalism, which is often reflected in my development work.</p><p>My other hobbies include DJing, music production and mindfulness.</p>
      </div>
      <TechStack />
    </div>
  )
}
