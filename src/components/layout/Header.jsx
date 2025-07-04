import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="container">
        <header className="d-flex align-items-center justify-content-between py-2">
          <div className="logo d-block d-md-none">
            <Link to="/">
              <img
                src={logo}
                alt="Ciardi Joinery Logo"
                className="img-fluid"
                style={{ height: "50px" }}
              />
            </Link>
          </div>

          <ul className={`nav mb-2 justify-content-center header-content ${isMenuOpen ? "active" : ""}`}>
            <li>
              <Link
                to="/"
                className="nav-link px-2"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="nav-link px-2"
                onClick={closeMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="nav-link px-2"
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="nav-link px-2"
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className="nav-link px-2"
                onClick={closeMenu}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="nav-link px-2"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div
            className={`hamburger d-block d-md-none ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
