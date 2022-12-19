// styles
import "./Home.scss"

// images
import hero from "../../assets/hero.png"

export default function Home({ darkness }) {
  return (
    <div className={`container-home ${darkness}`}>
      <img src={hero} alt="Portrait of Dylan"/>
      <div className="main-text">
        <p>Hi, I'm <span>Dylan Cherry</span>!</p><p>I'm a <span>full-stack developer<span/></span>.</p>
      </div>
    </div>
  )
}
