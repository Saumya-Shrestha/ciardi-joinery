import { FaTools, FaLeaf, FaClock, FaAward } from "react-icons/fa";

const ServiceFeatures = () => {
  const features = [
    {
      icon: FaTools,
      title: "EXPERT CRAFTSMANSHIP",
      description: "Over 8 years of experience in custom joinery and woodworking",
    },
    {
      icon: FaLeaf,
      title: "ECO-FRIENDLY MATERIALS",
      description: "Sustainable timber and environmentally conscious practices",
    },
    {
      icon: FaClock,
      title: "TIMELY DELIVERY",
      description: "Projects completed on time without compromising quality",
    },
    {
      icon: FaAward,
      title: "QUALITY GUARANTEE",
      description: "Comprehensive warranty and after-sales support",
    },
  ];

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h1 className="fw-bold">
            WHY CHOOSE <span className="highlight">OUR SERVICES?</span>
          </h1>
        </div>
      </div>
      <div className="row">
        {features.map((feature, index) => (
          <div
            key={index}
            className="col-lg-3 col-md-6 mb-4"
          >
            <div className="text-center">
              <div className="feature-bg mx-auto mb-3">
                <feature.icon />
              </div>
              <h5 className="fw-bold mb-3">{feature.title}</h5>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFeatures;
