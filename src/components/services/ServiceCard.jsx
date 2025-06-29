import Button from "../common/Button";

const ServiceCard = ({ imageName, altText, title, description }) => {
  return (
    <div className="col-md-4">
      <div className="card service-card text-center">
        <img
          src={`/images/services/${imageName}`}
          className="card-img-top"
          alt={altText}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold fs-3">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="mt-auto">
            <Button text="READ MORE" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
