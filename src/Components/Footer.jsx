import '../Css/foot.css'
export const Footer = () => {
  return (
    <div className="container foot-contain">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 ">
        <p className="col-md-4 mb-0">© 2021 Company, Inc</p>

        <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          
        </a>

        <ul className="nav col-md-4 justify-content-end mt-1">
          <li className="nav-item"><a href="#home" className="nav-link px-2 text-muted">Home</a></li>
          <li className="nav-item"><a href="#about" className="nav-link px-2 text-muted">About</a></li>
          {/* <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Education</a></li> */}
          <li className="nav-item"><a href="#exp" className="nav-link px-2 text-muted">Experience</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link px-2 text-muted">Contact</a></li>
        </ul>
      </footer>
    </div>
  )
}
