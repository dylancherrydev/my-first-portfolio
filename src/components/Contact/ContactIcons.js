import "./ContactIcons.scss"
import {FaGithub, FaLinkedin} from 'react-icons/fa'

export default function ContactIcons() {
  return (
    <div className="contact-icons-container">
      <a href="https://github.com/dylancherrydev" className="contact-icon" target="_blank" rel="noreferrer"><FaGithub/></a>
      <a href="https://www.linkedin.com/in/cherrydylan/" className="contact-icon" target="_blank" rel="noreferrer"><FaLinkedin/></a>
    </div>
  )
}