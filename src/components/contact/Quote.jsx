import { FaArrowTurnDown } from "react-icons/fa6";
import Button from "../common/Button";

const Quote = () => {
  return (
    <>
      <div className="container-flex quote">
        <div className="row">
          <div className="col-6 quote-image d-none d-md-block"></div>
          <div className="col-12 col-md-6 quote-form">
            <h3 className="text-center fs-2 fw-bold">
              Get A Quote Here <FaArrowTurnDown className="arrow" />
            </h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="form-label"
                >
                  FULL NAME
                </label>
                <input
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="form-label"
                >
                  PHONE *
                </label>
                <input
                  type="number"
                  className="form-control"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="form-label"
                >
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  className="form-control"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="form-label"
                >
                  MESSAGE
                </label>
                <textarea
                  className="form-control"
                  rows="5"
                />
              </div>
              <Button
                text="SUBMIT NOW"
                color="#000"
                style={{ width: "100%" }}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
