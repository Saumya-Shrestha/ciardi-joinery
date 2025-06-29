import { FaHammer, FaUsers, FaCalendarAlt, FaAward } from "react-icons/fa";

const ProjectStats = () => {
  const stats = [
    {
      icon: FaHammer,
      number: "500+",
      title: "PROJECTS COMPLETED",
      description: "Successfully delivered projects",
    },
    {
      icon: FaUsers,
      number: "450+",
      title: "HAPPY CLIENTS",
      description: "Satisfied customers across Sydney",
    },
    {
      icon: FaCalendarAlt,
      number: "8+",
      title: "YEARS EXPERIENCE",
      description: "Industry expertise and knowledge",
    },
    {
      icon: FaAward,
      number: "100%",
      title: "QUALITY GUARANTEE",
      description: "Commitment to excellence",
    },
  ];

  return (
    <div className="container-fluid bg-black text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1 className="fw-bold">
              PROJECT <span className="highlight">STATISTICS</span>
            </h1>
            <p className="lead">Numbers that reflect our commitment to excellence</p>
          </div>
        </div>
        <div className="row">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 mb-4"
            >
              <div className="text-center">
                <div className="mb-3">
                  <div className="project-stats-icon mx-auto">
                    <stat.icon
                      className="text-white"
                      style={{ fontSize: "2.5rem" }}
                    />
                  </div>
                </div>
                <h2
                  className="fw-bold text-danger mb-2"
                  style={{ fontSize: "3rem" }}
                >
                  {stat.number}
                </h2>
                <h5 className="fw-bold mb-2">{stat.title}</h5>
                <p className="text-white-50">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectStats;
