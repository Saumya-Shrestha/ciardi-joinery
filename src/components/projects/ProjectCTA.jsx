import Button from "../common/Button";

const ProjectCTA = () => {
  return (
    <div className="container-fluid project-cta-bg py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center text-white">
            <h1 className="fw-bold mb-4">
              READY TO START YOUR <span className="highlight">PROJECT?</span>
            </h1>
            <p className="lead mb-4 fs-3">Let's discuss your vision and bring it to life with our expertise</p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Button
                text="GET FREE CONSULTATION"
                color="#fff"
                style={{
                  fontSize: "1.25rem",
                  color: "#ff1800",
                  fontWeight: "bold",
                }}
              />
              <Button
                text="VIEW ALL SERVICES"
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

export default ProjectCTA;
