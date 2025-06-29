import Button from "../common/Button";

const ServiceCTA = () => {
  return (
    <div className="container-fluid service-cta-bg py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center text-white">
            <h1 className="fw-bold mb-4">
              READY TO START YOUR <span className="highlight">PROJECT?</span>
            </h1>
            <p className="lead mb-4 fs-3">Let us bring your vision to life with our expert craftsmanship</p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Button
                text="GET FREE QUOTE"
                color="#fff"
                style={{
                  fontSize: "1.25rem",
                  color: "#ff1800",
                  fontWeight: "bold",
                }}
              />
              <Button
                text="CALL US NOW"
                color="transparent"
                style={{
                  fontSize: "1.25rem",
                  border: "2px solid #fff",
                  color: "#fff",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCTA;
