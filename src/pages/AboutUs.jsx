import Banner from "../components/common/Banner";
import AboutMain from "../components/about/AboutMain";
import AboutFeature from "../components/about/AboutFeature";
import AboutMissionVision from "../components/about/AboutMission";
import AboutTeam from "../components/about/AboutTeam";
import AboutWhyChoose from "../components/about/AboutChoose";
import AboutCTA from "../components/about/AboutCTA";

const AboutUs = () => {
  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <Banner
          title="ABOUT US"
          description="Crafting Excellence Since 2016"
        />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <AboutMain />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <AboutFeature />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="300"
      >
        <AboutMissionVision />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="400"
      >
        <AboutTeam />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="500"
      >
        <AboutWhyChoose />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="600"
      >
        <AboutCTA />
      </section>
    </>
  );
};

export default AboutUs;
