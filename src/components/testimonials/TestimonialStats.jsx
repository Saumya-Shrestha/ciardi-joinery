import { FaUsers, FaThumbsUp, FaAward, FaCalendarCheck } from "react-icons/fa";

const TestimonialStats = () => {
  const stats = [
    {
      icon: FaUsers,
      number: "500+",
      title: "HAPPY CLIENTS",
      description: "Satisfied customers across Sydney",
    },
    {
      icon: FaThumbsUp,
      number: "98%",
      title: "SATISFACTION RATE",
      description: "Customer satisfaction guarantee",
    },
    {
      icon: FaAward,
      number: "8+",
      title: "YEARS EXPERIENCE",
      description: "Proven track record in joinery",
    },
    {
      icon: FaCalendarCheck,
      number: "100%",
      title: "ON-TIME DELIVERY",
      description: "Projects completed on schedule",
    },
  ];

  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1 className="fw-bold">
              OUR <span className="highlight">ACHIEVEMENTS</span>
            </h1>
            <p className="lead">Numbers that speak for our quality and reliability</p>
          </div>
        </div>
        <div className="row">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 mb-4"
            >
              <div className="card border-0 shadow-sm text-center h-100 stats-card">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <div className="stats-icon-bg mx-auto">
                      <stat.icon
                        className="text-white"
                        style={{ fontSize: "2rem" }}
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
                  <p className="mb-0 text-muted">{stat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialStats;
