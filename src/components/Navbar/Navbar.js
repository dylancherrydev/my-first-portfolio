// hooks
import { useTheme } from "../../hooks/useTheme"

// styles
import "./Navbar.scss"

export default function Navbar() {
  const { darkness, changeDarkness } = useTheme()

  return (
  <div className={`navbar ${darkness}`}>
    <div className='logo'>
      <h4>Dylan Cherry</h4>
      {darkness === "dark" && (
        <button className="button-toggle" onClick={() => changeDarkness("light")}>☼</button>
      )}
      {darkness === "light" && (
        <button className="button-toggle" onClick={() => changeDarkness("dark")}>☽</button>
      )}
    </div>
    <div className="navbar-links">
      <a href="/" alt="Home">Home</a>
      <a href="/" alt="About">About</a>
      <a href="/" alt="Projects">Projects</a>
      <a href="/" alt="Contact">Contact</a>
    </div>
  </div>
  )
}
