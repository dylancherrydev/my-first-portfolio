import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';

// hooks
import { useTheme } from "../../hooks/useTheme"

// styles
import "./Navbar.scss"

export default function Navbar() {

  const { darkness, changeDarkness } = useTheme()

  let scroll=Scroll.animateScroll;

  return (
  <div className={`navbar ${darkness}`}>
    <div className='logo'>
      <h4>Dylan Cherry</h4>
      {darkness === "dark" && (
        <button className="button-toggle" onClick={() => changeDarkness("light")}>☼</button>
      )}
      {darkness === "light" && (
        <button className="button-toggle" onClick={() => changeDarkness("dark")}>☾</button>
      )}
    </div>
    <div className="navbar-link-container">
      <Link className='navbar-link' onClick={() => scroll.scrollToTop()} alt="Home">Home</Link>
      <Link className='navbar-link' to="scroll-about" spy={true} smooth={true} offset={-62.55} alt="About">About</Link>
      <Link className='navbar-link' to="scroll-projects" spy={true} smooth={true} offset={-62.55} alt="Projects">Projects</Link>
      <Link className='navbar-link' to="scroll-contact" spy={true} smooth={true} offset={-62.55} alt="Contact">Contact</Link>
    </div>
  </div>
  )
}
