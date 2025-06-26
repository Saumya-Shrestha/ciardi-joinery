import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center py-3 mb-4">
          <ul className="nav col-12 mb-2 justify-content-center">
            <li>
              <Link
                to="/"
                className="nav-link px-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="nav-link px-2"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="nav-link px-2"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="nav-link px-2"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className="nav-link px-2"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="nav-link px-2"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default Header;
