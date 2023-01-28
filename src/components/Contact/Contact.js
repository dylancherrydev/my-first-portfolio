import { useTheme } from "../../hooks/useTheme"
import { ContactForm } from "./ContactForm"

// styles
import "./Contact.scss"
import ContactIcons from "./ContactIcons"

export default function Contact() {
  const { darkness } = useTheme()

  return (
    <div className={`container-contact ${darkness}`} id="scroll-contact">
      <h1 className="section-title">Contact Me</h1>
      <h2 className="section-subtitle">Send me a message :)</h2>
      <ContactForm />
      <ContactIcons />
      <p className="copyright-message">© Dylan Cherry {new Date().getFullYear()}</p>
    </div>
  )
}
