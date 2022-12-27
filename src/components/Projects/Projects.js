import { useTheme } from "../../hooks/useTheme"

// styles
import "./Projects.scss"

export default function Projects() {
  const darkness = useTheme()

  return (
    <div className={`container-projects ${darkness}`} id="scroll-projects">
      <h1 className="section-title">Projects</h1>
      <h1 className="coming-soon">Coming soon...</h1>
    </div>
  )
}
