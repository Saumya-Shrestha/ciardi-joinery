const Banner = ({ title, description }) => {
  return (
    <div className="container-fluid text-white text-center py-5 banner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="display-3 fw-bold mb-3">{title}</h1>
            <p className="lead fs-4">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
