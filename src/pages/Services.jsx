import Banner from "../components/common/Banner";
import ServiceGrid from "../components/services/ServiceGrid";
import ServiceFeatures from "../components/services/ServiceFeatures";
import ServiceCTA from "../components/services/ServiceCTA";

const Services = () => {
  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <Banner
          title="OUR SERVICES"
          description="Quality Craftsmanship for Every Project"
        />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <ServiceGrid />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <ServiceFeatures />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="300"
      >
        <ServiceCTA />
      </section>
    </>
  );
};

export default Services;
