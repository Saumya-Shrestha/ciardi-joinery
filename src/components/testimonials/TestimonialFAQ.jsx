const TestimonialFAQ = () => {
  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on complexity and scope. Simple projects like vanities typically take 2-3 weeks, while larger projects like full kitchen renovations can take 6-8 weeks. We provide detailed timelines during consultation.",
    },
    {
      question: "Do you provide free quotes?",
      answer:
        "Yes, we offer free, no-obligation quotes for all projects. Our team will visit your location, assess your requirements, and provide a detailed written quote including materials, labor, and timeline.",
    },
    {
      question: "What areas do you service?",
      answer:
        "We primarily service the Hawkesbury region and Sydney-wide, including the Hills area. We also undertake selected projects in Queensland and Melbourne CBD. Contact us to confirm if we service your area.",
    },
    {
      question: "What warranty do you provide?",
      answer:
        "We stand behind our work with comprehensive warranties. All our joinery comes with a 10-year structural warranty and 2-year warranty on hardware and finishes. We also provide ongoing maintenance support.",
    },
    {
      question: "Can you work with my existing design or do you provide design services?",
      answer:
        "We offer both services! We can work with your existing plans or our design specialists can create custom designs tailored to your space and requirements. Our design consultation is included in our service.",
    },
  ];

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h1 className="fw-bold">
            FREQUENTLY ASKED <span className="highlight">QUESTIONS</span>
          </h1>
          <p className="lead">Common questions from our valued clients</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div
            className="accordion"
            id="faqAccordion"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="accordion-item mb-3 border-0 shadow-sm"
              >
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="false"
                    aria-controls={`collapse${index}`}
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "8px 8px 0 0",
                      fontSize: "1.1rem",
                      color: "#333",
                      border: "none",
                      boxShadow: "none",
                    }}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div
                    className="accordion-body"
                    style={{
                      backgroundColor: "#f8f9fa",
                      borderRadius: "0 0 8px 8px",
                      lineHeight: "1.6",
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialFAQ;
