import { FaStar, FaQuoteLeft } from "react-icons/fa";
import user1 from "../../assets/images/testimonials/testimonial1.png";
import user2 from "../../assets/images/testimonials/testimonial2.png";
import user3 from "../../assets/images/testimonials/testimonial3.png";

const TestimonialGrid = () => {
  const testimonials = [
    {
      id: 1,
      image: user1,
      name: "JOHN DOE",
      location: "Hawkesbury, NSW",
      rating: 5,
      content:
        "Ciardi Joinery exceeded our expectations with our kitchen renovation. Their attention to detail and quality craftsmanship is outstanding. The custom cabinets they built are not only beautiful but also incredibly functional. Highly recommend!",
      project: "Kitchen Renovation",
    },
    {
      id: 2,
      image: user2,
      name: "ALEX WONG",
      location: "Sydney Hills, NSW",
      rating: 5,
      content:
        "Professional service from start to finish. The team at Ciardi Joinery listened to our needs and delivered a wardrobe solution that maximized our space perfectly. The quality of materials and workmanship is exceptional.",
      project: "Custom Wardrobe",
    },
    {
      id: 3,
      image: user3,
      name: "SHELLY BLAKE",
      location: "Richmond, NSW",
      rating: 5,
      content:
        "We couldn't be happier with our new bathroom vanity. The design is modern and elegant, and the installation was completed on time. The team was professional and clean throughout the entire process.",
      project: "Bathroom Vanity",
    },
    {
      id: 4,
      image: user1,
      name: "MICHAEL CHEN",
      location: "Penrith, NSW",
      rating: 5,
      content:
        "Fantastic work on our entertainment unit! It's exactly what we envisioned and fits perfectly in our living room. The cable management solution they provided is genius. Will definitely use them again.",
      project: "TV Entertainment Unit",
    },
    {
      id: 5,
      image: user2,
      name: "SARAH JOHNSON",
      location: "Windsor, NSW",
      rating: 5,
      content:
        "Ciardi Joinery helped us create the perfect home office space with custom built-in desks and storage. Their innovative design solutions made the most of our small space. Excellent value for money.",
      project: "Home Office Fitout",
    },
    {
      id: 6,
      image: user3,
      name: "DAVID MARTINEZ",
      location: "Blacktown, NSW",
      rating: 5,
      content:
        "As a salon owner, I needed functional and stylish fitouts. Ciardi Joinery delivered beyond expectations. The commercial-grade materials and ergonomic design have made a huge difference to our business.",
      project: "Salon Fitout",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "text-warning" : "text-muted"}
        style={{ fontSize: "1.2rem" }}
      />
    ));
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h1 className="fw-bold">
            WHAT OUR <span className="highlight">CLIENTS SAY</span>
          </h1>
          <p className="lead">Real feedback from real customers who chose Ciardi Joinery</p>
        </div>
      </div>
      <div className="row">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="col-lg-4 col-md-6 mb-5"
          >
            <div className="card testimonial-card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="mb-3">
                  <FaQuoteLeft
                    className="text-danger"
                    style={{ fontSize: "2rem", opacity: 0.3 }}
                  />
                </div>
                <p
                  className="card-text mb-4 fs-6"
                  style={{ lineHeight: "1.6" }}
                >
                  "{testimonial.content}"
                </p>
                <div className="mb-3">{renderStars(testimonial.rating)}</div>
                <div className="d-flex align-items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-circle me-3"
                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                  />
                  <div>
                    <h6 className="fw-bold mb-0">{testimonial.name}</h6>
                    <small className="text-muted">{testimonial.location}</small>
                    <div className="small text-danger fw-bold">{testimonial.project}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialGrid;
