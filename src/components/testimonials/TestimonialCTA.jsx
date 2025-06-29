import Button from "../common/Button";

const TestimonialCTA = () => {
  return (
    <div className="container-fluid bg-black py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center text-white">
            <h1 className="fw-bold mb-4">
              READY TO JOIN OUR <span className="highlight">HAPPY CLIENTS?</span>
            </h1>
            <p className="lead mb-4 fs-3">Experience the quality and craftsmanship that our clients rave about</p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Button
                text="GET YOUR QUOTE"
                color="#fff"
                style={{
                  fontSize: "1.25rem",
                  color: "#ff1800",
                  fontWeight: "bold",
                }}
              />
              <Button
                text="VIEW OUR WORK"
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

export default TestimonialCTA;
