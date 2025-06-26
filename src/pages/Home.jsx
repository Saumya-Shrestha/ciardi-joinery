import Quote from "../components/Quote";
import Project from "../components/Project";
import Testimonial from "../components/Testimonial";
import Service from "../components/Service";
import About from "../components/About";
import Hero from "../components/Hero";

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
