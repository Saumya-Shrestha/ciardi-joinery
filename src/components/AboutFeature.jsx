import { CgIfDesign } from "react-icons/cg";
import { GiMaterialsScience } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";

const AboutFeature = () => {
  return (
    <>
      <div className="container-flex about text-center py-5">
        <div className="row">
          <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
            <div className="feature-bg">
              <CgIfDesign />
            </div>
            <h3 className="fw-bold pb-2">CUSTOM DESIGNS</h3>
            <p className="fs-5">
              We specialize in creating bespoke joinery pieces <br />
              tailored to your vision and style.
            </p>
          </div>
          <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
            <div className="feature-bg">
              <GiMaterialsScience />
            </div>
            <h3 className="fw-bold pb-2">HIGH-QUALITY MATERIALS</h3>
            <p className="fs-5">
              We use only the finest timber and materials to <br />
              create durable and long-lasting products.
            </p>
          </div>
          <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
            <div className="feature-bg">
              <GrUserWorker />
            </div>
            <h3 className="fw-bold pb-2">EXPERIENCED PROFESSIONALS</h3>
            <p className="fs-5">
              Our skilled joiners give years of expertise and joy to <br />
              each project, resulting in unique quality.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutFeature;
