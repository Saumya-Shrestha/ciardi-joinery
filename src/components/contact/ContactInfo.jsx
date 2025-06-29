import { CiLocationOn, CiPhone, CiMail, CiClock1 } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h1 className="fw-bold">
            GET IN <span className="highlight">TOUCH</span>
          </h1>
          <p className="lead">We'd love to hear from you. Contact us today!</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card border-0 shadow-sm text-center h-100">
            <div className="card-body p-4">
              <div className="mb-3">
                <CiLocationOn
                  className="text-danger"
                  style={{ fontSize: "3rem" }}
                />
              </div>
              <h5 className="fw-bold mb-3">LOCATION</h5>
              <p className="mb-0">Hawkesbury location and Sydney wide, hills area, Queensland, Melbourne CBD</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card border-0 shadow-sm text-center h-100">
            <div className="card-body p-4">
              <div className="mb-3">
                <CiPhone
                  className="text-danger"
                  style={{ fontSize: "3rem" }}
                />
              </div>
              <h5 className="fw-bold mb-3">PHONE</h5>
              <p className="mb-0">
                <a
                  href="tel:0450455724"
                  className="text-decoration-none text-dark"
                >
                  0450 455 724
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card border-0 shadow-sm text-center h-100">
            <div className="card-body p-4">
              <div className="mb-3">
                <CiMail
                  className="text-danger"
                  style={{ fontSize: "3rem" }}
                />
              </div>
              <h5 className="fw-bold mb-3">EMAIL</h5>
              <p className="mb-0">
                <a
                  href="mailto:jhnciardi@gmail.com"
                  className="text-decoration-none text-dark"
                >
                  jhnciardi@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card border-0 shadow-sm text-center h-100">
            <div className="card-body p-4">
              <div className="mb-3">
                <CiClock1
                  className="text-danger"
                  style={{ fontSize: "3rem" }}
                />
              </div>
              <h5 className="fw-bold mb-3">BUSINESS HOURS</h5>
              <div className="small">
                <p className="mb-1">Mon-Fri: 9am-6pm</p>
                <p className="mb-0">Saturday: 10am-1pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 text-center preheader-content">
          <h3 className="fw-bold mb-3">FOLLOW US</h3>
          <div className="d-flex justify-content-center gap-4">
            <FaFacebook
              className="text-primary"
              style={{ fontSize: "2rem", cursor: "pointer" }}
            />
            <FaInstagram
              className="text-danger"
              style={{ fontSize: "2rem", cursor: "pointer" }}
            />
            <FaTwitter
              className="text-info"
              style={{ fontSize: "2rem", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
