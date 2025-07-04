import { Link } from "react-router-dom";
import facebook from "../../assets/images/socials/facebook.png";
import instagram from "../../assets/images/socials/instagram.png";
import twitter from "../../assets/images/socials/twitter.png";
import { CiLocationOn, CiPhone, CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className="container-flex footer fs-5 mt-auto">
        <div className="row py-4 mb-3">
          <div className="col-12 col-md-3 footer-column">
            <h4 className="footer-title">About Us</h4>
            <p>
              We listen to your ideas, understand your needs, and work closely with you to deliver custom woodwork that exceeds your expectations.
            </p>
            <div className="footer-socials">
              <img
                src={facebook}
                alt="Facebook"
              />
              <img
                src={instagram}
                alt="Instagram"
              />
              <img
                src={twitter}
                alt="Twitter"
              />
            </div>
          </div>
          <div className="col-12 col-md-3 footer-column">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/testimonials">Testimonials</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3 footer-column">
            <h4 className="footer-title">Get In Touch</h4>
            <ul
              className="footer-contact"
              style={{ listStyle: "none", padding: "0" }}
            >
              <li>
                <CiLocationOn className="footer-icons" />
                <span>Hawkesbury location and Sydney wide, hills area, Queensland, Melbourne CBD</span>
              </li>
              <li>
                <CiPhone className="footer-icons" />
                0450 455 724
              </li>
              <li>
                <CiMail className="footer-icons" />
                jhnciardi@gmail.com
              </li>
              <li>
                <span className="footer-icons-placeholder"></span>
                ABN: 18 940 955 619
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3 footer-column">
            <h4 className="footer-title">Business Hour</h4>
            <ul
              className="footer-contact"
              style={{ listStyle: "none", padding: "0" }}
            >
              <li>
                Monday <span>9am-6pm</span>
              </li>
              <li>
                Tuesday <span>9am-6pm</span>
              </li>
              <li>
                Wednesday <span>9am-6pm</span>
              </li>
              <li>
                Thursday <span>9am-6pm</span>
              </li>
              <li>
                Friday <span>9am-6pm</span>
              </li>
              <li>
                Saturday <span>10am-1pm</span>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="text-center my-2 pb-3 footer-copyright">
          Copyright © 2024 <strong>Ciardi Joinery</strong>. All Rights Reserved. Designed By: ❤️
        </div>
      </div>
    </>
  );
};

export default Footer;
