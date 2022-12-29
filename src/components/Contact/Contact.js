import { useTheme } from "../../hooks/useTheme"

// styles
import "./Contact.scss"

export default function Contact() {
  const { darkness } = useTheme()

  return (
    <div className={`container-contact ${darkness}`} id="scroll-contact">
      <h1 className="section-title">Contact</h1>
    </div>
  )
}
