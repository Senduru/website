import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Css/Nav.css'
export const Navbar = () => {
  console.log("itest from Navbar top...")
  return (
    <nav className="glass-navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#home">
            <i className="bi bi-house"></i>
            <span className="nav-text">Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#about">
            <i className="bi bi-person"></i>
            <span className="nav-text">About</span>
          </a>
        </li>
        {/* <li className="nav-item">
          <a href="#edu">
            <i className="bi bi-mortarboard-fill"></i>
            <span className="nav-text">Education</span>
          </a>
        </li> */}
        <li className="nav-item">
          <a href="#exp">
            <i className="bi bi-briefcase"></i>
            <span className="nav-text">Experience</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact">
            <i className="bi bi-envelope"></i>
            <span className="nav-text">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
    
  )
}
