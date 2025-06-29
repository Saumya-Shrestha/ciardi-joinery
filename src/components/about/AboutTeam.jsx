import team1 from "../../assets/images/about/team1.jpg";
import team2 from "../../assets/images/about/team2.jpg";
import team3 from "../../assets/images/about/team3.jpg";

const AboutTeam = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h1 className="fw-bold">
            OUR <span className="highlight">TEAM</span>
          </h1>
          <p className="lead">Meet the skilled professionals behind Ciardi Joinery</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card border-0 shadow-sm text-center">
            <img
              src={team1}
              alt="John Ciardi"
              className="card-img-top rounded-circle mx-auto mt-4"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="fw-bold">JOHN CIARDI</h5>
              <p className="text-muted mb-2">Founder & Master Joiner</p>
              <p className="small">
                With over 8 years of experience, John leads our team with passion for quality craftsmanship and innovative designs.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card border-0 shadow-sm text-center">
            <img
              src={team2}
              alt="Sarah Jones"
              className="card-img-top rounded-circle mx-auto mt-4"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="fw-bold">SARAH JONES</h5>
              <p className="text-muted mb-2">Design Specialist</p>
              <p className="small">
                Sarah brings creativity and technical expertise to every project, ensuring designs are both beautiful and functional.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card border-0 shadow-sm text-center">
            <img
              src={team3}
              alt="Mike Brown"
              className="card-img-top rounded-circle mx-auto mt-4"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="fw-bold">MIKE BROWN</h5>
              <p className="text-muted mb-2">Senior Carpenter</p>
              <p className="small">Mike's attention to detail and craftsmanship skills ensure every piece meets our high-quality standards.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
