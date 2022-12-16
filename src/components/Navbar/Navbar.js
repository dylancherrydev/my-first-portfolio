// styles
import "./Navbar.scss"

export default function Navbar() {
  return (
  <div className="navbar">
    <div className='logo'>
      <h4>Dylan Cherry</h4>
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
