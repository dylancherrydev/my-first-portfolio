import { useTheme } from "../../hooks/useTheme"

// styles
import "./Contact.scss"

export default function Contact() {
  const { darkness } = useTheme()

  return (
    <div className={`container-contact ${darkness}`} id="scroll-contact">
      Contact
    </div>
  )
}
