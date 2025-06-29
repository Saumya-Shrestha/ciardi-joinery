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
      <Banner
        title="ABOUT US"
        description="Crafting Excellence Since 2016"
      />
      <AboutMain />
      <AboutFeature />
      <AboutMissionVision />
      <AboutTeam />
      <AboutWhyChoose />
      <AboutCTA />
    </>
  );
};

export default AboutUs;
