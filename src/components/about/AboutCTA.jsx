import Button from "../common/Button";

const AboutCTA = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="fw-bold mb-4">Ready to Start Your Project?</h2>
          <p className="lead mb-4">Contact us today for a free consultation and quote</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Button
              text="GET A QUOTE"
              style={{ fontSize: "1.25rem" }}
            />
            <button
              className="btn btn-outline-dark btn-lg px-4 py-3"
              style={{ borderRadius: 0 }}
            >
              VIEW OUR WORK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCTA;
