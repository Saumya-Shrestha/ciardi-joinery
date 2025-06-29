import Quote from "../components/contact/Quote";
import Project from "../components/projects/Project";
import Testimonial from "../components/testimonials/Testimonial";
import Service from "../components/services/Service";
import About from "../components/about/About";
import Hero from "../components/hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Testimonial />
      <Project />
      <Quote />
    </>
  );
};

export default Home;
