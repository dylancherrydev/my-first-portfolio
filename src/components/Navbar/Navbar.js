// styles
import "./Navbar.scss"

export default function Navbar({ darkness, setDarkness }) {
  const toggleTheme = () => {
    darkness === "dark" ? setDarkness("light") : setDarkness("dark")
  }

  return (
  <div className="navbar" id={darkness}>
    <div className='logo'>
      <h4>Dylan Cherry</h4>
      <button className="button-toggle" onClick={() => toggleTheme()}> {darkness === "dark" ? "☼" : "☾"}</button>
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
