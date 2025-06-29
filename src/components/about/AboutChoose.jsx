import { FaAward, FaClock, FaDollarSign, FaHandshake } from "react-icons/fa";

const AboutChoose = () => {
  return (
    <div className="container-fluid bg-black text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1 className="fw-bold">
              WHY CHOOSE <span className="highlight">US?</span>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 text-center">
            <div className="p-3 d-flex flex-column align-items-center">
              <div className="mb-3 feature-bg">
                <FaAward />
              </div>
              <h5 className="fw-bold">QUALITY ASSURANCE</h5>
              <p>We guarantee the highest quality in every project with rigorous quality control measures.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 text-center">
            <div className="p-3 d-flex flex-column align-items-center">
              <div className="mb-3 feature-bg">
                <FaClock />
              </div>
              <h5 className="fw-bold">TIMELY DELIVERY</h5>
              <p>We respect your time and ensure all projects are completed within the agreed timeframe.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 text-center">
            <div className="p-3 d-flex flex-column align-items-center">
              <div className="mb-3 feature-bg">
                <FaDollarSign />
              </div>
              <h5 className="fw-bold">COMPETITIVE PRICING</h5>
              <p>Get exceptional value for money with our transparent and competitive pricing structure.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 text-center">
            <div className="p-3 d-flex flex-column align-items-center">
              <div className="mb-3 feature-bg">
                <FaHandshake />
              </div>
              <h5 className="fw-bold">CUSTOMER SATISFACTION</h5>
              <p>Your satisfaction is our priority. We work closely with you from concept to completion.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutChoose;
