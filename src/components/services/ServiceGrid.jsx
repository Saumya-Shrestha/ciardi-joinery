const ServiceGrid = () => {
  const services = [
    {
      id: 1,
      imageName: "service1.jpg",
      title: "Cabinet Making",
      description:
        "Custom kitchen cabinet design and installation with premium materials and finishes. From modern sleek designs to traditional styles, we create cabinets that combine functionality with aesthetic appeal.",
      altText: "Kitchen Cabinets",
      features: ["Custom Design", "Premium Materials", "Expert Installation", "10-Year Warranty"],
    },
    {
      id: 2,
      imageName: "service2.jpg",
      title: "Custom Joinery",
      description:
        "Bespoke wardrobe solutions tailored to your space and storage needs. We maximize every inch of your space with clever storage solutions and beautiful finishes.",
      altText: "Custom Wardrobes",
      features: ["Tailored Solutions", "Space Optimization", "Quality Hardware", "Custom Finishes"],
    },
    {
      id: 3,
      imageName: "service3.jpg",
      title: "Vanities",
      description:
        "Elegant bathroom vanity designs with quality craftsmanship. Transform your bathroom with our custom vanities that blend style and functionality perfectly.",
      altText: "Bathroom Vanities",
      features: ["Water Resistant", "Custom Sizing", "Quality Finishes", "Modern Designs"],
    },
    {
      id: 4,
      imageName: "service4.jpg",
      title: "TV Units",
      description:
        "Custom entertainment centers and TV units for your living space. Create the perfect focal point for your entertainment area with our bespoke designs.",
      altText: "Entertainment Units",
      features: ["Cable Management", "Storage Solutions", "Custom Sizing", "Modern Features"],
    },
    {
      id: 5,
      imageName: "service5.jpg",
      title: "Hair Salons / Barber Shops",
      description:
        "Professional salon and barber shop fitouts designed for functionality and style. We understand the unique requirements of beauty and grooming businesses.",
      altText: "Salon Fitouts",
      features: ["Commercial Grade", "Ergonomic Design", "Durable Materials", "Professional Look"],
    },
    {
      id: 6,
      imageName: "service6.jpg",
      title: "Shop Fit Outs",
      description:
        "Complete retail and commercial fitout solutions. From concept to completion, we create spaces that enhance your business and customer experience.",
      altText: "Commercial Fitouts",
      features: ["Complete Solutions", "Business Focused", "Timeline Delivery", "Professional Service"],
    },
  ];

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h1 className="fw-bold">
            WHAT WE <span className="highlight">OFFER</span>
          </h1>
          <p className="lead">Comprehensive joinery solutions for residential and commercial projects</p>
        </div>
      </div>
      <div className="row">
        {services.map((service) => (
          <div
            key={service.id}
            className="col-lg-4 col-md-6 mb-5"
          >
            <div className="card service-detail-card h-100 border-0 shadow-sm">
              <img
                src={`/images/services/${service.imageName}`}
                className="card-img-top"
                alt={service.altText}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold fs-3 mb-3">{service.title}</h5>
                <p className="card-text mb-4">{service.description}</p>
                <div className="mt-auto">
                  <h6 className="fw-bold mb-3">Key Features:</h6>
                  <ul className="list-unstyled">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="mb-2"
                      >
                        <i className="text-danger me-2">✓</i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
