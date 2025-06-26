import logo from "../../assets/images/logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const PreHeader = () => {
  return (
    <>
      <div className="container-flex preheader">
        <div className="row">
          <div className="col-3 d-flex align-items-center justify-content-center preheader-content">
            <div className="col-1">
              <FaFacebook />
            </div>
            <div className="col-1">
              <FaInstagram />
            </div>
            <div className="col-1">
              <FaTwitter />
            </div>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-center">
            <img
              src={logo}
              alt="Logo"
              className="img-fluid"
              style={{ height: "128px" }}
            />
          </div>
          <div className="col-3 d-flex align-items-center justify-content-center preheader-content">Call: 0450 455 724</div>
        </div>
      </div>
    </>
  );
};

export default PreHeader;
