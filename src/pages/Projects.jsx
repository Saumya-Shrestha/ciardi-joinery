import Banner from "../components/common/Banner";
import ProjectGrid from "../components/projects/ProjectGrid";
import ProjectStats from "../components/projects/ProjectStats";
import ProjectProcess from "../components/projects/ProjectProcess";
import ProjectCTA from "../components/projects/ProjectCTA";

const Projects = () => {
  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <Banner
          title="OUR PROJECTS"
          description="Showcase of Quality Craftsmanship and Design Excellence"
        />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <ProjectGrid />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <ProjectStats />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="300"
      >
        <ProjectProcess />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="400"
      >
        <ProjectCTA />
      </section>
    </>
  );
};

export default Projects;
