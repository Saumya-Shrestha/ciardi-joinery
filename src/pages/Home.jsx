import Quote from "../components/contact/Quote";
import Project from "../components/projects/Project";
import Testimonial from "../components/testimonials/Testimonial";
import Service from "../components/services/Service";
import About from "../components/about/About";
import Hero from "../components/hero/Hero";

const Home = () => {
  return (
    <>
      <section
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <Hero />
      </section>

      <section
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <About />
      </section>

      <section
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <Service />
      </section>

      <section
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="300"
      >
        <Testimonial />
      </section>

      <section
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="400"
      >
        <Project />
      </section>

      <section
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="500"
      >
        <Quote />
      </section>
    </>
  );
};

export default Home;
