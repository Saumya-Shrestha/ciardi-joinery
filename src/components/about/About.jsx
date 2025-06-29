import AboutFeature from "./AboutFeature";
import Button from "../common/Button";

const About = () => {
  return (
    <>
      <AboutFeature />
      <div className="container-flex about about-bg text-center py-5">
        <div className="experience">
          <h1 className="fw-bold">8+</h1>
          <p>
            Years of <br />
            Experience
          </p>
        </div>
      </div>
      <div className="container-flex about text-center py-5">
        <h2 className="text-muted pb-2">Welcome to</h2>
        <h1 className="fw-bold pb-4">
          CIARDI <span className="highlight">JOINERY</span>
        </h1>
        <p className="fw-bold"></p>
        <p className="about-text fw-bold">
          Ciardi Joinery is a small company in the Hawkesbury recently opened and is quickly making a Positive approach to quality over quantity.
        </p>
        <p className="about-text">
          At <strong>Ciardi Joinery</strong>, we redefine craftsmanship for the modern age. With a blend of traditional techniques and cutting-edge
          technology, we create bespoke joinery solutions that are both innovative and timeless, with a mission to provide exceptional joinery
          services that combine quality, creativity, and functionality. Today, we’re proud to be industry leaders, known for our precision, attention
          to detail, and commitment to excellence.
        </p>
        <p className="about-text">
          Every project at <strong>Ciardi Joinery</strong> is a collaboration. We listen to your ideas, understand your needs, and work closely with
          you to deliver custom woodwork that exceeds your expectations. From unique furniture pieces to comprehensive cabinetry solutions, our work
          is a reflection of your vision and our expertise.
        </p>
        <p className="about-text">
          Sustainability is at the core of our values. We use eco-friendly materials and processes, ensuring our creations are as sustainable as they
          are beautiful. When you choose us, you’re choosing quality, innovation, and a commitment to a greener future.
        </p>
        <Button text="ABOUT US" />
      </div>
    </>
  );
};

export default About;
