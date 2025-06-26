import ServiceCard from "./ServiceCard";
import Button from "./Button";

const Service = () => {
  const services = [
    {
      id: 1,
      imageName: "service1.jpg",
      title: "Cabinet Making",
      description: "Custom kitchen cabinet design and installation with premium materials and finishes.",
      altText: "Kitchen Cabinets",
    },
    {
      id: 2,
      imageName: "service2.jpg",
      title: "Custom Joinery",
      description: "Bespoke wardrobe solutions tailored to your space and storage needs.",
      altText: "Custom Wardrobes",
    },
    {
      id: 3,
      imageName: "service3.jpg",
      title: "Vanities",
      description: "Professional office furniture design and installation for modern workspaces.",
      altText: "Office Furniture",
    },
    {
      id: 4,
      imageName: "service4.jpg",
      title: "TV Units",
      description: "Maximize your space with custom built-in storage solutions.",
      altText: "Built-in Storage",
    },
    {
      id: 5,
      imageName: "service5.jpg",
      title: "Hair Salons / Barber Shops",
      description: "Custom entertainment centers and TV units for your living space.",
      altText: "Entertainment Units",
    },
    {
      id: 6,
      imageName: "service6.jpg",
      title: "Shop Fit Outs",
      description: "Elegant bathroom vanity designs with quality craftsmanship.",
      altText: "Bathroom Vanities",
    },
  ];

  return (
    <>
      <div className="service text-center">
        <div className="container">
          <h1 className="fw-bold fs1 pb-5">
            OUR <span className="highlight">SERVICES</span>
          </h1>
          <div className="row d-flex justify-content-center">
            {services.slice(0, 3).map((service) => (
              <ServiceCard
                key={service.id}
                imageName={service.imageName}
                altText={service.altText}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <div className="row d-flex justify-content-center">
            {services.slice(3, 6).map((service) => (
              <ServiceCard
                key={service.id}
                imageName={service.imageName}
                altText={service.altText}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <Button
            text="VIEW ALL SERVICES"
            style={{ marginTop: "10px" }}
          />
        </div>
      </div>
    </>
  );
};

export default Service;
