import { useState } from "react";
import user1 from "../assets/images/testimonials/testimonial1.png";
import user2 from "../assets/images/testimonials/testimonial2.png";
import user3 from "../assets/images/testimonials/testimonial3.png";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: user1,
      name: "JOHN DOE",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.",
    },
    {
      id: 2,
      image: user2,
      name: "ALEX WONG",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.",
    },
    {
      id: 3,
      image: user3,
      name: "SHELLY BLAKE",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <div className="testimonial">
        <h1 className="fw-bold fs1 text-center pb-5">
          CLIENT <span className="highlight">REVIEWS</span>
        </h1>
        <div className="carousel slide text-center carousel-dark">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <p className="py-5 testimonial-content">"{testimonials[currentSlide].content}"</p>
                  <img
                    className="rounded-circle shadow-1-strong mb-4"
                    src={testimonials[currentSlide].image}
                    alt="avatar"
                    style={{ width: "150px" }}
                  />
                  <h5 className="mb-3 fw-bold fs-2">{testimonials[currentSlide].name}</h5>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            onClick={prevSlide}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={nextSlide}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
