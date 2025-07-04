import Button from "../common/Button";

const HeroBanner = () => {
  return (
    <>
      <div className="container-flex text-center hero-banner py-4">
        <p className="fw-bold fs-4 mt-3">We Fulfill Your Dreams & Provide Consulting Support</p>
        <Button text="GET A QUOTE" />
      </div>
    </>
  );
};

export default HeroBanner;
