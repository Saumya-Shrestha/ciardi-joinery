import aboutmain from "../../assets/images/about/about-main.jpg";

const AboutMain = () => {
  return (
    <div className="container my-5">
      <div className="row mb-5">
        <div className="text-center mb-4">
          <h2 className="text-muted mb-2">Welcome to</h2>
          <h1 className="fw-bold mb-4">
            CIARDI <span className="highlight">JOINERY</span>
          </h1>
        </div>
        <div className="col-6">
          <img
            src={aboutmain}
            alt="Ciardi Joinery Workshop"
            className="img-fluid rounded shadow-lg w-100"
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>
        <div className="col-6 d-flex flex-column justify-content-center fs-5">
          <p className="fw-bold mb-3">
            Ciardi Joinery is a small company in the Hawkesbury recently opened and is quickly making a positive approach to quality over quantity.
          </p>
          <p className="mb-4">
            At <strong>Ciardi Joinery</strong>, we redefine craftsmanship for the modern age. With a blend of traditional techniques and cutting-edge
            technology, we create bespoke joinery solutions that are both innovative and timeless.
          </p>
          <div className="row">
            <div className="col-6">
              <div className="text-center p-3 bg-light border rounded">
                <h3 className="fw-bold text-danger">8+</h3>
                <p className="mb-0">Years Experience</p>
              </div>
            </div>
            <div className="col-6">
              <div className="text-center p-3 bg-light border rounded">
                <h3 className="fw-bold text-danger">500+</h3>
                <p className="mb-0">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
