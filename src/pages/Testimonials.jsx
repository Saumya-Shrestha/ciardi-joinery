import Banner from "../components/common/Banner";
import TestimonialGrid from "../components/testimonials/TestimonialGrid";
import TestimonialStats from "../components/testimonials/TestimonialStats";
import TestimonialFAQ from "../components/testimonials/TestimonialFAQ";
import TestimonialCTA from "../components/testimonials/TestimonialCTA";

const Testimonials = () => {
  return (
    <>
      <Banner
        title="CLIENT TESTIMONIALS"
        description="What Our Customers Say About Us"
      />
      <TestimonialGrid />
      <TestimonialStats />
      <TestimonialFAQ />
      <TestimonialCTA />
    </>
  );
};

export default Testimonials;
