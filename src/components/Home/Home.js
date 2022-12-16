// styles
import "./Home.scss"

// images
import hero from "../../assets/hero.png"

export default function Home() {
  return (
    <div className="main-text">
      <img src={hero} alt="Portrait of Dylan"/>
      <p>Hi, I'm <span>Dylan Cherry</span>!</p><p>I'm a <span>full-stack developer<span/></span>.</p>
    </div>
  )
}
