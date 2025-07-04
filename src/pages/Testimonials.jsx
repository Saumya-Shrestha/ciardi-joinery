import Banner from "../components/common/Banner";
import TestimonialGrid from "../components/testimonials/TestimonialGrid";
import TestimonialStats from "../components/testimonials/TestimonialStats";
import TestimonialFAQ from "../components/testimonials/TestimonialFAQ";
import TestimonialCTA from "../components/testimonials/TestimonialCTA";

const Testimonials = () => {
  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <Banner
          title="CLIENT TESTIMONIALS"
          description="What Our Customers Say About Us"
        />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <TestimonialGrid />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <TestimonialStats />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="300"
      >
        <TestimonialFAQ />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="400"
      >
        <TestimonialCTA />
      </section>
    </>
  );
};

export default Testimonials;
