import Banner from "../components/common/Banner";
import ServiceGrid from "../components/services/ServiceGrid";
import ServiceFeatures from "../components/services/ServiceFeatures";
import ServiceCTA from "../components/services/ServiceCTA";

const Services = () => {
  return (
    <>
      <Banner
        title="OUR SERVICES"
        description="Quality Craftsmanship for Every Project"
      />
      <ServiceGrid />
      <ServiceFeatures />
      <ServiceCTA />
    </>
  );
};

export default Services;
